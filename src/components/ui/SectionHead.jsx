function SectionHead({ eyebrow, title, text, center = false }) {
  return (
    <div
      className={`mb-14 max-w-160 animate-reveal motion-reduce:animate-none ${
        center ? 'mx-auto text-center' : ''
      }`}
    >
      {eyebrow && (
        <span className="mb-4 inline-flex items-center gap-2 text-[13px] font-semibold uppercase tracking-[0.12em] text-fg-low">
          <span className="size-[7px] rounded-full bg-brand" />
          {eyebrow}
        </span>
      )}

      <h2 className="mb-4 font-display text-[clamp(28px,3.4vw,40px)] font-bold">{title}</h2>

      {text && <p className="text-[17px] text-fg-mid">{text}</p>}
    </div>
  )
}

export default SectionHead
