import{r as n,o as s,c as a,a as p,w as t,b as e,d as o}from"./404.md.dbdaa072.js";const l='{"title":"Create a custom Entity","description":"","frontmatter":{"title":"Create a custom Entity","nav_order":5,"number":"5."},"headers":[{"level":2,"title":"Behavior code","slug":"behavior-code"},{"level":2,"title":"Resource code","slug":"resource-code"},{"level":2,"title":"Visuals","slug":"visuals"},{"level":3,"title":"Texture","slug":"texture"},{"level":3,"title":"Model","slug":"model"},{"level":3,"title":"Animations","slug":"animations"},{"level":3,"title":"Animation Controller","slug":"animation-controller"},{"level":3,"title":"Entity name","slug":"entity-name"},{"level":2,"title":"Your progress so far:","slug":"your-progress-so-far"}],"relativePath":"guide/custom-entity.md","lastUpdated":1626430853500}',c={},r=p("p",null,"Last time you created a custom item for this custom entity to drop. This time you will create the Ghost itself, as promised.",-1),u=p("h2",{id:"behavior-code"},[p("a",{class:"header-anchor",href:"#behavior-code","aria-hidden":"true"},"#"),e(" Behavior code")],-1),i=p("p",null,[e("Just like with items, the main files of a custom entity are its RP and BP files. We'll start with the latter in the "),p("code",null,"BP/entities/"),e(" folder: (the "),p("code",null,".e"),e(" suffix after the entity's name specifies that this JSON is an entity file. Recommended in the "),p("a",{href:"./.html"},"Style Guide"),e(".")],-1),k=e("BP/entities/ghost.e.json"),b=o('',4),m=e("RP/entity/ghost.e.json"),q=o('',7),d=e("RP/render_controllers/entity/ghost.rc.json"),h=o('',9),y=e("RP/models/entity/ghost.geo.json"),g=o('',4),f=e("RP/animations/ghost.a.json"),_=o('',4),v=e("RP/animation_controllers/ghost.ac.json"),w=o('',16);c.render=function(e,o,l,c,x,T){const A=n("CodeHeader");return s(),a("div",null,[r,u,i,p(A,null,{default:t((()=>[k])),_:1}),b,p(A,null,{default:t((()=>[m])),_:1}),q,p(A,null,{default:t((()=>[d])),_:1}),h,p(A,null,{default:t((()=>[y])),_:1}),g,p(A,null,{default:t((()=>[f])),_:1}),_,p(A,null,{default:t((()=>[v])),_:1}),w])};export default c;export{l as __pageData};