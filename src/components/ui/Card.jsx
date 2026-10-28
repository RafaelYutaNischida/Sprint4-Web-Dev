// Cartão base do projeto: fundo escuro, borda sutil e leve elevação no hover.
function Card({ as: Tag = 'div', className = '', children, ...props }) {
  return (
    <Tag
      className={`rounded-[18px] border border-line bg-night-card transition duration-300 hover:-translate-y-1.5 hover:border-brand ${className}`}
      {...props}
    >
      {children}
    </Tag>
  )
}

export default Card
