// 🔥 this code is not production ready
// 🔥 the APIs are a simplification of our production APIs

export class ReactiveMap {
  values = new Map();
  reactiveValues = new Map();
  listeners = new Map();
  allowedKeys: Set<string>;

  constructor(allowedKeys = ["username"]) {
    // 🚨 notice we police what keys are allowed
    this.allowedKeys = new Set(allowedKeys);
  }

  set = (key: string, value?: any) => {
    if (!this.allowedKeys.has(key))
      throw new Error(`Key ${key} is not allowed`);

    if (value !== undefined) this.values.set(key, value);

    if (!this.reactiveValues.has(key)) {
      const reactiveValue = (newValue) => {
        if (newValue !== undefined) {
          this.values.set(key, newValue);
          this.listeners.get(key)?.map((listener) => listener(newValue));
        }

        return this.values.get(key);
      };

      reactiveValue.listen = (callback) => {
        if (this.listeners.has(key)) {
          this.listeners.get(key).push(callback);
        } else {
          this.listeners.set(key, [callback]);
        }

        return () => {
          this.listeners.set(
            key,
            this.listeners.get(key).filter((c) => c !== callback)
          );
        };
      };

      this.reactiveValues.set(key, reactiveValue);
    }

    return this.reactiveValues.get(key);
  };

  get = (key: string) => this.set(key);
}
