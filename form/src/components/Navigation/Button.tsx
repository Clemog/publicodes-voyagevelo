import type {
  HtmlHTMLAttributes,
  MouseEventHandler,
  PropsWithChildren
} from 'react'

export type ButtonProps = {
  onClick?: MouseEventHandler<HTMLButtonElement>
  className?: string
  disabled?: boolean
  id?: string
  title?: string
  form?: string
}

export default function Button({
  onClick,
  children,
  disabled,
  id,
  title,
  form
}: PropsWithChildren<ButtonProps & HtmlHTMLAttributes<HTMLButtonElement>>) {
  return (
    <button
      onClick={
        disabled
          ? (e) => {
              e.preventDefault
            }
          : onClick
      }
      type="button"
      aria-disabled={disabled}
      title={title}
      form={form}
      id={id}
      className="inline-flex cursor-pointer items-center justify-center rounded-full font-bold whitespace-nowrap no-underline aria-disabled:opacity-50"
    >
      {children}
    </button>
  )
}
