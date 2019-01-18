/**
 * Lit Video Library
 * Author : Jaspal Marok
 */

import "./css/main.scss";

import LitYoutubePlayer from './services/youtubeService';
import LitVimeoPlayer from './services/vimeoService';

//#region Notes:
//DONE: Make it flexible to any element that gets the target
//DONE: Add Responsiveness
//TODO: Replace iframe with Youtube api
//TODO: Add Vimeo Support
//#endregion

/**
 * IFFE with window to access it from anywhere in code.
 */
(function(window){
    
    function litVideo(){


        var _litVideo = {};
        var _litPlayers = [];

        var _settings = {
            target : undefined,
            wrapperClass : undefined,
            videoURL : undefined,
            videoID : undefined,
            width: undefined,
            height: undefined,
            youtube: false,
            vimeo:false
        },
        _defaults = {
            wrapperClass : ['video-lit', 'video-lit-wrapper'],
            iframeWidth:560,
            iframeHeight:315,
            youtubeAPI: '//www.youtube.com/player_api',
            vimeoAPI : '//player.vimeo.com/api/player.js'
        }

        /**
         * Library Methods
         */
        _litVideo.init = function(target,initObject){
            try {

                //Reset the settings parameter everytime object is intialized
                _litVideo.resetSettings();

                if(!_litVideo.isObject(initObject) || _litVideo.checkObjectParams(target,initObject)){
                    throw 'Object Expected to initialize LitVideo';
                }
    
                const wrapper = _litVideo.createVideoWrapper();
                const targetNode = document.querySelector(_settings.target);
            
                targetNode.appendChild(wrapper);
                
                if(_settings.youtube){
                    LitYoutubePlayer(_settings.videoID);
                }
                if(_settings.vimeo){
                    LitVimeoPlayer();
                }
            }

            catch(message){
                //Caught a premature Error
                console.error("Error: " + message);
            }
            
            return;
        }

        _litVideo.checkObjectParams = function(target,objectToCheck){
            if(typeof target !== 'string' || !target.length ){
                throw "Target could not be on initializer";
            }

            if((objectToCheck.youtube == false || typeof objectToCheck.youtube == 'undefined') && (objectToCheck.vimeo == false || typeof objectToCheck.vimeo == 'undefined')){
                throw "Lit Video requires a service flag pass -> {youtube:true} or {vimeo:true} in options object";
            }

            if(objectToCheck.youtube){
                _settings.youtube = true;
            }

            if(objectToCheck.vimeo){
                _settings.vimeo = true;
            }

            _litVideo.setTarget(target);

            const videoURL = _litVideo.extractVideoURLFromTargetElement();
            const videoID = _litVideo.extractVideoIDFromVideoURL(videoURL);

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
            _litVideo.setVideoID(videoID);
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

        _litVideo.extractVideoIDFromVideoURL = function(url){
            const vimeoRegex = /^.*(www\.)?vimeo.com\/(\d+)($|\/)/;
            const youtubeRegex = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;

            let youtubeMatch = url.match(youtubeRegex);
            if(youtubeMatch && youtubeMatch[7].length == 11){
                return youtubeMatch[7];
            }

            let vimeoMatch = url.match(vimeoRegex);
            if (vimeoMatch){
                //Return if vimeo url found else
                return vimeoMatch[2];
            }
            
            throw "URL is not from a supported service";
        }

        /**
         * Depreciated
         */
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

        _litVideo.setVideoID = function(videoID){
            _settings.videoID = videoID;
            return _settings.videoID;
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
                videoID : undefined,
                width: undefined,
                height: undefined,
                youtube: false,
                vimeo:false
            }
        }

        window.onYouTubePlayerAPIReady = function(){
            
        }

        window.onVimeoPlayerAPIReady = function(){
            const vimeoOptions = {
                id: _settings.videoID
            }
            let player = new Vimeo.Player('vimeotest', vimeoOptions);

            //Add player to available players
            _litPlayers.push(player);
        }

        window.onNow = function(e){
            console.log("Youtube Here Now");
            console.log(e);
            const youtubeOptions = {
                videoId : e
            }
            let player = new YT.Player('test',youtubeOptions);

            //Add player to available players
            _litPlayers.push(player);
        }

        //Return properties that can be public.
        return {
            init:_litVideo.init,
            setDefaultHeight:_litVideo.setDefaultIframeWidth,
            setDefaultWidth:_litVideo.setDefaultIframeHeight,
            players: _litPlayers
        };
    }

    /**
     * Create Namespace
     */
    if(typeof (window.litVideo) === 'undefined'){
        window.litVideo = litVideo();
    }

})(window);