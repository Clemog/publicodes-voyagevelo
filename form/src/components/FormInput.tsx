import { EvaluatedNumberInput } from '@publicodes/forms'

type Props = {
  formElement: EvaluatedNumberInput
  setValue: any
}

export default function FormInput({ formElement, setValue }: Props) {
  if (!formElement) {
    return null
  }

  return (
    <div>
      <legend>{formElement.label}</legend>
      <label>
        <input
          type={formElement.type}
          placeholder={formElement.defaultValue?.toString()}
          onChange={(e) => setValue(formElement.id, e.target.value)}
        />
      </label>
    </div>
  )
}
