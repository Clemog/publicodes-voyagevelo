import Engine from 'publicodes'
import { capitalizeString } from '../utils/capitalizeString'
import { RuleName } from '../../../publicodes-build'

type Props = {
  targetRule: RuleName
  engine: Engine
}
export default function Result({ targetRule, engine }: Props) {
  const result = engine.evaluate(targetRule).nodeValue
  return (
    <div className='my-4'>
      <h2>
        {capitalizeString(targetRule)}: {result}
      </h2>
    </div>
  )
}
