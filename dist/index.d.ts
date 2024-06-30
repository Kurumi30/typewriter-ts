import { ITypewriter, ITypewriterOptions } from './types';
export default class Typewriter implements ITypewriter {
    private queue;
    private element;
    private loop;
    private typingSpeed;
    private deletingSpeed;
    constructor(parent: HTMLElement, { loop, typingSpeed, deletingSpeed }?: ITypewriterOptions);
    private addToQueue;
    private injectCursorStyle;
    private updateCursor;
    typeString(str: string): this;
    deleteChars(num: number): this;
    deleteAll(deleteSpeed?: number): this;
    pauseFor(duration: number): this;
    start(): Promise<this>;
}
