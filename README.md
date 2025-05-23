# publicodes-voyagevelo

Modèle Publicodes pour le calcul d'empreinte carbone d'un voyage à vélo

## Installation

```sh
bun install publicodes-voyagevelo publicodes
```

## Usage

```typescript
import { Engine } from 'publicodes'
import rules from 'publicodes-voyagevelo'

const engine = new Engine(rules)

console.log(engine.evaluate('salaire net').nodeValue)
// 1957.5

engine.setSituation({ 'salaire brut': 4000 })
console.log(engine.evaluate('salaire net').nodeValue)
// 3120
```

## Development

```sh
// Install the dependencies
bun install

// Compile the Publicodes rules
bun run compile

// Run the tests
bun run test

// Run the documentation server
bun run doc
```
