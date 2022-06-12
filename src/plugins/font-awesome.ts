// vue Font awesome
// https://fontawesome.com/docs/web/use-with/vue/style
import { library } from "@fortawesome/fontawesome-svg-core";

import { faUserSecret, faCoffee } from "@fortawesome/free-solid-svg-icons";

//  npm i --save @fortawesome/vue-fontawesome@prerelease

library.add(faUserSecret, faCoffee);

// fontawesome 컴포넌트
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export { FontAwesomeIcon };
