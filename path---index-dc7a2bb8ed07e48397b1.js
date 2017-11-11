webpackJsonp([0x81b8806e4260],{513:function(n,s){n.exports={data:{markdownRemark:{html:'<h5 align="center">Minimal, yet awesome, state management.</h5>\n<br />\n<ul>\n<li>tiny api - easy to understand, easy to adapt</li>\n<li>tiny size - 0.5KB</li>\n<li>single store modified via actions</li>\n<li>\n<p>batteries included</p>\n<ul>\n<li>react bindings</li>\n<li>preact bindings</li>\n<li>console logger</li>\n<li>devtools integration</li>\n</ul>\n</li>\n</ul>\n<h2 id="installation"><a href="#installation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Installation</h2>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>yarn add tiny-atom</code></pre>\n      </div>\n<h2 id="example"><a href="#example" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Example</h2>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">const</span> createAtom <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'tiny-atom\'</span><span class="token punctuation">)</span>\n<span class="token keyword">const</span> log <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'tiny-atom/log\'</span><span class="token punctuation">)</span>\n\n<span class="token keyword">const</span> atom <span class="token operator">=</span> <span class="token function">createAtom</span><span class="token punctuation">(</span><span class="token punctuation">{</span> count<span class="token punctuation">:</span> <span class="token number">0</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> evolve<span class="token punctuation">,</span> render<span class="token punctuation">,</span> <span class="token punctuation">{</span> debug<span class="token punctuation">:</span> log <span class="token punctuation">}</span><span class="token punctuation">)</span>\n\n<span class="token keyword">const</span> actions <span class="token operator">=</span> <span class="token punctuation">{</span>\n  increment<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token keyword">get</span><span class="token punctuation">,</span> split<span class="token punctuation">,</span> x<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token function">split</span><span class="token punctuation">(</span><span class="token punctuation">{</span> count<span class="token punctuation">:</span> <span class="token keyword">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>count <span class="token operator">+</span> x <span class="token punctuation">}</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n\n  asyncIncrement<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token keyword">get</span><span class="token punctuation">,</span> split<span class="token punctuation">,</span> x<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token function">split</span><span class="token punctuation">(</span><span class="token punctuation">{</span> loading<span class="token punctuation">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>\n    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n      <span class="token function">split</span><span class="token punctuation">(</span><span class="token string">\'increment\'</span><span class="token punctuation">,</span> x<span class="token punctuation">)</span>\n      <span class="token function">split</span><span class="token punctuation">(</span><span class="token punctuation">{</span> loading<span class="token punctuation">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">function</span> <span class="token function">evolve</span> <span class="token punctuation">(</span><span class="token keyword">get</span><span class="token punctuation">,</span> split<span class="token punctuation">,</span> action<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  actions<span class="token punctuation">[</span>action<span class="token punctuation">.</span>type<span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token keyword">get</span><span class="token punctuation">,</span> split<span class="token punctuation">,</span> action<span class="token punctuation">.</span>payload<span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">function</span> <span class="token function">render</span> <span class="token punctuation">(</span>atom<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  document<span class="token punctuation">.</span>body<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token template-string"><span class="token string">`Count </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>atom<span class="token punctuation">.</span><span class="token keyword">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>count<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">`</span></span>\n<span class="token punctuation">}</span>\n\natom<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token punctuation">{</span> count<span class="token punctuation">:</span> <span class="token number">5</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>\n  <span class="token comment">// -> { count: 5 }</span>\natom<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">\'increment\'</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span>\n  <span class="token comment">// -> { count: 10 }</span>\natom<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">\'asyncIncrement\'</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span>\n  <span class="token comment">// -> { count: 10, loading: true }</span>\natom<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">\'increment\'</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>\n  <span class="token comment">// -> { count: 12, loading: true }</span>\n  <span class="token comment">// -> 1 second later...</span>\n  <span class="token comment">// -> { count: 15, loading: false }</span>\n</code></pre>\n      </div>',excerpt:"tiny api - easy to understand, easy to adapt tiny size - 0.5KB single store modified via actions batteries included react bindings preact…",timeToRead:1,frontmatter:{title:""},parent:{__typename:"File",relativePath:"index.md"}}},pathContext:{slug:"/"}}}});
//# sourceMappingURL=path---index-dc7a2bb8ed07e48397b1.js.map