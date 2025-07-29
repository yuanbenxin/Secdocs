import CodeDemo from "D:/DevData/Secwiki/node_modules/.pnpm/vuepress-plugin-md-enhance@_83a177a9e0d0d735acbe5a0318471032/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeDemo.js";
import MdDemo from "D:/DevData/Secwiki/node_modules/.pnpm/vuepress-plugin-md-enhance@_83a177a9e0d0d735acbe5a0318471032/node_modules/vuepress-plugin-md-enhance/lib/client/components/MdDemo.js";

export default {
  enhance: ({ app }) => {
    app.component("CodeDemo", CodeDemo);
    app.component("MdDemo", MdDemo);
  },
};
