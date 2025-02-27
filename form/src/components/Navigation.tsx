import {
  FormState,
  goToNextPage,
  goToPreviousPage,
  pagination
} from '@publicodes/forms'
import { RuleName } from '../../../publicodes-build'
import Button from './Navigation/Button'

type Props = {
  formState: FormState<RuleName>
  setFormState: React.Dispatch<React.SetStateAction<FormState<RuleName>>>
}

export default function Navigation({ formState, setFormState }: Props) {
  // Get pagination information
  const { pageCount, hasNextPage, hasPreviousPage } = pagination(formState)

  if (pageCount === 1) {
    return null
  }
  return (
    <div className="mt-8 flex space-x-8">
      <Button
        disabled={!hasPreviousPage}
        title="Aller à la page précédente"
        onClick={() => setFormState(goToPreviousPage(formState))}
      >
        Précédent
      </Button>
      <Button
        disabled={!hasNextPage}
        title="Aller à la page suivante"
        onClick={() => setFormState(goToNextPage(formState))}
      >
        Suivant
      </Button>
    </div>
  )
}
