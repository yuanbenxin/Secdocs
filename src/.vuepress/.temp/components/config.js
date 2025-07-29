import { hasGlobalComponent } from "D:/DevData/Secwiki/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.1_701c45b228a71781fdaf3a262dda858f/node_modules/@vuepress/helper/lib/client/index.js";
import Badge from "D:/DevData/Secwiki/node_modules/.pnpm/vuepress-plugin-components@_6ab9913c928e17290e4e0a3549347891/node_modules/vuepress-plugin-components/lib/client/components/Badge.js";
import VPCard from "D:/DevData/Secwiki/node_modules/.pnpm/vuepress-plugin-components@_6ab9913c928e17290e4e0a3549347891/node_modules/vuepress-plugin-components/lib/client/components/VPCard.js";

import "D:/DevData/Secwiki/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.1_701c45b228a71781fdaf3a262dda858f/node_modules/@vuepress/helper/lib/client/styles/sr-only.css";

export default {
  enhance: ({ app }) => {
    if(!hasGlobalComponent("Badge")) app.component("Badge", Badge);
    if(!hasGlobalComponent("VPCard")) app.component("VPCard", VPCard);
    
  },
  setup: () => {

  },
  rootComponents: [

  ],
};
