import { CurrentPageElements } from '@publicodes/forms'
import { RuleName } from '../../../publicodes-build'
import FormNumberInput from './FormNumberInput'
import FormRadioInput from './FormRadioInput'
import FormSelectInput from './FormSelectInput'

type Props = {
  pageElements: CurrentPageElements<RuleName>
  setValue: (
    dottedName: RuleName,
    value: string | number | boolean | undefined
  ) => void
}

export default function Form({ pageElements, setValue }: Props) {
  return (
    <div className="flex h-120 flex-col gap-4 overflow-y-scroll scrollbar w-1/2">
      <h2>{pageElements.title}</h2>
      {pageElements.elements.map((pageElement) => {
        switch (pageElement.element) {
          case 'input':
            switch (pageElement.type) {
              case 'number':
                return (
                  <FormNumberInput
                    key={pageElement.id}
                    formElement={pageElement}
                    setValue={setValue}
                  />
                )
              case 'text':
                return null
              default:
                return null
            }
          case 'RadioGroup':
            return (
              <FormRadioInput
                key={pageElement.id}
                formElement={pageElement}
                setValue={setValue}
              />
            )
          case 'select':
            return (
              <FormSelectInput
                key={pageElement.id}
                formElement={pageElement}
                setValue={setValue}
              />
            )
          default:
            return null
        }
      })}
    </div>
  )
}
