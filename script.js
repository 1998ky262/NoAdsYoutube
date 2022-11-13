const a = getParam("v");
// youtubeの動画idを取得
if(!a){
  alert("なんかおかしいんちゃうかぁ？");
}
else{
const b=document.getElementByID("video");
b.innerHTML=`<iframe width="853" height="480" src="https://www.youtube.com/embed/${a}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>`;
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
