import { createApp } from "vue";
import App from "./components/App.vue";

export function mount(el) {
  if (el) {
    const app = createApp(App);
    app.mount(el);
  }

  return { unmmount: () => {} };
}

if (process.env.NODE_ENV === "development") {
  const el = document.querySelector("#root-chat-dev");
  if (el) {
    mount(el);
  }
}
