import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as h,o as p,c as r,a as s,b as i,d as n,w as l,e}from"./app-DqQFYrea.js";const d={},o=e(`<h1 id="deployment" tabindex="-1"><a class="header-anchor" href="#deployment"><span>Deployment</span></a></h1><p>The following guides are based on some shared assumptions:</p><ul><li>You are placing your Markdown source files inside the <code>docs</code> directory of your project;</li><li>You are using the default build output location (<code>.vuepress/dist</code>);</li><li>You are using <a href="https://pnpm.io" target="_blank" rel="noopener noreferrer">pnpm</a> as package manager, while npm and yarn are also supported;</li><li>VuePress is installed as a local dependency in your project, and you have setup the following script in <code>package.json</code>:</li></ul><div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" data-title="json" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#E06C75;">  &quot;scripts&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#E06C75;">    &quot;docs:build&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;vuepress build docs&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="github-pages" tabindex="-1"><a class="header-anchor" href="#github-pages"><span>GitHub Pages</span></a></h2>`,5),k=e("<p>If you are deploying to <code>https://&lt;USERNAME&gt;.github.io/</code>, you can omit this step as <code>base</code> defaults to <code>&quot;/&quot;</code>.</p><p>If you are deploying to <code>https://&lt;USERNAME&gt;.github.io/&lt;REPO&gt;/</code>, for example your repository is at <code>https://github.com/&lt;USERNAME&gt;/&lt;REPO&gt;</code>, then set <code>base</code> to <code>&quot;/&lt;REPO&gt;/&quot;</code>.</p>",2),c=s("li",null,[s("p",null,[i("Choose your preferred CI tools. Here we take "),s("a",{href:"https://github.com/features/actions",target:"_blank",rel:"noopener noreferrer"},"GitHub Actions"),i(" as an example.")]),s("p",null,[i("Create "),s("code",null,".github/workflows/docs.yml"),i(" to set up the workflow.")])],-1),g=e(`<details class="hint-container details"><summary>Click to expand sample config</summary><div class="language-yaml line-numbers-mode" data-highlighter="shiki" data-ext="yaml" data-title="yaml" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">docs</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">on</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">  # trigger deployment on every push to main branch</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">  push</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">    branches</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: [</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">main</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">]</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">  # trigger deployment manually</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">  workflow_dispatch</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">jobs</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">  docs</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">    runs-on</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">ubuntu-latest</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">    steps</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">      - </span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">uses</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">actions/checkout@v4</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">        with</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">          # fetch all commits to get last updated time or other git log info</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">          fetch-depth</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">0</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">      - </span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">Setup pnpm</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">        uses</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">pnpm/action-setup@v2</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">        with</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">          # choose pnpm version to use</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">          version</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">8</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">          # install deps with pnpm</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">          run_install</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">true</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">      - </span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">Setup Node.js</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">        uses</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">actions/setup-node@v4</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">        with</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">          # choose node.js version to use</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">          node-version</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">20</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">          # cache deps for pnpm</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">          cache</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">pnpm</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">      # run build script</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">      - </span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">Build VuePress site</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">        run</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">pnpm docs:build</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">      # please check out the docs of the workflow for more details</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">      # @see https://github.com/crazy-max/ghaction-github-pages</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">      - </span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">Deploy to GitHub Pages</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">        uses</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">crazy-max/ghaction-github-pages@v4</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">        with</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">          # deploy to gh-pages branch</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">          target_branch</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">gh-pages</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">          # deploy the default output dir of VuePress</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">          build_dir</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">docs/.vuepress/dist</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">        env</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">          # @see https://docs.github.com/en/actions/reference/authentication-in-a-workflow#about-the-github_token-secret</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">          GITHUB_TOKEN</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">\${{ secrets.GITHUB_TOKEN }}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><div class="hint-container tip"><p class="hint-container-title">Tips</p><p>Please refer to <a href="https://pages.github.com/" target="_blank" rel="noopener noreferrer">GitHub Pages official guide</a> for more details.</p></div><h2 id="gitlab-pages" tabindex="-1"><a class="header-anchor" href="#gitlab-pages"><span>GitLab Pages</span></a></h2>`,3),u=e("<p>If you are deploying to <code>https://&lt;USERNAME&gt;.gitlab.io/</code>, you can omit <code>base</code> as it defaults to <code>&quot;/&quot;</code>.</p><p>If you are deploying to <code>https://&lt;USERNAME&gt;.gitlab.io/&lt;REPO&gt;/</code>, for example your repository is at <code>https://gitlab.com/&lt;USERNAME&gt;/&lt;REPO&gt;</code>, then set <code>base</code> to <code>&quot;/&lt;REPO&gt;/&quot;</code>.</p>",2),y=s("li",null,[s("p",null,[i("Create "),s("code",null,".gitlab-ci.yml"),i(" to set up "),s("a",{href:"https://about.gitlab.com/stages-devops-lifecycle/continuous-integration/",target:"_blank",rel:"noopener noreferrer"},"GitLab CI"),i(" workflow.")])],-1),m=e(`<details class="hint-container details"><summary>Click to expand sample config</summary><div class="language-yaml line-numbers-mode" data-highlighter="shiki" data-ext="yaml" data-title="yaml" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"># choose a docker image to use</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">image</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">node:18-buster</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">pages</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">  # trigger deployment on every push to main branch</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">  only</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    - </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">main</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">  # cache node_modules</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">  cache</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">    key</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">      files</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">        - </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">pnpm-lock.yaml</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">    paths</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">.pnpm-store</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">  # Install pnpm</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">  before_script</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    - </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">curl -fsSL https://get.pnpm.io/install.sh | sh -</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    - </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">pnpm config set store-dir .pnpm-store</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">  # install dependencies and run build script</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">  script</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    - </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">pnpm i --frozen-lockfile</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    - </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">pnpm docs:build --dest public</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">  artifacts</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">    paths</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">public</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><div class="hint-container tip"><p class="hint-container-title">Tips</p><p>Please refer to <a href="https://docs.gitlab.com/ce/user/project/pages/#getting-started" target="_blank" rel="noopener noreferrer">GitLab Pages official guide</a> for more details.</p></div><h2 id="google-firebase" tabindex="-1"><a class="header-anchor" href="#google-firebase"><span>Google Firebase</span></a></h2><ol><li><p>Make sure you have <a href="https://www.npmjs.com/package/firebase-tools" target="_blank" rel="noopener noreferrer">firebase-tools</a> installed.</p></li><li><p>Create <code>firebase.json</code> and <code>.firebaserc</code> at the root of your project with the following content:</p></li></ol><p><code>firebase.json</code>:</p><div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" data-title="json" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#E06C75;">  &quot;hosting&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#E06C75;">    &quot;public&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;./docs/.vuepress/dist&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#E06C75;">    &quot;ignore&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: []</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>.firebaserc</code>:</p><div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" data-title="json" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#E06C75;">  &quot;projects&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#E06C75;">    &quot;default&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;&lt;YOUR_FIREBASE_ID&gt;&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>After running <code>pnpm docs:build</code>, deploy using the command <code>firebase deploy</code>.</li></ol><div class="hint-container tip"><p class="hint-container-title">Tips</p><p>Please refer to <a href="https://firebase.google.com/docs/cli" target="_blank" rel="noopener noreferrer">Firebase CLI official guide</a> for more details.</p></div><h2 id="heroku" tabindex="-1"><a class="header-anchor" href="#heroku"><span>Heroku</span></a></h2><ol><li><p>Install <a href="https://devcenter.heroku.com/articles/heroku-cli" target="_blank" rel="noopener noreferrer">Heroku CLI</a>.</p></li><li><p>Create a Heroku account by <a href="https://signup.heroku.com" target="_blank" rel="noopener noreferrer">signing up</a>.</p></li><li><p>Run <code>heroku login</code> and fill in your Heroku credentials:</p></li></ol><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">heroku</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> login</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ol start="4"><li>Create a file called <code>static.json</code> in the root of your project with the below content:</li></ol><p><code>static.json</code>:</p><div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" data-title="json" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#E06C75;">  &quot;root&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;./docs/.vuepress/dist&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This is the configuration of your site; read more at <a href="https://github.com/heroku/heroku-buildpack-static" target="_blank" rel="noopener noreferrer">heroku-buildpack-static</a>.</p><h2 id="kinsta" tabindex="-1"><a class="header-anchor" href="#kinsta"><span>Kinsta</span></a></h2><p>See <a href="https://kinsta.com/docs/vuepress-application/" target="_blank" rel="noopener noreferrer">Set Up VuePress on Kinsta</a>.</p><h2 id="edgio" tabindex="-1"><a class="header-anchor" href="#edgio"><span>Edgio</span></a></h2><p>See <a href="https://docs.edg.io/guides/vuepress" target="_blank" rel="noopener noreferrer">Edgio Documentation &gt; Framework Guides &gt; VuePress</a>.</p><h2 id="netlify" tabindex="-1"><a class="header-anchor" href="#netlify"><span>Netlify</span></a></h2><ol><li><p>On <a href="https://netlify.com" target="_blank" rel="noopener noreferrer">Netlify</a>, set up a new project from GitHub with the following settings:</p><ul><li><strong>Build Command:</strong> <code>pnpm docs:build</code></li><li><strong>Publish directory:</strong> <code>docs/.vuepress/dist</code></li></ul></li><li><p>Set <a href="https://docs.netlify.com/configure-builds/environment-variables" target="_blank" rel="noopener noreferrer">Environment variables</a> to choose node version:</p><ul><li><code>NODE_VERSION</code>: 18</li></ul></li><li><p>Hit the deploy button.</p></li></ol><h2 id="vercel" tabindex="-1"><a class="header-anchor" href="#vercel"><span>Vercel</span></a></h2><ol><li><p>Go to <a href="https://vercel.com" target="_blank" rel="noopener noreferrer">Vercel</a>, set up a new project from GitHub with the following settings:</p><ul><li><strong>FRAMEWORK PRESET:</strong> <code>Other</code></li><li><strong>BUILD COMMAND:</strong> <code>pnpm docs:build</code></li><li><strong>OUTPUT DIRECTORY:</strong> <code>docs/.vuepress/dist</code></li></ul></li><li><p>Hit the deploy button.</p></li></ol>`,25);function b(v,B){const a=h("RouteLink");return p(),r("div",null,[o,s("ol",null,[s("li",null,[s("p",null,[i("Set the correct "),n(a,{to:"/reference/config.html#base"},{default:l(()=>[i("base")]),_:1}),i(" config.")]),k]),c]),g,s("ol",null,[s("li",null,[s("p",null,[i("Set the correct "),n(a,{to:"/reference/config.html#base"},{default:l(()=>[i("base")]),_:1}),i(" config.")]),u]),y]),m])}const A=t(d,[["render",b],["__file","deployment.html.vue"]]),F=JSON.parse('{"path":"/guide/deployment.html","title":"Deployment","lang":"en-US","frontmatter":{"icon":"fa6-solid:rocket","description":"Deployment The following guides are based on some shared assumptions: You are placing your Markdown source files inside the docs directory of your project; You are using the def...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://vuejs.press/zh/guide/deployment.html"}],["meta",{"property":"og:url","content":"https://vuejs.press/guide/deployment.html"}],["meta",{"property":"og:site_name","content":"VuePress"}],["meta",{"property":"og:title","content":"Deployment"}],["meta",{"property":"og:description","content":"Deployment The following guides are based on some shared assumptions: You are placing your Markdown source files inside the docs directory of your project; You are using the def..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-02-02T14:23:03.000Z"}],["meta",{"property":"article:modified_time","content":"2024-02-02T14:23:03.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Deployment\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-02-02T14:23:03.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"GitHub Pages","slug":"github-pages","link":"#github-pages","children":[]},{"level":2,"title":"GitLab Pages","slug":"gitlab-pages","link":"#gitlab-pages","children":[]},{"level":2,"title":"Google Firebase","slug":"google-firebase","link":"#google-firebase","children":[]},{"level":2,"title":"Heroku","slug":"heroku","link":"#heroku","children":[]},{"level":2,"title":"Kinsta","slug":"kinsta","link":"#kinsta","children":[]},{"level":2,"title":"Edgio","slug":"edgio","link":"#edgio","children":[]},{"level":2,"title":"Netlify","slug":"netlify","link":"#netlify","children":[]},{"level":2,"title":"Vercel","slug":"vercel","link":"#vercel","children":[]}],"git":{"createdTime":1701614677000,"updatedTime":1706883783000,"contributors":[{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":3},{"name":"meteorlxy","email":"meteor.lxy@foxmail.com","commits":1}]},"readingTime":{"minutes":2.44,"words":732},"filePathRelative":"guide/deployment.md","localizedDate":"December 3, 2023","autoDesc":true}');export{A as comp,F as data};
