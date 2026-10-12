type JsonValue = Record<string, unknown> | Array<Record<string, unknown>>;

/**
 * Renders a JSON-LD structured-data script tag.
 * `<` is escaped so user strings can never close the script element early.
 */
export function JsonLd({ data }: { data: JsonValue }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
