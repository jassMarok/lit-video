console.log("Create Player");

function CreatePlayer(options){
    if(options.isYoutube){
        console.log("Create a youtube iframe");
    }
    if(options.isVimeo){
        console.log("Create a Vimeo Player");
    }

    //Method call to players can be uniformed here and checked to call correct one
}

module.exports = CreatePlayer;