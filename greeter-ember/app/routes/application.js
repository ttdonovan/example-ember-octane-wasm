import Route from '@ember/routing/route';

export default class ApplicationRoute extends Route {
  constructor() {
    super(...arguments);

    // // ERROR: webpack returned errors to ember-auto-import
    // (async () => {
    //   // Importing a wasm module!
    //   const { greet } = await import('greeter-wasm');
    //
    //   greet();
    // })()

    (async () => {
      // Importing a wasm module!
      const { greet } = await import('hello-wasm-pack');

      greet();
    })()
  }
}
