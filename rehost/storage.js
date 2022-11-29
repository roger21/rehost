const default_options = {
  "host": "rehost", // "rehost", "diberie", "weserv"
  "temporary": true, // TODO false,
  "history": true, // TODO false,
  "notifications": true,
  "link": "image", // "image", "page"
  "break": false,
  "without": true,
  "menu_hosts": true, // false, true, "sub"
  "menu_configuration": true,
  "menu_temporary": true,
  "menu_history": true,
  "menu_options": true, // false, true, "sub"
  "popup_popup": true,
  "popup_action": "configuration", // "configuration", "temporary", "history"
  "popup_hosts": true,
  "popup_configuration": true,
  "popup_temporary": true,
  "popup_history": true,
  "popup_options": true,
  "rehost_medium": true,
  "rehost_preview": true,
  "rehost_thumbnail": true,
  "diberie_medium": true,
  "diberie_mini": true,
  "weserv_large": true,
  "weserv_grand": true,
  "weserv_medium": true,
  "weserv_preview": true,
  "weserv_tumbnail": true,
  "weserv_mini": true
};

let g_options;

function init_options(p_do_something) {
  browser.storage.local.get({
    "options": default_options
  }).then(function(p_data) {
    g_options = p_data["options"];
    debug_message("storage.js",
      "init_options browser.storage.local.get options",
      g_options);
    p_do_something();
  }).catch(function(p_error) {
    error_message("storage.js",
      "init_options browser.storage.local.get options",
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
    switch(l_message[1]) {
      case "host":
        g_options["host"] = l_message[2];
        break;
      case "link":
        g_options["link"] = l_message[2];
        break;
      default:
        g_options[l_message[1]] = !g_options[l_message[1]];
        break;
    }
    browser.storage.local.set({
      "options": g_options
    }).then(function() {
      debug_message("storage.js",
        "message_handler browser.storage.local.set options",
        "ok");
    }).catch(function(p_error) {
      error_message("storage.js",
        "message_handler browser.storage.local.set options",
        p_error);
    });
  }
}
browser.runtime.onMessage.addListener(message_handler);