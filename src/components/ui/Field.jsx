// Campo de formulário com rótulo. Use as="textarea" para campos de texto longo.
const inputClasses =
  'w-full rounded-xl border border-line-strong bg-night-800 px-4 py-3 text-[14.5px] text-fg outline-none transition placeholder:text-fg-low focus:border-brand focus:ring-[3px] focus:ring-brand/20'

function Field({ id, label, as = 'input', className = '', ...props }) {
  const Control = as

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-[13px] font-semibold text-fg-mid">
        {label}
      </label>
      <Control
        id={id}
        name={id}
        className={`${inputClasses} ${as === 'textarea' ? 'min-h-30 resize-y' : ''} ${className}`}
        {...props}
      />
    </div>
  )
}

export default Field
