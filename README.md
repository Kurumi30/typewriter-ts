# Typewriter-ts
<div align="center">
[![Npm package version](https://badgen.net/npm/v/@kurumi30/typewriter-ts)](https://www.npmjs.com/package/@kurumi30/typewriter-ts)
[![Npm package total downloads](https://badgen.net/npm/dt/@kurumi30/typewriter-ts)](https://npmjs.com/package/@kurumi30/typewriter-ts)
[![install size](https://img.shields.io/badge/dynamic/json?url=https://packagephobia.com/v2/api.json?p=@kurumi30/typewriter-ts&query=$.install.pretty&label=install%20size)](https://packagephobia.com/result?p=%40kurumi30%2Ftypewriter-ts)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/@kurumi30/typewriter-ts)](https://bundlephobia.com/package/https://bundlephobia.com/package/@kurumi30/typewriter-ts@latest)
[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
</div>

- Uma simples animação de digitação para você colocar nos seus projetos frontend 🙂
- Leve e fácil de usar 🚀
- Feito apenas com TypeScript

## Instalação

```bash
# npm
npm install @kurumi30/typewriter-ts

# pnpm
pnpm add @kurumi30/typewriter-ts

# yarn
yarn add @kurumi30/typewriter-ts
```

## Exemplo

```html
<!-- No HTML -->
<div id="test"></div>
```

```typescript
// No JavaScript ou TypeScript

import Typewriter from '@kurumi30/typewriter-ts'
// ou se você estiver usando CommonJS:
// const Typewriter = require('@kurumi30/typewriter-ts')

const test = document.querySelector('#test')
const typewriter = new Typewriter(test, {
  loop: true,
  typingSpeed: 70,
  deletingSpeed: 50,
})

typewriter
  .typeString("Hello World!")
  .pauseFor(1000)
  .deleteChars(6)
  .pauseFor(1000)
  .typeString("Typewriter-ts")
  .pauseFor(1000)
  .deleteAll(10)
  .start()
```

## Parâmetros

```typescript
new Typewriter(element: HTMLElement, {
  loop: boolean,
  typingSpeed: number,
  deletingSpeed: number,
})
```

| Parâmetro       | Descrição                             | Padrão | Obrigatório |
|-----------------|---------------------------------------|--------|-------------|
| `element`       | Elemento HTML para a animação.        |        | Sim         |
| `loop`          | Se a animação deve repetir ou não.    | `false`| Não         |
| `typingSpeed`   | Velocidade de digitação.              | `50`   | Não         |
| `deletingSpeed` | Velocidade para apagar.               | `50`   | Não         |

## Métodos

| Método         | Descrição                              | Parâmetros            |
|----------------|----------------------------------------|-----------------------|
| `typeString`   | Adiciona um texto para ser digitado.   | `str: string`         |
| `deleteChars`  | Apaga uma quantidade de caracteres.    | `num: number`         |
| `deleteAll`    | Apaga todo o texto.                    | `deleteSpeed: number` |
| `pauseFor`     | Pausa a animação por um tempo.         | `time: number`        |
| `start`        | Inicia a animação.                     |                       |

## Créditos

- Canal do Youtube [Web Dev Simplified](https://www.youtube.com/@WebDevSimplified)

## Contribuição

Se você quiser contribuir com o projeto, fique à vontade para abrir uma issue ou pull request. Toda ajuda é sempre bem-vinda! 💻
