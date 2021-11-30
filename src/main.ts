import { createApp, InjectionKey, provide } from "vue";
import App from "./App.vue";
import router from "./router";
import componentCodeConvert from "./components/codeConvert.vue";
import { store, key } from "./store";
// aos ( Animate on scroll libray ) 정의
import aos from "aos";
import "aos/dist/aos.css";

// provide // inject TS
// provide key(Symbol)를 이용한 provide 정의
export const providekey: InjectionKey<string> = Symbol();

createApp(App)
  .use(store, key)
  .use(router)
  .use(() =>
    aos.init({
      delay: 50,
      duration: 500,
      anchorPlacement: "bottom-bottom",
    })
  ) // aos 사용
  .provide(key, store)
  .provide(providekey, "foo")
  .provide("stringFoo", "stringFoo")
  .component("code-convert", componentCodeConvert)
  .mount("#app");
