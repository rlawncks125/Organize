import { createApp, InjectionKey, provide } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// provide // inject TS
// provide key(Symbol)를 이용한 provide 정의
export const providekey: InjectionKey<string> = Symbol();

createApp(App)
  .use(store)
  .use(router)
  .provide(providekey, "foo")
  .provide("stringFoo", "stringFoo")
  .mount("#app");
