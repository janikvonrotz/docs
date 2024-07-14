import{_ as p}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as t,o as r,c as d,a as e,d as i,w as a,b as s,e as n}from"./app-DqQFYrea.js";const o={},k=n(`<h1 id="客户端-api" tabindex="-1"><a class="header-anchor" href="#客户端-api"><span>客户端 API</span></a></h1><p>客户端 API 可以通过 <code>vuepress/client</code> 来引入。</p><h2 id="组合式-api" tabindex="-1"><a class="header-anchor" href="#组合式-api"><span>组合式 API</span></a></h2><h3 id="useclientdata" tabindex="-1"><a class="header-anchor" href="#useclientdata"><span>useClientData</span></a></h3><ul><li><p>详情：</p><p>返回所有客户端数据的 Ref 对象。</p><p>每个属性也可以通过下列的组合式 API 来访问。</p></li><li><p>示例：</p></li></ul><div class="language-vue line-numbers-mode" data-highlighter="shiki" data-ext="vue" data-title="vue" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#D19A66;"> setup</span><span style="--shiki-light:#6F42C1;--shiki-dark:#D19A66;"> lang</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;ts&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> { </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">useClientData</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> } </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &#39;vuepress/client&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">const</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;">  pageData</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;">  pageFrontmatter</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;">  pageHead</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;">  pageHeadTitle</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;">  pageLang</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;">  routeLocale</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;">  siteData</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;">  siteLocaleData</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">} </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> useClientData</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="usepagedata" tabindex="-1"><a class="header-anchor" href="#usepagedata"><span>usePageData</span></a></h3>`,7),c=e("li",null,[e("p",null,"详情："),e("p",null,"返回当前页面数据的 Ref 对象。")],-1),u=e("p",null,"参考：",-1),g=e("h3",{id:"usepagefrontmatter",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#usepagefrontmatter"},[e("span",null,"usePageFrontmatter")])],-1),v=e("ul",null,[e("li",null,[e("p",null,"详情："),e("p",null,"返回当前页面 Frontmatter 的 Ref 对象。"),e("p",null,[s("它的值是页面数据的 "),e("code",null,"frontmatter"),s(" 属性。")])])],-1),B=e("h3",{id:"usepagehead",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#usepagehead"},[e("span",null,"usePageHead")])],-1),_=e("p",null,"详情：",-1),f=e("p",null,"返回当前页面 Head 配置的 Ref 对象。",-1),m=n('<h3 id="usepageheadtitle" tabindex="-1"><a class="header-anchor" href="#usepageheadtitle"><span>usePageHeadTitle</span></a></h3><ul><li><p>详情：</p><p>返回当前页面 Head 中的标题的 Ref 对象。</p><p>它的值是连接页面标题和站点标题后得到的。</p></li></ul><h3 id="usepagelang" tabindex="-1"><a class="header-anchor" href="#usepagelang"><span>usePageLang</span></a></h3><ul><li><p>详情：</p><p>返回当前页面语言的 Ref 对象。</p><p>它的值是页面数据的 <code>lang</code> 属性。</p></li></ul><h3 id="useroutes" tabindex="-1"><a class="header-anchor" href="#useroutes"><span>useRoutes</span></a></h3>',5),y=e("li",null,[e("p",null,"详情："),e("p",null,"返回所有路由的 Ref 对象。"),e("p",null,"它的值是站点数据的路由信息。")],-1),b=e("p",null,"参考：",-1),E=e("h3",{id:"useroutelocale",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#useroutelocale"},[e("span",null,"useRouteLocale")])],-1),C=e("p",null,"详情：",-1),A=e("p",null,"返回当前路由对应的 locale path 的 Ref 对象。",-1),F=n('<h3 id="usesitedata" tabindex="-1"><a class="header-anchor" href="#usesitedata"><span>useSiteData</span></a></h3><ul><li><p>详情：</p><p>返回站点数据的 Ref 对象。</p></li></ul><h3 id="usesitelocaledata" tabindex="-1"><a class="header-anchor" href="#usesitelocaledata"><span>useSiteLocaleData</span></a></h3><ul><li><p>详情：</p><p>返回当前 locale 的站点数据的 Ref 对象。</p><p>当前 locale 中的配置已经合并到顶层配置中。</p></li></ul><h2 id="工具函数" tabindex="-1"><a class="header-anchor" href="#工具函数"><span>工具函数</span></a></h2><h3 id="defineclientconfig" tabindex="-1"><a class="header-anchor" href="#defineclientconfig"><span>defineClientConfig</span></a></h3>',6),D=e("p",null,"详情：",-1),P=e("p",null,"参考：",-1),x=e("h3",{id:"resolveroute",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#resolveroute"},[e("span",null,"resolveRoute")])],-1),R=e("li",null,[e("p",null,"详情："),e("p",null,"解析给定链接对应的路由")],-1),S=e("p",null,"参考：",-1),I=e("h2",{id:"resolveroutepath",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#resolveroutepath"},[e("span",null,"resolveRoutePath")])],-1),z=e("li",null,[e("p",null,"详情："),e("p",null,"解析给定链接对应的路由路径")],-1),V=e("p",null,"参考：",-1),L=e("h3",{id:"withbase",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#withbase"},[e("span",null,"withBase")])],-1),H=e("p",null,"详情：",-1),T=e("p",null,"参考：",-1),N=n(`<h2 id="常量" tabindex="-1"><a class="header-anchor" href="#常量"><span>常量</span></a></h2><p>在客户端代码中有一些常量可以使用。</p><p>如果想要把这些常量的类型定义补充到你的代码环境中，请将 <code>vuepress/client-types</code> 添加到你的 <code>tsconfig.json</code> 里：</p><div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" data-title="json" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#E06C75;">  &quot;compilerOptions&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#E06C75;">    &quot;types&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: [</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;vuepress/client-types&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="vuepress-version" tabindex="-1"><a class="header-anchor" href="#vuepress-version"><span><code>__VUEPRESS_VERSION__</code></span></a></h3><ul><li><p>类型： <code>string</code></p></li><li><p>详情：</p><p>VuePress Core 的版本号。</p></li></ul><h3 id="vuepress-base" tabindex="-1"><a class="header-anchor" href="#vuepress-base"><span><code>__VUEPRESS_BASE__</code></span></a></h3>`,7),U=e("li",null,[e("p",null,[s("类型： "),e("code",null,"string")])],-1),w=e("p",null,"详情：",-1),q=n('<h3 id="vuepress-dev" tabindex="-1"><a class="header-anchor" href="#vuepress-dev"><span><code>__VUEPRESS_DEV__</code></span></a></h3><ul><li><p>类型： <code>boolean</code></p></li><li><p>详情：</p><p>一个环境标记，用于标识当前是否运行在 <code>dev</code> 模式下。</p></li></ul><h3 id="vuepress-ssr" tabindex="-1"><a class="header-anchor" href="#vuepress-ssr"><span><code>__VUEPRESS_SSR__</code></span></a></h3><ul><li><p>类型： <code>boolean</code></p></li><li><p>详情：</p><p>一个环境标记，用于标识当前是否运行在服务端渲染 (SSR) 环境下。</p></li></ul><h2 id="进阶能力" tabindex="-1"><a class="header-anchor" href="#进阶能力"><span>进阶能力</span></a></h2>',5),j={id:"resolvers",tabindex:"-1"},O={class:"header-anchor",href:"#resolvers"},M=n(`<ul><li><p>类型： <code>Record&lt;string, Function&gt;</code></p></li><li><p>详情：</p><p>一个响应式对象，其中的方法决定了如何获取全局计算属性。</p></li><li><p>示例：</p></li></ul><p>在客户端配置文件中自定义 <code>&lt;title&gt;</code> 的格式：</p><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> { </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">defineClientConfig</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">resolvers</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> } </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &#39;vuepress/client&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> default</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> defineClientConfig</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">({</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">  enhance</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">({ </span><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">app</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">router</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">siteData</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> }) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">    resolvers</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">resolvePageHeadTitle</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">page</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">siteLocale</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">=&gt;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">      \`</span><span style="--shiki-light:#032F62;--shiki-dark:#C678DD;">\${</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">siteLocale</span><span style="--shiki-light:#032F62;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">title</span><span style="--shiki-light:#032F62;--shiki-dark:#C678DD;">}</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &gt; </span><span style="--shiki-light:#032F62;--shiki-dark:#C678DD;">\${</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">page</span><span style="--shiki-light:#032F62;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">title</span><span style="--shiki-light:#032F62;--shiki-dark:#C678DD;">}</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">\`</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">})</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container caution"><p class="hint-container-title">警告</p><p><code>resolvers</code> 会直接影响 VuePress 的基础功能，在修改前请确保你已充分了解其用途。</p></div>`,4);function Z($,J){const l=t("RouteLink"),h=t("Badge");return r(),d("div",null,[k,e("ul",null,[c,e("li",null,[u,e("ul",null,[e("li",null,[i(l,{to:"/zh/reference/node-api.html#data"},{default:a(()=>[s("Node API > Page 属性 > data")]),_:1})]),e("li",null,[i(l,{to:"/zh/reference/plugin-api.html#extendspage"},{default:a(()=>[s("插件 API > extendsPage")]),_:1})])])])]),g,v,B,e("ul",null,[e("li",null,[_,f,e("p",null,[s("它的值是合并 "),i(l,{to:"/zh/reference/frontmatter.html#head"},{default:a(()=>[s("head")]),_:1}),s(" Frontmatter 和 "),i(l,{to:"/zh/reference/config.html#head"},{default:a(()=>[s("head")]),_:1}),s(" 配置，并进行去重后得到的。")])])]),m,e("ul",null,[y,e("li",null,[b,e("ul",null,[e("li",null,[i(l,{to:"/zh/advanced/cookbook/resolving-routes.html"},{default:a(()=>[s("深入 > Cookbook > 解析路由")]),_:1})])])])]),E,e("ul",null,[e("li",null,[C,A,e("p",null,[s("它的值是 "),i(l,{to:"/zh/reference/config.html#locales"},{default:a(()=>[s("locales")]),_:1}),s(" 配置的键之一。")])])]),F,e("ul",null,[e("li",null,[D,e("p",null,[s("帮助你创建 "),i(l,{to:"/zh/reference/plugin-api.html#clientconfigfile"},{default:a(()=>[s("clientConfigFile")]),_:1}),s(" 的工具函数。")])]),e("li",null,[P,e("ul",null,[e("li",null,[i(l,{to:"/zh/advanced/cookbook/usage-of-client-config.html"},{default:a(()=>[s("深入 > Cookbook > 客户端配置的使用方法")]),_:1})])])])]),x,e("ul",null,[R,e("li",null,[S,e("ul",null,[e("li",null,[i(l,{to:"/zh/advanced/cookbook/resolving-routes.html"},{default:a(()=>[s("深入 > Cookbook > 解析路由")]),_:1})])])])]),I,e("ul",null,[z,e("li",null,[V,e("ul",null,[e("li",null,[i(l,{to:"/zh/advanced/cookbook/resolving-routes.html"},{default:a(()=>[s("深入 > Cookbook > 解析路由")]),_:1})])])])]),L,e("ul",null,[e("li",null,[H,e("p",null,[s("在 URL 前添加站点 "),i(l,{to:"/zh/reference/config.html#base"},{default:a(()=>[s("base")]),_:1}),s(" 前缀。")])]),e("li",null,[T,e("ul",null,[e("li",null,[i(l,{to:"/zh/guide/assets.html#base-helper"},{default:a(()=>[s("指南 > 静态资源 > Base Helper")]),_:1})])])])]),N,e("ul",null,[U,e("li",null,[w,e("p",null,[s("配置中的 "),i(l,{to:"/zh/reference/config.html#base"},{default:a(()=>[s("base")]),_:1}),s(" 字段。")])])]),q,e("h3",j,[e("a",O,[e("span",null,[s("resolvers "),i(h,{text:"实验性能力"})])])]),M])}const Q=p(o,[["render",Z],["__file","client-api.html.vue"]]),W=JSON.parse('{"path":"/zh/reference/client-api.html","title":"客户端 API","lang":"zh-CN","frontmatter":{"icon":"fa6-brands:chrome","description":"客户端 API 客户端 API 可以通过 vuepress/client 来引入。 组合式 API useClientData 详情： 返回所有客户端数据的 Ref 对象。 每个属性也可以通过下列的组合式 API 来访问。 示例： usePageData 详情： 返回当前页面数据的 Ref 对象。 参考： usePageFrontmatter 详情： ...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://vuejs.press/reference/client-api.html"}],["meta",{"property":"og:url","content":"https://vuejs.press/zh/reference/client-api.html"}],["meta",{"property":"og:site_name","content":"VuePress"}],["meta",{"property":"og:title","content":"客户端 API"}],["meta",{"property":"og:description","content":"客户端 API 客户端 API 可以通过 vuepress/client 来引入。 组合式 API useClientData 详情： 返回所有客户端数据的 Ref 对象。 每个属性也可以通过下列的组合式 API 来访问。 示例： usePageData 详情： 返回当前页面数据的 Ref 对象。 参考： usePageFrontmatter 详情： ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-05-27T07:59:04.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-27T07:59:04.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"客户端 API\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-27T07:59:04.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"组合式 API","slug":"组合式-api","link":"#组合式-api","children":[{"level":3,"title":"useClientData","slug":"useclientdata","link":"#useclientdata","children":[]},{"level":3,"title":"usePageData","slug":"usepagedata","link":"#usepagedata","children":[]},{"level":3,"title":"usePageFrontmatter","slug":"usepagefrontmatter","link":"#usepagefrontmatter","children":[]},{"level":3,"title":"usePageHead","slug":"usepagehead","link":"#usepagehead","children":[]},{"level":3,"title":"usePageHeadTitle","slug":"usepageheadtitle","link":"#usepageheadtitle","children":[]},{"level":3,"title":"usePageLang","slug":"usepagelang","link":"#usepagelang","children":[]},{"level":3,"title":"useRoutes","slug":"useroutes","link":"#useroutes","children":[]},{"level":3,"title":"useRouteLocale","slug":"useroutelocale","link":"#useroutelocale","children":[]},{"level":3,"title":"useSiteData","slug":"usesitedata","link":"#usesitedata","children":[]},{"level":3,"title":"useSiteLocaleData","slug":"usesitelocaledata","link":"#usesitelocaledata","children":[]}]},{"level":2,"title":"工具函数","slug":"工具函数","link":"#工具函数","children":[{"level":3,"title":"defineClientConfig","slug":"defineclientconfig","link":"#defineclientconfig","children":[]},{"level":3,"title":"resolveRoute","slug":"resolveroute","link":"#resolveroute","children":[]}]},{"level":2,"title":"resolveRoutePath","slug":"resolveroutepath","link":"#resolveroutepath","children":[{"level":3,"title":"withBase","slug":"withbase","link":"#withbase","children":[]}]},{"level":2,"title":"常量","slug":"常量","link":"#常量","children":[{"level":3,"title":"__VUEPRESS_VERSION__","slug":"vuepress-version","link":"#vuepress-version","children":[]},{"level":3,"title":"__VUEPRESS_BASE__","slug":"vuepress-base","link":"#vuepress-base","children":[]},{"level":3,"title":"__VUEPRESS_DEV__","slug":"vuepress-dev","link":"#vuepress-dev","children":[]},{"level":3,"title":"__VUEPRESS_SSR__","slug":"vuepress-ssr","link":"#vuepress-ssr","children":[]}]},{"level":2,"title":"进阶能力","slug":"进阶能力","link":"#进阶能力","children":[{"level":3,"title":"resolvers","slug":"resolvers","link":"#resolvers","children":[]}]}],"git":{"createdTime":1701614677000,"updatedTime":1716796744000,"contributors":[{"name":"meteorlxy","email":"meteor.lxy@foxmail.com","commits":5},{"name":"Mister-Hope","email":"mister-hope@outlook.com","commits":2},{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":2}]},"readingTime":{"minutes":2.45,"words":734},"filePathRelative":"zh/reference/client-api.md","localizedDate":"2023年12月3日","autoDesc":true}');export{Q as comp,W as data};
