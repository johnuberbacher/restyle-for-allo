document.getElementById("leftBar").style.borderRight = "1px solid #444442";
document.getElementById("leftBar").style.backgroundColor = "#34373c";
document.getElementById("library").style.borderTop = "#444442";
document.getElementById("library").style.borderBottom = "#444442";
document.getElementById("menu").style.backgroundColor = "#34373c";
document.getElementById("chip").style.backgroundColor = "transparent";
document.getElementById("textarea").style.color = "#ffffff";
document.getElementById("contentContainer").style.backgroundColor = "#141518";
document.getElementById("startChatButtonString").style.color = "#ffffff";
document.getElementById("compose").style.backgroundColor = "#34373c";
document.getElementById("compose").style.borderTop = "1px solid #444442";
document.getElementById("conversationName").style.color = "#ffffff";

var conversationHeader = document.getElementsByClassName('conversationHeader');
for(var i = 0; i < conversationHeader.length; i++) {
    conversationHeader[i].style.backgroundColor = "#34373c";
}

var composebar = document.getElementsByClassName('compose-bar');
for(var i = 0; i < composebar.length; i++) {
    composebar[i].style.backgroundColor = "#34373c";
}

var conversationsview = document.getElementsByClassName('conversations-view');
for(var i = 0; i < conversationsview.length; i++) {
    conversationsview[i].style.backgroundColor = "#34373c";
    conversationsview[i].style.color = "#ffffff";
}

document.getElementById("startChatButton").onmouseover = function() {
    this.style.backgroundColor = "#404348";
}
document.getElementById("startChatButton").onmouseout = function() {
    this.style.backgroundColor = "#34373c";
}
