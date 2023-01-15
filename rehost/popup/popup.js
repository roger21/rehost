const g_debug = true; // TODO

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
  // hide every entries
  const l_elements = document.querySelectorAll("body > p, body > hr");
  for(const l_element of l_elements) {
    l_element.style.display = "none";
  }
  // show hosts entries
  if(g_options["popup_hosts"] === true) {
    const l_hosts_ps = document.querySelectorAll("body > p[id^=\"popup_host_\"]");
    for(const l_hosts_p of l_hosts_ps) {
      l_hosts_p.style.display = "";
    }
  }
  // show configuration entry
  if(g_options["configuration_todo"]) { // TODO
    if(g_options["popup_configuration"] === true) {
      if(g_options["popup_hosts"] === true) {
        document.querySelector("hr#configuration_hr").style.display = "";
      }
      document.querySelector("p#configuration").style.display = "";
    }
  }
  // show histories entries
  if(g_options["histories_todo"]) { // TODO
    if(g_options["popup_history"] === true || g_options["popup_temporary"] === true) {
      if(g_options["popup_hosts"] === true || g_options["popup_configuration"] === true) {
        document.querySelector("hr#histories_hr").style.display = "";
      }
    }
    if(g_options["popup_history"] === true) {
      document.querySelector("p#history").style.display = "";
    }
    if(g_options["popup_temporary"] === true) {
      document.querySelector("p#temporary").style.display = "";
    }
  }
  // show options entries
  if(g_options["popup_options"] === true) {
    if(g_options["popup_hosts"] === true || g_options["popup_configuration"] === true ||
      g_options["popup_history"] === true || g_options["popup_temporary"] === true) {
      document.querySelector("hr#options_hr").style.display = "";
    }
    document.querySelector("p#popup_notifications").style.display = "";
    // show link options only if not host TODO or host TODO ...
    if(g_options["host"] === "TODO" || g_options["host"] === "TODO") {
      //if(true) { // TODO
      document.querySelector("p#popup_link_image").style.display = "";
      document.querySelector("p#popup_link_page").style.display = "";
    }
    document.querySelector("p#popup_break").style.display = "";
  }
  // add checked class
  document.querySelector("p#popup_host_rehost > span")
    .classList.toggle("checked", g_options["host"] === "rehost");
  document.querySelector("p#popup_host_diberie > span")
    .classList.toggle("checked", g_options["host"] === "diberie");
  document.querySelector("p#popup_host_wsrvnl > span")
    .classList.toggle("checked", g_options["host"] === "wsrvnl");
  document.querySelector("p#popup_host_superhfr > span")
    .classList.toggle("checked", g_options["host"] === "superhfr");
  document.querySelector("p#popup_host_auraiteu > span")
    .classList.toggle("checked", g_options["host"] === "auraiteu");
  document.querySelector("p#popup_notifications > span")
    .classList.toggle("checked", g_options["notifications"] === true);
  document.querySelector("p#popup_link_image > span")
    .classList.toggle("checked", g_options["link"] === "image");
  document.querySelector("p#popup_link_page > span")
    .classList.toggle("checked", g_options["link"] === "page");
  document.querySelector("p#popup_break > span")
    .classList.toggle("checked", g_options["break"] === true);
  // debug message
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
  // get options
  browser.runtime.sendMessage("get_options").then(function(p_data) {
    g_options = p_data;
    debug_message("popup.js",
      "load browser.runtime.sendMessage get_options",
      g_options);
    // update_popup
    update_popup();
    // actions on click
    let l_ps = document.querySelectorAll("body > p");
    for(const l_p of l_ps) {
      if(l_p.style.display !== "none";) {
        l_p.addEventListener("click", click_action, false);
      }
    }
    // loaded
    document.querySelector("body").classList.toggle("loading");
  }).catch(function(p_error) {
    error_message("popup.js",
      "load browser.runtime.sendMessage get_options",
      p_error);
  });
}, false);