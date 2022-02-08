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

// vue Font awesome
// https://fontawesome.com/docs/web/use-with/vue/style
import { library } from "@fortawesome/fontawesome-svg-core";

import { faUserSecret, faCoffee } from "@fortawesome/free-solid-svg-icons";

//  npm i --save @fortawesome/vue-fontawesome@prerelease
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faUserSecret, faCoffee);

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
  .component("font-awesome-icon", FontAwesomeIcon)
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
