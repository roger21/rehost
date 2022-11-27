let g_debug = true;

function error_message(p_file, p_action, p_error) {
  console.log("ERROR extension " + browser.i18n.getMessage("extension_name") +
    " : " + p_file + " : " + p_action + " : ", p_error);
}

function debug_message(p_file, p_action, p_message) {
  if(g_debug) {
    console.log("DEBUG extension " + browser.i18n.getMessage("extension_name") +
      " : " + p_file + " : " + p_action + " : ", p_message);
  }
}

let g_options;

function update_popup() {
  document.querySelector("p#host_rehost > span")
    .classList.toggle("checked", g_options["host"] === "rehost");
  document.querySelector("p#host_diberie > span")
    .classList.toggle("checked", g_options["host"] === "diberie");
  document.querySelector("p#host_weserv > span")
    .classList.toggle("checked", g_options["host"] === "weserv");
  document.querySelector("p#notifications > span")
    .classList.toggle("checked", g_options["notifications"] === true);
  document.querySelector("p#link_image > span")
    .classList.toggle("checked", g_options["link"] === "image");
  document.querySelector("p#link_page > span")
    .classList.toggle("checked", g_options["link"] === "page");
  document.querySelector("p#break > span")
    .classList.toggle("checked", g_options["break"] === true);
  //if(g_options["host"] !== "TODO" && g_options["host"] !== "TODO") {
  if(false) { // TODO
    document.querySelector("p#link_image").style.display = "none";
    document.querySelector("p#link_page").style.display = "none";
  } else {
    document.querySelector("p#link_image").style.display = "";
    document.querySelector("p#link_page").style.display = "";
  }
  debug_message("popup.js", "update_popup", "ok");
}

window.addEventListener("load", function() {
  // i18n
  let l_trans = document.querySelectorAll(".trans");
  for(let l_tran of l_trans) {
    l_tran.firstChild.nodeValue = browser.i18n.getMessage(l_tran.firstChild.nodeValue);
  }
  // get options and update_popup
  browser.runtime.sendMessage("get_options").then(function(p_data) {
    g_options = p_data;
    debug_message("popup.js", "sendMessage get_options", g_options);
    update_popup();
    // loaded
    document.querySelector("body").classList.toggle("loading");
  }).catch(function(p_error) {
    error_message("popup.js", "sendMessage get_options", p_error);
  });
}, false);