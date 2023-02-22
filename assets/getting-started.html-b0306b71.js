import{_ as p,W as h,X as v,$ as e,a0 as s,Y as n,Z as a,a1 as d,D as c}from"./framework-46b0e263.js";const b={},g=e("h1",{id:"快速上手",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#快速上手","aria-hidden":"true"},"#"),s(" 快速上手")],-1),m={class:"hint-container warning"},_=e("p",{class:"hint-container-title"},"注意",-1),k=e("code",null,"beta",-1),f={href:"https://github.com/vuepress/vuepress-next/blob/main/CHANGELOG.md",target:"_blank",rel:"noopener noreferrer"},x=e("h2",{id:"依赖环境",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#依赖环境","aria-hidden":"true"},"#"),s(" 依赖环境")],-1),P={href:"https://nodejs.org/",target:"_blank",rel:"noopener noreferrer"},A={href:"https://classic.yarnpkg.com/zh-Hans/",target:"_blank",rel:"noopener noreferrer"},N={class:"hint-container tip"},y=e("p",{class:"hint-container-title"},"提示",-1),V={href:"https://pnpm.io/zh/",target:"_blank",rel:"noopener noreferrer"},q=e("code",null,"vue",-1),M=e("code",null,"@vuepress/client",-1),j=e("code",null,"pnpm add -D vue @vuepress/client@next",-1),L={href:"https://yarnpkg.com/",target:"_blank",rel:"noopener noreferrer"},C={href:"https://yarnpkg.com/configuration/yarnrc#nodeLinker",target:"_blank",rel:"noopener noreferrer"},D=e("code",null,".yarnrc.yml",-1),E=e("code",null,"nodeLinker: 'node-modules'",-1),R=d(`<h2 id="手动安装" tabindex="-1"><a class="header-anchor" href="#手动安装" aria-hidden="true">#</a> 手动安装</h2><p>这一章节会帮助你从头搭建一个简单的 VuePress 文档网站。如果你想在一个现有项目中使用 VuePress 管理文档，从步骤 3 开始。</p><ul><li><strong>步骤 1</strong>: 创建并进入一个新目录</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">mkdir</span> vuepress-starter
<span class="token builtin class-name">cd</span> vuepress-starter
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>步骤 2</strong>: 初始化项目</li></ul>`,5),Y=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"git"),s(` init
`),e("span",{class:"token function"},"pnpm"),s(` init
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),z=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"git"),s(` init
`),e("span",{class:"token function"},"yarn"),s(` init
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),B=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"git"),s(` init
`),e("span",{class:"token function"},"npm"),s(` init
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),H=e("ul",null,[e("li",null,[e("strong",null,"步骤 3"),s(": 将 VuePress 安装为本地依赖")])],-1),w=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"pnpm"),s(),e("span",{class:"token function"},"add"),s(),e("span",{class:"token parameter variable"},"-D"),s(` vuepress@next @vuepress/client@next vue
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),I=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"yarn"),s(),e("span",{class:"token function"},"add"),s(),e("span",{class:"token parameter variable"},"-D"),s(` vuepress@next
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),T=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"npm"),s(),e("span",{class:"token function"},"install"),s(),e("span",{class:"token parameter variable"},"-D"),s(` vuepress@next
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),G=e("strong",null,"步骤 4",-1),S=e("code",null,"package.json",-1),O={href:"https://classic.yarnpkg.com/zh-Hans/docs/package-json#toc-scripts",target:"_blank",rel:"noopener noreferrer"},W=d(`<div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;docs:dev&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vuepress dev docs&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;docs:build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vuepress build docs&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>步骤 5</strong>: 将默认的临时目录和缓存目录添加到 <code>.gitignore</code> 文件中</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">&#39;node_modules&#39;</span> <span class="token operator">&gt;&gt;</span> .gitignore
<span class="token builtin class-name">echo</span> <span class="token string">&#39;.temp&#39;</span> <span class="token operator">&gt;&gt;</span> .gitignore
<span class="token builtin class-name">echo</span> <span class="token string">&#39;.cache&#39;</span> <span class="token operator">&gt;&gt;</span> .gitignore
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>步骤 6</strong>: 创建你的第一篇文档</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">mkdir</span> docs
<span class="token builtin class-name">echo</span> <span class="token string">&#39;# Hello VuePress&#39;</span> <span class="token operator">&gt;</span> docs/README.md
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>步骤 7</strong>: 在本地启动服务器来开发你的文档网站</li></ul>`,6),X=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"pnpm"),s(` docs:dev
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),Z=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"yarn"),s(` docs:dev
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),$=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"npm"),s(` run docs:dev
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),F={href:"http://localhost:8080",target:"_blank",rel:"noopener noreferrer"};function J(K,Q){const t=c("ExternalLinkIcon"),r=c("CodeTabs"),u=c("RouterLink");return h(),v("div",null,[g,e("div",m,[_,e("p",null,[s("VuePress v2 目前仍处于 "),k,s(" 阶段。你已经可以用它来构建你的站点，但是它的配置和 API 还不够稳定，很可能会在 Minor 版本中发生 Breaking Changes 。因此，在每次更新 beta 版本之后，请一定要仔细阅读 "),e("a",f,[s("更新日志"),n(t)]),s("。")])]),x,e("ul",null,[e("li",null,[e("a",P,[s("Node.js v14.18.0+"),n(t)])]),e("li",null,[e("a",A,[s("Yarn v1 classic"),n(t)]),s(" （可选）")])]),e("div",N,[y,e("ul",null,[e("li",null,[s("使用 "),e("a",V,[s("pnpm"),n(t)]),s(" 时，你可能需要安装 "),q,s(" 和 "),M,s(" 作为 peer-dependencies ，即 "),j,s(" 。")]),e("li",null,[s("使用 "),e("a",L,[s("yarn 2"),n(t)]),s(" 时，你需要在 "),e("a",C,[D,n(t)]),s(" 文件中设置 "),E,s(" 。")])])]),R,n(r,{id:"58",data:[{title:"PNPM"},{title:"YARN"},{title:"NPM"}],active:0,"tab-id":"shell"},{tab0:a(({title:l,value:i,isActive:o})=>[Y]),tab1:a(({title:l,value:i,isActive:o})=>[z]),tab2:a(({title:l,value:i,isActive:o})=>[B]),_:1}),H,n(r,{id:"76",data:[{title:"PNPM"},{title:"YARN"},{title:"NPM"}],active:0,"tab-id":"shell"},{tab0:a(({title:l,value:i,isActive:o})=>[w]),tab1:a(({title:l,value:i,isActive:o})=>[I]),tab2:a(({title:l,value:i,isActive:o})=>[T]),_:1}),e("ul",null,[e("li",null,[G,s(": 在 "),S,s(" 中添加一些 "),e("a",O,[s("scripts"),n(t)])])]),W,n(r,{id:"118",data:[{title:"PNPM"},{title:"YARN"},{title:"NPM"}],active:0,"tab-id":"shell"},{tab0:a(({title:l,value:i,isActive:o})=>[X]),tab1:a(({title:l,value:i,isActive:o})=>[Z]),tab2:a(({title:l,value:i,isActive:o})=>[$]),_:1}),e("p",null,[s("VuePress 会在 "),e("a",F,[s("http://localhost:8080"),n(t)]),s(" 启动一个热重载的开发服务器。当你修改你的 Markdown 文件时，浏览器中的内容也会自动更新。")]),e("p",null,[s("现在，你应该已经有了一个简单可用的 VuePress 文档网站。接下来，了解一下 VuePress "),n(u,{to:"/zh/guide/configuration.html"},{default:a(()=>[s("配置")]),_:1}),s(" 相关的内容。")])])}const ee=p(b,[["render",J],["__file","getting-started.html.vue"]]);export{ee as default};
