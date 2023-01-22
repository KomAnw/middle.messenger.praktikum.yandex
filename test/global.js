import { JSDOM } from 'jsdom';

global.window = new JSDOM().window;
global.document = window.document;
global.HTMLElement = window.HTMLElement;
global.customElements = window.customElements;
