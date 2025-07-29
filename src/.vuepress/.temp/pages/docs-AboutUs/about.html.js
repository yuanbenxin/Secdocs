import comp from "D:/DevData/Secwiki/src/.vuepress/.temp/pages/docs-AboutUs/about.html.vue"
const data = JSON.parse("{\"path\":\"/docs-AboutUs/about.html\",\"title\":\"开发团队介绍\",\"lang\":\"zh-CN\",\"frontmatter\":{\"layout\":\"TeamLayout\",\"title\":\"开发团队介绍\"},\"readingTime\":{\"minutes\":0.04,\"words\":11},\"filePathRelative\":\"docs-AboutUs/about.md\"}")
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
