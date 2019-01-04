/**
 * Lit Video Library
 * Author : Jaspal Marok
 */

// import "./css/main.scss";

//#region Todo's

            //Check for required params inobject [X]
            //Get video id from target data attribute [X]
            //Setup defaults [X]
            //Create a wrapper object [X]
            //Check if video is youtube or vimeo
            //Create a Iframe[X]
            //Append Iframe [X]
            //Maybe form a variable that can be passed around to any function [X]
            //create flag for setting default width 
            //video is attached to any element that is target
            //Make it responsive

//#endregion

/**
 * IFFE with window to access it from anywhere in code.
 */
(function(window){
    
    function litVideo(){


        var _litVideo = {};

        var _settings = {
            target : undefined,
            wrapperClass : undefined,
            videoURL : undefined,
            width: undefined,
            height: undefined,
            youtube: false,
            vimeo:false
        },
        _defaults = {
            wrapperClass : ['video-lit', 'video-lit-wrapper'],
            iframeWidth:560,
            iframeHeight:315
        }

        /**
         * Library Methods
         */
        _litVideo.init = function(initObject){
            try {
                _litVideo.resetSettings();

                if(!_litVideo.isObject(initObject) || _litVideo.checkObjectParams(initObject)){
                    throw 'Object Expected to initialize LitVideo';
                }
    
                const wrapper = _litVideo.createVideoWrapper();
                const targetNode = document.querySelector(_settings.target);
                const iframe = _litVideo.createIframe();
    
                wrapper.appendChild(iframe);
                targetNode.appendChild(wrapper);
            }

            catch(message){
                //Caught a premature throw
                console.error("Error: " + message);
            }
            
            return;
        }

        _litVideo.checkObjectParams = function(objectToCheck){
            if(typeof objectToCheck.target !== 'string' || !objectToCheck.target.length ){
                throw "Target could not be found in the object";
            }

            if((objectToCheck.youtube == false || typeof objectToCheck.youtube == 'undefined') && (objectToCheck.vimeo == false || typeof objectToCheck.vimeo == 'undefined')){
                throw "Lit Video requires a vendor flag pass -> {youtube:true} or {vimeo:true} in options object";
            }

            _litVideo.setTarget(objectToCheck.target);

            const videoURL = _litVideo.extractVideoURLFromTargetElement();

            if(!videoURL.length || typeof videoURL == 'undefined' ){
                return "Error no url attrbute detected";
            }

            
            if(typeof objectToCheck.width !== 'undefined'){
                _litVideo.setIframeWidth(objectToCheck.width);
            }

            if(typeof objectToCheck.height !== 'undefined'){
                _litVideo.setIframeHeight(objectToCheck.height);
            }

            _litVideo.setVideoURL(videoURL);
        }

        _litVideo.createVideoWrapper = function(){
            var wrapper = document.createElement('div');

            if(typeof _settings.wrapperClass === 'undefined'){
                wrapper.classList.add(..._defaults.wrapperClass);
                return wrapper;   
            }

            wrapper.classList.add(..._settings.wrapperClass);
            return wrapper;
        }

        _litVideo.extractVideoURLFromTargetElement = function(){
            const target = document.querySelector(_settings.target);
            const url = target.attributes["data-video-url"].value;
            if( url.length == 0 || typeof url == 'undefined'){
                throw `Missing video url on target ${_settings.target} element`;
            }
            return target.attributes["data-video-url"].value;
        }

        _litVideo.createIframe = function(){
            const iframe = document.createElement('iframe');
            const iframeAttrs = {
                'src' : _settings.videoURL,
                'width' : ((typeof _settings.width == 'undefined') ? _defaults.iframeWidth : _settings.width),
                'height' : ((typeof _settings.height == 'undefined') ? _defaults.iframeHeight : _settings.height)
            }

            _litVideo.setAttributes(iframe, iframeAttrs);
            return iframe;
        }



        /**
         * Private Settings Variable Setters
         */
        _litVideo.setTarget = function(target){
            _settings.target = target;
            return _settings.target;
        }

        _litVideo.setVideoURL = function(videoURL){
            _settings.videoURL = videoURL;
            return _settings.videoURL;
        }
        _litVideo.setIframeWidth = function(width){
            _settings.width = width;
            return _settings.width;
        }

        _litVideo.setIframeHeight = function(height){
            _settings.height = height;
            return _settings.height;
        }

        /**
         * Private Default Variable setters
         */
        _litVideo.setDefaultIframeWidth = function(width){
            _defaults.iframeWidth = width;
            return _defaults.iframeWidth;
        }

        _litVideo.setDefaultIframeHeight = function(height){
            _defaults.iframeHeight = height;
            return _defaults.iframeHeight;
        }
        


        /**
         * Common Methods
         */
        _litVideo.isObject = function(param){
            if (typeof param !== 'object') {
                return false;
            }
            return true;
        }
        _litVideo.setAttributes= function(el, attrs) {
            for(var key in attrs) {
              el.setAttribute(key, attrs[key]);
            }
        }
        _litVideo.resetSettings = function(){
            _settings = {
                target : undefined,
                wrapperClass : undefined,
                videoURL : undefined,
                width: undefined,
                height: undefined
            }
        }

        return _litVideo;
    }

    /**
     * Create Namespace
     */
    if(typeof (window.litVideo) === 'undefined'){
        window.litVideo = litVideo();
    }

})(window);