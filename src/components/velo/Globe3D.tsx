"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Line, Sparkles } from "@react-three/drei";
import * as THREE from "three";

/* ------------------------------ geo helpers ----------------------------- */

const R = 2;

function latLonToVec3(lat: number, lon: number, radius = R): THREE.Vector3 {
  const phi = ((90 - lat) * Math.PI) / 180;
  const theta = ((lon + 180) * Math.PI) / 180;
  return new THREE.Vector3(
    -radius * Math.sin(phi) * Math.cos(theta),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta)
  );
}

const CITIES = [
  { name: "Lagos", lat: 6.52, lon: 3.37, hub: true },
  { name: "London", lat: 51.5, lon: -0.12 },
  { name: "New York", lat: 40.71, lon: -74.0 },
  { name: "Toronto", lat: 43.65, lon: -79.38 },
  { name: "Mexico City", lat: 19.43, lon: -99.13 },
  { name: "Bogotá", lat: 4.71, lon: -74.07 },
  { name: "São Paulo", lat: -23.55, lon: -46.63 },
  { name: "Madrid", lat: 40.42, lon: -3.7 },
  { name: "Frankfurt", lat: 50.11, lon: 8.68 },
  { name: "Dubai", lat: 25.2, lon: 55.27 },
  { name: "Nairobi", lat: -1.29, lon: 36.82 },
  { name: "Johannesburg", lat: -26.2, lon: 28.04 },
];

/* dotted globe — fibonacci sphere */
function useDots(count: number) {
  return useMemo(() => {
    const pts: THREE.Vector3[] = [];
    const golden = Math.PI * (3 - Math.sqrt(5));
    for (let i = 0; i < count; i++) {
      const y = 1 - (i / (count - 1)) * 2;
      const radius = Math.sqrt(1 - y * y);
      const theta = golden * i;
      pts.push(
        new THREE.Vector3(Math.cos(theta) * radius, y, Math.sin(theta) * radius).multiplyScalar(R)
      );
    }
    return pts;
  }, [count]);
}

function DottedGlobe() {
  const dots = useDots(1100);
  const geometry = useMemo(() => {
    const g = new THREE.BufferGeometry().setFromPoints(dots);
    return g;
  }, [dots]);

  return (
    <points geometry={geometry}>
      <pointsMaterial
        size={0.021}
        color="#4db0f7"
        transparent
        opacity={0.5}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

/* ------------------------------- arcs ---------------------------------- */

type Arc = {
  curve: THREE.QuadraticBezierCurve3;
  end: THREE.Vector3;
  start: THREE.Vector3;
};

function useArcs(): Arc[] {
  return useMemo(() => {
    const hub = latLonToVec3(CITIES[0].lat, CITIES[0].lon);
    return CITIES.slice(1).map((c) => {
      const end = latLonToVec3(c.lat, c.lon);
      const mid = hub.clone().add(end).multiplyScalar(0.5).normalize().multiplyScalar(R * 1.62);
      return { curve: new THREE.QuadraticBezierCurve3(hub, mid, end), end, start: hub };
    });
  }, []);
}

function Arcs() {
  const arcs = useArcs();
  const pulsesRef = useRef<THREE.Group>(null);
  const PULSES_PER_ARC = 2;

  const pulses = useMemo(
    () =>
      arcs.flatMap((a, ai) =>
        Array.from({ length: PULSES_PER_ARC }).map((_, pi) => ({
          arc: a,
          offset: (ai * 0.37 + pi * 0.5) % 1,
          speed: 0.16 + ((ai + pi) % 4) * 0.035,
        }))
      ),
    [arcs]
  );

  useFrame(({ clock }) => {
    const t = clock.elapsedTime;
    const group = pulsesRef.current;
    if (!group) return;
    group.children.forEach((child, i) => {
      const p = pulses[i];
      if (!p) return;
      const k = (t * p.speed + p.offset) % 1;
      const pos = p.arc.curve.getPoint(k);
      child.position.copy(pos);
      // grow toward the end, shrink after landing
      const s = 0.65 + Math.sin(k * Math.PI) * 0.85;
      child.scale.setScalar(s);
    });
  });

  return (
    <group>
      {arcs.map((a, i) => (
        <Line
          key={`arc-${i}`}
          points={a.curve.getPoints(56)}
          color={i % 3 === 0 ? "#34d399" : i % 3 === 1 ? "#4db0f7" : "#7dd3fc"}
          transparent
          opacity={0.34}
          lineWidth={1}
        />
      ))}
      <group ref={pulsesRef}>
        {pulses.map((_, i) => (
          <mesh key={`pulse-${i}`}>
            <sphereGeometry args={[0.035, 10, 10]} />
            <meshBasicMaterial color="#a6e3ff" transparent opacity={0.95} />
          </mesh>
        ))}
      </group>
      {/* city nodes */}
      {CITIES.map((c) => {
        const v = latLonToVec3(c.lat, c.lon);
        return (
          <mesh key={c.name} position={v}>
            <sphereGeometry args={[c.hub ? 0.06 : 0.038, 12, 12]} />
            <meshBasicMaterial color={c.hub ? "#34d399" : "#79c4f9"} />
          </mesh>
        );
      })}
    </group>
  );
}

/* ----------------------------- atmosphere ------------------------------- */

function Atmosphere() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame(({ clock }) => {
    if (ref.current) {
      const m = ref.current.material as THREE.MeshBasicMaterial;
      m.opacity = 0.05 + Math.sin(clock.elapsedTime * 0.8) * 0.02;
    }
  });
  return (
    <>
      <mesh ref={ref} scale={1.16}>
        <sphereGeometry args={[R, 48, 48]} />
        <meshBasicMaterial
          color="#1e86db"
          transparent
          opacity={0.06}
          side={THREE.BackSide}
          depthWrite={false}
        />
      </mesh>
      <mesh scale={1.02}>
        <sphereGeometry args={[R, 40, 40]} />
        <meshBasicMaterial color="#0c2947" transparent opacity={0.55} depthWrite={false} />
      </mesh>
    </>
  );
}

/* ------------------------------- globe ---------------------------------- */

function Globe() {
  const group = useRef<THREE.Group>(null);
  useFrame((_, delta) => {
    if (group.current) group.current.rotation.y += delta * 0.12;
  });
  return (
    <group ref={group} rotation={[0.16, 0, -0.08]}>
      <Atmosphere />
      <DottedGlobe />
      {/* graticule */}
      <mesh>
        <sphereGeometry args={[R * 1.001, 26, 18]} />
        <meshBasicMaterial color="#2b6cb0" wireframe transparent opacity={0.07} depthWrite={false} />
      </mesh>
      <Arcs />
    </group>
  );
}

export default function Globe3D() {
  return (
    <Canvas
      camera={{ position: [0, 0.9, 6.1], fov: 38 }}
      dpr={[1, 1.8]}
      gl={{ antialias: true, alpha: true }}
      style={{ background: "transparent" }}
    >
      <Float speed={1.4} rotationIntensity={0.12} floatIntensity={0.55}>
        <Globe />
      </Float>
      <Sparkles count={70} scale={[7.5, 5, 4]} size={2.2} speed={0.32} color="#7dd3fc" opacity={0.5} />
    </Canvas>
  );
}
