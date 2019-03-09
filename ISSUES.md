# Issues

Steps taken to build example Ember Octane and WASM app.
See `greeter-octane/src/ui/routes/application/controller.js` for error.

```
// ERROR: webpack returned errors to ember-auto-import
(async () => {
  // Importing a wasm module!
  const { greet } = await import('greeter-wasm');

  greet();
})()
```

## Steps Taken

Build Rust + Wasm app.

```
> cargo generate --git https://github.com/rustwasm/wasm-pack-template --name greeter-wasm
> cd greeter-wasm
> cargo build
> wasm-pack build
```

Build new Ember Octane and add "hello-wasm-pack" as example.

```
> ember new greeter-octane -b ember-octane-app-blueprint
> cd greeter-octane
> yarn install
> ember install ember-auto-import
> yarn add hello-wasm-pack
```

Edit Ember files.

```
# edit ember-cli-build add Babel plugin "ember-auto-import/babel-plugin"
> ember g controller application
# edit src/ui/routes/application/controller.js
```

Add custom "greeter-wasm" to "greeter-octane".

```
# edit package.json to link to "greeter-wasm"
> yarn install
> ember serve
```
