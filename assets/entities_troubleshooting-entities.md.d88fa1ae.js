import{_ as l,c as h,a as s,w as n,b as t,e as a,d as e,r,o as d}from"./404.md.002d5480.js";const H=`{"title":"Troubleshooting Entities","description":"","frontmatter":{"title":"Troubleshooting Entities","category":"General","nav_order":3,"tags":["help"]},"headers":[{"level":2,"title":"0.0.0 - You messed up","slug":"_0-0-0-you-messed-up"},{"level":2,"title":"1.0.0 - Are both packs active?","slug":"_1-0-0-are-both-packs-active"},{"level":2,"title":"2.0.0 - Determine whether the issue is in the RP or the BP","slug":"_2-0-0-determine-whether-the-issue-is-in-the-rp-or-the-bp"},{"level":3,"title":"In the RP","slug":"in-the-rp"},{"level":3,"title":"In the BP","slug":"in-the-bp"},{"level":3,"title":"Results","slug":"results"},{"level":2,"title":"3.0.0 - Locating the specific issue","slug":"_3-0-0-locating-the-specific-issue"},{"level":2,"title":"3.1.0 - BP","slug":"_3-1-0-bp"},{"level":3,"title":"3.1.1 - Syntax error","slug":"_3-1-1-syntax-error"},{"level":3,"title":"3.1.2 - Misnamed folder","slug":"_3-1-2-misnamed-folder"},{"level":2,"title":"Step 3.2.0 - RP .entity","slug":"step-3-2-0-rp-entity"},{"level":3,"title":"Step 3.2.1 - Syntax error","slug":"step-3-2-1-syntax-error"},{"level":3,"title":"Step 3.2.2 - Identifiers don't match","slug":"step-3-2-2-identifiers-don-t-match"},{"level":3,"title":"Step 3.2.3 - Invalid resources","slug":"step-3-2-3-invalid-resources"},{"level":2,"title":"Step 3.3.0 - RP resources: (WIP)","slug":"step-3-3-0-rp-resources-wip"},{"level":3,"title":"3.3.1 - Invisible, no shadow","slug":"_3-3-1-invisible-no-shadow"},{"level":3,"title":"3.3.2 - Invisible, shadow exists","slug":"_3-3-2-invisible-shadow-exists"},{"level":3,"title":"3.3.3 - Visible, weird texture","slug":"_3-3-3-visible-weird-texture"},{"level":3,"title":"3.3.4 - Visible, weird visibility stuff","slug":"_3-3-4-visible-weird-visibility-stuff"}],"relativePath":"entities/troubleshooting-entities.md"}`,c={},u=a('<div class="tip custom-block"><p class="custom-block-title">TIP</p><p>This page contains troubleshooting information about <em>entities</em>. You should read our <a href="/guide/troubleshooting.html">global troubleshooting</a> document before continuing here.</p></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>Always remember to check content log!</p></div><h2 id="_0-0-0-you-messed-up" tabindex="-1">0.0.0 - You messed up <a class="header-anchor" href="#_0-0-0-you-messed-up" aria-hidden="true">#</a></h2><p>Accept that something, somewhere, is wrong. <em>Nobody</em> at <em>any</em> level is immune to these mistakes, so don&#39;t get offended and think, &quot;Of course I did that!&quot; and skip a step!</p>',4),p=e("Continue"),b=t("h2",{id:"_1-0-0-are-both-packs-active",tabindex:"-1"},[e("1.0.0 - Are both packs active? "),t("a",{class:"header-anchor",href:"#_1-0-0-are-both-packs-active","aria-hidden":"true"},"#")],-1),_=t("p",null,"Make sure both the resource pack and behavior pack are active for the world (an excellent way to avoid accidentally having this issue is to set each pack as a dependency of the other in both packs' manifest.json files so that adding or removing one of the packs automatically adds/removes the other)",-1),f=e("Continue"),m=t("h2",{id:"_2-0-0-determine-whether-the-issue-is-in-the-rp-or-the-bp",tabindex:"-1"},[e("2.0.0 - Determine whether the issue is in the RP or the BP "),t("a",{class:"header-anchor",href:"#_2-0-0-determine-whether-the-issue-is-in-the-rp-or-the-bp","aria-hidden":"true"},"#")],-1),g=t("p",null,"The issue you're suffering can be narrowed down significantly by how your entity's spawn egg appears in the creative inventory. Even if you don't want the entity to have a spawn egg, make the following changes just for now until you locate the issue:",-1),y=t("h3",{id:"in-the-rp",tabindex:"-1"},[e("In the RP "),t("a",{class:"header-anchor",href:"#in-the-rp","aria-hidden":"true"},"#")],-1),v=t("p",null,"Make sure the .entity file has a custom spawn_egg object like:",-1),w=a(`<div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;spawn_egg&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token property">&quot;base_color&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#FF0000&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;overlay_color&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#FFFF00&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>The colors you choose will need to be something other than &quot;#000000&quot; for this guide.</p><h3 id="in-the-bp" tabindex="-1">In the BP <a class="header-anchor" href="#in-the-bp" aria-hidden="true">#</a></h3><p>Make sure <code>is_spawnable</code> and <code>is_summonable</code> are set to true, and that <code>is_experimental</code> is set to <code>false</code> in the description object:</p>`,4),k=a(`<div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;description&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token property">&quot;identifier&quot;</span><span class="token operator">:</span> <span class="token string">&quot;wiki:example_entity&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;is_spawnable&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;is_summonable&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;is_experimental&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="results" tabindex="-1">Results <a class="header-anchor" href="#results" aria-hidden="true">#</a></h3>`,2),x=e("I don't see a spawn egg at all: "),T=e("Go"),q=e("I see a spawn egg for my entity, but it's just black, and the entity doesn't appear when I spawn or summon it: "),I=e("Go"),S=e("I see a spawn egg for my entity, and it has the colors I chose, but the entity still doesn't appear when I spawn or summon it: "),P=e("Go"),A=a('<h2 id="_3-0-0-locating-the-specific-issue" tabindex="-1">3.0.0 - Locating the specific issue <a class="header-anchor" href="#_3-0-0-locating-the-specific-issue" aria-hidden="true">#</a></h2><h2 id="_3-1-0-bp" tabindex="-1">3.1.0 - BP <a class="header-anchor" href="#_3-1-0-bp" aria-hidden="true">#</a></h2><p><em>You don&#39;t see a spawn egg for your entity in the creative inventory, even after making sure &quot;is_spawnable&quot; is set to true in the behavior file.</em></p><p>This means the game isn&#39;t detecting a behavior file for the entity at all. Some common reasons for this include:</p><ul><li>Syntax error in your behavior file</li><li>Misnamed folder</li></ul><h3 id="_3-1-1-syntax-error" tabindex="-1">3.1.1 - Syntax error <a class="header-anchor" href="#_3-1-1-syntax-error" aria-hidden="true">#</a></h3><p>A single syntax error in a .json file causes the entire file to break and be ignored. To check that your file is free of syntax errors, visit <a href="https://jsonlint.com/" target="_blank" rel="noopener noreferrer">Json Lint</a>, paste the contents of your behavior file into the big box, then click &quot;Validate JSON&quot;. (NOTE: Although this site will mark // comments as errors, Minecraft DOES allow .json files to contain them)</p><h3 id="_3-1-2-misnamed-folder" tabindex="-1">3.1.2 - Misnamed folder <a class="header-anchor" href="#_3-1-2-misnamed-folder" aria-hidden="true">#</a></h3><p>Ensure the folder containing your behavior files is named &quot;entities&quot; and not &quot;entity&quot;. In behavior packs, folders tend to be named &quot;entities&quot; while in resource packs, they&#39;ll usually be &quot;entity&quot;. I know. It isn&#39;t enjoyable.</p><h2 id="step-3-2-0-rp-entity" tabindex="-1">Step 3.2.0 - RP .entity <a class="header-anchor" href="#step-3-2-0-rp-entity" aria-hidden="true">#</a></h2><p><em>You DO see a spawn egg for your entity in the creative inventory, but it&#39;s black (and probably has a weird name like &quot;item.spawn_egg.entity.wiki:your_mob.name&quot;), and nothing appears when you spawn/summon it.</em></p><p>This means you have a working behavior file, but for whatever reason, the game isn&#39;t connecting it to the corresponding .entity file in your resource pack. Some common reasons for this include:</p><ul><li>Syntax error in your .entity file</li><li>The entity&#39;s identifiers don&#39;t match</li><li>One or more of the resources your .entity file directs to are invalid</li></ul><h3 id="step-3-2-1-syntax-error" tabindex="-1">Step 3.2.1 - Syntax error <a class="header-anchor" href="#step-3-2-1-syntax-error" aria-hidden="true">#</a></h3><p>A single syntax error in a .json file causes the entire file to break and be ignored. To check that your file is free of syntax errors, visit <a href="https://jsonlint.com/" target="_blank" rel="noopener noreferrer">Json Lint</a>, paste the contents of your behavior file into the big box, then click &quot;Validate JSON&quot;. (NOTE: Although this site will mark // comments as errors, Minecraft DOES allow .json files to contain them)</p><h3 id="step-3-2-2-identifiers-don-t-match" tabindex="-1">Step 3.2.2 - Identifiers don&#39;t match <a class="header-anchor" href="#step-3-2-2-identifiers-don-t-match" aria-hidden="true">#</a></h3><p>The &quot;identifier&quot; in your behavior file must be EXACTLY the same as the one in your .entity file, including the namespace (the part before the colon like <code>minecraft</code> in <code>minecraft:bat</code>), and neither should be using <code>minecraft</code> as the namespace unless it&#39;s a default mob.</p><p>Your identifiers should also NOT contain any spaces or special characters (aside from the colon between the namespace and ID), and, for rare fringe case bug reasons, you should AVOID having the namespace or ID start with anything other than a lowercase letter. Beginning with a number or capital letter <em>shouldn&#39;t</em> be an issue anymore, but this was not always the case in earlier versions of the game, and because of this, bugs have sporadically appeared in the past where starting with a number or capital letter had unexpected effects. Therefore it&#39;s better to avoid this if possible.</p><h3 id="step-3-2-3-invalid-resources" tabindex="-1">Step 3.2.3 - Invalid resources <a class="header-anchor" href="#step-3-2-3-invalid-resources" aria-hidden="true">#</a></h3><p>The entity&#39;s ID in the .entity file does not match the ID you used in the behavior file.</p><h2 id="step-3-3-0-rp-resources-wip" tabindex="-1">Step 3.3.0 - RP resources: (WIP) <a class="header-anchor" href="#step-3-3-0-rp-resources-wip" aria-hidden="true">#</a></h2><p><em>You DO see a spawn egg for your entity in the creative inventory, and it DOES have the proper colors you specified in the .entity file&#39;s &quot;spawn_egg&quot; object, but nothing appears when you spawn/summon it, or there&#39;s just a shadow.</em></p><p>This means you have a working <code>.behavior</code> and <code>.entity</code> file, but something in the <code>.entity</code> file directs to either a broken file or another valid file that leads to a broken file.</p><p>To start with:</p>',24),V=e("invisible, no shadow -> bad RP reference: "),C=e("Go"),D=e("invisible, shadow exists -> geometry issue: "),E=e("Go"),N=e("visible, weird texture -> texture issue: "),R=e("Go"),j=e("visible, weird visibility stuff -> material issue: "),B=e("Go"),O=a('<h3 id="_3-3-1-invisible-no-shadow" tabindex="-1">3.3.1 - Invisible, no shadow <a class="header-anchor" href="#_3-3-1-invisible-no-shadow" aria-hidden="true">#</a></h3><p>This can be caused by ... . First make sure your entity is in it&#39;s place (not disappearing, for example it does not do instant_despawn).</p><h3 id="_3-3-2-invisible-shadow-exists" tabindex="-1">3.3.2 - Invisible, shadow exists <a class="header-anchor" href="#_3-3-2-invisible-shadow-exists" aria-hidden="true">#</a></h3><p>This situation can be caused by wrong geometry or wrong material (if using half-transparent a.k.a glowing textures).</p><ol><li>Make sure you don&#39;t have a spelling error in geometry name, geometry file is valid and geometry offsets are correct.</li><li>Make sure you are using the right material. For example, some materials support only emissive textures.</li><li>Check your render controllers. Maybe the issue is in it.</li></ol><h3 id="_3-3-3-visible-weird-texture" tabindex="-1">3.3.3 - Visible, weird texture <a class="header-anchor" href="#_3-3-3-visible-weird-texture" aria-hidden="true">#</a></h3><h3 id="_3-3-4-visible-weird-visibility-stuff" tabindex="-1">3.3.4 - Visible, weird visibility stuff <a class="header-anchor" href="#_3-3-4-visible-weird-visibility-stuff" aria-hidden="true">#</a></h3>',7);function M(G,F,Y,L,J,$){const i=r("BButton"),o=r("CodeHeader");return d(),h("div",null,[u,s(i,{color:"blue",link:"#_1-0-0-are-both-packs-active"},{default:n(()=>[p]),_:1}),b,_,s(i,{color:"blue",link:"#_2-0-0-determine-whether-the-issue-is-in-the-rp-or-the-bp"},{default:n(()=>[f]),_:1}),m,g,y,v,s(o),w,s(o),k,t("p",null,[x,s(i,{color:"blue",link:"#_3-1-0-bp"},{default:n(()=>[T]),_:1})]),t("p",null,[q,s(i,{color:"blue",link:"#step-3-2-0-rp-entity"},{default:n(()=>[I]),_:1})]),t("p",null,[S,s(i,{color:"blue",link:"#step-3-3-0-rp-resources-still-writing-because-this-is-going-to-be-extensive"},{default:n(()=>[P]),_:1})]),A,t("ul",null,[t("li",null,[V,s(i,{link:"#_3-3-1-invisible-no-shadow",color:"blue"},{default:n(()=>[C]),_:1})]),t("li",null,[D,s(i,{link:"#_3-3-2-invisible-shadow-exists",color:"blue"},{default:n(()=>[E]),_:1})]),t("li",null,[N,s(i,{link:"#_3-3-3-visible-weird-texture",color:"blue"},{default:n(()=>[R]),_:1})]),t("li",null,[j,s(i,{link:"#_3-3-4-visible-weird-visibility-stuff",color:"blue"},{default:n(()=>[B]),_:1})])]),O])}var X=l(c,[["render",M]]);export{H as __pageData,X as default};