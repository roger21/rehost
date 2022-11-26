window.addEventListener("load", function(){
  let l_trans=document.querySelectorAll(".trans");
  for(let l_tran of l_trans){
    console.log("trans", l_tran.firstChild.nodeValue, browser.i18n.getUILanguage());
    l_tran.firstChild.nodeValue = browser.i18n.getMessage(l_tran.firstChild.nodeValue);
  }
  console.log("browser.i18n.getUILanguage()", browser.i18n.getUILanguage());
  browser.i18n.getAcceptLanguages().then(function(p_languages){
    console.log(p_languages);
  });
  document.querySelector("body").classList.toggle("loading");


  browser.runtime.sendMessage("message sent popup.js lol");


  
}, false);