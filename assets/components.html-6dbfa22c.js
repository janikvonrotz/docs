import{_ as k,W as v,X as g,Y as s,$ as n,a0 as a,Z as t,a1 as i,D as o}from"./framework-46b0e263.js";const m={},b=n("h1",{id:"内置组件",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#内置组件","aria-hidden":"true"},"#"),a(" 内置组件")],-1),h={id:"badge",tabindex:"-1"},_=n("a",{class:"header-anchor",href:"#badge","aria-hidden":"true"},"#",-1),q=i(`<ul><li><p>Props:</p><ul><li>type <ul><li>类型： <code>&#39;tip&#39; | &#39;warning&#39; | &#39;danger&#39;</code></li><li>默认值： <code>&#39;tip&#39;</code></li></ul></li><li>text <ul><li>类型： <code>string</code></li><li>默认值： <code>&#39;&#39;</code></li></ul></li><li>vertical <ul><li>类型： <code>&#39;top&#39; | &#39;middle&#39; | &#39;bottom&#39; | undefined</code></li><li>默认值： <code>undefined</code></li></ul></li></ul></li><li><p>示例：</p></li></ul><p><strong>输入</strong></p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token list punctuation">-</span> VuePress - <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Badge</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>tip<span class="token punctuation">&quot;</span></span> <span class="token attr-name">text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>v2<span class="token punctuation">&quot;</span></span> <span class="token attr-name">vertical</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>top<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token list punctuation">-</span> VuePress - <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Badge</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>warning<span class="token punctuation">&quot;</span></span> <span class="token attr-name">text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>v2<span class="token punctuation">&quot;</span></span> <span class="token attr-name">vertical</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>middle<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token list punctuation">-</span> VuePress - <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Badge</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>danger<span class="token punctuation">&quot;</span></span> <span class="token attr-name">text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>v2<span class="token punctuation">&quot;</span></span> <span class="token attr-name">vertical</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>bottom<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>输出</strong></p>`,4),f=i(`<h2 id="codegroup" tabindex="-1"><a class="header-anchor" href="#codegroup" aria-hidden="true">#</a> CodeGroup</h2><ul><li><p>详情：</p><p><a href="#codegroupitem">CodeGroupItem</a> 组件的 Wrapper 。</p></li></ul><h2 id="codegroupitem" tabindex="-1"><a class="header-anchor" href="#codegroupitem" aria-hidden="true">#</a> CodeGroupItem</h2><ul><li><p>Props:</p><ul><li>title <ul><li>类型： <code>string</code></li><li>是否必需： <code>true</code></li></ul></li><li>active <ul><li>类型： <code>boolean</code></li><li>默认值： <code>false</code></li></ul></li></ul></li><li><p>详情：</p><p>该组件必须放置在 <a href="#codegroup">CodeGroup</a> 组件的内部。</p><p>可以通过 <code>active</code> Prop 来设置初始激活的元素。如果不设置，默认激活第一个元素。</p></li><li><p>示例：</p></li></ul><p><strong>输入</strong></p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CodeGroup</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CodeGroupItem</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>PNPM<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">bash:no-line-numbers</span>
<span class="token code-block language-bash"><span class="token function">pnpm</span> <span class="token function">install</span></span>
<span class="token punctuation">\`\`\`</span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CodeGroupItem</span><span class="token punctuation">&gt;</span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CodeGroupItem</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>YARN<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">bash:no-line-numbers</span>
<span class="token code-block language-bash"><span class="token function">yarn</span> <span class="token function">install</span></span>
<span class="token punctuation">\`\`\`</span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CodeGroupItem</span><span class="token punctuation">&gt;</span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CodeGroupItem</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>NPM<span class="token punctuation">&quot;</span></span> <span class="token attr-name">active</span><span class="token punctuation">&gt;</span></span>

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">bash:no-line-numbers</span>
<span class="token code-block language-bash"><span class="token function">npm</span> <span class="token function">install</span></span>
<span class="token punctuation">\`\`\`</span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CodeGroupItem</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CodeGroup</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>输出</strong></p>`,7),x=n("div",{class:"language-bash","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"pnpm"),a(),n("span",{class:"token function"},"install"),a(`
`)])])],-1),C=n("div",{class:"language-bash","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"yarn"),a(),n("span",{class:"token function"},"install"),a(`
`)])])],-1),P=n("div",{class:"language-bash","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"npm"),a(),n("span",{class:"token function"},"install"),a(`
`)])])],-1),w={class:"hint-container warning"},B=n("p",{class:"hint-container-title"},"注意",-1),G=n("p",null,[a("你必须在 "),n("code",null,"<CodeGroupItem>"),a(" 的开始标签和代码块之间添加一个空行，否则代码块无法被 Markdown 正确解析。")],-1),N=n("p",null,"所有内容首先都必须是合法的 Markdown ，然后才是一个 Vue SFC 。",-1);function V(A,y){const d=o("NpmBadge"),e=o("Badge"),r=o("CodeTabs"),p=o("RouterLink");return v(),g("div",null,[b,s(d,{package:"@vuepress/theme-default"}),n("h2",h,[_,a(" Badge "),s(e,{text:"badge"})]),q,n("ul",null,[n("li",null,[a("VuePress - "),s(e,{type:"tip",text:"v2",vertical:"top"})]),n("li",null,[a("VuePress - "),s(e,{type:"warning",text:"v2",vertical:"middle"})]),n("li",null,[a("VuePress - "),s(e,{type:"danger",text:"v2",vertical:"bottom"})])]),f,s(r,{id:"179",data:[{title:"PNPM"},{title:"YARN"},{title:"NPM"}],active:2},{tab0:t(({title:l,value:c,isActive:u})=>[x]),tab1:t(({title:l,value:c,isActive:u})=>[C]),tab2:t(({title:l,value:c,isActive:u})=>[P]),_:1}),n("div",w,[B,G,N,n("p",null,[a("了解更多： "),s(p,{to:"/zh/advanced/cookbook/markdown-and-vue-sfc.html"},{default:t(()=>[a("Cookbook > Markdown 与 Vue SFC")]),_:1})]),n("p",null,[a("或者你可以选择使用 "),s(p,{to:"/zh/reference/default-theme/markdown.html#%E8%87%AA%E5%AE%9A%E4%B9%89%E5%AE%B9%E5%99%A8"},{default:t(()=>[a("自定义容器")]),_:1}),a(" 。")])])])}const E=k(m,[["render",V],["__file","components.html.vue"]]);export{E as default};
