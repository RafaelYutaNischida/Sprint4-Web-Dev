import { Link } from 'react-router-dom'

function Brand({ children = 'OPT Cam', onClick }) {
  return (
    <Link
      to={{ pathname: '/', hash: '#abertura' }}
      onClick={onClick}
      className="flex items-center gap-2.5 font-display text-[19px] font-bold text-fg"
    >
      <span className="grid size-[34px] shrink-0 place-items-center rounded-full border border-line-strong bg-night-800">
        <span className="size-3.5 rounded-full bg-brand" />
      </span>
      {children}
    </Link>
  )
}

export default Brand
