<script lang="ts">
  import Counter from "./lib/Counter.svelte";
  export let name: string;
  export let age: number;
  export let isMarried: boolean;
</script>

<main class="root">
  <h1>Vite + Svelte</h1>

  <div class="card">
    <Counter />
  </div>

  <div class="box">
    <h2>Props</h2>
    <div>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Is Married: {isMarried ? "Yes" : "No"}</p>
    </div>
  </div>
</main>

<style>
  .root {
    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    line-height: 1.5;
    font-weight: 400;

    color-scheme: light dark;
    color: rgba(255, 255, 255, 0.87);
    background-color: #242424;

    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
    background-color: #646cff;
  }

  .box {
    margin-top: 2em;
    padding: 2em;
    border-radius: 8px;
    background-color: #ffffff;
    color: #854242;
    border: 1px solid #eaeaea;
    text-align: left;
  }

  .root :global(a) {
    font-weight: 500;
    color: #646cff;
    text-decoration: inherit;
  }
  .root :global(a:hover) {
    color: #535bf2;
  }

  .root :global(h1) {
    font-size: 3.2em;
    line-height: 1.1;
  }

  .root :global(.card) {
    padding: 2em;
  }

  .root {
    max-width: 1280px;
    margin: 0 auto;
    padding: 2rem;
    text-align: center;
  }

  .root :global(button) {
    border-radius: 8px;
    border: 1px solid transparent;
    padding: 0.6em 1.2em;
    font-size: 1em;
    font-weight: 500;
    font-family: inherit;
    background-color: #1a1a1a;
    cursor: pointer;
    transition: border-color 0.25s;
  }
  .root :global(button:hover) {
    border-color: #e97a3a;
  }
  .root :global(button:focus),
  .root :global(button:focus-visible) {
    outline: 4px auto -webkit-focus-ring-color;
  }

  @media (prefers-color-scheme: light) {
    .root {
      color: #213547;
      background-color: #ffffff;
    }
    .root :global(a:hover) {
      color: #747bff;
    }
    .root :global(button) {
      background-color: #f9f9f9;
    }
  }
</style>
