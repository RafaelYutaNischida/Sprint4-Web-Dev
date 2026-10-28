function IconBadge({ children, className = '' }) {
  return (
    <div
      className={`mb-[18px] grid size-12 place-items-center rounded-[14px] border border-line-strong bg-brand/12 font-display font-bold text-brand ${className}`}
    >
      {children}
    </div>
  )
}

export default IconBadge
