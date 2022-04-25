/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module 'vue3-markdown-it'
declare module 'marked'
declare module 'convert-csv-to-json'

declare module "*.jpg" {
  const value: any;
  export default value;
}
declare module "*.png" {
  const value: any;
  export default value;
}
