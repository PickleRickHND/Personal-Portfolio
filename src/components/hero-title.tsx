export function HeroTitle({
  first,
  second,
}: {
  first: string;
  second: string;
}) {
  return (
    <h1 className="font-serif text-[clamp(72px,14vw,220px)] leading-[0.88] tracking-[var(--tracking-tightest)]">
      <span className="inline-block overflow-hidden align-top">
        <span className="hero-word-rise inline-block" style={{ animationDelay: "0ms" }}>
          {first}
        </span>
      </span>
      <br />
      <span className="inline-block pl-[0.5em]">
        <span className="inline-block overflow-hidden align-top">
          <span
            className="hero-word-rise inline-block italic text-bone-muted"
            style={{ animationDelay: "260ms" }}
          >
            {second}
          </span>
        </span>
      </span>
    </h1>
  );
}
