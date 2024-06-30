# Typewriter-ts

- Uma simples animação de digitação para você colocar nos seus projetos frontend :)
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

| Método         | Descrição                              | Parâmetros       |
|----------------|----------------------------------------|------------------|
| `typeString`   | Adiciona um texto para ser digitado.   | `text: string`   |
| `deleteChars`  | Apaga uma quantidade de caracteres.    | `amount: number` |
| `deleteAll`    | Apaga todo o texto.                    | `delay: number`  |
| `pauseFor`     | Pausa a animação por um tempo.         | `time: number`   |
| `start`        | Inicia a animação.                     |                  |

## Créditos

- Canal do Youtube [Web Dev Simplified](https://www.youtube.com/@WebDevSimplified)

## Contribuição

Se você quiser contribuir com o projeto, fique à vontade para abrir uma issue ou pull request. Toda ajuda é bem-vinda! 💻
