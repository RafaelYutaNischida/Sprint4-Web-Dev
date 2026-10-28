import { Link } from 'react-router-dom'

const base =
  'inline-flex items-center justify-center gap-2.5 whitespace-nowrap rounded-full px-7 py-3.5 text-[15px] font-semibold cursor-pointer transition duration-200 hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0'

const variants = {
  primary:
    'bg-brand text-white shadow-[0_14px_34px_-12px_rgb(123_92_240/0.65)] hover:bg-brand-deep',
  ghost: 'border border-line-strong bg-white/5 text-fg hover:bg-white/10',
}

// Renderiza <Link> (rota), <a> (âncora/externo) ou <button>, conforme as props.
function Button({ variant = 'primary', to, href, className = '', children, ...props }) {
  const classes = `${base} ${variants[variant]} ${className}`

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}

export default Button
