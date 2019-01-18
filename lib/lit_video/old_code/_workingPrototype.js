window.litVideo = (function () {

    var lit = {},
        target = "";

    function initialize(options) {

        if (typeof options !== 'object') {
            console.log('Not so 🔥!!');

            //Good time to bail out!
            return;
        }

        //Select target node
        if (options.target.length > 0) {
            target = document.querySelector(options.target);
            lit.selectedNode = target;
            appendLitWrapper(target);
        }

        if (options.videoId.length > 0) {
            createLitIframe({
                videoId: options.videoId,
                target: target
            });
        }

        console.log("Init Success 🔥");
        return lit;
    }

    function appendLitWrapper(target) {
        var div = document.createElement('div');
        div.classList.add('video-lit', 'video-lit-wrapper');
        target.appendChild(div);
    }

    function createLitIframe(options) {
        var iframe = document.createElement('iframe');
        var litWrapper = options.target.querySelector(".video-lit");
        iframe.classList.add('lit-video-iframe');
        iframe.src = "https://www.youtube.com/embed/" + options.videoId;
        iframe.width = "560";
        iframe.height = "315";
        litWrapper.appendChild(iframe);
        lit.iframeSrc = iframe.src;
    }

    return {
        init: initialize,
    };

})();