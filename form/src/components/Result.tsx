import Engine from 'publicodes'

type Props = {
  targetRule: any
  engine: Engine
}
export default function Result({ targetRule, engine }: Props) {
  const result = engine.evaluate(targetRule).nodeValue
  return (
    <div>
      <h2>
        {targetRule}: {result}
      </h2>
    </div>
  )
}
