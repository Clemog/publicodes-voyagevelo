import Engine from 'publicodes'
import {
  currentPage,
  handleInputChange,
  initFormState
} from '@publicodes/forms'

// Import the model from the compiled model
import rules, { RuleName } from '../../../publicodes-build'
import FormInput from './FormInput'
import { useState } from 'react'

// Instantiate the publicodes engine with the model
const engine = new Engine(rules)

// The rule we finally want to evaluate
const targetRule = 'bilan'

// Initialize form state
const generatedFormState = initFormState({ engine }, targetRule)

export default function Home() {
  const [formState, setFormState] = useState(generatedFormState)

  // Get current page UI elements
  const pageElements = currentPage(formState, { engine })

  // Create a function to be used to handle value change
  const setValue = (
    dottedName: RuleName,
    value: string | number | boolean | undefined
  ) => {
    setFormState(handleInputChange(formState, dottedName, value, { engine }))
  }

  let result = engine.evaluate(targetRule).nodeValue

  return (
    <>
      <h1>Publicodes Form</h1>
      <h2>
        {targetRule}: {result}
      </h2>
      {pageElements.map((pageElement) => {
        if (pageElement.element === 'input' && pageElement.type === 'number') {
          return (
            <FormInput
              key={pageElement.id}
              formElement={pageElement}
              setValue={setValue}
            />
          )
        }
      })}
    </>
  )
}
