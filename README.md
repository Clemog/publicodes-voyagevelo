# publicodes-voyagevelo

Modèle Publicodes pour le calcul du bilan carbone d'un voyage à vélo.

## Installation

```sh
yarn install publicodes-voyagevelo publicodes
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
yarn install

// Compile the Publicodes rules
yarn run compile

// Run the tests
yarn run test

// Run the documentation server
yarn run doc
```
