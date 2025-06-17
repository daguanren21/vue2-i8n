import {createI18n} from 'vue-i18n-bridge'
import en from './en'
import zh from './zh'
import  Vue from 'vue'
import VueI18n from 'vue-i18n'

const files = require.context('./modules',true,/index\.js$/)
const routes = []
files.keys().forEach(key => {
  const fileName = key.replace(/.*\/([^/]+)\/index\.js$/, "$1"); // 提取文件名
  if (fileName.toLowerCase() !== "index") { // 排除 index.ts
        const routeModule = files(key);
    }
});
console.log(routes);
Vue.use(VueI18n,{bridge:true})
const i18n = createI18n({
    legacy:false,
    locale:'en',
    messages:{
        en,
        zh,
    }
},VueI18n)

export default i18n