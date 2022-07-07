import { createApp, InjectionKey, provide } from "vue";
import App from "./App.vue";
import router from "./router";
import componentCodeConvert from "./components/codeConvert.vue";
import { store, key } from "./store";

// 플러그인
import fontAwesome from "@/plugins/font-awesome";
import "@/plugins/aos";

// provide // inject TS
// provide key(Symbol)를 이용한 provide 정의
export const providekey: InjectionKey<string> = Symbol();

createApp(App)
  .use(store, key)
  .use(router)
  .use(fontAwesome)
  .provide(key, store)
  .provide(providekey, "foo")
  .provide("stringFoo", "stringFoo")
  .component("code-convert", componentCodeConvert)
  .directive("color-change", {
    // 사용 <tag v-color-change='binding.value' />
    beforeMount(el, binding, vnode) {
      if (binding.value) {
        el.style.backgroundColor = binding.value;
      } else {
        const random = Math.floor(Math.random() * 900000) + 100000;
        el.style.backgroundColor = `#${random}`;
      }
    },
  }) // 커스텀 디렉티브
  .mount("#app");
