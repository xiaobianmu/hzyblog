import "D:/桌面/blog/hzy/vuepress-starter/node_modules/@vuepress/highlighter-helper/lib/client/styles/base.css"
import "D:/桌面/blog/hzy/vuepress-starter/node_modules/@vuepress/plugin-prismjs/lib/client/styles/nord.css"
import "D:/桌面/blog/hzy/vuepress-starter/node_modules/@vuepress/highlighter-helper/lib/client/styles/line-numbers.css"
import "D:/桌面/blog/hzy/vuepress-starter/node_modules/@vuepress/highlighter-helper/lib/client/styles/notation-highlight.css"
import "D:/桌面/blog/hzy/vuepress-starter/node_modules/@vuepress/highlighter-helper/lib/client/styles/collapsed-lines.css"
import { setupCollapsedLines } from "D:/桌面/blog/hzy/vuepress-starter/node_modules/@vuepress/highlighter-helper/lib/client/index.js"
import "D:/桌面/blog/hzy/vuepress-starter/node_modules/@vuepress/highlighter-helper/lib/client/styles/code-block-title.css"

export default {
  setup() {
    setupCollapsedLines()
  }
}
