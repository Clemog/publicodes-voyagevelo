import { EvaluatedNumberInput } from '@publicodes/forms'
import { RuleName } from '../../../publicodes-build'
import Label from './Question/Label'

type Props = {
  formElement: EvaluatedNumberInput<RuleName> & {
    hidden: boolean
    useful: boolean
    disabled: boolean
    autofocus: boolean
    required: boolean
  }
  setValue: (
    dottedName: RuleName,
    value: string | number | boolean | undefined
  ) => void
}

export default function FormNumberInput({ formElement, setValue }: Props) {
  return (
    <div className={`${formElement.disabled ? 'opacity-50' : ''}`}>
      <Label label={formElement.label} description={formElement.description} />
      <div className={`flex items-center justify-start gap-1`}>
        <label>
          <input
            className={`focus:ring-primary max-w-[8rem] rounded-xl border-1 bg-white p-1 text-right focus:ring-2`}
            type={formElement.type}
            placeholder={formElement.defaultValue?.toString()}
            onChange={(e) => setValue(formElement.id, e.target.value)}
            autoFocus={formElement.autofocus}
            // min={formElement.minValue ?? 0}
            // FIXME: add max attribute
            // max={formElement.maxValue}
            // FIXME: what is "useful" attribute ?
            // FIXME: what is "applicable" attribute ?
          />
        </label>
        {formElement.unit ? (
          <span className="whitespace-nowrap">
            &nbsp;
            {formElement.unit}
          </span>
        ) : null}
      </div>
    </div>
  )
}
