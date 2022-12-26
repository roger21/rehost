const g_debug = true;

function error_message(p_file, p_action, p_error) {
  console.log("ERROR extension " + browser.i18n.getMessage("extension_name") +
    " : " + p_file + " : " + p_action + " :", p_error);
}

function debug_message(p_file, p_action, p_message) {
  if(g_debug) {
    console.log("DEBUG extension " + browser.i18n.getMessage("extension_name") +
      " : " + p_file + " : " + p_action + " :", p_message);
  }
}

let g_options;

function update_popup() {
  document.querySelector("p#popup_host_rehost > span")
    .classList.toggle("checked", g_options["host"] === "rehost");
  document.querySelector("p#popup_host_diberie > span")
    .classList.toggle("checked", g_options["host"] === "diberie");
  document.querySelector("p#popup_host_wsrvnl > span")
    .classList.toggle("checked", g_options["host"] === "wsrvnl");
  document.querySelector("p#popup_host_superhfr > span")
    .classList.toggle("checked", g_options["host"] === "superhfr");
  document.querySelector("p#popup_notifications > span")
    .classList.toggle("checked", g_options["notifications"] === true);
  document.querySelector("p#popup_link_image > span")
    .classList.toggle("checked", g_options["link"] === "image");
  document.querySelector("p#popup_link_page > span")
    .classList.toggle("checked", g_options["link"] === "page");
  document.querySelector("p#popup_break > span")
    .classList.toggle("checked", g_options["break"] === true);
  //if(g_options["host"] !== "TODO" && g_options["host"] !== "TODO") {
  if(false) { // TODO
    document.querySelector("p#popup_link_image").style.display = "none";
    document.querySelector("p#popup_link_page").style.display = "none";
  } else {
    document.querySelector("p#popup_link_image").style.display = "";
    document.querySelector("p#popup_link_page").style.display = "";
  }
  debug_message("popup.js",
    "update_popup",
    "ok");
}

function click_action() {
  let l_id = this.getAttribute("id");
  debug_message("popup.js",
    "click_action",
    l_id);
  if(l_id.startsWith("popup_")) { // radios and checkboxes
    if(this.querySelector("span.radio.checked") === null) {
      browser.runtime.sendMessage(l_id).then(function() {
        debug_message("popup.js",
          "click_action browser.runtime.sendMessage " + l_id,
          "ok");
        window.close();
      }).catch(function(p_error) {
        error_message("popup.js",
          "click_action browser.runtime.sendMessage " + l_id,
          p_error);
        window.close();
      });
    } else {
      window.close();
    }
  } else if(l_id === "configuration") {
    browser.runtime.openOptionsPage().then(function() {
      debug_message("popup.js",
        "click_action browser.runtime.openOptionsPage",
        "ok");
      window.close();
    }).catch(function(p_error) {
      error_message("popup.js",
        "click_action browser.runtime.openOptionsPage",
        p_error);
      window.close();
    });
  } else { // history and temporary
    browser.runtime.sendMessage(l_id).then(function() {
      debug_message("popup.js",
        "click_action browser.runtime.sendMessage " + l_id,
        "ok");
      window.close();
    }).catch(function(p_error) {
      error_message("popup.js",
        "click_action browser.runtime.sendMessage " + l_id,
        p_error);
      window.close();
    });
  }
}

window.addEventListener("load", function() {
  // disable contextmenu on the popup
  document.querySelector("body").addEventListener("contextmenu", function(p_event) {
    p_event.preventDefault();
    p_event.stopPropagation();
  }, true);
  // i18n of the labels
  let l_trans = document.querySelectorAll(".trans");
  for(const l_tran of l_trans) {
    l_tran.firstChild.nodeValue = browser.i18n.getMessage(l_tran.firstChild.nodeValue);
  }
  // actions on click
  let l_ps = document.querySelectorAll("body > p");
  for(const l_p of l_ps) {
    l_p.addEventListener("click", click_action, false);
  }
  // get options and update_popup
  browser.runtime.sendMessage("get_options").then(function(p_data) {
    g_options = p_data;
    debug_message("popup.js",
      "load browser.runtime.sendMessage get_options",
      g_options);
    update_popup();
    // loaded
    document.querySelector("body").classList.toggle("loading");
  }).catch(function(p_error) {
    error_message("popup.js",
      "load browser.runtime.sendMessage get_options",
      p_error);
  });
}, false);