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

  // host rehost
  "contexts": ["image"],
  "enabled": false,
  "icons": {
    "16": "images/controls/radio_checked_light.png"
  },
  "id": "submenu_item_rehost",
  "parentId": hosts_sub_menu_id,
  "targetUrlPatterns": ["*://*/*"],
  "title": browser.i18n.getMessage("menu_item_rehost"),
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
  "id": "submenu_item_diberie",
  "parentId": hosts_sub_menu_id,
  "targetUrlPatterns": ["*://*/*"],
  "title": browser.i18n.getMessage("menu_item_diberie"),
  "type": "normal",
  "viewTypes": ["tab"],
  "visible": false

}, {

  // host weserv
  "contexts": ["image"],
  "enabled": false,
  "icons": {
    "16": "images/controls/radio_light.png"
  },
  "id": "submenu_item_weserv",
  "parentId": hosts_sub_menu_id,
  "targetUrlPatterns": ["*://*/*"],
  "title": browser.i18n.getMessage("menu_item_weserv"),
  "type": "normal",
  "viewTypes": ["tab"],
  "visible": false

}, {

  // host rehost
  "contexts": ["image"],
  "enabled": true,
  "icons": {
    "16": "images/controls/radio_checked_light.png"
  },
  "id": "menu_item_rehost",
  "parentId": rehost_main_menu_id,
  "targetUrlPatterns": ["*://*/*"],
  "title": browser.i18n.getMessage("menu_item_rehost"),
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
  "id": "menu_item_diberie",
  "parentId": rehost_main_menu_id,
  "targetUrlPatterns": ["*://*/*"],
  "title": browser.i18n.getMessage("menu_item_diberie"),
  "type": "normal",
  "viewTypes": ["tab"],
  "visible": true

}, {

  // host weserv
  "contexts": ["image"],
  "enabled": true,
  "icons": {
    "16": "images/controls/radio_light.png"
  },
  "id": "menu_item_weserv",
  "parentId": rehost_main_menu_id,
  "targetUrlPatterns": ["*://*/*"],
  "title": browser.i18n.getMessage("menu_item_weserv"),
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
  if(g_options["host"] === "weserv" && g_options["weserv_large"] === true) {
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
  if(g_options["host"] === "weserv" && g_options["weserv_grand"] === true) {
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
    (g_options["host"] === "weserv" && g_options["weserv_medium"] === true)) {
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
    (g_options["host"] === "weserv" && g_options["weserv_preview"] === true)) {
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
    (g_options["host"] === "weserv" && g_options["weserv_thumbnail"] === true)) {
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
    (g_options["host"] === "weserv" && g_options["weserv_mini"] === true)) {
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
  // host weserv
  if(g_options["menu_host"] !== false) {
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
    l_promises.push(browser.menus.update("submenu_item_rehost", {
      "enabled": false,
      "visible": false
    }));
    l_promises.push(browser.menus.update("submenu_item_diberie", {
      "enabled": false,
      "visible": false
    }));
    l_promises.push(browser.menus.update("submenu_item_weserv", {
      "enabled": false,
      "visible": false
    }));
    l_promises.push(browser.menus.update("menu_item_rehost", {
      "enabled": false,
      "visible": false
    }));
    l_promises.push(browser.menus.update("menu_item_diberie", {
      "enabled": false,
      "visible": false
    }));
    l_promises.push(browser.menus.update("menu_item_weserv", {
      "enabled": false,
      "visible": false
    }));
  }
  if(g_options["menu_hosts"] === "sub") {
    l_promises.push(browser.menus.update(hosts_sub_menu_id, {
      "enabled": true,
      "visible": true
    }));
    l_promises.push(browser.menus.update("submenu_item_rehost", {
      "enabled": true,
      "visible": true
    }));
    l_promises.push(browser.menus.update("submenu_item_diberie", {
      "enabled": true,
      "visible": true
    }));
    l_promises.push(browser.menus.update("submenu_item_weserv", {
      "enabled": true,
      "visible": true
    }));
    l_promises.push(browser.menus.update("menu_item_rehost", {
      "enabled": false,
      "visible": false
    }));
    l_promises.push(browser.menus.update("menu_item_diberie", {
      "enabled": false,
      "visible": false
    }));
    l_promises.push(browser.menus.update("menu_item_weserv", {
      "enabled": false,
      "visible": false
    }));
  }
  if(g_options["menu_hosts"] === true) {
    l_promises.push(browser.menus.update(hosts_sub_menu_id, {
      "enabled": false,
      "visible": false
    }));
    l_promises.push(browser.menus.update("submenu_item_rehost", {
      "enabled": false,
      "visible": false
    }));
    l_promises.push(browser.menus.update("submenu_item_diberie", {
      "enabled": false,
      "visible": false
    }));
    l_promises.push(browser.menus.update("submenu_item_weserv", {
      "enabled": false,
      "visible": false
    }));
    l_promises.push(browser.menus.update("menu_item_rehost", {
      "enabled": true,
      "visible": true
    }));
    l_promises.push(browser.menus.update("menu_item_diberie", {
      "enabled": true,
      "visible": true
    }));
    l_promises.push(browser.menus.update("menu_item_weserv", {
      "enabled": true,
      "visible": true
    }));
  }
  // separator 2 hosts / configuration
  // configuration
  if(g_options["menu_configuration"] === true) {
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
  if((g_options["temporary"] === true || g_options["history"] === true) &&
    (g_options["menu_temporary"] === true || g_options["menu_history"] === true)) {
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
  // temporary history
  if(g_options["temporary"] === true && g_options["menu_temporary"] === true) {
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
  // history
  if(g_options["history"] === true && g_options["menu_history"] === true) {
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
  if(g_options["menu_options"] === "sub") {
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
  if(g_options["menu_options"] === true) {
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
  //if(g_options["host"] !== "TODO" && g_options["host"] !== "TODO") {
  if(false) { // TODO
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
  l_promises.push(browser.menus.update("menu_item_temporary", {
    "icons": {
      "16": "images/icons/icon_temporary" + l_dark + ".svg"
    }
  }));
  l_promises.push(browser.menus.update("menu_item_history", {
    "icons": {
      "16": "images/icons/icon_history" + l_dark + ".svg"
    }
  }));
  // check mark management
  function checked(p_condition) {
    return p_condition ? "_checked" : "";
  }
  l_promises.push(browser.menus.update("submenu_item_rehost", {
    "icons": {
      "16": "images/controls/radio" + checked(g_options["host"] === "rehost") +
        l_dark + ".svg"
    }
  }));
  l_promises.push(browser.menus.update("submenu_item_diberie", {
    "icons": {
      "16": "images/controls/radio" + checked(g_options["host"] === "diberie") +
        l_dark + ".svg"
    }
  }));
  l_promises.push(browser.menus.update("submenu_item_weserv", {
    "icons": {
      "16": "images/controls/radio" + checked(g_options["host"] === "weserv") +
        l_dark + ".svg"
    }
  }));
  l_promises.push(browser.menus.update("menu_item_rehost", {
    "icons": {
      "16": "images/controls/radio" + checked(g_options["host"] === "rehost") +
        l_dark + ".svg"
    }
  }));
  l_promises.push(browser.menus.update("menu_item_diberie", {
    "icons": {
      "16": "images/controls/radio" + checked(g_options["host"] === "diberie") +
        l_dark + ".svg"
    }
  }));
  l_promises.push(browser.menus.update("menu_item_weserv", {
    "icons": {
      "16": "images/controls/radio" + checked(g_options["host"] === "weserv") +
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

function do_temporary() {
  open_histories("temporary");
}

function do_history() {
  open_histories("history");
}