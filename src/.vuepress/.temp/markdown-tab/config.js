import { CodeTabs } from "D:/DevData/Secwiki/node_modules/.pnpm/@vuepress+plugin-markdown-t_9a0b61b500ccf00607af5eaaa94a87e3/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/CodeTabs.js";
import { Tabs } from "D:/DevData/Secwiki/node_modules/.pnpm/@vuepress+plugin-markdown-t_9a0b61b500ccf00607af5eaaa94a87e3/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/Tabs.js";
import "D:/DevData/Secwiki/node_modules/.pnpm/@vuepress+plugin-markdown-t_9a0b61b500ccf00607af5eaaa94a87e3/node_modules/@vuepress/plugin-markdown-tab/lib/client/styles/vars.css";

export default {
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    app.component("Tabs", Tabs);
  },
};
