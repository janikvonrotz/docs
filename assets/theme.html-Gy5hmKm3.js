import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as l,o as h,c as r,a as s,b as e,d as a,w as t,e as p}from"./app-DqQFYrea.js";const d={},k=s("h1",{id:"主题",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#主题"},[s("span",null,"主题")])],-1),o=s("p",null,"VuePress 主题为你提供了布局、样式和其他功能，帮助你专注于 Markdown 内容的写作。",-1),c=s("h2",{id:"默认主题",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#默认主题"},[s("span",null,"默认主题")])],-1),m=s("p",null,"VuePress 提供了一个默认主题，你当前正在浏览的文档网站就是使用的这个默认主题。",-1),g=p(`<div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> { </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">defaultTheme</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> } </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &#39;@vuepress/theme-default&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> { </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">defineUserConfig</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> } </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &#39;vuepress&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> default</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> defineUserConfig</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">  theme</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">defaultTheme</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">({</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">    // 默认主题配置</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">    navbar</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">      {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">        text</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;首页&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">        link</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;/&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">      },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    ],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">  }),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">})</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>默认主题为文档网站提供了基础且实用的功能，你可以前往 <a href="https://ecosystem.vuejs.press/zh/themes/default/config.html" target="_blank" rel="noopener noreferrer">默认主题配置参考</a> 获取全部的配置列表。</p><p>然而，你可能觉得默认主题不够出色，又或者你不想搭建一个文档网站，而是一个其他类型的网站，比如博客。此时，你可以尝试使用社区主题或者创建本地主题。</p><h2 id="社区主题" tabindex="-1"><a class="header-anchor" href="#社区主题"><span>社区主题</span></a></h2><p>社区用户创建了很多主题，并将它们发布到了 <a href="https://www.npmjs.com/search?q=keywords:vuepress-theme" target="_blank" rel="noopener noreferrer">NPM</a> 上。查看主题本身的文档可以获取更详细的指引。</p><p>你可以在 <a href="https://marketplace.vuejs.press/" target="_blank" rel="noopener noreferrer">VuePress 市场</a> 中探索更多主题。</p><h2 id="本地主题" tabindex="-1"><a class="header-anchor" href="#本地主题"><span>本地主题</span></a></h2>`,7);function u(y,B){const i=l("RouteLink");return h(),r("div",null,[k,o,c,m,s("p",null,[e("你需要在你的配置文件中通过 "),a(i,{to:"/zh/reference/config.html#theme"},{default:t(()=>[e("theme")]),_:1}),e(" 配置项来使用它：")]),g,s("p",null,[e("如果你想要使用自己的自定义主题，但是又不想发布它，你可以创建一个本地主题。前往 "),a(i,{to:"/zh/advanced/theme.html"},{default:t(()=>[e("深入 > 开发主题")]),_:1}),e(" 学习如何开发你自己的主题。")])])}const b=n(d,[["render",u],["__file","theme.html.vue"]]),E=JSON.parse('{"path":"/zh/guide/theme.html","title":"主题","lang":"zh-CN","frontmatter":{"icon":"fa6-solid:palette","description":"主题 VuePress 主题为你提供了布局、样式和其他功能，帮助你专注于 Markdown 内容的写作。 默认主题 VuePress 提供了一个默认主题，你当前正在浏览的文档网站就是使用的这个默认主题。 你需要在你的配置文件中通过 配置项来使用它： 默认主题为文档网站提供了基础且实用的功能，你可以前往 默认主题配置参考 获取全部的配置列表。 然而，你可...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://vuejs.press/guide/theme.html"}],["meta",{"property":"og:url","content":"https://vuejs.press/zh/guide/theme.html"}],["meta",{"property":"og:site_name","content":"VuePress"}],["meta",{"property":"og:title","content":"主题"}],["meta",{"property":"og:description","content":"主题 VuePress 主题为你提供了布局、样式和其他功能，帮助你专注于 Markdown 内容的写作。 默认主题 VuePress 提供了一个默认主题，你当前正在浏览的文档网站就是使用的这个默认主题。 你需要在你的配置文件中通过 配置项来使用它： 默认主题为文档网站提供了基础且实用的功能，你可以前往 默认主题配置参考 获取全部的配置列表。 然而，你可..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-02-02T14:23:03.000Z"}],["meta",{"property":"article:modified_time","content":"2024-02-02T14:23:03.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"主题\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-02-02T14:23:03.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"默认主题","slug":"默认主题","link":"#默认主题","children":[]},{"level":2,"title":"社区主题","slug":"社区主题","link":"#社区主题","children":[]},{"level":2,"title":"本地主题","slug":"本地主题","link":"#本地主题","children":[]}],"git":{"createdTime":1701614677000,"updatedTime":1706883783000,"contributors":[{"name":"meteorlxy","email":"meteor.lxy@foxmail.com","commits":3},{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":2}]},"readingTime":{"minutes":1.19,"words":357},"filePathRelative":"zh/guide/theme.md","localizedDate":"2023年12月3日","autoDesc":true}');export{b as comp,E as data};
