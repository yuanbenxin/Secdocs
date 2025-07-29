import comp from "D:/DevData/Secwiki/src/.vuepress/.temp/pages/docs-AboutUs/team1.html.vue"
const data = JSON.parse("{\"path\":\"/docs-AboutUs/team1.html\",\"title\":\"关于SecRandom 开发团队\",\"lang\":\"zh-CN\",\"frontmatter\":{\"layout\":false,\"title\":\"关于SecRandom 开发团队\",\"description\":\"👋 你好，我们是 SecRandom开发团队： 不兼容的设备 本页面专为桌面设备设计，请使用电脑访问以获得最佳体验 或者尝试横屏使用您的设备 返回首页\"},\"readingTime\":{\"minutes\":4.15,\"words\":1245},\"filePathRelative\":\"docs-AboutUs/team1.md\",\"autoDesc\":true}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
