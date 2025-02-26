import Engine from 'publicodes'
import {
  currentPage,
  goToNextPage,
  goToPreviousPage,
  handleInputChange,
  initFormState,
  pagination
} from '@publicodes/forms'

// Import the model from the compiled model
import rules, { RuleName } from '../../../publicodes-build'
import Form from './Form'
import { useState } from 'react'
import Result from './Result'
import Navigation from './Navigation'

// Instantiate the publicodes engine with the model
const engine = new Engine(rules)

// The rule we finally want to evaluate
const targetRule = 'bilan'

// Initialize form state
const generatedFormState = initFormState({ engine }, targetRule)

export default function Simulation() {
  const [formState, setFormState] = useState(generatedFormState)

  // Get current page UI elements
  const pageElements = currentPage({
    formState,
    engine,
    options: { selectTreshold: 3 }
  })

  // Create a function to be used to handle value change in form
  const setValue = (
    dottedName: RuleName,
    value: string | number | boolean | undefined
  ) => {
    setFormState(
      handleInputChange({ formState, id: dottedName, value, engine })
    )
  }
  console.log(formState)
  console.log(pageElements)

  return (
    <>
      <h1>Publicodes Form</h1>
      <Result targetRule={targetRule} engine={engine} />
      <Form
        title={formState.currentPageClosestCommonAncestor}
        pageElements={pageElements}
        setValue={setValue}
      />
      <Navigation formState={formState} setFormState={setFormState} />
    </>
  )
}
