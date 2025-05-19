import Button from './Navigation/Button'

type Props = {
  paginationInfo: {
    current: number
    pageCount: number
    hasNextPage: boolean
    hasPreviousPage: boolean
  }
  handlePaginationChange: (direction: 'previous' | 'next') => void
}

export default function Navigation({
  paginationInfo,
  handlePaginationChange
}: Props) {
  // Get pagination information
  const { current, pageCount, hasNextPage, hasPreviousPage } = paginationInfo

  if (pageCount === 1) {
    return null
  }
  return (
    <div className="mt-8 flex space-x-8">
      <Button
        disabled={!hasPreviousPage}
        title="Aller à la page précédente"
        onClick={() => handlePaginationChange('previous')}
      >
        Précédent
      </Button>
      <span>
        {current} / {pageCount}{' '}
      </span>
      <Button
        disabled={!hasNextPage}
        title="Aller à la page suivante"
        onClick={() => handlePaginationChange('next')}
      >
        Suivant
      </Button>
    </div>
  )
}
