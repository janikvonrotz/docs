import{_ as r}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as l,o as c,c as d,d as t,a as e,b as n,w as s,e as o}from"./app-O97jTrPz.js";const u={},m=e("h1",{id:"frontmatter",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#frontmatter"},[e("span",null,"Frontmatter")])],-1),h=e("h2",{id:"date",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#date"},[e("span",null,"date")])],-1),k=e("li",null,[e("p",null,[n("Type: "),e("code",null,"string")])],-1),g=e("p",null,"Details:",-1),f=e("p",null,"Created date for the page.",-1),y=e("code",null,"yyyy-MM-dd",-1),v={href:"https://yaml.org/type/timestamp.html",target:"_blank",rel:"noopener noreferrer"},_=e("p",null,"Also see:",-1),b=e("h2",{id:"description",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#description"},[e("span",null,"description")])],-1),x=e("li",null,[e("p",null,[n("Type: "),e("code",null,"string")])],-1),w=e("li",null,[e("p",null,"Details:"),e("p",null,"Description for the page."),e("p",null,[n("This will override the "),e("code",null,"description"),n(" option in your site config.")])],-1),T=e("p",null,"Also see:",-1),P=o(`<h2 id="head" tabindex="-1"><a class="header-anchor" href="#head"><span>head</span></a></h2><ul><li><p>Type: <code>HeadConfig[]</code></p></li><li><p>Details:</p><p>Extra tags in <code>&lt;head&gt;</code> tag for the page.</p></li><li><p>Example:</p><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml"><span class="token key atrule">head</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token punctuation">-</span> meta
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> foo
      <span class="token key atrule">content</span><span class="token punctuation">:</span> yaml array syntax
  <span class="token punctuation">-</span> <span class="token punctuation">[</span>meta<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> bar<span class="token punctuation">,</span> <span class="token key atrule">content</span><span class="token punctuation">:</span> square brackets syntax <span class="token punctuation">}</span><span class="token punctuation">]</span></span>
<span class="token punctuation">---</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><p>Rendered as:</p><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>foo<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>yaml array syntax<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>bar<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>square brackets syntax<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),C=e("h2",{id:"lang",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#lang"},[e("span",null,"lang")])],-1),M=e("li",null,[e("p",null,[n("Type: "),e("code",null,"string")])],-1),A=e("li",null,[e("p",null,"Details:"),e("p",null,"Language for the page."),e("p",null,[n("This will override the "),e("code",null,"lang"),n(" option in your site config.")])],-1),D=e("p",null,"Also see:",-1),q=o(`<h2 id="layout" tabindex="-1"><a class="header-anchor" href="#layout"><span>layout</span></a></h2><ul><li><p>Type: <code>string</code></p></li><li><p>Details:</p><p>Layout for the page.</p><p>Layouts are provided by theme. If you don&#39;t specify this frontmatter, the default layout will be used. You should refer to the theme&#39;s own documentation to find what layouts it provides.</p><p>If the theme layouts cannot meet your needs, you can use a custom layout component.</p></li><li><p>Example:</p></li></ul><p>Register a layout component in <code>.vuepress/client.ts</code> file:</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineClientConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuepress/client&#39;</span>
<span class="token keyword">import</span> CustomLayout <span class="token keyword">from</span> <span class="token string">&#39;./CustomLayout.vue&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineClientConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  layouts<span class="token operator">:</span> <span class="token punctuation">{</span>
    CustomLayout<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Set custom layout in frontmatter:</p><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml"><span class="token key atrule">layout</span><span class="token punctuation">:</span> CustomLayout</span>
<span class="token punctuation">---</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="permalink" tabindex="-1"><a class="header-anchor" href="#permalink"><span>permalink</span></a></h2>`,7),N=e("li",null,[e("p",null,[n("Type: "),e("code",null,"string")])],-1),L=e("li",null,[e("p",null,"Details:"),e("p",null,"Permalink for the page."),e("p",null,"This will override the default route path that determined by the file path of the page.")],-1),I=e("p",null,"Also see:",-1),F=e("li",null,[e("a",{href:"#permalinkpattern"},"Frontmatter > permalinkPattern")],-1),E=o(`<h2 id="permalinkpattern" tabindex="-1"><a class="header-anchor" href="#permalinkpattern"><span>permalinkPattern</span></a></h2><ul><li><p>Type: <code>string | null</code></p></li><li><p>Details:</p><p>Pattern to generate permalink for the page.</p><p>This will override the <code>permalinkPattern</code> option in your site config.</p><p>This won&#39;t take effect if the <code>permalink</code> frontmatter has been set.</p></li><li><p>Usage:</p><table><thead><tr><th>Pattern</th><th>Description</th></tr></thead><tbody><tr><td><code>:year</code></td><td>Year part of created date</td></tr><tr><td><code>:month</code></td><td>Month part of created date</td></tr><tr><td><code>:day</code></td><td>Day part of created date</td></tr><tr><td><code>:slug</code></td><td>Slug of page filename</td></tr><tr><td><code>:raw</code></td><td>Raw route path</td></tr></tbody></table><p>The <code>:year</code>, <code>:month</code> and <code>:day</code> patterns are resolved according to the following priority:</p><ul><li>The <code>date</code> frontmatter.</li><li>The filename that matches the date pattern <code>yyyy-MM-dd-foobar.md</code> or <code>yyyy-MM-foobar.md</code>.</li><li>The dirname that matches the date pattern <code>yyyy/MM/dd/foobar.md</code> or <code>yyyy/MM/foobar.md</code>.</li><li>Fallback to <code>0000-00-00</code>.</li></ul></li><li><p>Example 1:</p><p>The page filename is <code>foo-bar.md</code>.</p><p>The page frontmatter is:</p><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml"><span class="token key atrule">date</span><span class="token punctuation">:</span> <span class="token datetime number">2021-01-03</span>
<span class="token key atrule">permalinkPattern</span><span class="token punctuation">:</span> <span class="token punctuation">:</span>year/<span class="token punctuation">:</span>month/<span class="token punctuation">:</span>day/<span class="token punctuation">:</span>slug.html</span>
<span class="token punctuation">---</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><p>Then the permalink of the page would be <code>2021/01/03/foo-bar.html</code>.</p><ul><li><p>Example 2:</p><p>The page filename is <code>2021-01-03-bar-baz.md</code>.</p><p>The page frontmatter is:</p><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml"><span class="token key atrule">permalinkPattern</span><span class="token punctuation">:</span> <span class="token punctuation">:</span>year/<span class="token punctuation">:</span>month/<span class="token punctuation">:</span>day/<span class="token punctuation">:</span>slug.html</span>
<span class="token punctuation">---</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><p>Then the permalink of the page would be <code>2021/01/03/bar-baz.html</code>.</p>`,5),R=e("li",null,[e("a",{href:"#date"},"Frontmatter > date")],-1),z=e("li",null,[e("a",{href:"#permalink"},"Frontmatter > permalink")],-1),S=e("h2",{id:"routemeta",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#routemeta"},[e("span",null,"routeMeta")])],-1),B=e("li",null,[e("p",null,[n("Type: "),e("code",null,"Record<string, unknown>")])],-1),V=e("li",null,[e("p",null,"Details:"),e("p",null,"Custom data to be attached to the page route.")],-1),Y=e("p",null,"Also see:",-1),j=e("h2",{id:"title",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#title"},[e("span",null,"title")])],-1),U=e("li",null,[e("p",null,[n("Type: "),e("code",null,"string")])],-1),Z=e("li",null,[e("p",null,"Details:"),e("p",null,"Title for the page."),e("p",null,[n("If you don't specify "),e("code",null,"title"),n(" in frontmatter, content of the first level-one header (i.e. "),e("code",null,"# title"),n(") will be used as the title.")])],-1),H=e("p",null,"Also see:",-1);function G(J,O){const i=l("NpmBadge"),p=l("ExternalLinkIcon"),a=l("RouteLink");return c(),d("div",null,[m,t(i,{package:"@vuepress/client"}),t(i,{package:"@vuepress/markdown"}),h,e("ul",null,[k,e("li",null,[g,f,e("p",null,[n("You should specify the date in the form of "),y,n(", or follow the "),e("a",v,[n("YAML Timestamp Type"),t(p)]),n(".")])]),e("li",null,[_,e("ul",null,[e("li",null,[t(a,{to:"/reference/node-api.html#date"},{default:s(()=>[n("Node API > Page Properties > date")]),_:1})])])])]),b,e("ul",null,[x,w,e("li",null,[T,e("ul",null,[e("li",null,[t(a,{to:"/reference/config.html#description"},{default:s(()=>[n("Config > description")]),_:1})])])])]),P,e("ul",null,[e("li",null,[n("Also see: "),e("ul",null,[e("li",null,[t(a,{to:"/reference/config.html#head"},{default:s(()=>[n("Config > head")]),_:1})])])])]),C,e("ul",null,[M,A,e("li",null,[D,e("ul",null,[e("li",null,[t(a,{to:"/reference/config.html#lang"},{default:s(()=>[n("Config > lang")]),_:1})]),e("li",null,[t(a,{to:"/reference/node-api.html#lang"},{default:s(()=>[n("Node API > Page Properties > lang")]),_:1})])])])]),q,e("ul",null,[N,L,e("li",null,[I,e("ul",null,[F,e("li",null,[t(a,{to:"/guide/page.html#routing"},{default:s(()=>[n("Guide > Page > Routing")]),_:1})]),e("li",null,[t(a,{to:"/reference/node-api.html#permalink"},{default:s(()=>[n("Node API > Page Properties > permalink")]),_:1})])])])]),E,e("ul",null,[e("li",null,[n("Also see: "),e("ul",null,[e("li",null,[t(a,{to:"/reference/config.html#permalinkpattern"},{default:s(()=>[n("Config > permalinkPattern")]),_:1})]),R,z,e("li",null,[t(a,{to:"/reference/node-api.html#permalink"},{default:s(()=>[n("Node API > Page Properties > permalink")]),_:1})])])])]),S,e("ul",null,[B,V,e("li",null,[Y,e("ul",null,[e("li",null,[t(a,{to:"/reference/node-api.html#routeMeta"},{default:s(()=>[n("Node API > Page Properties > routeMeta")]),_:1})])])])]),j,e("ul",null,[U,Z,e("li",null,[H,e("ul",null,[e("li",null,[t(a,{to:"/reference/node-api.html#title"},{default:s(()=>[n("Node API > Page Properties > title")]),_:1})])])])])])}const W=r(u,[["render",G],["__file","frontmatter.html.vue"]]),X=JSON.parse('{"path":"/reference/frontmatter.html","title":"Frontmatter","lang":"en-US","frontmatter":{"icon":"fa-solid:bars","description":"Frontmatter ","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://vuejs.press/zh/reference/frontmatter.html"}],["meta",{"property":"og:url","content":"https://vuejs.press/reference/frontmatter.html"}],["meta",{"property":"og:site_name","content":"VuePress"}],["meta",{"property":"og:title","content":"Frontmatter"}],["meta",{"property":"og:description","content":"Frontmatter "}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-02-02T14:23:03.000Z"}],["meta",{"property":"article:modified_time","content":"2024-02-02T14:23:03.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Frontmatter\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-02-02T14:23:03.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"date","slug":"date","link":"#date","children":[]},{"level":2,"title":"description","slug":"description","link":"#description","children":[]},{"level":2,"title":"head","slug":"head","link":"#head","children":[]},{"level":2,"title":"lang","slug":"lang","link":"#lang","children":[]},{"level":2,"title":"layout","slug":"layout","link":"#layout","children":[]},{"level":2,"title":"permalink","slug":"permalink","link":"#permalink","children":[]},{"level":2,"title":"permalinkPattern","slug":"permalinkpattern","link":"#permalinkpattern","children":[]},{"level":2,"title":"routeMeta","slug":"routemeta","link":"#routemeta","children":[]},{"level":2,"title":"title","slug":"title","link":"#title","children":[]}],"git":{"createdTime":1701614677000,"updatedTime":1706883783000,"contributors":[{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":2},{"name":"meteorlxy","email":"meteor.lxy@foxmail.com","commits":2}]},"readingTime":{"minutes":1.86,"words":559},"filePathRelative":"reference/frontmatter.md","localizedDate":"December 3, 2023","autoDesc":true}');export{W as comp,X as data};