
function LitYoutubePlayer(videoID){
    
    // Add Youtube API Script 
    var tag = document.createElement('script');
    tag.src = "//www.youtube.com/player_api";
    tag.onload = window.onNow;
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    //Call Load event on window to create Iframe
   // tag.addEventListener('load', window.onNow(videoID));
}



module.exports = LitYoutubePlayer;