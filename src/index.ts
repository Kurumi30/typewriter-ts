import { ITypewriter, QueueItem, ITypewriterOptions } from './types'

export default class Typewriter implements ITypewriter {
  private queue: QueueItem[] = []
  private element: HTMLElement
  private loop: boolean
  private typingSpeed: number
  private deletingSpeed: number
  private cursorColor: string

  constructor(
    parent: HTMLElement,
    {
      loop = false,
      typingSpeed = 50,
      deletingSpeed = 50,
      cursorColor = 'black'
    }: ITypewriterOptions = {}
  ) {
    this.loop = loop
    this.typingSpeed = typingSpeed
    this.deletingSpeed = deletingSpeed
    this.cursorColor = cursorColor
    this.element = document.createElement('div')

    parent.append(this.element)
  }

  private addToQueue(cb: (resolve: () => void) => void) {
    this.queue.push(() => new Promise(cb))
  }

  private injectCursorStyle() {
    const styleId = 'typing-cursor-style'

    if (!document.getElementById(styleId)) {
      const style = document.createElement('style')

      style.id = styleId
      style.innerText = `
      .cursor {
        border-right: 2px solid ${this.cursorColor};
        animation: blink 0.5s step-end infinite;
      }
        
      @keyframes blink {
        from, to {
          border-color: transparent;
        }

        50% {
          border-color: ${this.cursorColor};
        }
      }`

      document.head.appendChild(style)
    }
  }

  private updateCursor() {
    const existingCursor = this.element.querySelector('.cursor')

    if (existingCursor) this.element.removeChild(existingCursor)

    const cursorElement = document.createElement('span')

    cursorElement.classList.add('cursor')
    cursorElement.textContent = ''

    this.element.appendChild(cursorElement)
  }

  public typeString(str: string) {
    this.injectCursorStyle()
    this.addToQueue(resolve => {
      let i = 0

      const interval = setInterval(() => {
        this.element.append(str[i])
        i++

        this.updateCursor()

        if (i >= str.length) {
          clearInterval(interval)
          resolve()
        }
      }, this.typingSpeed)
    })

    return this
  }

  public deleteChars(num: number) {
    this.addToQueue(resolve => {
      let i = 0

      const interval = setInterval(() => {
        this.element.innerText = this.element.innerText.substring(0, this.element.innerText.length - 1)
        i++

        this.updateCursor()

        if (i >= num) {
          clearInterval(interval)
          resolve()
        }
      }, this.deletingSpeed)
    })

    return this
  }

  public deleteAll(deleteSpeed = this.deletingSpeed) {
    this.addToQueue(resolve => {
      const interval = setInterval(() => {
        this.element.innerText = this.element.innerText.substring(0, this.element.innerText.length - 1)
        this.updateCursor()

        if (this.element.innerText.length === 0) {
          clearInterval(interval)
          resolve()
        }
      }, deleteSpeed)
    })

    return this
  }

  public pauseFor(duration: number) {
    this.addToQueue(resolve => setTimeout(resolve, duration))

    return this
  }

  public async start() {
    let cb = this.queue.shift()

    while (cb != null) {
      await cb()

      if (this.loop) this.queue.push(cb)

      cb = this.queue.shift()
    }

    return this
  }
}
