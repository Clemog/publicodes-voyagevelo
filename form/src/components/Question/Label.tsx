import { useState } from 'react'

type Props = {
  label: string
  description: string | undefined
}

export default function Label({ label, description }: Props) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <div className="mb-2 flex gap-2">
        <legend>{label}</legend>
        {description ? (
          <button
            type="button"
            onClick={() => {
              setIsOpen((isOpen) => !isOpen)
            }}
            color="secondary"
            className="inline-flex h-6 w-6 cursor-pointer items-center justify-center rounded-full border p-0 align-text-bottom font-mono"
            title="Voir plus d'informations"
          >
            i
          </button>
        ) : null}
      </div>
      {isOpen && description ? (
        <div className="mb-3 max-w-100 rounded-xl border-2 bg-gray-100 p-3 text-sm">
          <div>{description}</div>{' '}
        </div>
      ) : null}
    </div>
  )
}
