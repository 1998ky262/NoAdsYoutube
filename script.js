const a = getParam("v");
// youtubeの動画idを取得
if(a=""){
  alert("なんかおかしいんちゃうかぁ？");
}
else{
const b=document.getElementByID("video");
b.innerHTML="しね";
}
function getParam(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}
