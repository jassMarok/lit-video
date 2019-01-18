console.log("Vimeo Player");

function LitVimeoPlayer(){
    // Add Youtube API Script 
    var tag = document.createElement('script');
    tag.src = "//player.vimeo.com/api/player.js";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    //Call Load event on window to create Iframe
    tag.addEventListener('load', window.onVimeoPlayerAPIReady);
}

module.exports = LitVimeoPlayer;