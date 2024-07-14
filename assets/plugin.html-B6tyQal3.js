import{_ as l}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as h,o as p,c as k,a as i,b as s,d as n,w as e,e as t}from"./app-DqQFYrea.js";const r={},d=i("h1",{id:"开发插件",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#开发插件"},[i("span",null,"开发插件")])],-1),o={class:"hint-container tip"},c=i("p",{class:"hint-container-title"},"提示",-1),g=i("h2",{id:"创建一个插件",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#创建一个插件"},[i("span",null,"创建一个插件")])],-1),u=i("em",null,"插件对象",-1),m=t(`<div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> fooPlugin</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">  name</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;vuepress-plugin-foo&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">  // ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),B=i("em",null,"插件对象",-1),y=i("em",null,"插件函数",-1),v=t(`<div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">const</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> barPlugin</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">app</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">  return</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">    name</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;vuepress-plugin-bar&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">    // ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>插件通常需要允许用户传入配置，因此我们一般都会提供给用户一个函数来接收配置，然后将 <em>插件对象</em> 或者 <em>插件函数</em> 作为返回值。于是，你的插件应该转换成这样的形式：</p><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">const</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> fooPlugin</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">options</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">  return</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">    name</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;vuepress-plugin-foo&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">    // ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">const</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> barPlugin</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">options</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">  return</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">app</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">      name</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;vuepress-plugin-bar&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">      // ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="发布到-npm" tabindex="-1"><a class="header-anchor" href="#发布到-npm"><span>发布到 NPM</span></a></h2><p>在创建了插件之后，你需要在 <a href="https://docs.npmjs.com/cli/v8/configuring-npm/package-json" target="_blank" rel="noopener noreferrer">package.json</a> 文件中遵循一定的约定，然后再将其发布到 NPM 上：</p><div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" data-title="json" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#E06C75;">  &quot;name&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;vuepress-plugin-foo&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#E06C75;">  &quot;keywords&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: [</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;vuepress-plugin&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),b=i("code",null,"name",-1),f=i("code",null,"vuepress-plugin-xxx",-1),E=i("code",null,"@org/vuepress-plugin-xxx",-1),A=i("em",null,"插件对象",-1),F=i("li",null,[s("在 "),i("code",null,"keywords"),s(" 中包含 "),i("code",null,"vuepress-plugin"),s(" ，这样用户可以在 NPM 上搜索到你的插件。")],-1);function _(C,D){const a=h("RouteLink");return p(),k("div",null,[d,i("div",o,[c,i("p",null,[s("在阅读该指南之前，你最好先了解一下 VuePress 的 "),n(a,{to:"/zh/advanced/architecture.html"},{default:e(()=>[s("架构")]),_:1}),s(" 。")])]),g,i("p",null,[s("插件是一个符合 "),n(a,{to:"/zh/reference/plugin-api.html"},{default:e(()=>[s("插件 API")]),_:1}),s(" 的普通 JavaScript 对象，称之为 "),u,s(" ：")]),m,i("p",null,[s("插件还可以是一个接收 "),n(a,{to:"/zh/reference/node-api.html#app"},{default:e(()=>[s("App 实例")]),_:1}),s(" 作为参数，且返回值为 "),B,s(" 的函数，称之为 "),y,s(" ：")]),v,i("ul",null,[i("li",null,[s("将 "),b,s(" 按照约定命名，即 "),f,s(" 或 "),E,s(" ，它应该和 "),A,s(" 的 "),n(a,{to:"/zh/reference/plugin-api.html#name"},{default:e(()=>[s("name")]),_:1}),s(" 字段保持一致。")]),F])])}const N=l(r,[["render",_],["__file","plugin.html.vue"]]),z=JSON.parse('{"path":"/zh/advanced/plugin.html","title":"开发插件","lang":"zh-CN","frontmatter":{"icon":"fa6-solid:plug","description":"开发插件 提示 在阅读该指南之前，你最好先了解一下 VuePress 的 。 创建一个插件 插件是一个符合 的普通 JavaScript 对象，称之为 插件对象 ： 插件还可以是一个接收 作为参数，且返回值为 插件对象 的函数，称之为 插件函数 ： 插件通常需要允许用户传入配置，因此我们一般都会提供给用户一个函数来接收配置，然后将 插件对象 或者 插件...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://vuejs.press/advanced/plugin.html"}],["meta",{"property":"og:url","content":"https://vuejs.press/zh/advanced/plugin.html"}],["meta",{"property":"og:site_name","content":"VuePress"}],["meta",{"property":"og:title","content":"开发插件"}],["meta",{"property":"og:description","content":"开发插件 提示 在阅读该指南之前，你最好先了解一下 VuePress 的 。 创建一个插件 插件是一个符合 的普通 JavaScript 对象，称之为 插件对象 ： 插件还可以是一个接收 作为参数，且返回值为 插件对象 的函数，称之为 插件函数 ： 插件通常需要允许用户传入配置，因此我们一般都会提供给用户一个函数来接收配置，然后将 插件对象 或者 插件..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-02-02T14:23:03.000Z"}],["meta",{"property":"article:modified_time","content":"2024-02-02T14:23:03.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"开发插件\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-02-02T14:23:03.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"创建一个插件","slug":"创建一个插件","link":"#创建一个插件","children":[]},{"level":2,"title":"发布到 NPM","slug":"发布到-npm","link":"#发布到-npm","children":[]}],"git":{"createdTime":1701614677000,"updatedTime":1706883783000,"contributors":[{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":2},{"name":"meteorlxy","email":"meteor.lxy@foxmail.com","commits":1}]},"readingTime":{"minutes":1.11,"words":332},"filePathRelative":"zh/advanced/plugin.md","localizedDate":"2023年12月3日","autoDesc":true}');export{N as comp,z as data};
