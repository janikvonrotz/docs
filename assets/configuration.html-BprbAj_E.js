import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as h,o as r,c as o,a as s,b as i,d as n,w as a,e as l}from"./app-DqQFYrea.js";const p={},d=l('<h1 id="configuration" tabindex="-1"><a class="header-anchor" href="#configuration"><span>Configuration</span></a></h1><h2 id="config-file" tabindex="-1"><a class="header-anchor" href="#config-file"><span>Config File</span></a></h2><p>The essential file for configuring a VuePress site is <code>.vuepress/config.js</code>, while TypeScript config file is also supported. You can use <code>.vuepress/config.ts</code> instead to get better types hint for VuePress config.</p><p>To be more specific, we have a convention for config file paths (in order of precedence):</p><ul><li>In current working directory <code>cwd</code>: <ul><li><code>vuepress.config.ts</code></li><li><code>vuepress.config.js</code></li><li><code>vuepress.config.mjs</code></li></ul></li><li>In source directory <code>sourceDir</code>: <ul><li><code>.vuepress/config.ts</code></li><li><code>.vuepress/config.js</code></li><li><code>.vuepress/config.mjs</code></li></ul></li></ul>',5),c=s("code",null,"--config",-1),k=l(`<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">vuepress</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> dev</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> docs</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --config</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> my-config.ts</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>A basic config file looks like this:</p><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> { </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">viteBundler</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> } </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &#39;@vuepress/bundler-vite&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> { </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">defaultTheme</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> } </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &#39;@vuepress/theme-default&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> { </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">defineUserConfig</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> } </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &#39;vuepress&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> default</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> defineUserConfig</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">  bundler</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">viteBundler</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">  theme</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">defaultTheme</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(),</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">  lang</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;en-US&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">  title</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;Hello VuePress&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">  description</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;Just playing around&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">})</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),g={class:"hint-container tip"},u=s("p",{class:"hint-container-title"},"Tips",-1),f=l(`<h2 id="client-config-file" tabindex="-1"><a class="header-anchor" href="#client-config-file"><span>Client Config File</span></a></h2><p>In most cases, the config file is sufficient to configure your VuePress site. However, sometimes users may want to add some client-side code directly. To help with this, VuePress also supports a client config file:</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>├─ docs</span></span>
<span class="line"><span>│  ├─ .vuepress</span></span>
<span class="line"><span>│  │  ├─ client.js   &lt;--- client config file</span></span>
<span class="line"><span>│  │  └─ config.js   &lt;--- config file</span></span>
<span class="line"><span>│  └─ README.md</span></span>
<span class="line"><span>├─ .gitignore</span></span>
<span class="line"><span>└─ package.json</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Similarly, we also have a convention for client config file paths (in order of precedence):</p><ul><li>In current working directory <code>cwd</code>: <ul><li><code>vuepress.client.ts</code></li><li><code>vuepress.client.js</code></li><li><code>vuepress.client.mjs</code></li></ul></li><li>In source directory <code>sourceDir</code>: <ul><li><code>.vuepress/client.ts</code></li><li><code>.vuepress/client.js</code></li><li><code>.vuepress/client.mjs</code></li></ul></li></ul><p>A basic client config file looks like this:</p><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> { </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">defineClientConfig</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> } </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &#39;vuepress/client&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> default</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> defineClientConfig</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">({</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">  enhance</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">({ </span><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">app</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">router</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">siteData</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> }) {},</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">  setup</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">() {},</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">  rootComponents</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: [],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">})</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),m={class:"hint-container tip"},v=s("p",{class:"hint-container-title"},"Tips",-1),y=s("p",null,"Unlike config file, client config file could not be specified via CLI options.",-1);function B(b,C){const e=h("RouteLink");return r(),o("div",null,[d,s("p",null,[i("You can also specify the config file via "),c,i(" option of "),n(e,{to:"/reference/cli.html"},{default:a(()=>[i("CLI")]),_:1}),i(":")]),k,s("div",g,[u,s("p",null,[i("Check out the "),n(e,{to:"/reference/config.html"},{default:a(()=>[i("Config Reference")]),_:1}),i(" for a full list of VuePress config.")])]),f,s("div",m,[v,y,s("p",null,[i("To learn more about client config file, see "),n(e,{to:"/advanced/cookbook/usage-of-client-config.html"},{default:a(()=>[i("Advanced > Cookbook > Usage of Client Config")]),_:1})])])])}const A=t(p,[["render",B],["__file","configuration.html.vue"]]),D=JSON.parse('{"path":"/guide/configuration.html","title":"Configuration","lang":"en-US","frontmatter":{"icon":"fa6-solid:gear","description":"Configuration Config File The essential file for configuring a VuePress site is .vuepress/config.js, while TypeScript config file is also supported. You can use .vuepress/config...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://vuejs.press/zh/guide/configuration.html"}],["meta",{"property":"og:url","content":"https://vuejs.press/guide/configuration.html"}],["meta",{"property":"og:site_name","content":"VuePress"}],["meta",{"property":"og:title","content":"Configuration"}],["meta",{"property":"og:description","content":"Configuration Config File The essential file for configuring a VuePress site is .vuepress/config.js, while TypeScript config file is also supported. You can use .vuepress/config..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-02-02T14:23:03.000Z"}],["meta",{"property":"article:modified_time","content":"2024-02-02T14:23:03.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Configuration\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-02-02T14:23:03.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Config File","slug":"config-file","link":"#config-file","children":[]},{"level":2,"title":"Client Config File","slug":"client-config-file","link":"#client-config-file","children":[]}],"git":{"createdTime":1701614677000,"updatedTime":1706883783000,"contributors":[{"name":"meteorlxy","email":"meteor.lxy@foxmail.com","commits":4},{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":1}]},"readingTime":{"minutes":0.92,"words":276},"filePathRelative":"guide/configuration.md","localizedDate":"December 3, 2023","autoDesc":true}');export{A as comp,D as data};
