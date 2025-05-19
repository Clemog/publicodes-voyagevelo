import { EvaluatedRadioGroup, Option } from '@publicodes/forms'
import { RuleName } from '../../../publicodes-build'
import Label from './Question/Label'

type Props = {
  formElement: EvaluatedRadioGroup<RuleName> & {
    hidden: boolean
    useful: boolean
    disabled: boolean
    autofocus: boolean
    required: boolean
  }
  setValue: (dottedName: RuleName, value: string | undefined) => void
}

export default function FormRadioInput({ formElement, setValue }: Props) {
  return (
    <div className={`${formElement.disabled ? 'opacity-50' : ''}`}>
      <Label label={formElement.label} description={formElement.description} />
      <div className={`flex items-center justify-start gap-1`}>
        <fieldset className="flex flex-col gap-2">
          {formElement.options &&
            formElement.options.map((option: Option) =>
              option ? (
                <label
                  className={`relative flex items-center gap-2 rounded-xl border-1 bg-white px-4 py-2 text-left transition-colors ${
                    !formElement.disabled ? 'cursor-pointer' : ''
                  }`}
                  key={option.value as string}
                >
                  <input
                    type="radio"
                    onChange={() =>
                      setValue(formElement.id, option.value as string)
                    }
                    checked={
                      formElement.value !== undefined
                        ? formElement.value === option.value
                        : formElement.defaultValue === option.value
                    }
                    autoFocus={formElement.autofocus}
                    required={formElement.required}
                  />
                  <span
                    className={`inline flex-1 align-middle text-sm md:text-lg`}
                  >
                    {option.label}
                  </span>
                </label>
              ) : null
            )}
        </fieldset>
      </div>
    </div>
  )
}
