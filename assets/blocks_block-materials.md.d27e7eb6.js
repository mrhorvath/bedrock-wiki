import{r as a,o as n,c as s,a as t,b as e,d as o}from"./404.md.60ff2571.js";const l='{"title":"Block Materials","description":"","frontmatter":{"title":"Block Materials","tags":["experimental"]},"headers":[{"level":1,"title":"Application","slug":"application"},{"level":1,"title":"List of Materials","slug":"list-of-materials"}],"relativePath":"blocks/block-materials.md","lastUpdated":1630896502880}',p={},r=t("h1",{id:"application"},[t("a",{class:"header-anchor",href:"#application","aria-hidden":"true"},"#"),e(" Application")],-1),i=t("p",null,[e("Block materials essentially control how a block is rendered in the world, much like entity materials. They can be applied with the block component, "),t("code",null,"material_instances"),e(", with the optional parameter, "),t("code",null,"render_method"),e(". Using this would look something like the below example, a non-full block:")],-1),c=o('<div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>\n\t<span class="token property">&quot;minecraft:material_instances&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n\t\t<span class="token property">&quot;*&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n\t\t\t<span class="token property">&quot;texture&quot;</span><span class="token operator">:</span> <span class="token string">&quot;blast_vent&quot;</span><span class="token punctuation">,</span>\n\t\t\t<span class="token property">&quot;render_method&quot;</span><span class="token operator">:</span> <span class="token string">&quot;alpha_test&quot;</span>\n\t\t<span class="token punctuation">}</span>\n\t<span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p><em>Note: This feature is currently experimental, and, as such, is currently only available for custom blocks.</em></p><h1 id="list-of-materials"><a class="header-anchor" href="#list-of-materials" aria-hidden="true">#</a> List of Materials</h1><table><thead><tr><th>Argument</th><th>Slot</th></tr></thead><tbody><tr><td>opaque</td><td>Used for a regular block texture without an alpha layer. Does not allow for transparency or translucency. This material enables AO (ambient occlusion) for the block, creating shadows around and underneath it.</td></tr><tr><td>alpha_test</td><td>Used for a block like the vanilla (unstained) glass. Does not allow for translucency, only fully opaque or fully transparent textures. By default, this material disables AO for the block, removing those ugly shadows if you&#39;re making a non-full or decorative block.</td></tr><tr><td>blend</td><td>Used for a block like stained glass. Allows for transparency and translucency (slightly transparent textures). By default, this material disables AO for the block.</td></tr><tr><td>double_sided</td><td>Used for completely disabling backface culling.</td></tr></tbody></table><p><em>Note: Some of these features may be disabled or overridden with their respective parameters. For example:</em></p>',5),u=o('<div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>\n\t<span class="token property">&quot;minecraft:material_instances&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n\t\t<span class="token property">&quot;*&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n\t\t\t<span class="token property">&quot;texture&quot;</span><span class="token operator">:</span> <span class="token string">&quot;blast_vent&quot;</span><span class="token punctuation">,</span>\n\t\t\t<span class="token property">&quot;ambient_occlusion&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n\t\t\t<span class="token property">&quot;face_dimming&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n\t\t\t<span class="token property">&quot;render_method&quot;</span><span class="token operator">:</span> <span class="token string">&quot;alpha_test&quot;</span>\n\t\t<span class="token punctuation">}</span>\n\t<span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div>',1);p.render=function(e,o,l,p,d,b){const m=a("CodeHeader");return n(),s("div",null,[r,i,t(m),c,t(m),u])};export default p;export{l as __pageData};