if(!self.define){let s,e={};const l=(l,n)=>(l=new URL(l+".js",n).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(n,i)=>{const a=s||("document"in self?document.currentScript.src:"")||location.href;if(e[a])return;let t={};const r=s=>l(s,a),u={module:{uri:a},exports:t,require:r};e[a]=Promise.all(n.map((s=>u[s]||r(s)))).then((s=>(i(...s),t)))}}define(["./workbox-3625d7b0"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/404.md.5c32d6e1.js",revision:null},{url:"assets/404.md.5c32d6e1.lean.js",revision:null},{url:"assets/animation-controllers_afk-animation-controller.md.a62f5125.js",revision:null},{url:"assets/animation-controllers_afk-animation-controller.md.a62f5125.lean.js",revision:null},{url:"assets/animation-controllers_animation-controllers-intro.md.b3171c74.js",revision:null},{url:"assets/animation-controllers_animation-controllers-intro.md.b3171c74.lean.js",revision:null},{url:"assets/animation-controllers_death-commands.md.c41ebb91.js",revision:null},{url:"assets/animation-controllers_death-commands.md.c41ebb91.lean.js",revision:null},{url:"assets/animation-controllers_entity-commands.md.8760fc34.js",revision:null},{url:"assets/animation-controllers_entity-commands.md.8760fc34.lean.js",revision:null},{url:"assets/animation-controllers_index.md.90a49411.js",revision:null},{url:"assets/animation-controllers_index.md.90a49411.lean.js",revision:null},{url:"assets/animation-controllers_molang-into-scoreboard.md.c6a65f09.js",revision:null},{url:"assets/animation-controllers_molang-into-scoreboard.md.c6a65f09.lean.js",revision:null},{url:"assets/animation-controllers_respawn-commands.md.c3ca8a52.js",revision:null},{url:"assets/animation-controllers_respawn-commands.md.c3ca8a52.lean.js",revision:null},{url:"assets/app.5103f93a.js",revision:null},{url:"assets/blocks_applying-effects.md.e9ce2044.js",revision:null},{url:"assets/blocks_applying-effects.md.e9ce2044.lean.js",revision:null},{url:"assets/blocks_block-materials.md.0c9f9595.js",revision:null},{url:"assets/blocks_block-materials.md.0c9f9595.lean.js",revision:null},{url:"assets/blocks_block-shapes.md.c7171a76.js",revision:null},{url:"assets/blocks_block-shapes.md.c7171a76.lean.js",revision:null},{url:"assets/blocks_block-sounds.md.1b530102.js",revision:null},{url:"assets/blocks_block-sounds.md.1b530102.lean.js",revision:null},{url:"assets/blocks_block-tags.md.b8a953a1.js",revision:null},{url:"assets/blocks_block-tags.md.b8a953a1.lean.js",revision:null},{url:"assets/blocks_block-texture-variation.md.691bc2f6.js",revision:null},{url:"assets/blocks_block-texture-variation.md.691bc2f6.lean.js",revision:null},{url:"assets/blocks_blocks-experimental.md.642f2911.js",revision:null},{url:"assets/blocks_blocks-experimental.md.642f2911.lean.js",revision:null},{url:"assets/blocks_blocks-intro.md.ae0b0e83.js",revision:null},{url:"assets/blocks_blocks-intro.md.ae0b0e83.lean.js",revision:null},{url:"assets/blocks_blocks-stable.md.c4d9d58e.js",revision:null},{url:"assets/blocks_blocks-stable.md.c4d9d58e.lean.js",revision:null},{url:"assets/blocks_custom-crops.md.4759d9bd.js",revision:null},{url:"assets/blocks_custom-crops.md.4759d9bd.lean.js",revision:null},{url:"assets/blocks_custom-fluids.md.45924b66.js",revision:null},{url:"assets/blocks_custom-fluids.md.45924b66.lean.js",revision:null},{url:"assets/blocks_custom-glass-blocks.md.f3b00c1a.js",revision:null},{url:"assets/blocks_custom-glass-blocks.md.f3b00c1a.lean.js",revision:null},{url:"assets/blocks_custom-tree.md.4e2b93db.js",revision:null},{url:"assets/blocks_custom-tree.md.4e2b93db.lean.js",revision:null},{url:"assets/blocks_fake-blocks.md.5a39f9d5.js",revision:null},{url:"assets/blocks_fake-blocks.md.5a39f9d5.lean.js",revision:null},{url:"assets/blocks_flipbook-textures.md.35260647.js",revision:null},{url:"assets/blocks_flipbook-textures.md.35260647.lean.js",revision:null},{url:"assets/blocks_head-like-rotation.md.4237a115.js",revision:null},{url:"assets/blocks_head-like-rotation.md.4237a115.lean.js",revision:null},{url:"assets/blocks_index.md.465137c3.js",revision:null},{url:"assets/blocks_index.md.465137c3.lean.js",revision:null},{url:"assets/blocks_legacy-block-tags.md.d4438e83.js",revision:null},{url:"assets/blocks_legacy-block-tags.md.d4438e83.lean.js",revision:null},{url:"assets/blocks_ore-loot-tables.md.6c7b941a.js",revision:null},{url:"assets/blocks_ore-loot-tables.md.6c7b941a.lean.js",revision:null},{url:"assets/blocks_rotatable-blocks.md.d90d7528.js",revision:null},{url:"assets/blocks_rotatable-blocks.md.d90d7528.lean.js",revision:null},{url:"assets/blocks_troubleshooting-blocks.md.14deb821.js",revision:null},{url:"assets/blocks_troubleshooting-blocks.md.14deb821.lean.js",revision:null},{url:"assets/chunks/3.035a77e6.js",revision:null},{url:"assets/chunks/4.bf191be1.js",revision:null},{url:"assets/chunks/AlgoliaSearch.f573e1f5.js",revision:null},{url:"assets/chunks/compound.3f8f82ad.js",revision:null},{url:"assets/chunks/content_log.09e62547.js",revision:null},{url:"assets/chunks/Contributors.df481593.js",revision:null},{url:"assets/chunks/gametick.8221204e.js",revision:null},{url:"assets/chunks/settings_2.b0f9bbd3.js",revision:null},{url:"assets/chunks/snippets.5bdbd1d4.js",revision:null},{url:"assets/chunks/structure.a9b5a4fc.js",revision:null},{url:"assets/commands_block-states.md.b148e8b5.js",revision:null},{url:"assets/commands_block-states.md.b148e8b5.lean.js",revision:null},{url:"assets/commands_damage.md.b88ed697.js",revision:null},{url:"assets/commands_damage.md.b88ed697.lean.js",revision:null},{url:"assets/commands_entity-counter.md.25ade9da.js",revision:null},{url:"assets/commands_entity-counter.md.25ade9da.lean.js",revision:null},{url:"assets/commands_index.md.98247a94.js",revision:null},{url:"assets/commands_index.md.98247a94.lean.js",revision:null},{url:"assets/commands_intro-to-command-blocks.md.67dc68d4.js",revision:null},{url:"assets/commands_intro-to-command-blocks.md.67dc68d4.lean.js",revision:null},{url:"assets/commands_mcfunctions.md.cc19a0ad.js",revision:null},{url:"assets/commands_mcfunctions.md.cc19a0ad.lean.js",revision:null},{url:"assets/commands_nbt-commands.md.f02b8ce3.js",revision:null},{url:"assets/commands_nbt-commands.md.f02b8ce3.lean.js",revision:null},{url:"assets/commands_new-execute.md.a5a45128.js",revision:null},{url:"assets/commands_new-execute.md.a5a45128.lean.js",revision:null},{url:"assets/commands_on-first-join.md.73604c90.js",revision:null},{url:"assets/commands_on-first-join.md.73604c90.lean.js",revision:null},{url:"assets/commands_on-first-world-load.md.c4e7520d.js",revision:null},{url:"assets/commands_on-first-world-load.md.c4e7520d.lean.js",revision:null},{url:"assets/commands_on-player-death.md.aa91034f.js",revision:null},{url:"assets/commands_on-player-death.md.aa91034f.lean.js",revision:null},{url:"assets/commands_on-player-join.md.20767679.js",revision:null},{url:"assets/commands_on-player-join.md.20767679.lean.js",revision:null},{url:"assets/commands_on-player-leave.md.8cfd6094.js",revision:null},{url:"assets/commands_on-player-leave.md.8cfd6094.lean.js",revision:null},{url:"assets/commands_on-player-respawn.md.4328deb4.js",revision:null},{url:"assets/commands_on-player-respawn.md.4328deb4.lean.js",revision:null},{url:"assets/commands_playsound.md.11604149.js",revision:null},{url:"assets/commands_playsound.md.11604149.lean.js",revision:null},{url:"assets/commands_relative-coordinates.md.599a066a.js",revision:null},{url:"assets/commands_relative-coordinates.md.599a066a.lean.js",revision:null},{url:"assets/commands_scoreboard-operations.md.5684554d.js",revision:null},{url:"assets/commands_scoreboard-operations.md.5684554d.lean.js",revision:null},{url:"assets/commands_scoreboard-timers.md.8805a35f.js",revision:null},{url:"assets/commands_scoreboard-timers.md.8805a35f.lean.js",revision:null},{url:"assets/commands_selectors.md.ad45e93f.js",revision:null},{url:"assets/commands_selectors.md.ad45e93f.lean.js",revision:null},{url:"assets/commands_tellraw.md.3476c461.js",revision:null},{url:"assets/commands_tellraw.md.3476c461.lean.js",revision:null},{url:"assets/concepts_contents.md.401df96e.js",revision:null},{url:"assets/concepts_contents.md.401df96e.lean.js",revision:null},{url:"assets/concepts_emojis.md.b1ea1957.js",revision:null},{url:"assets/concepts_emojis.md.b1ea1957.lean.js",revision:null},{url:"assets/concepts_index.md.a8ecec8b.js",revision:null},{url:"assets/concepts_index.md.a8ecec8b.lean.js",revision:null},{url:"assets/concepts_molang.md.baa0fd97.js",revision:null},{url:"assets/concepts_molang.md.baa0fd97.lean.js",revision:null},{url:"assets/concepts_namespaces.md.3dbfc976.js",revision:null},{url:"assets/concepts_namespaces.md.3dbfc976.lean.js",revision:null},{url:"assets/concepts_overwriting-assets.md.16b9da7d.js",revision:null},{url:"assets/concepts_overwriting-assets.md.16b9da7d.lean.js",revision:null},{url:"assets/concepts_shaders.md.7733c34a.js",revision:null},{url:"assets/concepts_shaders.md.7733c34a.lean.js",revision:null},{url:"assets/concepts_sounds.md.8dcb5e60.js",revision:null},{url:"assets/concepts_sounds.md.8dcb5e60.lean.js",revision:null},{url:"assets/concepts_subpacks.md.04073a65.js",revision:null},{url:"assets/concepts_subpacks.md.04073a65.lean.js",revision:null},{url:"assets/concepts_text-and-translations.md.abef748d.js",revision:null},{url:"assets/concepts_text-and-translations.md.abef748d.lean.js",revision:null},{url:"assets/concepts_textures-list.md.c4ca33d1.js",revision:null},{url:"assets/concepts_textures-list.md.c4ca33d1.lean.js",revision:null},{url:"assets/contribute-how-to.md.c02bc17e.js",revision:null},{url:"assets/contribute-how-to.md.c02bc17e.lean.js",revision:null},{url:"assets/contribute-style.md.bfb8e572.js",revision:null},{url:"assets/contribute-style.md.bfb8e572.lean.js",revision:null},{url:"assets/contribute.md.0a1bf599.js",revision:null},{url:"assets/contribute.md.0a1bf599.lean.js",revision:null},{url:"assets/discord.md.6d0c9ed1.js",revision:null},{url:"assets/discord.md.6d0c9ed1.lean.js",revision:null},{url:"assets/documentation_advanced-molang.md.5b296db8.js",revision:null},{url:"assets/documentation_advanced-molang.md.5b296db8.lean.js",revision:null},{url:"assets/documentation_creative-categories.md.178c3446.js",revision:null},{url:"assets/documentation_creative-categories.md.178c3446.lean.js",revision:null},{url:"assets/documentation_file-types.md.19b24e4f.js",revision:null},{url:"assets/documentation_file-types.md.19b24e4f.lean.js",revision:null},{url:"assets/documentation_fog-ids.md.d14850bb.js",revision:null},{url:"assets/documentation_fog-ids.md.d14850bb.lean.js",revision:null},{url:"assets/documentation_index.md.a2b5b4e8.js",revision:null},{url:"assets/documentation_index.md.a2b5b4e8.lean.js",revision:null},{url:"assets/documentation_material-config-description.md.3487d994.js",revision:null},{url:"assets/documentation_material-config-description.md.3487d994.lean.js",revision:null},{url:"assets/documentation_materials.md.84dfbb68.js",revision:null},{url:"assets/documentation_materials.md.84dfbb68.lean.js",revision:null},{url:"assets/documentation_pack-structure.md.d4598626.js",revision:null},{url:"assets/documentation_pack-structure.md.d4598626.lean.js",revision:null},{url:"assets/documentation_projectiles.md.61f0ec88.js",revision:null},{url:"assets/documentation_projectiles.md.61f0ec88.lean.js",revision:null},{url:"assets/documentation_queries.md.7b53e4b9.js",revision:null},{url:"assets/documentation_queries.md.7b53e4b9.lean.js",revision:null},{url:"assets/documentation_shared-constructs.md.34b742b8.js",revision:null},{url:"assets/documentation_shared-constructs.md.34b742b8.lean.js",revision:null},{url:"assets/documentation_sound-definitions.md.da76987e.js",revision:null},{url:"assets/documentation_sound-definitions.md.da76987e.lean.js",revision:null},{url:"assets/entities_boat-entities.md.269a63da.js",revision:null},{url:"assets/entities_boat-entities.md.269a63da.lean.js",revision:null},{url:"assets/entities_detecting-other-entities.md.5ed26478.js",revision:null},{url:"assets/entities_detecting-other-entities.md.5ed26478.lean.js",revision:null},{url:"assets/entities_disabling-team-damage.md.0af805d2.js",revision:null},{url:"assets/entities_disabling-team-damage.md.0af805d2.lean.js",revision:null},{url:"assets/entities_dummy-components.md.1b5470b2.js",revision:null},{url:"assets/entities_dummy-components.md.1b5470b2.lean.js",revision:null},{url:"assets/entities_dummy-entities.md.65e803f7.js",revision:null},{url:"assets/entities_dummy-entities.md.65e803f7.lean.js",revision:null},{url:"assets/entities_entity-attack.md.96fa363e.js",revision:null},{url:"assets/entities_entity-attack.md.96fa363e.lean.js",revision:null},{url:"assets/entities_entity-events.md.f7682088.js",revision:null},{url:"assets/entities_entity-events.md.f7682088.lean.js",revision:null},{url:"assets/entities_entity-holds-item.md.1f519529.js",revision:null},{url:"assets/entities_entity-holds-item.md.1f519529.lean.js",revision:null},{url:"assets/entities_entity-intro-bp.md.7feef483.js",revision:null},{url:"assets/entities_entity-intro-bp.md.7feef483.lean.js",revision:null},{url:"assets/entities_entity-intro-rp.md.8e59aa15.js",revision:null},{url:"assets/entities_entity-intro-rp.md.8e59aa15.lean.js",revision:null},{url:"assets/entities_entity-movement.md.c4bfe777.js",revision:null},{url:"assets/entities_entity-movement.md.c4bfe777.lean.js",revision:null},{url:"assets/entities_entity-properties.md.859d464d.js",revision:null},{url:"assets/entities_entity-properties.md.859d464d.lean.js",revision:null},{url:"assets/entities_flying-entities.md.756df132.js",revision:null},{url:"assets/entities_flying-entities.md.756df132.lean.js",revision:null},{url:"assets/entities_index.md.4a472ef9.js",revision:null},{url:"assets/entities_index.md.4a472ef9.lean.js",revision:null},{url:"assets/entities_introduction-to-aec.md.5ec02407.js",revision:null},{url:"assets/entities_introduction-to-aec.md.5ec02407.lean.js",revision:null},{url:"assets/entities_invulnerable-entities.md.e000009f.js",revision:null},{url:"assets/entities_invulnerable-entities.md.e000009f.lean.js",revision:null},{url:"assets/entities_look-at-entity.md.c5ae69fb.js",revision:null},{url:"assets/entities_look-at-entity.md.c5ae69fb.lean.js",revision:null},{url:"assets/entities_non-mob-runtime-identifiers.md.4e11b0d3.js",revision:null},{url:"assets/entities_non-mob-runtime-identifiers.md.4e11b0d3.lean.js",revision:null},{url:"assets/entities_npc-dialogs.md.87ee1702.js",revision:null},{url:"assets/entities_npc-dialogs.md.87ee1702.lean.js",revision:null},{url:"assets/entities_render-controllers.md.9b08ae99.js",revision:null},{url:"assets/entities_render-controllers.md.9b08ae99.lean.js",revision:null},{url:"assets/entities_runtime-identifier.md.f247acaa.js",revision:null},{url:"assets/entities_runtime-identifier.md.f247acaa.lean.js",revision:null},{url:"assets/entities_sleeping-entities.md.eb2b02f5.js",revision:null},{url:"assets/entities_sleeping-entities.md.eb2b02f5.lean.js",revision:null},{url:"assets/entities_solid-entities.md.f314b1b4.js",revision:null},{url:"assets/entities_solid-entities.md.f314b1b4.lean.js",revision:null},{url:"assets/entities_spawn-rules.md.84a92dd3.js",revision:null},{url:"assets/entities_spawn-rules.md.84a92dd3.lean.js",revision:null},{url:"assets/entities_spawning-tamed-entities.md.bf203919.js",revision:null},{url:"assets/entities_spawning-tamed-entities.md.bf203919.lean.js",revision:null},{url:"assets/entities_timers.md.570be51a.js",revision:null},{url:"assets/entities_timers.md.570be51a.lean.js",revision:null},{url:"assets/entities_troubleshooting-entities.md.7a28e2f7.js",revision:null},{url:"assets/entities_troubleshooting-entities.md.7a28e2f7.lean.js",revision:null},{url:"assets/entities_vanilla-usage-spawn-rules.md.141cb802.js",revision:null},{url:"assets/entities_vanilla-usage-spawn-rules.md.141cb802.lean.js",revision:null},{url:"assets/entities_village-mechanic.md.c90017f8.js",revision:null},{url:"assets/entities_village-mechanic.md.c90017f8.lean.js",revision:null},{url:"assets/entities_vuc-full.md.bafeeb6e.lean.js",revision:null},{url:"assets/entities_vusr-full.md.389b4165.js",revision:null},{url:"assets/entities_vusr-full.md.389b4165.lean.js",revision:null},{url:"assets/graph-test.md.138f1946.js",revision:null},{url:"assets/graph-test.md.138f1946.lean.js",revision:null},{url:"assets/guide_addons.md.a4e8e0ac.js",revision:null},{url:"assets/guide_addons.md.a4e8e0ac.lean.js",revision:null},{url:"assets/guide_advancedmanifest.md.1fc44d8f.js",revision:null},{url:"assets/guide_advancedmanifest.md.1fc44d8f.lean.js",revision:null},{url:"assets/guide_blockbench.md.1b9ce51e.js",revision:null},{url:"assets/guide_blockbench.md.1b9ce51e.lean.js",revision:null},{url:"assets/guide_custom-entity.md.8429bfdd.js",revision:null},{url:"assets/guide_custom-entity.md.8429bfdd.lean.js",revision:null},{url:"assets/guide_custom-item.md.af31cded.js",revision:null},{url:"assets/guide_custom-item.md.af31cded.lean.js",revision:null},{url:"assets/guide_download-packs.md.1f906c02.js",revision:null},{url:"assets/guide_download-packs.md.1f906c02.lean.js",revision:null},{url:"assets/guide_format-version.md.74bf7e63.js",revision:null},{url:"assets/guide_format-version.md.74bf7e63.lean.js",revision:null},{url:"assets/guide_index.md.4323fb7f.js",revision:null},{url:"assets/guide_index.md.4323fb7f.lean.js",revision:null},{url:"assets/guide_introduction.md.2de36180.js",revision:null},{url:"assets/guide_introduction.md.2de36180.lean.js",revision:null},{url:"assets/guide_loot-table.md.4363ca69.js",revision:null},{url:"assets/guide_loot-table.md.4363ca69.lean.js",revision:null},{url:"assets/guide_project-setup-android.md.19e92abf.js",revision:null},{url:"assets/guide_project-setup-android.md.19e92abf.lean.js",revision:null},{url:"assets/guide_project-setup.md.552bf612.js",revision:null},{url:"assets/guide_project-setup.md.552bf612.lean.js",revision:null},{url:"assets/guide_software-preparation.md.ca62cee8.js",revision:null},{url:"assets/guide_software-preparation.md.ca62cee8.lean.js",revision:null},{url:"assets/guide_troubleshooting.md.f85e0c55.js",revision:null},{url:"assets/guide_troubleshooting.md.f85e0c55.lean.js",revision:null},{url:"assets/guide_understanding-json.md.b9da6b6a.js",revision:null},{url:"assets/guide_understanding-json.md.b9da6b6a.lean.js",revision:null},{url:"assets/hacktoberfest.md.4f1f4be3.js",revision:null},{url:"assets/hacktoberfest.md.4f1f4be3.lean.js",revision:null},{url:"assets/index.md.8343f165.js",revision:null},{url:"assets/index.md.8343f165.lean.js",revision:null},{url:"assets/items_attachables.md.6f4cd31a.js",revision:null},{url:"assets/items_attachables.md.6f4cd31a.lean.js",revision:null},{url:"assets/items_custom-armor.md.25721360.js",revision:null},{url:"assets/items_custom-armor.md.25721360.lean.js",revision:null},{url:"assets/items_custom-weapon.md.9fa73d28.js",revision:null},{url:"assets/items_custom-weapon.md.9fa73d28.lean.js",revision:null},{url:"assets/items_enchantments.md.60c731c3.js",revision:null},{url:"assets/items_enchantments.md.60c731c3.lean.js",revision:null},{url:"assets/items_equipped-item-commands.md.0955f1d8.js",revision:null},{url:"assets/items_equipped-item-commands.md.0955f1d8.lean.js",revision:null},{url:"assets/items_index.md.4586f4b3.js",revision:null},{url:"assets/items_index.md.4586f4b3.lean.js",revision:null},{url:"assets/items_item-identifiers.md.04a2547b.js",revision:null},{url:"assets/items_item-identifiers.md.04a2547b.lean.js",revision:null},{url:"assets/items_items-16.md.8f8ae2eb.js",revision:null},{url:"assets/items_items-16.md.8f8ae2eb.lean.js",revision:null},{url:"assets/items_items-intro.md.88e6bd6f.js",revision:null},{url:"assets/items_items-intro.md.88e6bd6f.lean.js",revision:null},{url:"assets/items_spawning-items.md.4dbfdef3.js",revision:null},{url:"assets/items_spawning-items.md.4dbfdef3.lean.js",revision:null},{url:"assets/items_spear.md.62aefd3f.js",revision:null},{url:"assets/items_spear.md.62aefd3f.lean.js",revision:null},{url:"assets/items_throwable.md.a3d9f719.js",revision:null},{url:"assets/items_throwable.md.a3d9f719.lean.js",revision:null},{url:"assets/items_tool-durability.md.c68197d3.js",revision:null},{url:"assets/items_tool-durability.md.c68197d3.lean.js",revision:null},{url:"assets/items_troubleshooting-items.md.bbc8fb8c.js",revision:null},{url:"assets/items_troubleshooting-items.md.bbc8fb8c.lean.js",revision:null},{url:"assets/items_vanilla-usage-items.md.0ab2fcca.js",revision:null},{url:"assets/items_vanilla-usage-items.md.0ab2fcca.lean.js",revision:null},{url:"assets/items_vui-full.md.1084923b.js",revision:null},{url:"assets/items_vui-full.md.1084923b.lean.js",revision:null},{url:"assets/json-ui_add-hud-elements.md.607c800f.js",revision:null},{url:"assets/json-ui_add-hud-elements.md.607c800f.lean.js",revision:null},{url:"assets/json-ui_aseprite-animations.md.bf5d3100.js",revision:null},{url:"assets/json-ui_aseprite-animations.md.bf5d3100.lean.js",revision:null},{url:"assets/json-ui_best-practices.md.0fb0c364.js",revision:null},{url:"assets/json-ui_best-practices.md.0fb0c364.lean.js",revision:null},{url:"assets/json-ui_index.md.790c6b1f.js",revision:null},{url:"assets/json-ui_index.md.790c6b1f.lean.js",revision:null},{url:"assets/json-ui_json-ui-documentation.md.5c22f85f.js",revision:null},{url:"assets/json-ui_json-ui-documentation.md.5c22f85f.lean.js",revision:null},{url:"assets/json-ui_json-ui-intro.md.278efb39.js",revision:null},{url:"assets/json-ui_json-ui-intro.md.278efb39.lean.js",revision:null},{url:"assets/json-ui_preserve-title-texts.md.b9971eef.js",revision:null},{url:"assets/json-ui_preserve-title-texts.md.b9971eef.lean.js",revision:null},{url:"assets/json-ui_string-to-number.md.21a0bae0.js",revision:null},{url:"assets/json-ui_string-to-number.md.21a0bae0.lean.js",revision:null},{url:"assets/loot_index.md.f24463ff.js",revision:null},{url:"assets/loot_index.md.f24463ff.lean.js",revision:null},{url:"assets/loot_item-functions.md.429fe8c1.js",revision:null},{url:"assets/loot_item-functions.md.429fe8c1.lean.js",revision:null},{url:"assets/loot_loot-tables.md.f5c7a422.js",revision:null},{url:"assets/loot_loot-tables.md.f5c7a422.lean.js",revision:null},{url:"assets/loot_randomized-structure-loot.md.5ffd3a3c.js",revision:null},{url:"assets/loot_randomized-structure-loot.md.5ffd3a3c.lean.js",revision:null},{url:"assets/loot_recipes.md.2a5228f3.js",revision:null},{url:"assets/loot_recipes.md.2a5228f3.lean.js",revision:null},{url:"assets/loot_trade-tables.md.77aa4bb6.js",revision:null},{url:"assets/loot_trade-tables.md.77aa4bb6.lean.js",revision:null},{url:"assets/loot_trading-behavior.md.9e609a37.js",revision:null},{url:"assets/loot_trading-behavior.md.9e609a37.lean.js",revision:null},{url:"assets/meta_addon-performance.md.94fc1374.js",revision:null},{url:"assets/meta_addon-performance.md.94fc1374.lean.js",revision:null},{url:"assets/meta_index.md.d83fa0c5.js",revision:null},{url:"assets/meta_index.md.d83fa0c5.lean.js",revision:null},{url:"assets/meta_jq.md.15cf8ae6.js",revision:null},{url:"assets/meta_jq.md.15cf8ae6.lean.js",revision:null},{url:"assets/meta_style-guide.md.6ccb7352.js",revision:null},{url:"assets/meta_style-guide.md.6ccb7352.lean.js",revision:null},{url:"assets/meta_useful-links.md.4bc30289.js",revision:null},{url:"assets/meta_useful-links.md.4bc30289.lean.js",revision:null},{url:"assets/meta_using-schemas.md.584c5e31.js",revision:null},{url:"assets/meta_using-schemas.md.584c5e31.lean.js",revision:null},{url:"assets/meta_version-control.md.a24043b3.js",revision:null},{url:"assets/meta_version-control.md.a24043b3.lean.js",revision:null},{url:"assets/nbt_experimental-education-edition.md.fa44bdf9.js",revision:null},{url:"assets/nbt_experimental-education-edition.md.fa44bdf9.lean.js",revision:null},{url:"assets/nbt_index.md.1b50f275.js",revision:null},{url:"assets/nbt_index.md.1b50f275.lean.js",revision:null},{url:"assets/nbt_mcstructure.md.3e55e30a.js",revision:null},{url:"assets/nbt_mcstructure.md.3e55e30a.lean.js",revision:null},{url:"assets/nbt_nbt-in-depth.md.47303afe.js",revision:null},{url:"assets/nbt_nbt-in-depth.md.47303afe.lean.js",revision:null},{url:"assets/nbt_step-by-step-example.md.638a9934.js",revision:null},{url:"assets/nbt_step-by-step-example.md.638a9934.lean.js",revision:null},{url:"assets/nbt_structure-limits.md.2b4cc23b.js",revision:null},{url:"assets/nbt_structure-limits.md.2b4cc23b.lean.js",revision:null},{url:"assets/particles_disabling-particles.md.47726e9d.js",revision:null},{url:"assets/particles_disabling-particles.md.47726e9d.lean.js",revision:null},{url:"assets/particles_index.md.bdf421b4.js",revision:null},{url:"assets/particles_index.md.bdf421b4.lean.js",revision:null},{url:"assets/particles_particles-and-sounds.md.5e71f15e.js",revision:null},{url:"assets/particles_particles-and-sounds.md.5e71f15e.lean.js",revision:null},{url:"assets/particles_particles.md.1f3e0509.js",revision:null},{url:"assets/particles_particles.md.1f3e0509.lean.js",revision:null},{url:"assets/particles_vanilla-particles.md.89a5443d.js",revision:null},{url:"assets/particles_vanilla-particles.md.89a5443d.lean.js",revision:null},{url:"assets/privacy.md.bbe4e785.js",revision:null},{url:"assets/privacy.md.bbe4e785.lean.js",revision:null},{url:"assets/scripting_api-environment.md.bc5f3611.js",revision:null},{url:"assets/scripting_api-environment.md.bc5f3611.lean.js",revision:null},{url:"assets/scripting_custom-command.md.a0ccdccd.js",revision:null},{url:"assets/scripting_custom-command.md.a0ccdccd.lean.js",revision:null},{url:"assets/scripting_game-tests.md.309e0bdc.js",revision:null},{url:"assets/scripting_game-tests.md.309e0bdc.lean.js",revision:null},{url:"assets/scripting_gametest-form.md.5d47bbee.js",revision:null},{url:"assets/scripting_gametest-form.md.5d47bbee.lean.js",revision:null},{url:"assets/scripting_gametest-qna.md.3b1ad7cb.js",revision:null},{url:"assets/scripting_gametest-qna.md.3b1ad7cb.lean.js",revision:null},{url:"assets/scripting_index.md.8bb08aab.js",revision:null},{url:"assets/scripting_index.md.8bb08aab.lean.js",revision:null},{url:"assets/scripting_resources.md.9ba0eb40.js",revision:null},{url:"assets/scripting_resources.md.9ba0eb40.lean.js",revision:null},{url:"assets/scripting_saving-loading.md.876b003d.js",revision:null},{url:"assets/scripting_saving-loading.md.876b003d.lean.js",revision:null},{url:"assets/scripting_script-modules.md.3ce7f5a8.js",revision:null},{url:"assets/scripting_script-modules.md.3ce7f5a8.lean.js",revision:null},{url:"assets/scripting_script-net.md.abc42741.js",revision:null},{url:"assets/scripting_script-net.md.abc42741.lean.js",revision:null},{url:"assets/scripting_script-server.md.44fd285c.js",revision:null},{url:"assets/scripting_script-server.md.44fd285c.lean.js",revision:null},{url:"assets/scripting_script-watchdog.md.ea41c57d.js",revision:null},{url:"assets/scripting_script-watchdog.md.ea41c57d.lean.js",revision:null},{url:"assets/scripting_scripting-intro.md.7a9d791a.js",revision:null},{url:"assets/scripting_scripting-intro.md.7a9d791a.lean.js",revision:null},{url:"assets/scripting_starting-scripts.md.58d80eb3.js",revision:null},{url:"assets/scripting_starting-scripts.md.58d80eb3.lean.js",revision:null},{url:"assets/scripting_troubleshooting.md.124f9e41.js",revision:null},{url:"assets/scripting_troubleshooting.md.124f9e41.lean.js",revision:null},{url:"assets/scripting_typescript.md.62821f25.js",revision:null},{url:"assets/scripting_typescript.md.62821f25.lean.js",revision:null},{url:"assets/scripting_what-is-script.md.ae8aed54.js",revision:null},{url:"assets/scripting_what-is-script.md.ae8aed54.lean.js",revision:null},{url:"assets/servers_index.md.c08375f4.js",revision:null},{url:"assets/servers_index.md.c08375f4.lean.js",revision:null},{url:"assets/servers_raknet-and-mcpe.md.bb0a490f.js",revision:null},{url:"assets/servers_raknet-and-mcpe.md.bb0a490f.lean.js",revision:null},{url:"assets/servers_server-software.md.f50894a9.js",revision:null},{url:"assets/servers_server-software.md.f50894a9.lean.js",revision:null},{url:"assets/style.4f0fb741.css",revision:null},{url:"assets/test.md.73991712.js",revision:null},{url:"assets/test.md.73991712.lean.js",revision:null},{url:"assets/visuals_animated-entity-texture.md.63931f32.js",revision:null},{url:"assets/visuals_animated-entity-texture.md.63931f32.lean.js",revision:null},{url:"assets/visuals_animation-effects.md.49cd9373.js",revision:null},{url:"assets/visuals_animation-effects.md.49cd9373.lean.js",revision:null},{url:"assets/visuals_bedrock-modeling.md.9b43bb09.js",revision:null},{url:"assets/visuals_bedrock-modeling.md.9b43bb09.lean.js",revision:null},{url:"assets/visuals_custom-skin-packs.md.a5b74d18.js",revision:null},{url:"assets/visuals_custom-skin-packs.md.a5b74d18.lean.js",revision:null},{url:"assets/visuals_death-animations.md.b62531cf.js",revision:null},{url:"assets/visuals_death-animations.md.b62531cf.lean.js",revision:null},{url:"assets/visuals_glowing-texture.md.e8ef3395.js",revision:null},{url:"assets/visuals_glowing-texture.md.e8ef3395.lean.js",revision:null},{url:"assets/visuals_index.md.1fc4fedf.js",revision:null},{url:"assets/visuals_index.md.1fc4fedf.lean.js",revision:null},{url:"assets/visuals_introduction.md.accefb9a.js",revision:null},{url:"assets/visuals_introduction.md.accefb9a.lean.js",revision:null},{url:"assets/visuals_leash-position.md.8458f453.js",revision:null},{url:"assets/visuals_leash-position.md.8458f453.lean.js",revision:null},{url:"assets/visuals_materials.md.bfec6b7d.js",revision:null},{url:"assets/visuals_materials.md.bfec6b7d.lean.js",revision:null},{url:"assets/visuals_math-based-animations.md.2ab3e840.js",revision:null},{url:"assets/visuals_math-based-animations.md.2ab3e840.lean.js",revision:null},{url:"assets/visuals_player-geometry.md.d8581e6b.js",revision:null},{url:"assets/visuals_player-geometry.md.d8581e6b.lean.js",revision:null},{url:"assets/visuals_remove-shadows.md.fea22ac9.js",revision:null},{url:"assets/visuals_remove-shadows.md.fea22ac9.lean.js",revision:null},{url:"assets/visuals_retexturing-spawn-eggs.md.03dbda24.js",revision:null},{url:"assets/visuals_retexturing-spawn-eggs.md.03dbda24.lean.js",revision:null},{url:"assets/visuals_structure-presentation.md.561db087.js",revision:null},{url:"assets/visuals_structure-presentation.md.561db087.lean.js",revision:null},{url:"assets/vr_editing-your-first-model.md.d5397f98.js",revision:null},{url:"assets/vr_editing-your-first-model.md.d5397f98.lean.js",revision:null},{url:"assets/vr_index.md.bd1384df.js",revision:null},{url:"assets/vr_index.md.bd1384df.lean.js",revision:null},{url:"assets/vr_installing-bedrock-vr.md.adc44339.js",revision:null},{url:"assets/vr_installing-bedrock-vr.md.adc44339.lean.js",revision:null},{url:"assets/vr_pack_setup.md.729bff76.js",revision:null},{url:"assets/vr_pack_setup.md.729bff76.lean.js",revision:null},{url:"assets/world-generation_biome-tags.md.4ce25f4e.js",revision:null},{url:"assets/world-generation_biome-tags.md.4ce25f4e.lean.js",revision:null},{url:"assets/world-generation_biomes.md.8faf4759.js",revision:null},{url:"assets/world-generation_biomes.md.8faf4759.lean.js",revision:null},{url:"assets/world-generation_custom-ores.md.233089bb.js",revision:null},{url:"assets/world-generation_custom-ores.md.233089bb.lean.js",revision:null},{url:"assets/world-generation_feature-block-conditions.md.15baf275.js",revision:null},{url:"assets/world-generation_feature-block-conditions.md.15baf275.lean.js",revision:null},{url:"assets/world-generation_feature-types.md.b569ce4f.js",revision:null},{url:"assets/world-generation_feature-types.md.b569ce4f.lean.js",revision:null},{url:"assets/world-generation_heightmap-noise.md.a5d984b9.js",revision:null},{url:"assets/world-generation_heightmap-noise.md.a5d984b9.lean.js",revision:null},{url:"assets/world-generation_index.md.83e03d0f.js",revision:null},{url:"assets/world-generation_index.md.83e03d0f.lean.js",revision:null},{url:"assets/world-generation_structure-features.md.24cc2857.js",revision:null},{url:"assets/world-generation_structure-features.md.24cc2857.lean.js",revision:null},{url:"assets/world-generation_surface-builder.md.7ba64de9.js",revision:null},{url:"assets/world-generation_surface-builder.md.7ba64de9.lean.js",revision:null},{url:"assets/world-generation_world-generation-intro.md.8ca84d20.js",revision:null},{url:"assets/world-generation_world-generation-intro.md.8ca84d20.lean.js",revision:null},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"assets/images/favicons/android-chrome-192x192.png",revision:"1fb5ac37a9c926d44d9377dffdb866ec"},{url:"assets/images/favicons/android-chrome-256x256.png",revision:"7403912a35eebe25b54355dfd27106af"},{url:"manifest.webmanifest",revision:"c5a08b36b4610e940947bce83726f2a1"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));