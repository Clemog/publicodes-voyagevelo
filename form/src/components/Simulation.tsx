import Engine from 'publicodes'
import { FormBuilder } from '@publicodes/forms'

// Import the model from the compiled model
import rules, { RuleName } from '../../../publicodes-build'
import Form from './Form'
import { useState } from 'react'
import Result from './Result'
import Navigation from './Navigation'

// Instantiate the publicodes engine with the model
const engine = new Engine(rules, {
  flag: {
    filterNotApplicablePossibilities: true
  }
})

// The rule we finally want to evaluate
const TARGET = 'bilan'

// Create a form builder instance
const formBuilder = new FormBuilder({
  engine,
  formOptions: { selectTreshold: 3 }
})

// Initialiser l'état du formulaire
const initialState = formBuilder.start(FormBuilder.newState(), TARGET)

export default function Simulation() {
  const [formState, setFormState] = useState(initialState)

  // Get current page UI elements
  const pageElements = formBuilder.currentPage(formState)

  // Get pagination information
  const paginationInfo = formBuilder.pagination(formState)

  // Create a function to be used to handle value change in form
  const handleValueChange = (
    dottedName: RuleName,
    value: string | number | boolean | undefined
  ) => {
    const newState = formBuilder.handleInputChange(formState, dottedName, value)
    setFormState(newState)
  }

  // Create a function to be used to handle value change in form
  const handlePaginationChange = (direction: 'previous' | 'next') => {
    switch (direction) {
      case 'previous':
        setFormState(formBuilder.goToPreviousPage(formState))
        break
      case 'next':
        setFormState(formBuilder.goToNextPage(formState))
        break
      default:
        throw new Error('Invalid direction')
    }
  }

  console.log(pageElements)
  return (
    <>
      <h1>Publicodes Form</h1>
      <Result targetRule={TARGET} engine={engine} />
      <Form pageElements={pageElements} setValue={handleValueChange} />
      <Navigation
        paginationInfo={paginationInfo}
        handlePaginationChange={handlePaginationChange}
      />
    </>
  )
}
