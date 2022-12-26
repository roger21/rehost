const default_options = {
  "host": "rehost", // "rehost", "diberie", "wsrvnl", "superhfr"
  "history": true, // TODO false,
  "temporary": true, // TODO false,
  "notifications": true,
  "link": "image", // "image", "page"
  "break": false,
  "without": true,
  "menu_hosts": true, // false, true, "sub"
  "menu_configuration": true,
  "menu_history": true,
  "menu_temporary": true,
  "menu_options": true, // false, true, "sub"
  "popup_action": "configuration", // "popup", "configuration", "history", "temporary"
  "popup_hosts": true,
  "popup_configuration": true,
  "popup_history": true,
  "popup_temporary": true,
  "popup_options": true,
  "rehost_medium": true,
  "rehost_preview": true,
  "rehost_thumbnail": true,
  "diberie_medium": true,
  "diberie_mini": true,
  "wsrvnl_large": true,
  "wsrvnl_grand": true,
  "wsrvnl_medium": true,
  "wsrvnl_preview": true,
  "wsrvnl_thumbnail": true,
  "wsrvnl_mini": true,
  "superhfr_large": true,
  "superhfr_grand": true,
  "superhfr_medium": true,
  "superhfr_preview": true,
  "superhfr_thumbnail": true,
  "superhfr_mini": true
};

const g_params = {
  "rehost": {
    "base": "https://reho.st/",
    "encode": false,
    "link": {
      "image": ""
    },
    "gif": "",
    "original": "",
    "medium": "medium/",
    "preview": "preview/",
    "thumbnail": "thumb/",
    "image": ""
  },
  "diberie": {
    "base": "https://rehost.diberie.com/Rehost?",
    "encode": true,
    "link": {
      "image": "url="
    },
    "gif": "",
    "original": "",
    "medium": "size=res&",
    "mini": "size=min&",
    "image": "url="
  },
  "wsrvnl": {
    "base": "https://wsrv.nl/?n=-1",
    "encode": true,
    "link": {
      "image": "&url="
    },
    "original": "",
    "large": "&w=1200&we",
    "grand": "&w=1000&we",
    "medium": "&w=800&we",
    "preview": "&w=600&we",
    "thumbnail": "&w=230&h=230&we",
    "mini": "&w=150&h=150&we",
    "image": "&url="
  },
  "superhfr": {
    "base": "http://rehost.super-h.fr/",
    "encode": false,
    "link": {
      "image": ""
    },
    "original": "",
    "large": "1200x/",
    "grand": "1000x/",
    "medium": "800x/",
    "preview": "600x/",
    "thumbnail": "230,fit/",
    "mini": "150,fit/",
    "image": ""
  }
}

let g_options = Object.assign({}, default_options);

function init_options(p_do_something) {
  browser.storage.local.get({
    "options": default_options
  }).then(function(p_data) {
    debug_message("storage.js",
      "init_options browser.storage.local.get p_data[\"options\"]",
      p_data["options"]);
    for(const l_p in g_options) {
      debug_message("storage.js",
        "init_options g_options property",
        l_p);
      if(typeof p_data["options"][l_p] !== "undefined") {
        g_options[l_p] = p_data["options"][l_p];
        debug_message("storage.js",
          "init_options p_data[\"options\"] value",
          p_data["options"][l_p]);
      }
    }

    // correction des paramètres qui auraient une ancienne valeur obsolète
    // en cas de mise à jour des valeurs possibles dans default_options

    debug_message("storage.js",
      "init_options browser.storage.local.get g_options",
      g_options);
    p_do_something();
  }).catch(function(p_error) {
    error_message("storage.js",
      "init_options browser.storage.local.get options",
      p_error);
  });
}

function update_options(p_1, p_2) {
  debug_message("storage.js",
    "update_options",
    [p_1, p_2]);
  switch(p_1) {
    case "host":
      g_options["host"] = p_2;
      // force link to image if not host TODO or host TODO ...
      if(p_2 !== "TODO" && p_2 !== "TODO") {
        g_options["link"] = "image";
      }
      break;
    case "link":
      g_options["link"] = p_2;
      // force link to image if not host TODO or host TODO ...
      if(g_options["host"] !== "TODO" && g_options["host"] !== "TODO") {
        g_options["link"] = "image";
      }
      break;
    default: // notifications, break
      g_options[p_1] = !g_options[p_1];
      break;
  }
  browser.storage.local.set({
    "options": g_options
  }).then(function() {
    debug_message("storage.js",
      "update_options browser.storage.local.set options",
      "ok");
    update_menu();
  }).catch(function(p_error) {
    error_message("storage.js",
      "update_options browser.storage.local.set options",
      p_error);
  });
}

function open_histories(p_kind) {
  let l_histories_url = browser.runtime.getURL("/histories/" + p_kind + ".html");
  browser.tabs.query({
    "url": l_histories_url
  }).then(function(p_tabs) {
    debug_message("storage.js",
      "open_histories browser.tabs.query " + p_kind,
      p_tabs);
    let l_found = false;
    for(const l_tab of p_tabs) {
      l_found = true;
      browser.tabs.update(l_tab["id"], {
        "active": true
      }).then(function(p_tab) {
        debug_message("storage.js",
          "open_histories browser.tabs.update " + p_kind,
          p_tab);
        browser.windows.update(l_tab["windowId"], {
          "focused": true
        }).then(function(p_windows) {
          debug_message("storage.js",
            "open_histories browser.windows.update " + p_kind,
            p_windows);
        }).catch(function(p_error) {
          error_message("storage.js",
            "open_histories browser.windows.update " + p_kind,
            p_error);
        });
      }).catch(function(p_error) {
        error_message("storage.js",
          "open_histories browser.tabs.update " + p_kind,
          p_error);
      });
      break;
    }
    if(!l_found) {
      browser.tabs.create({
        url: "/histories/" + p_kind + ".html"
      }).then(function(p_tab) {
        debug_message("storage.js",
          "open_histories browser.tabs.create " + p_kind,
          p_tab);
      }).catch(function(p_error) {
        error_message("storage.js",
          "open_histories browser.tabs.create " + p_kind,
          p_error);
      });
    }
  }).catch(function(p_error) {
    error_message("storage.js",
      "open_histories browser.tabs.query " + p_kind,
      p_error);
  });
}

function message_handler(p_message, p_sender, p_send_response) {
  debug_message("storage.js",
    "message_handler",
    p_message);
  if(p_message === "get_options") {
    p_send_response(g_options);
  } else if(p_message.startsWith("popup_")) {
    let l_message = p_message.split("_");
    update_options(l_message[1], l_message[2]);
  } else if((g_options["history"] === true && p_message === "history") ||
    (g_options["temporary"] === true && p_message === "temporary")) {
    open_histories(p_message);
  }
}
browser.runtime.onMessage.addListener(message_handler);