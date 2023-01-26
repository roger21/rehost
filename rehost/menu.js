const rehost_main_menu_id = "rehost_main_menu";
const hosts_sub_menu_id = "hosts_sub_menu";
const options_sub_menu_id = "options_sub_menu";

const default_menu = [{

  // main
  "contexts": ["image"],
  "enabled": true,
  "id": rehost_main_menu_id,
  "targetUrlPatterns": ["*://*/*"],
  "title": browser.i18n.getMessage("extension_name"),
  "type": "normal",
  "viewTypes": ["tab"],
  "visible": true

}, {

  // rehost without
  "contexts": ["image"],
  "enabled": true,
  "icons": {
    "16": "images/icons/icon_without.png"
  },
  "id": "menu_item_without",
  "onclick": do_rehost,
  "parentId": rehost_main_menu_id,
  "targetUrlPatterns": ["*://*/*"],
  "title": browser.i18n.getMessage("menu_item_without"),
  "type": "normal",
  "viewTypes": ["tab"],
  "visible": true

}, {

  // rehost gif
  "contexts": ["image"],
  "enabled": false,
  "icons": {
    "16": "images/icons/icon_original.png"
  },
  "id": "menu_item_gif",
  "onclick": do_rehost,
  "parentId": rehost_main_menu_id,
  "targetUrlPatterns": ["*://*/*"],
  "title": browser.i18n.getMessage("menu_item_gif"),
  "type": "normal",
  "viewTypes": ["tab"],
  "visible": false

}, {

  // rehost original
  "contexts": ["image"],
  "enabled": true,
  "icons": {
    "16": "images/icons/icon_original.png"
  },
  "id": "menu_item_original",
  "onclick": do_rehost,
  "parentId": rehost_main_menu_id,
  "targetUrlPatterns": ["*://*/*"],
  "title": browser.i18n.getMessage("menu_item_original"),
  "type": "normal",
  "viewTypes": ["tab"],
  "visible": true

}, {

  // rehost large
  "contexts": ["image"],
  "enabled": true,
  "icons": {
    "16": "images/icons/icon_large_grand.png"
  },
  "id": "menu_item_large",
  "onclick": do_rehost,
  "parentId": rehost_main_menu_id,
  "targetUrlPatterns": ["*://*/*"],
  "title": browser.i18n.getMessage("menu_item_large"),
  "type": "normal",
  "viewTypes": ["tab"],
  "visible": true

}, {

  // rehost grand
  "contexts": ["image"],
  "enabled": true,
  "icons": {
    "16": "images/icons/icon_large_grand.png"
  },
  "id": "menu_item_grand",
  "onclick": do_rehost,
  "parentId": rehost_main_menu_id,
  "targetUrlPatterns": ["*://*/*"],
  "title": browser.i18n.getMessage("menu_item_grand"),
  "type": "normal",
  "viewTypes": ["tab"],
  "visible": true

}, {

  // rehost medium
  "contexts": ["image"],
  "enabled": true,
  "icons": {
    "16": "images/icons/icon_medium_preview.png"
  },
  "id": "menu_item_medium",
  "onclick": do_rehost,
  "parentId": rehost_main_menu_id,
  "targetUrlPatterns": ["*://*/*"],
  "title": browser.i18n.getMessage("menu_item_medium"),
  "type": "normal",
  "viewTypes": ["tab"],
  "visible": true

}, {

  // rehost preview
  "contexts": ["image"],
  "enabled": true,
  "icons": {
    "16": "images/icons/icon_medium_preview.png"
  },
  "id": "menu_item_preview",
  "onclick": do_rehost,
  "parentId": rehost_main_menu_id,
  "targetUrlPatterns": ["*://*/*"],
  "title": browser.i18n.getMessage("menu_item_preview"),
  "type": "normal",
  "viewTypes": ["tab"],
  "visible": true

}, {

  // rehost thumbnail
  "contexts": ["image"],
  "enabled": true,
  "icons": {
    "16": "images/icons/icon_thumbnail_mini.png"
  },
  "id": "menu_item_thumbnail",
  "onclick": do_rehost,
  "parentId": rehost_main_menu_id,
  "targetUrlPatterns": ["*://*/*"],
  "title": browser.i18n.getMessage("menu_item_thumbnail"),
  "type": "normal",
  "viewTypes": ["tab"],
  "visible": true

}, {

  // rehost mini
  "contexts": ["image"],
  "enabled": true,
  "icons": {
    "16": "images/icons/icon_thumbnail_mini.png"
  },
  "id": "menu_item_mini",
  "onclick": do_rehost,
  "parentId": rehost_main_menu_id,
  "targetUrlPatterns": ["*://*/*"],
  "title": browser.i18n.getMessage("menu_item_mini"),
  "type": "normal",
  "viewTypes": ["tab"],
  "visible": true

}, {

  // separator rehost / hosts
  "contexts": ["image"],
  "enabled": true,
  "id": "menu_item_separator_1",
  "parentId": rehost_main_menu_id,
  "targetUrlPatterns": ["*://*/*"],
  "type": "separator",
  "viewTypes": ["tab"],
  "visible": true

}, {

  // sub menu hosts
  "contexts": ["image"],
  "enabled": false,
  "id": hosts_sub_menu_id,
  "parentId": rehost_main_menu_id,
  "targetUrlPatterns": ["*://*/*"],
  "title": browser.i18n.getMessage("hosts_sub_menu"),
  "type": "normal",
  "viewTypes": ["tab"],
  "visible": false

}, {

  // host auraiteu
  "contexts": ["image"],
  "enabled": false,
  "icons": {
    "16": "images/controls/radio_light.png"
  },
  "id": "submenu_item_host_auraiteu",
  "onclick": do_update,
  "parentId": hosts_sub_menu_id,
  "targetUrlPatterns": ["*://*/*"],
  "title": browser.i18n.getMessage("menu_item_host_auraiteu"),
  "type": "normal",
  "viewTypes": ["tab"],
  "visible": false

}, {

  // host diberie
  "contexts": ["image"],
  "enabled": false,
  "icons": {
    "16": "images/controls/radio_light.png"
  },
  "id": "submenu_item_host_diberie",
  "onclick": do_update,
  "parentId": hosts_sub_menu_id,
  "targetUrlPatterns": ["*://*/*"],
  "title": browser.i18n.getMessage("menu_item_host_diberie"),
  "type": "normal",
  "viewTypes": ["tab"],
  "visible": false

}, {

  // host rehost
  "contexts": ["image"],
  "enabled": false,
  "icons": {
    "16": "images/controls/radio_checked_light.png"
  },
  "id": "submenu_item_host_rehost",
  "onclick": do_update,
  "parentId": hosts_sub_menu_id,
  "targetUrlPatterns": ["*://*/*"],
  "title": browser.i18n.getMessage("menu_item_host_rehost"),
  "type": "normal",
  "viewTypes": ["tab"],
  "visible": false

}, {

  // host superhfr
  "contexts": ["image"],
  "enabled": false,
  "icons": {
    "16": "images/controls/radio_light.png"
  },
  "id": "submenu_item_host_superhfr",
  "onclick": do_update,
  "parentId": hosts_sub_menu_id,
  "targetUrlPatterns": ["*://*/*"],
  "title": browser.i18n.getMessage("menu_item_host_superhfr"),
  "type": "normal",
  "viewTypes": ["tab"],
  "visible": false

}, {

  // host wsrvnl
  "contexts": ["image"],
  "enabled": false,
  "icons": {
    "16": "images/controls/radio_light.png"
  },
  "id": "submenu_item_host_wsrvnl",
  "onclick": do_update,
  "parentId": hosts_sub_menu_id,
  "targetUrlPatterns": ["*://*/*"],
  "title": browser.i18n.getMessage("menu_item_host_wsrvnl"),
  "type": "normal",
  "viewTypes": ["tab"],
  "visible": false

}, {

  // host auraiteu
  "contexts": ["image"],
  "enabled": true,
  "icons": {
    "16": "images/controls/radio_light.png"
  },
  "id": "menu_item_host_auraiteu",
  "onclick": do_update,
  "parentId": rehost_main_menu_id,
  "targetUrlPatterns": ["*://*/*"],
  "title": browser.i18n.getMessage("menu_item_host_auraiteu"),
  "type": "normal",
  "viewTypes": ["tab"],
  "visible": true

}, {

  // host diberie
  "contexts": ["image"],
  "enabled": true,
  "icons": {
    "16": "images/controls/radio_light.png"
  },
  "id": "menu_item_host_diberie",
  "onclick": do_update,
  "parentId": rehost_main_menu_id,
  "targetUrlPatterns": ["*://*/*"],
  "title": browser.i18n.getMessage("menu_item_host_diberie"),
  "type": "normal",
  "viewTypes": ["tab"],
  "visible": true

}, {

  // host rehost
  "contexts": ["image"],
  "enabled": true,
  "icons": {
    "16": "images/controls/radio_checked_light.png"
  },
  "id": "menu_item_host_rehost",
  "onclick": do_update,
  "parentId": rehost_main_menu_id,
  "targetUrlPatterns": ["*://*/*"],
  "title": browser.i18n.getMessage("menu_item_host_rehost"),
  "type": "normal",
  "viewTypes": ["tab"],
  "visible": true

}, {

  // host superhfr
  "contexts": ["image"],
  "enabled": true,
  "icons": {
    "16": "images/controls/radio_light.png"
  },
  "id": "menu_item_host_superhfr",
  "onclick": do_update,
  "parentId": rehost_main_menu_id,
  "targetUrlPatterns": ["*://*/*"],
  "title": browser.i18n.getMessage("menu_item_host_superhfr"),
  "type": "normal",
  "viewTypes": ["tab"],
  "visible": true

}, {

  // host wsrvnl
  "contexts": ["image"],
  "enabled": true,
  "icons": {
    "16": "images/controls/radio_light.png"
  },
  "id": "menu_item_host_wsrvnl",
  "onclick": do_update,
  "parentId": rehost_main_menu_id,
  "targetUrlPatterns": ["*://*/*"],
  "title": browser.i18n.getMessage("menu_item_host_wsrvnl"),
  "type": "normal",
  "viewTypes": ["tab"],
  "visible": true

}, {

  // separator 2 hosts / configuration
  "contexts": ["image"],
  "enabled": true,
  "id": "menu_item_separator_2",
  "parentId": rehost_main_menu_id,
  "targetUrlPatterns": ["*://*/*"],
  "type": "separator",
  "viewTypes": ["tab"],
  "visible": true

}, {

  // configuration
  "contexts": ["image"],
  "enabled": true,
  "icons": {
    "16": "images/icons/icon_configuration_light.svg"
  },
  "id": "menu_item_configuration",
  "onclick": do_configuration,
  "parentId": rehost_main_menu_id,
  "targetUrlPatterns": ["*://*/*"],
  "title": browser.i18n.getMessage("menu_item_configuration"),
  "type": "normal",
  "viewTypes": ["tab"],
  "visible": true

}, {

  // separator 3 configuration / histories
  "contexts": ["image"],
  "enabled": true,
  "id": "menu_item_separator_3",
  "parentId": rehost_main_menu_id,
  "targetUrlPatterns": ["*://*/*"],
  "type": "separator",
  "viewTypes": ["tab"],
  "visible": true

}, {

  // history
  "contexts": ["image"],
  "enabled": true,
  "icons": {
    "16": "images/icons/icon_history_light.svg"
  },
  "id": "menu_item_history",
  "onclick": do_history,
  "parentId": rehost_main_menu_id,
  "targetUrlPatterns": ["*://*/*"],
  "title": browser.i18n.getMessage("menu_item_history"),
  "type": "normal",
  "viewTypes": ["tab"],
  "visible": true

}, {

  // temporary history
  "contexts": ["image"],
  "enabled": true,
  "icons": {
    "16": "images/icons/icon_temporary_light.svg"
  },
  "id": "menu_item_temporary",
  "onclick": do_temporary,
  "parentId": rehost_main_menu_id,
  "targetUrlPatterns": ["*://*/*"],
  "title": browser.i18n.getMessage("menu_item_temporary"),
  "type": "normal",
  "viewTypes": ["tab"],
  "visible": true

}, {

  // separator 4 histories / options
  "contexts": ["image"],
  "enabled": true,
  "id": "menu_item_separator_4",
  "parentId": rehost_main_menu_id,
  "targetUrlPatterns": ["*://*/*"],
  "type": "separator",
  "viewTypes": ["tab"],
  "visible": true

}, {

  // sub menu options
  "contexts": ["image"],
  "enabled": false,
  "id": options_sub_menu_id,
  "parentId": rehost_main_menu_id,
  "targetUrlPatterns": ["*://*/*"],
  "title": browser.i18n.getMessage("options_sub_menu"),
  "type": "normal",
  "viewTypes": ["tab"],
  "visible": false

}, {

  // option notifications
  "contexts": ["image"],
  "enabled": false,
  "icons": {
    "16": "images/controls/checkbox_checked_light.png"
  },
  "id": "submenu_item_notifications",
  "onclick": do_update,
  "parentId": options_sub_menu_id,
  "targetUrlPatterns": ["*://*/*"],
  "title": browser.i18n.getMessage("menu_item_notifications"),
  "type": "normal",
  "viewTypes": ["tab"],
  "visible": false

}, {

  // option link image
  "contexts": ["image"],
  "enabled": false,
  "icons": {
    "16": "images/controls/radio_checked_light.png"
  },
  "id": "submenu_item_link_image",
  "onclick": do_update,
  "parentId": options_sub_menu_id,
  "targetUrlPatterns": ["*://*/*"],
  "title": browser.i18n.getMessage("menu_item_link_image"),
  "type": "normal",
  "viewTypes": ["tab"],
  "visible": false

}, {

  // option link page
  "contexts": ["image"],
  "enabled": false,
  "icons": {
    "16": "images/controls/radio_light.png"
  },
  "id": "submenu_item_link_page",
  "onclick": do_update,
  "parentId": options_sub_menu_id,
  "targetUrlPatterns": ["*://*/*"],
  "title": browser.i18n.getMessage("menu_item_link_page"),
  "type": "normal",
  "viewTypes": ["tab"],
  "visible": false

}, {

  // option break
  "contexts": ["image"],
  "enabled": false,
  "icons": {
    "16": "images/controls/checkbox_checked_light.png"
  },
  "id": "submenu_item_break",
  "onclick": do_update,
  "parentId": options_sub_menu_id,
  "targetUrlPatterns": ["*://*/*"],
  "title": browser.i18n.getMessage("menu_item_break"),
  "type": "normal",
  "viewTypes": ["tab"],
  "visible": false

}, {

  // option notifications
  "contexts": ["image"],
  "enabled": true,
  "icons": {
    "16": "images/controls/checkbox_checked_light.png"
  },
  "id": "menu_item_notifications",
  "onclick": do_update,
  "parentId": rehost_main_menu_id,
  "targetUrlPatterns": ["*://*/*"],
  "title": browser.i18n.getMessage("menu_item_notifications"),
  "type": "normal",
  "viewTypes": ["tab"],
  "visible": true

}, {

  // option link image
  "contexts": ["image"],
  "enabled": true,
  "icons": {
    "16": "images/controls/radio_checked_light.png"
  },
  "id": "menu_item_link_image",
  "onclick": do_update,
  "parentId": rehost_main_menu_id,
  "targetUrlPatterns": ["*://*/*"],
  "title": browser.i18n.getMessage("menu_item_link_image"),
  "type": "normal",
  "viewTypes": ["tab"],
  "visible": true

}, {

  // option link page
  "contexts": ["image"],
  "enabled": true,
  "icons": {
    "16": "images/controls/radio_light.png"
  },
  "id": "menu_item_link_page",
  "onclick": do_update,
  "parentId": rehost_main_menu_id,
  "targetUrlPatterns": ["*://*/*"],
  "title": browser.i18n.getMessage("menu_item_link_page"),
  "type": "normal",
  "viewTypes": ["tab"],
  "visible": true

}, {

  // option break
  "contexts": ["image"],
  "enabled": true,
  "icons": {
    "16": "images/controls/checkbox_checked_light.png"
  },
  "id": "menu_item_break",
  "onclick": do_update,
  "parentId": rehost_main_menu_id,
  "targetUrlPatterns": ["*://*/*"],
  "title": browser.i18n.getMessage("menu_item_break"),
  "type": "normal",
  "viewTypes": ["tab"],
  "visible": true

}];

function menu_creation(p_debug) {
  if(browser.runtime.lastError) {
    error_message("menu.js",
      "menu_creation browser.menus.create",
      browser.runtime.lastError);
  } else {
    debug_message("menu.js",
      "menu_creation browser.menus.create",
      p_debug);
  }
}

for(const l_menu_item of default_menu) {
  browser.menus.create(l_menu_item, function() {
    menu_creation(l_menu_item.id);
  });
}

function update_menu() {
  let l_promises = [];
  // rehost without
  if(g_options["without"] === true) {
    l_promises.push(browser.menus.update("menu_item_without", {
      "enabled": true,
      "visible": true
    }));
  } else {
    l_promises.push(browser.menus.update("menu_item_without", {
      "enabled": false,
      "visible": false
    }));
  }
  // rehost gif
  l_promises.push(browser.menus.update("menu_item_gif", {
    "enabled": false,
    "visible": false
  }));
  // rehost original
  l_promises.push(browser.menus.update("menu_item_original", {
    "enabled": true,
    "visible": true
  }));
  // rehost large
  if((g_options["host"] === "wsrvnl" && g_options["wsrvnl_large"] === true) ||
    (g_options["host"] === "superhfr" && g_options["superhfr_large"] === true) ||
    (g_options["host"] === "auraiteu" && g_options["auraiteu_large"] === true)) {
    l_promises.push(browser.menus.update("menu_item_large", {
      "enabled": true,
      "visible": true
    }));
  } else {
    l_promises.push(browser.menus.update("menu_item_large", {
      "enabled": false,
      "visible": false
    }));
  }
  // rehost grand
  if((g_options["host"] === "wsrvnl" && g_options["wsrvnl_grand"] === true) ||
    (g_options["host"] === "superhfr" && g_options["superhfr_grand"] === true) ||
    (g_options["host"] === "auraiteu" && g_options["auraiteu_grand"] === true)) {
    l_promises.push(browser.menus.update("menu_item_grand", {
      "enabled": true,
      "visible": true
    }));
  } else {
    l_promises.push(browser.menus.update("menu_item_grand", {
      "enabled": false,
      "visible": false
    }));
  }
  // rehost medium
  if((g_options["host"] === "rehost" && g_options["rehost_medium"] === true) ||
    (g_options["host"] === "diberie" && g_options["diberie_medium"] === true) ||
    (g_options["host"] === "wsrvnl" && g_options["wsrvnl_medium"] === true) ||
    (g_options["host"] === "superhfr" && g_options["superhfr_medium"] === true) ||
    (g_options["host"] === "auraiteu" && g_options["auraiteu_medium"] === true)) {
    l_promises.push(browser.menus.update("menu_item_medium", {
      "enabled": true,
      "visible": true
    }));
  } else {
    l_promises.push(browser.menus.update("menu_item_medium", {
      "enabled": false,
      "visible": false
    }));
  }
  // rehost preview
  if((g_options["host"] === "rehost" && g_options["rehost_preview"] === true) ||
    (g_options["host"] === "wsrvnl" && g_options["wsrvnl_preview"] === true) ||
    (g_options["host"] === "superhfr" && g_options["superhfr_preview"] === true) ||
    (g_options["host"] === "auraiteu" && g_options["auraiteu_preview"] === true)) {
    l_promises.push(browser.menus.update("menu_item_preview", {
      "enabled": true,
      "visible": true
    }));
  } else {
    l_promises.push(browser.menus.update("menu_item_preview", {
      "enabled": false,
      "visible": false
    }));
  }
  // rehost thumbnail
  if((g_options["host"] === "rehost" && g_options["rehost_thumbnail"] === true) ||
    (g_options["host"] === "wsrvnl" && g_options["wsrvnl_thumbnail"] === true) ||
    (g_options["host"] === "superhfr" && g_options["superhfr_thumbnail"] === true) ||
    (g_options["host"] === "auraiteu" && g_options["auraiteu_thumbnail"] === true)) {
    l_promises.push(browser.menus.update("menu_item_thumbnail", {
      "enabled": true,
      "visible": true
    }));
  } else {
    l_promises.push(browser.menus.update("menu_item_thumbnail", {
      "enabled": false,
      "visible": false
    }));
  }
  // rehost mini
  if((g_options["host"] === "diberie" && g_options["diberie_mini"] === true) ||
    (g_options["host"] === "wsrvnl" && g_options["wsrvnl_mini"] === true) ||
    (g_options["host"] === "superhfr" && g_options["superhfr_mini"] === true) ||
    (g_options["host"] === "auraiteu" && g_options["auraiteu_mini"] === true)) {
    l_promises.push(browser.menus.update("menu_item_mini", {
      "enabled": true,
      "visible": true
    }));
  } else {
    l_promises.push(browser.menus.update("menu_item_mini", {
      "enabled": false,
      "visible": false
    }));
  }
  // separator rehost / hosts
  // sub hosts
  // host rehost
  // host diberie
  // host wsrvnl
  // host superhfr
  // host auraiteu
  if(g_options["menu_hosts"] !== false) {
    l_promises.push(browser.menus.update("menu_item_separator_1", {
      "enabled": true,
      "visible": true
    }));
  } else {
    l_promises.push(browser.menus.update("menu_item_separator_1", {
      "enabled": false,
      "visible": false
    }));
    l_promises.push(browser.menus.update(hosts_sub_menu_id, {
      "enabled": false,
      "visible": false
    }));
    l_promises.push(browser.menus.update("submenu_item_host_rehost", {
      "enabled": false,
      "visible": false
    }));
    l_promises.push(browser.menus.update("submenu_item_host_diberie", {
      "enabled": false,
      "visible": false
    }));
    l_promises.push(browser.menus.update("submenu_item_host_wsrvnl", {
      "enabled": false,
      "visible": false
    }));
    l_promises.push(browser.menus.update("submenu_item_host_superhfr", {
      "enabled": false,
      "visible": false
    }));
    l_promises.push(browser.menus.update("submenu_item_host_auraiteu", {
      "enabled": false,
      "visible": false
    }));
    l_promises.push(browser.menus.update("menu_item_host_rehost", {
      "enabled": false,
      "visible": false
    }));
    l_promises.push(browser.menus.update("menu_item_host_diberie", {
      "enabled": false,
      "visible": false
    }));
    l_promises.push(browser.menus.update("menu_item_host_wsrvnl", {
      "enabled": false,
      "visible": false
    }));
    l_promises.push(browser.menus.update("menu_item_host_superhfr", {
      "enabled": false,
      "visible": false
    }));
    l_promises.push(browser.menus.update("menu_item_host_auraiteu", {
      "enabled": false,
      "visible": false
    }));
  }
  if(g_options["menu_hosts"] === "sub" ||
    (g_options["menu_hosts"] === true && g_options["menu_submenus"] === true)) { // TODO
    l_promises.push(browser.menus.update(hosts_sub_menu_id, {
      "enabled": true,
      "visible": true
    }));
    l_promises.push(browser.menus.update("submenu_item_host_rehost", {
      "enabled": true,
      "visible": true
    }));
    l_promises.push(browser.menus.update("submenu_item_host_diberie", {
      "enabled": true,
      "visible": true
    }));
    l_promises.push(browser.menus.update("submenu_item_host_wsrvnl", {
      "enabled": true,
      "visible": true
    }));
    l_promises.push(browser.menus.update("submenu_item_host_superhfr", {
      "enabled": true,
      "visible": true
    }));
    l_promises.push(browser.menus.update("submenu_item_host_auraiteu", {
      "enabled": true,
      "visible": true
    }));
    l_promises.push(browser.menus.update("menu_item_host_rehost", {
      "enabled": false,
      "visible": false
    }));
    l_promises.push(browser.menus.update("menu_item_host_diberie", {
      "enabled": false,
      "visible": false
    }));
    l_promises.push(browser.menus.update("menu_item_host_wsrvnl", {
      "enabled": false,
      "visible": false
    }));
    l_promises.push(browser.menus.update("menu_item_host_superhfr", {
      "enabled": false,
      "visible": false
    }));
    l_promises.push(browser.menus.update("menu_item_host_auraiteu", {
      "enabled": false,
      "visible": false
    }));
  }
  if(g_options["menu_hosts"] === true && g_options["menu_submenus"] === false) { // TODO
    l_promises.push(browser.menus.update(hosts_sub_menu_id, {
      "enabled": false,
      "visible": false
    }));
    l_promises.push(browser.menus.update("submenu_item_host_rehost", {
      "enabled": false,
      "visible": false
    }));
    l_promises.push(browser.menus.update("submenu_item_host_diberie", {
      "enabled": false,
      "visible": false
    }));
    l_promises.push(browser.menus.update("submenu_item_host_wsrvnl", {
      "enabled": false,
      "visible": false
    }));
    l_promises.push(browser.menus.update("submenu_item_host_superhfr", {
      "enabled": false,
      "visible": false
    }));
    l_promises.push(browser.menus.update("submenu_item_host_auraiteu", {
      "enabled": false,
      "visible": false
    }));
    l_promises.push(browser.menus.update("menu_item_host_rehost", {
      "enabled": true,
      "visible": true
    }));
    l_promises.push(browser.menus.update("menu_item_host_diberie", {
      "enabled": true,
      "visible": true
    }));
    l_promises.push(browser.menus.update("menu_item_host_wsrvnl", {
      "enabled": true,
      "visible": true
    }));
    l_promises.push(browser.menus.update("menu_item_host_superhfr", {
      "enabled": true,
      "visible": true
    }));
    l_promises.push(browser.menus.update("menu_item_host_auraiteu", {
      "enabled": true,
      "visible": true
    }));
  }
  // separator 2 hosts / configuration
  // configuration
  if(g_options["menu_configuration"] === true && g_options["configuration_todo"]) { // TODO
    l_promises.push(browser.menus.update("menu_item_separator_2", {
      "enabled": true,
      "visible": true
    }));
    l_promises.push(browser.menus.update("menu_item_configuration", {
      "enabled": true,
      "visible": true
    }));
  } else {
    l_promises.push(browser.menus.update("menu_item_separator_2", {
      "enabled": false,
      "visible": false
    }));
    l_promises.push(browser.menus.update("menu_item_configuration", {
      "enabled": false,
      "visible": false
    }));
  }
  // separator 3 configuration / histories
  if((g_options["history"] === true || g_options["temporary"] === true) &&
    (g_options["menu_history"] === true || g_options["menu_temporary"] === true) &&
    g_options["histories_todo"]) { // TODO
    l_promises.push(browser.menus.update("menu_item_separator_3", {
      "enabled": true,
      "visible": true
    }));
  } else {
    l_promises.push(browser.menus.update("menu_item_separator_3", {
      "enabled": false,
      "visible": false
    }));
  }
  // history
  if(g_options["history"] === true && g_options["menu_history"] === true &&
    g_options["histories_todo"]) { // TODO
    l_promises.push(browser.menus.update("menu_item_history", {
      "enabled": true,
      "visible": true
    }));
  } else {
    l_promises.push(browser.menus.update("menu_item_history", {
      "enabled": false,
      "visible": false
    }));
  }
  // temporary history
  if(g_options["temporary"] === true && g_options["menu_temporary"] === true &&
    g_options["histories_todo"]) { // TODO
    l_promises.push(browser.menus.update("menu_item_temporary", {
      "enabled": true,
      "visible": true
    }));
  } else {
    l_promises.push(browser.menus.update("menu_item_temporary", {
      "enabled": false,
      "visible": false
    }));
  }
  // separator 4 histories / options
  // sub options
  // option notifications
  // option link image
  // option link page
  // option break
  if(g_options["menu_options"] !== false) {
    l_promises.push(browser.menus.update("menu_item_separator_4", {
      "enabled": true,
      "visible": true
    }));
  } else {
    l_promises.push(browser.menus.update("menu_item_separator_4", {
      "enabled": false,
      "visible": false
    }));
    l_promises.push(browser.menus.update(options_sub_menu_id, {
      "enabled": false,
      "visible": false
    }));
    l_promises.push(browser.menus.update("submenu_item_notifications", {
      "enabled": false,
      "visible": false
    }));
    l_promises.push(browser.menus.update("submenu_item_link_image", {
      "enabled": false,
      "visible": false
    }));
    l_promises.push(browser.menus.update("submenu_item_link_page", {
      "enabled": false,
      "visible": false
    }));
    l_promises.push(browser.menus.update("submenu_item_break", {
      "enabled": false,
      "visible": false
    }));
    l_promises.push(browser.menus.update("menu_item_notifications", {
      "enabled": false,
      "visible": false
    }));
    l_promises.push(browser.menus.update("menu_item_link_image", {
      "enabled": false,
      "visible": false
    }));
    l_promises.push(browser.menus.update("menu_item_link_page", {
      "enabled": false,
      "visible": false
    }));
    l_promises.push(browser.menus.update("menu_item_break", {
      "enabled": false,
      "visible": false
    }));
  }
  if(g_options["menu_options"] === "sub" ||
    (g_options["menu_options"] === true && g_options["menu_submenus"] === true)) { // TODO
    l_promises.push(browser.menus.update(options_sub_menu_id, {
      "enabled": true,
      "visible": true
    }));
    l_promises.push(browser.menus.update("submenu_item_notifications", {
      "enabled": true,
      "visible": true
    }));
    l_promises.push(browser.menus.update("submenu_item_link_image", {
      "enabled": true,
      "visible": true
    }));
    l_promises.push(browser.menus.update("submenu_item_link_page", {
      "enabled": true,
      "visible": true
    }));
    l_promises.push(browser.menus.update("submenu_item_break", {
      "enabled": true,
      "visible": true
    }));
    l_promises.push(browser.menus.update("menu_item_notifications", {
      "enabled": false,
      "visible": false
    }));
    l_promises.push(browser.menus.update("menu_item_link_image", {
      "enabled": false,
      "visible": false
    }));
    l_promises.push(browser.menus.update("menu_item_link_page", {
      "enabled": false,
      "visible": false
    }));
    l_promises.push(browser.menus.update("menu_item_break", {
      "enabled": false,
      "visible": false
    }));
  }
  if(g_options["menu_options"] === true && g_options["menu_submenus"] === false) { // TODO
    l_promises.push(browser.menus.update(options_sub_menu_id, {
      "enabled": false,
      "visible": false
    }));
    l_promises.push(browser.menus.update("submenu_item_notifications", {
      "enabled": false,
      "visible": false
    }));
    l_promises.push(browser.menus.update("submenu_item_link_image", {
      "enabled": false,
      "visible": false
    }));
    l_promises.push(browser.menus.update("submenu_item_link_page", {
      "enabled": false,
      "visible": false
    }));
    l_promises.push(browser.menus.update("submenu_item_break", {
      "enabled": false,
      "visible": false
    }));
    l_promises.push(browser.menus.update("menu_item_notifications", {
      "enabled": true,
      "visible": true
    }));
    l_promises.push(browser.menus.update("menu_item_link_image", {
      "enabled": true,
      "visible": true
    }));
    l_promises.push(browser.menus.update("menu_item_link_page", {
      "enabled": true,
      "visible": true
    }));
    l_promises.push(browser.menus.update("menu_item_break", {
      "enabled": true,
      "visible": true
    }));
  }
  // option link image
  // option link page
  // disable them if not host TODO or host TODO ...
  if(g_options["host"] !== "TODO" && g_options["host"] !== "TODO") {
    //if(false) { // TODO
    l_promises.push(browser.menus.update("submenu_item_link_image", {
      "enabled": false,
      "visible": false
    }));
    l_promises.push(browser.menus.update("submenu_item_link_page", {
      "enabled": false,
      "visible": false
    }));
    l_promises.push(browser.menus.update("menu_item_link_image", {
      "enabled": false,
      "visible": false
    }));
    l_promises.push(browser.menus.update("menu_item_link_page", {
      "enabled": false,
      "visible": false
    }));
  }
  Promise.all(l_promises).then(function() {
    debug_message("menu.js",
      "update_menu Promise.all",
      "ok");
  }).catch(function(p_error) {
    error_message("menu.js",
      "update_menu Promise.all",
      p_error);
  });
}

function refresh_menu(p_gif = false) {
  let l_promises = [];
  // gif management
  if(g_options["host"] === "rehost" || g_options["host"] === "diberie") {
    if(p_gif) {
      l_promises.push(browser.menus.update("menu_item_gif", {
        "enabled": true,
        "visible": true
      }));
      l_promises.push(browser.menus.update("menu_item_original", {
        "enabled": false,
        "visible": false
      }));
      l_promises.push(browser.menus.update("menu_item_medium", {
        "enabled": false,
        "visible": false
      }));
      l_promises.push(browser.menus.update("menu_item_preview", {
        "enabled": false,
        "visible": false
      }));
      l_promises.push(browser.menus.update("menu_item_thumbnail", {
        "enabled": false,
        "visible": false
      }));
      l_promises.push(browser.menus.update("menu_item_mini", {
        "enabled": false,
        "visible": false
      }));
    } else {
      l_promises.push(browser.menus.update("menu_item_gif", {
        "enabled": false,
        "visible": false
      }));
      l_promises.push(browser.menus.update("menu_item_original", {
        "enabled": true,
        "visible": true
      }));
      if((g_options["host"] === "rehost" && g_options["rehost_medium"] === true) ||
        (g_options["host"] === "diberie" && g_options["diberie_medium"] === true)) {
        l_promises.push(browser.menus.update("menu_item_medium", {
          "enabled": true,
          "visible": true
        }));
      }
      if(g_options["host"] === "rehost" && g_options["rehost_preview"] === true) {
        l_promises.push(browser.menus.update("menu_item_preview", {
          "enabled": true,
          "visible": true
        }));
      }
      if(g_options["host"] === "rehost" && g_options["rehost_thumbnail"] === true) {
        l_promises.push(browser.menus.update("menu_item_thumbnail", {
          "enabled": true,
          "visible": true
        }));
      }
      if(g_options["host"] === "diberie" && g_options["diberie_mini"] === true) {
        l_promises.push(browser.menus.update("menu_item_mini", {
          "enabled": true,
          "visible": true
        }));
      }
    }
  }
  // dark mode management
  let l_dark = window.matchMedia("(prefers-color-scheme: dark)").matches ?
    "_dark" : "_light";
  l_promises.push(browser.menus.update("menu_item_configuration", {
    "icons": {
      "16": "images/icons/icon_configuration" + l_dark + ".svg"
    }
  }));
  l_promises.push(browser.menus.update("menu_item_history", {
    "icons": {
      "16": "images/icons/icon_history" + l_dark + ".svg"
    }
  }));
  l_promises.push(browser.menus.update("menu_item_temporary", {
    "icons": {
      "16": "images/icons/icon_temporary" + l_dark + ".svg"
    }
  }));
  // check mark management
  function checked(p_condition) {
    return p_condition ? "_checked" : "";
  }
  l_promises.push(browser.menus.update("submenu_item_host_rehost", {
    "icons": {
      "16": "images/controls/radio" + checked(g_options["host"] === "rehost") +
        l_dark + ".svg"
    }
  }));
  l_promises.push(browser.menus.update("submenu_item_host_diberie", {
    "icons": {
      "16": "images/controls/radio" + checked(g_options["host"] === "diberie") +
        l_dark + ".svg"
    }
  }));
  l_promises.push(browser.menus.update("submenu_item_host_wsrvnl", {
    "icons": {
      "16": "images/controls/radio" + checked(g_options["host"] === "wsrvnl") +
        l_dark + ".svg"
    }
  }));
  l_promises.push(browser.menus.update("submenu_item_host_superhfr", {
    "icons": {
      "16": "images/controls/radio" + checked(g_options["host"] === "superhfr") +
        l_dark + ".svg"
    }
  }));
  l_promises.push(browser.menus.update("submenu_item_host_auraiteu", {
    "icons": {
      "16": "images/controls/radio" + checked(g_options["host"] === "auraiteu") +
        l_dark + ".svg"
    }
  }));
  l_promises.push(browser.menus.update("menu_item_host_rehost", {
    "icons": {
      "16": "images/controls/radio" + checked(g_options["host"] === "rehost") +
        l_dark + ".svg"
    }
  }));
  l_promises.push(browser.menus.update("menu_item_host_diberie", {
    "icons": {
      "16": "images/controls/radio" + checked(g_options["host"] === "diberie") +
        l_dark + ".svg"
    }
  }));
  l_promises.push(browser.menus.update("menu_item_host_wsrvnl", {
    "icons": {
      "16": "images/controls/radio" + checked(g_options["host"] === "wsrvnl") +
        l_dark + ".svg"
    }
  }));
  l_promises.push(browser.menus.update("menu_item_host_superhfr", {
    "icons": {
      "16": "images/controls/radio" + checked(g_options["host"] === "superhfr") +
        l_dark + ".svg"
    }
  }));
  l_promises.push(browser.menus.update("menu_item_host_auraiteu", {
    "icons": {
      "16": "images/controls/radio" + checked(g_options["host"] === "auraiteu") +
        l_dark + ".svg"
    }
  }));
  l_promises.push(browser.menus.update("submenu_item_notifications", {
    "icons": {
      "16": "images/controls/checkbox" + checked(g_options["notifications"] === true) +
        l_dark + ".svg"
    }
  }));
  l_promises.push(browser.menus.update("submenu_item_link_image", {
    "icons": {
      "16": "images/controls/radio" + checked(g_options["link"] === "image") +
        l_dark + ".svg"
    }
  }));
  l_promises.push(browser.menus.update("submenu_item_link_page", {
    "icons": {
      "16": "images/controls/radio" + checked(g_options["link"] === "page") +
        l_dark + ".svg"
    }
  }));
  l_promises.push(browser.menus.update("submenu_item_break", {
    "icons": {
      "16": "images/controls/checkbox" + checked(g_options["break"] === true) +
        l_dark + ".svg"
    }
  }));
  l_promises.push(browser.menus.update("menu_item_notifications", {
    "icons": {
      "16": "images/controls/checkbox" + checked(g_options["notifications"] === true) +
        l_dark + ".svg"
    }
  }));
  l_promises.push(browser.menus.update("menu_item_link_image", {
    "icons": {
      "16": "images/controls/radio" + checked(g_options["link"] === "image") +
        l_dark + ".svg"
    }
  }));
  l_promises.push(browser.menus.update("menu_item_link_page", {
    "icons": {
      "16": "images/controls/radio" + checked(g_options["link"] === "page") +
        l_dark + ".svg"
    }
  }));
  l_promises.push(browser.menus.update("menu_item_break", {
    "icons": {
      "16": "images/controls/checkbox" + checked(g_options["break"] === true) +
        l_dark + ".svg"
    }
  }));
  Promise.all(l_promises).then(function() {
    debug_message("menu.js",
      "refresh_menu Promise.all",
      "ok");
    browser.menus.refresh().then(function() {
      debug_message("menu.js",
        "refresh_menu browser.menus.refresh",
        "ok");
    }).catch(function(p_error) {
      error_message("menu.js",
        "refresh_menu browser.menus.refresh",
        p_error);
    });
  }).catch(function(p_error) {
    error_message("menu.js",
      "refresh_menu Promise.all",
      p_error);
  });
}

const gif_regexp = /.*\.gif([&?].*)?$/i;

browser.menus.onShown.addListener(function(p_infos) {
  debug_message("menu.js",
    "browser.menus.onShown",
    p_infos);
  if(p_infos["mediaType"] === "image" && p_infos["srcUrl"]) {
    refresh_menu(gif_regexp.test(p_infos["srcUrl"]));
  }
});

init_options(update_menu);

function do_rehost(p_item) {
  let l_size = p_item["menuItemId"].split("_")[2];
  debug_message("menu.js",
    "do_rehost",
    [l_size, p_item]);
  let l_src = l_size !== "without" && g_params[g_options["host"]]["encode"] ?
    encodeURIComponent(p_item["srcUrl"]) : p_item["srcUrl"];
  let l_break = g_options["break"] ? "\n" : "";
  let l_link_url;
  let l_image_url;
  let l_without_rehost = "";
  if(l_size === "without") {
    l_link_url = l_image_url = l_src;
    l_without_rehost = "_without_rehost";
  } else {
    l_link_url = g_params[g_options["host"]]["base"] +
      g_params[g_options["host"]]["link"][g_options["link"]] + l_src;
    l_image_url = g_params[g_options["host"]]["base"] +
      g_params[g_options["host"]][l_size] +
      g_params[g_options["host"]]["image"] + l_src;
  }
  let l_clipboard;
  let l_message_text;
  // naked link of the rehosted image
  if(p_item["modifiers"].includes("Shift")) {
    l_clipboard = l_image_url + l_break;
    l_message_text = "notification_message_naked_link";
  }
  // bbcode of the rehosted image without the surrounding link
  else if(p_item["modifiers"].includes("Ctrl")) {
    l_clipboard = "[img]" + l_image_url + "[/img]" + l_break;
    l_message_text = "notification_message_bbcode_without_link";
  }
  // bbcode of the rehosted image with the surrounding link
  else {
    l_clipboard = "[url=" + l_link_url + "][img]" + l_image_url + "[/img][/url]" + l_break;
    l_message_text = "notification_message_bbcode";
  }
  navigator.clipboard.writeText(l_clipboard).then(function() {
    debug_message("menu.js",
      "do_rehost navigator.clipboard.writeText",
      l_clipboard);
  }).catch(function(p_error) {
    error_message("menu.js",
      "do_rehost navigator.clipboard.writeText",
      p_error);
  });
  if(g_options["notifications"] === true) {
    browser.notifications.create({
      "type": "basic",
      "title": browser.i18n.getMessage("extension_name"),
      "message": browser.i18n.getMessage(l_message_text + l_without_rehost, [
        browser.i18n.getMessage("notification_size_" + l_size),
        browser.i18n.getMessage("notification_host_" + g_options["host"])
      ]),
      "iconUrl": "images/rehost.svg"
    }).then(function(p_id) {
      debug_message("menu.js",
        "do_rehost browser.notifications.create",
        p_id);
    }).catch(function(p_error) {
      error_message("menu.js",
        "do_rehost browser.notifications.create",
        p_error);
    });
  }
}

/* buggy as fuck on linux xfce debian bullseye TODO
browser.notifications.onClicked.addListener(function(p_id){
  debug_message("menu.js",
    "browser.notifications.onClicked",
     p_id);
  browser.windows.update(browser.windows.WINDOW_ID_CURRENT, {
    "focused": true
  }).then(function(p_windows) {
    debug_message("menu.js",
      "browser.notifications.onClicked browser.windows.update",
      p_windows);
  }).catch(function(p_error) {
    error_message("menu.js",
      "browser.notifications.onClicked browser.windows.update",
       p_error);
  });
});
*/

function do_update(p_item) {
  let l_item = p_item["menuItemId"].split("_");
  update_options(l_item[2], l_item[3]);
}

function do_configuration() {
  browser.runtime.openOptionsPage().then(function() {
    debug_message("menu.js",
      "do_configuration browser.runtime.openOptionsPage",
      "ok");
  }).catch(function(p_error) {
    error_message("menu.js",
      "do_configuration browser.runtime.openOptionsPage",
      p_error);
  });
}

function do_history() {
  open_histories("history");
}

function do_temporary() {
  open_histories("temporary");
}