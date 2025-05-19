import { EvaluatedSelect, Option } from '@publicodes/forms'
import { RuleName } from '../../../publicodes-build'
import Label from './Question/Label'

type Props = {
  formElement: EvaluatedSelect<RuleName> & {
    hidden: boolean
    useful: boolean
    disabled: boolean
    autofocus: boolean
    required: boolean
  }
  setValue: (dottedName: RuleName, value: string | undefined) => void
}

export default function FormSelectInput({ formElement, setValue }: Props) {
  return (
    <div className={`${formElement.disabled ? 'opacity-50' : ''}`}>
      <Label label={formElement.label} description={formElement.description} />
      <select
        defaultValue={formElement.defaultValue}
        onChange={(e) => setValue(formElement.id, e.target.value as string)}
        className="focus:border-primary-700 focus:ring-primary-700 mt-3 h-[56px] max-w-[30rem] !cursor-pointer rounded-xl border-2 border-solid border-gray-300 bg-gray-100 p-4 text-sm transition-colors focus:ring-2"
      >
        {formElement.options &&
          formElement.options.map((option: Option) =>
            option ? (
              <option
                key={option.value as string}
                value={option.value as string}
              >
                {option.label}
              </option>
            ) : null
          )}
      </select>
    </div>
  )
}
