import{_ as u,W as c,X as d,Y as e,$ as n,a0 as a,Z as s,a1 as o,D as l}from"./framework-46b0e263.js";const r={},m=n("h1",{id:"frontmatter",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#frontmatter","aria-hidden":"true"},"#"),a(" Frontmatter")],-1),h=n("h2",{id:"date",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#date","aria-hidden":"true"},"#"),a(" date")],-1),k=n("li",null,[n("p",null,[a("Type: "),n("code",null,"string")])],-1),f=n("p",null,"Details:",-1),g=n("p",null,"Created date for the page.",-1),y=n("code",null,"yyyy-MM-dd",-1),v={href:"https://yaml.org/type/timestamp.html",target:"_blank",rel:"noopener noreferrer"},_=n("p",null,"Also see:",-1),b=n("h2",{id:"description",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#description","aria-hidden":"true"},"#"),a(" description")],-1),x=n("li",null,[n("p",null,[a("Type: "),n("code",null,"string")])],-1),w=n("li",null,[n("p",null,"Details:"),n("p",null,"Description for the page."),n("p",null,[a("This will override the "),n("code",null,"description"),a(" option in your site config.")])],-1),P=n("p",null,"Also see:",-1),T=o(`<h2 id="head" tabindex="-1"><a class="header-anchor" href="#head" aria-hidden="true">#</a> head</h2><ul><li><p>Type: <code>HeadConfig[]</code></p></li><li><p>Details:</p><p>Extra tags in <code>&lt;head&gt;</code> tag for the page.</p></li><li><p>Example:</p></li></ul><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml"><span class="token key atrule">head</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token punctuation">-</span> meta
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> foo
      <span class="token key atrule">content</span><span class="token punctuation">:</span> yaml array syntax
  <span class="token punctuation">-</span> <span class="token punctuation">[</span>meta<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> bar<span class="token punctuation">,</span> <span class="token key atrule">content</span><span class="token punctuation">:</span> square brackets syntax <span class="token punctuation">}</span><span class="token punctuation">]</span></span>
<span class="token punctuation">---</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Rendered as:</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>foo<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>yaml array syntax<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>bar<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>square brackets syntax<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),q=n("h2",{id:"lang",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#lang","aria-hidden":"true"},"#"),a(" lang")],-1),C=n("li",null,[n("p",null,[a("Type: "),n("code",null,"string")])],-1),A=n("li",null,[n("p",null,"Details:"),n("p",null,"Language for the page."),n("p",null,[a("This will override the "),n("code",null,"lang"),a(" option in your site config.")])],-1),M=n("p",null,"Also see:",-1),D=o(`<h2 id="layout" tabindex="-1"><a class="header-anchor" href="#layout" aria-hidden="true">#</a> layout</h2><ul><li><p>Type: <code>string</code></p></li><li><p>Details:</p><p>Layout for the page.</p><p>Layouts are provided by theme. If you don&#39;t specify this frontmatter, the default layout will be used. You should refer to the theme&#39;s own documentation to find what layouts it provides.</p><p>If the theme layouts cannot meet your needs, you can use a custom layout component.</p></li><li><p>Example:</p></li></ul><p>Register a layout component in <code>.vuepress/client.ts</code> file:</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineClientConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@vuepress/client&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> CustomLayout <span class="token keyword">from</span> <span class="token string">&quot;./CustomLayout.vue&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineClientConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  layouts<span class="token operator">:</span> <span class="token punctuation">{</span>
    CustomLayout<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Set custom layout in frontmatter:</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml"><span class="token key atrule">layout</span><span class="token punctuation">:</span> CustomLayout</span>
<span class="token punctuation">---</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="permalink" tabindex="-1"><a class="header-anchor" href="#permalink" aria-hidden="true">#</a> permalink</h2>`,7),L=n("li",null,[n("p",null,[a("Type: "),n("code",null,"string")])],-1),N=n("li",null,[n("p",null,"Details:"),n("p",null,"Permalink for the page."),n("p",null,"This will override the default route path that determined by the file path of the page.")],-1),I=n("p",null,"Also see:",-1),E=n("li",null,[n("a",{href:"#permalinkpattern"},"Frontmatter > permalinkPattern")],-1),R=o(`<h2 id="permalinkpattern" tabindex="-1"><a class="header-anchor" href="#permalinkpattern" aria-hidden="true">#</a> permalinkPattern</h2><ul><li><p>Type: <code>string | null</code></p></li><li><p>Details:</p><p>Pattern to generate permalink for the page.</p><p>This will override the <code>permalinkPattern</code> option in your site config.</p><p>This won&#39;t take effect if the <code>permalink</code> frontmatter has been set.</p></li><li><p>Usage:</p><table><thead><tr><th>Pattern</th><th>Description</th></tr></thead><tbody><tr><td><code>:year</code></td><td>Year part of created date</td></tr><tr><td><code>:month</code></td><td>Month part of created date</td></tr><tr><td><code>:day</code></td><td>Day part of created date</td></tr><tr><td><code>:slug</code></td><td>Slug of page filename</td></tr><tr><td><code>:raw</code></td><td>Raw route path</td></tr></tbody></table><p>The <code>:year</code>, <code>:month</code> and <code>:day</code> patterns are resolved according to the following priority:</p><ul><li>The <code>date</code> frontmatter.</li><li>The filename that matches the date pattern <code>yyyy-MM-dd-foobar.md</code> or <code>yyyy-MM-foobar.md</code>.</li><li>The dirname that matches the date pattern <code>yyyy/MM/dd/foobar.md</code> or <code>yyyy/MM/foobar.md</code>.</li><li>Fallback to <code>0000-00-00</code>.</li></ul></li><li><p>Example 1:</p><p>The page filename is <code>foo-bar.md</code>.</p><p>The page frontmatter is:</p></li></ul><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml"><span class="token key atrule">date</span><span class="token punctuation">:</span> <span class="token datetime number">2021-01-03</span>
<span class="token key atrule">permalinkPattern</span><span class="token punctuation">:</span> <span class="token punctuation">:</span>year/<span class="token punctuation">:</span>month/<span class="token punctuation">:</span>day/<span class="token punctuation">:</span>slug.html</span>
<span class="token punctuation">---</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Then the permalink of the page would be <code>2021/01/03/foo-bar.html</code>.</p><ul><li><p>Example 2:</p><p>The page filename is <code>2021-01-03-bar-baz.md</code>.</p><p>The page frontmatter is:</p></li></ul><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml"><span class="token key atrule">permalinkPattern</span><span class="token punctuation">:</span> <span class="token punctuation">:</span>year/<span class="token punctuation">:</span>month/<span class="token punctuation">:</span>day/<span class="token punctuation">:</span>slug.html</span>
<span class="token punctuation">---</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Then the permalink of the page would be <code>2021/01/03/bar-baz.html</code>.</p>`,7),B=n("li",null,[n("a",{href:"#date"},"Frontmatter > date")],-1),F=n("li",null,[n("a",{href:"#permalink"},"Frontmatter > permalink")],-1),Y=n("h2",{id:"routemeta",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#routemeta","aria-hidden":"true"},"#"),a(" routeMeta")],-1),V=n("li",null,[n("p",null,[a("Type: "),n("code",null,"Record<string, unknown>")])],-1),S=n("li",null,[n("p",null,"Details:"),n("p",null,"Custom data to be attached to the page route.")],-1),z=n("p",null,"Also see:",-1),G=n("h2",{id:"title",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#title","aria-hidden":"true"},"#"),a(" title")],-1),H=n("li",null,[n("p",null,[a("Type: "),n("code",null,"string")])],-1),U=n("li",null,[n("p",null,"Details:"),n("p",null,"Title for the page."),n("p",null,[a("If you don't specify "),n("code",null,"title"),a(" in frontmatter, content of the first level-one header (i.e. "),n("code",null,"# title"),a(") will be used as the title.")])],-1),W=n("p",null,"Also see:",-1);function X(Z,$){const i=l("NpmBadge"),p=l("ExternalLinkIcon"),t=l("RouterLink");return c(),d("div",null,[m,e(i,{package:"@vuepress/client"}),e(i,{package:"@vuepress/markdown"}),h,n("ul",null,[k,n("li",null,[f,g,n("p",null,[a("You should specify the date in the form of "),y,a(", or follow the "),n("a",v,[a("YAML Timestamp Type"),e(p)]),a(".")])]),n("li",null,[_,n("ul",null,[n("li",null,[e(t,{to:"/reference/node-api.html#date"},{default:s(()=>[a("Node API > Page Properties > date")]),_:1})])])])]),b,n("ul",null,[x,w,n("li",null,[P,n("ul",null,[n("li",null,[e(t,{to:"/reference/config.html#description"},{default:s(()=>[a("Config > description")]),_:1})])])])]),T,n("ul",null,[n("li",null,[a("Also see: "),n("ul",null,[n("li",null,[e(t,{to:"/reference/config.html#head"},{default:s(()=>[a("Config > head")]),_:1})])])])]),q,n("ul",null,[C,A,n("li",null,[M,n("ul",null,[n("li",null,[e(t,{to:"/reference/config.html#lang"},{default:s(()=>[a("Config > lang")]),_:1})]),n("li",null,[e(t,{to:"/reference/node-api.html#lang"},{default:s(()=>[a("Node API > Page Properties > lang")]),_:1})])])])]),D,n("ul",null,[L,N,n("li",null,[I,n("ul",null,[E,n("li",null,[e(t,{to:"/guide/page.html#routing"},{default:s(()=>[a("Guide > Page > Routing")]),_:1})]),n("li",null,[e(t,{to:"/reference/node-api.html#permalink"},{default:s(()=>[a("Node API > Page Properties > permalink")]),_:1})])])])]),R,n("ul",null,[n("li",null,[a("Also see: "),n("ul",null,[n("li",null,[e(t,{to:"/reference/config.html#permalinkpattern"},{default:s(()=>[a("Config > permalinkPattern")]),_:1})]),B,F,n("li",null,[e(t,{to:"/reference/node-api.html#permalink"},{default:s(()=>[a("Node API > Page Properties > permalink")]),_:1})])])])]),Y,n("ul",null,[V,S,n("li",null,[z,n("ul",null,[n("li",null,[e(t,{to:"/reference/node-api.html#routeMeta"},{default:s(()=>[a("Node API > Page Properties > routeMeta")]),_:1})])])])]),G,n("ul",null,[H,U,n("li",null,[W,n("ul",null,[n("li",null,[e(t,{to:"/reference/node-api.html#title"},{default:s(()=>[a("Node API > Page Properties > title")]),_:1})])])])])])}const J=u(r,[["render",X],["__file","frontmatter.html.vue"]]);export{J as default};
