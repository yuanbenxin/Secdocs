import { hasGlobalComponent } from "D:/DevData/Secwiki/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.1_701c45b228a71781fdaf3a262dda858f/node_modules/@vuepress/helper/lib/client/index.js";
import { useScriptTag } from "D:/DevData/Secwiki/node_modules/.pnpm/@vueuse+core@13.5.0_vue@3.5.17/node_modules/@vueuse/core/index.mjs";
import { h } from "vue";
import { VPIcon } from "D:/DevData/Secwiki/node_modules/.pnpm/@vuepress+plugin-icon@2.0.0_3c240f0ff7c515a105102833ad9db463/node_modules/@vuepress/plugin-icon/lib/client/index.js"

export default {
  enhance: ({ app }) => {
    if(!hasGlobalComponent("VPIcon")) {
      app.component(
        "VPIcon",
        (props) =>
          h(VPIcon, {
            type: "iconify",
            prefix: "fa6-solid:",
            ...props,
          })
      )
    }
  },
  setup: () => {
    useScriptTag(`https://cdn.jsdelivr.net/npm/iconify-icon@2`);
  },
}
