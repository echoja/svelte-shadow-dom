import App from "./App.svelte";

class EchojaCustomElement extends HTMLElement {
  #app: App;
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.#app = new App({
      target: this.shadowRoot as any,
      props: {
        name: "",
        age: 0,
        isMarried: false,
      },
    });
  }

  set name(value: string) {
    this.#app.$set({ name: value });
  }

  set age(value: number) {
    this.#app.$set({ age: value });
  }

  set isMarried(value: boolean) {
    this.#app.$set({ isMarried: value });
  }

  connectedCallback() {
    console.log("connected");
  }

  disconnectedCallback() {
    console.log("disconnected");
  }
}

customElements.define("echoja-app", EchojaCustomElement);
