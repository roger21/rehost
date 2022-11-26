const default_options = {
  "host": "rehost", // "rehost", "diberie", "weserv"
  "temporary": true, // TODO false,
  "history": true, // TODO false,
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
  "notifications": true,
  "link_choice": "image", // "image", "page"
  "add_return": true,
  "without": true,
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
    debug_message("init_options browser.storage.local.get options -> g_options",
      g_options);
    p_do_something();
  }).catch(function(p_error) {
    error_message("init_options browser.storage.local.get", p_error);
  });
}


function message_handler(p_message){
  debug_message("message_handler", p_message);

  switch(p_message){
  case "get_options":
    break;
  case "set_options":
    break;
  case "get_temporary":
    break;
  case "get_history":
    break;
  }

}
browser.runtime.onMessage.addListener(message_handler);