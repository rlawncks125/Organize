// vue Font awesome
// https://fontawesome.com/docs/web/use-with/vue/style
import { library } from "@fortawesome/fontawesome-svg-core";

import { faUserSecret, faCoffee } from "@fortawesome/free-solid-svg-icons";

//  npm i --save @fortawesome/vue-fontawesome@prerelease
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faUserSecret, faCoffee);

export { FontAwesomeIcon };
