import type { App } from "vue";
import jsonMs from './jsonms'

export function registerPlugins (app: App) {
  app
    .use(jsonMs)
}