import{_ as l}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as t,o as r,c as p,d as n,a as e,b as s,e as i}from"./app-3H3XVaQ6.js";const c={},d=e("h1",{id:"shiki",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#shiki","aria-hidden":"true"},"#"),s(" shiki")],-1),h={href:"https://shiki.matsu.io/",target:"_blank",rel:"noopener noreferrer"},u={class:"hint-container tip"},g=e("p",{class:"hint-container-title"},"Tips",-1),k={href:"https://shiki.matsu.io/",target:"_blank",rel:"noopener noreferrer"},m={href:"https://prismjs.com/",target:"_blank",rel:"noopener noreferrer"},_=e("p",null,[s("You could consider disabling this plugin in "),e("code",null,"dev"),s(" mode to get better development experience.")],-1),b=i(`<h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> i <span class="token parameter variable">-D</span> @vuepress/plugin-shiki@next
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> shikiPlugin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vuepress/plugin-shiki&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">shikiPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token comment">// options</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options" aria-hidden="true">#</a> Options</h2><h3 id="theme" tabindex="-1"><a class="header-anchor" href="#theme" aria-hidden="true">#</a> theme</h3>`,5),v=i("<li><p>Type: <code>IThemeRegistration</code></p></li><li><p>Default: <code>&#39;nord&#39;</code></p></li><li><p>Details:</p><p>Theme of shiki.</p><p>This option will be forwarded to <code>getHighlighter()</code> method of shiki.</p></li>",3),f=e("p",null,"Also see:",-1),x={href:"https://github.com/shikijs/shiki/blob/master/docs/themes.md",target:"_blank",rel:"noopener noreferrer"},w=e("h3",{id:"langs",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#langs","aria-hidden":"true"},"#"),s(" langs")],-1),y=i("<li><p>Type: <code>(Lang | ILanguageRegistration)[]</code></p></li><li><p>Default: <code>[]</code></p></li><li><p>Details:</p><p>Languages of shiki.</p><p>This option will be forwarded to <code>getHighlighter()</code> method of shiki.</p><p>If no languages are provided, shiki will load all available languages automatically.</p></li>",3),T=e("p",null,"Also see:",-1),I={href:"https://github.com/shikijs/shiki/blob/master/docs/languages.md",target:"_blank",rel:"noopener noreferrer"};function N(B,D){const o=t("NpmBadge"),a=t("ExternalLinkIcon");return r(),p("div",null,[d,n(o,{package:"@vuepress/plugin-shiki"}),e("p",null,[s("This plugin will enable syntax highlighting for markdown code fence with "),e("a",h,[s("Shiki"),n(a)]),s(".")]),e("div",u,[g,e("p",null,[e("a",k,[s("Shiki"),n(a)]),s(" is the syntax highlighter being used by VSCode. It has higher fidelity, but it is slower than "),e("a",m,[s("Prism.js"),n(a)]),s(".")]),_]),b,e("ul",null,[v,e("li",null,[f,e("ul",null,[e("li",null,[e("a",x,[s("shiki > themes"),n(a)])])])])]),w,e("ul",null,[y,e("li",null,[T,e("ul",null,[e("li",null,[e("a",I,[s("shiki > languages"),n(a)])])])])])])}const j=l(c,[["render",N],["__file","shiki.html.vue"]]);export{j as default};