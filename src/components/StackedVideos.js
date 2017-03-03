//import React, { Component } from 'react';
var React = require('react');
var captions = require('./captions.js');
import StackGrid from "react-stack-grid";
import Image from 'react-bootstrap/lib/Image';
import { easings } from "react-stack-grid/lib/";
import { transitions } from "react-stack-grid/lib/";
var Spinner = require('react-spinkit');
import './RawText.css'

const transition = transitions.scaleDown;

const styles = {
    wrapper: {
        alignContent:'flex-start',
        justifyContent: 'center',
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection:'row',

    },
    video:{
      maxWidth:'200px',
      height:'auto',
      width:'auto',
    },
    container:{
      border:'2px solid #f3f3f3',
      position:'relative'
    },
    innerDiv:{
      backgroundColor:'#f3f3f3'
    },
};

const images = [
  { src: "https://player.vimeo.com/external/121172636.mobile.mp4?s=9da6ad5bf1612da334777073a90decb40d6a73dd&profile_id=116&oauth2_token_id=57447761", label: "Sample image 1" },
  { src: "https://player.vimeo.com/external/122906279.mobile.mp4?s=115a4089dd05c668b35d8eecfc66d7865335a5f2&profile_id=116&oauth2_token_id=57447761", label: "Sample image 2" },
  { src: "https://player.vimeo.com/external/122906279.mobile.mp4?s=115a4089dd05c668b35d8eecfc66d7865335a5f2&profile_id=116&oauth2_token_id=57447761", label: "Sample image 3" },
  { src: "http://www.uniwallpaper.com/static/images/eiffel-tower-wallpaper-18_fRZLW4V.jpg", label: "Sample image 4" },
  { src: "http://hd.wallpaperswide.com/thumbs/sunset_winter_shadows-t2.jpg", label: "Sample image 5" },
  { src: "http://webneel.com/wallpaper/sites/default/files/images/07-2013/tulips-flower-wallpaper.preview.jpg", label: "Sample image 6" },
  { src: "http://hd.wallpaperswide.com/thumbs/dream_house-t2.jpg", label: "Sample image 7" },
  { src: "http://webneel.com/wallpaper/sites/default/files/images/06-2013/beautiful%20sky%20tree%20wallpaper.preview.jpg", label: "Sample image 8" },
  { src: "http://wallpaperwarrior.com/wp-content/uploads/2016/09/Wallpaper-20-1024x640.jpg", label: "Sample image 9" },
  { src: "http://webneel.com/wallpaper/sites/default/files/images/07-2013/tulips-flower-wallpaper.preview.jpg", label: "Sample image 10" },
  { src: "http://webneel.com/wallpaper/sites/default/files/images/06-2013/beautiful%20sky%20tree%20wallpaper.preview.jpg", label: "Sample image 11" },
  { src: "http://webneel.com/wallpaper/sites/default/files/images/04-2013/dreamy-beach-wallpaper.preview.jpg", label: "Sample image 12" },
  { src: "http://www.planwallpaper.com/static/images/techno_wallpaper_2_0_hd_by_gredius-d5o48do.jpg", label: "Sample image 13" },
  { src: "https://wallpaperscraft.com/image/alphabet_inc_google_holding_company_103920_602x339.jpg", label: "Sample image 14" },
  { src: "https://marketplace.canva.com/MACB8rnuJGg/1/0/thumbnail_large/canva-negative-space-funny-desktop-wallpaper-MACB8rnuJGg.jpg", label: "Sample image 15" },
  { src: "http://www.homebase.co.uk/cmsresource/image/64288/landscape_ratio2x1/626/313/5f4fe6b30138d18ff904397e5caea24/nc/wallpaperbuyingguide--header.jpg", label: "Sample image 16" },
  { src: "http://wallpaperfx.com/uploads/wallpapers/2016/04/14/18521/preview_vatna-glacier-icelend.jpg", label: "Sample image 17" },
  { src: "http://www.planwallpaper.com/static/images/Difference-Between-Wallpaper-and-Screensaver.jpg", label: "Sample image 18" },
  { src: "http://www.i-digitalpixel.com/data/out/25/3402262-wallpaper-images.jpg", label: "Sample image 19" },
  { src: "http://interfacelift.com/wallpaper/previews/04077_monuments_672x420.jpg", label: "Sample image 20" },
  { src: "http://wfiles.brothersoft.com/b/beautiful-iphone-4-wallpaper-01_5846-640x960.jpg", label: "Sample image 21" },
  { src: "http://wfiles.brothersoft.com/i/iphone-4-underwater-wallpaper-01_6049-640x960.jpg", label: "Sample image 22" }
];

const videos= 
{
   "urls":[
      {
         "image":"https://static-videos.pexels.com/videos/323/pictures/preview-0.jpg",
         "preview":{
            "url":"https://player.vimeo.com/external/121172636.mobile.mp4?s=9da6ad5bf1612da334777073a90decb40d6a73dd&profile_id=116&oauth2_token_id=57447761",
            "width":480,
            "height":270
         },
         "original":{
            "url":"https://player.vimeo.com/external/121172636.hd.mp4?s=be6c0ad2197b9352f122c9b2c6c06808d92491ea&profile_id=119&oauth2_token_id=57447761",
            "width":1920,
            "height":1080
         }
      },
      {
         "image":"https://static-videos.pexels.com/videos/429/pictures/preview-0.jpg",
         "preview":{
            "url":"https://player.vimeo.com/external/121469231.mobile.mp4?s=23cf9494f4d142c031d39a1b0ac8ed154e16cf80&profile_id=116&oauth2_token_id=57447761",
            "width":480,
            "height":270
         },
         "original":{
            "url":"https://player.vimeo.com/external/121469231.hd.mp4?s=2565d6f74a7cfe53a7cf5db8d4f4d062beb7e49c&profile_id=119&oauth2_token_id=57447761",
            "width":1920,
            "height":1080
         }
      },
      {
         "image":"https://static-videos.pexels.com/videos/532/pictures/preview-0.jpg",
         "preview":{
            "url":"https://player.vimeo.com/external/122906279.mobile.mp4?s=115a4089dd05c668b35d8eecfc66d7865335a5f2&profile_id=116&oauth2_token_id=57447761",
            "width":480,
            "height":270
         },
         "original":{
            "url":"https://player.vimeo.com/external/122906279.hd.mp4?s=9000b15f19dd8e840e46d6fb87729e1c428fde5a&profile_id=113&oauth2_token_id=57447761",
            "width":1280,
            "height":720
         }
      },
      {
         "image":"https://static-videos.pexels.com/videos/599/pictures/preview-0.jpg",
         "preview":null,
         "original":{
            "url":"https://player.vimeo.com/external/159035843.hd.mp4?s=d322529c7bf7f6638f992970fa01119eea37151f&profile_id=119&oauth2_token_id=57447761",
            "width":1920,
            "height":1080
         }
      },
      {
         "image":"https://static-videos.pexels.com/videos/705/pictures/preview-0.jpg",
         "preview":null,
         "original":{
            "url":"https://player.vimeo.com/external/173394760.hd.mp4?s=a05c3ce4b94fe66dec311385702fd65c6b2f43dc&profile_id=119&oauth2_token_id=57447761",
            "width":1920,
            "height":1080
         }
      },
      {
         "image":"https://static-videos.pexels.com/videos/708/pictures/preview-0.jpg",
         "preview":null,
         "original":{
            "url":"https://player.vimeo.com/external/173394975.hd.mp4?s=5203832029f30b3642808baf23cac10539fb6490&profile_id=119&oauth2_token_id=57447761",
            "width":1920,
            "height":1080
         }
      },
      {
         "image":"https://static-videos.pexels.com/videos/779/pictures/preview-0.jpg",
         "preview":null,
         "original":{
            "url":"https://player.vimeo.com/external/174003178.hd.mp4?s=a8a385ef4be407746eb0d37bd95703da34904611&profile_id=119&oauth2_token_id=57447761",
            "width":1920,
            "height":1080
         }
      },
      {
         "image":"https://static-videos.pexels.com/videos/890/pictures/preview-0.jpg",
         "preview":null,
         "original":{
            "url":"https://player.vimeo.com/external/178947000.hd.mp4?s=c9ccae9ce39c3888b3c4377ae1e4dcf05b87877c&profile_id=119&oauth2_token_id=57447761",
            "width":1920,
            "height":1080
         }
      },
      {
         "image":"https://static-videos.pexels.com/videos/975/pictures/preview-0.jpg",
         "preview":null,
         "original":{
            "url":"https://player.vimeo.com/external/180184009.hd.mp4?s=9cd11c3199eb863a52c996dc71c1c43949f1640d&profile_id=174&oauth2_token_id=57447761",
            "width":1280,
            "height":720
         }
      },
      {
         "image":"https://static-videos.pexels.com/videos/1202/pictures/preview-0.jpg",
         "preview":null,
         "original":{
            "url":"https://player.vimeo.com/external/189413699.hd.mp4?s=4a8ce7423f9e207e1e14c49309375b099e47a988&profile_id=174&oauth2_token_id=57447761",
            "width":1280,
            "height":720
         }
      },
      {
         "image":"https://static-videos.pexels.com/videos/1286/pictures/preview-0.jpg",
         "preview":null,
         "original":{
            "url":"https://player.vimeo.com/external/190326001.hd.mp4?s=87dc115af280e62d57ea0e297ca4bd9d26669521&profile_id=174&oauth2_token_id=57447761",
            "width":1280,
            "height":720
         }
      },
      {
         "image":"https://static-videos.pexels.com/videos/1789/pictures/preview-0.jpg",
         "preview":null,
         "original":{
            "url":"https://player.vimeo.com/external/199988954.hd.mp4?s=1e6ff9672834bf55bb8ba2f2981ea89eb64519a4&profile_id=119&oauth2_token_id=57447761",
            "width":1920,
            "height":1080
         }
      },
      {
         "image":"https://static-videos.pexels.com/videos/1807/pictures/preview-0.jpg",
         "preview":null,
         "original":{
            "url":"https://player.vimeo.com/external/199990058.hd.mp4?s=3d4f4785aca52dc0afc6e41a51abe7956fd5db77&profile_id=119&oauth2_token_id=57447761",
            "width":1920,
            "height":1080
         }
      }
   ]
}

var StackedVideos = React.createClass({
  handleMouseEvents:function(evt){
    evt.persist()
    console.log("mouseovered ",evt.target, " ", evt.type)
    if(evt.type=="mouseenter"){
    //code from http://stackoverflow.com/questions/21399872/how-to-detect-whether-html5-video-has-paused-for-buffering
    var checkInterval  = 50.0
    var lastPlayPos    = 0
    var currentPlayPos = 0
    var bufferingDetected = false
    var player = evt.target;

    setInterval(checkBuffering, checkInterval)
    function checkBuffering() {
        currentPlayPos = player.currentTime

        // checking offset, e.g. 1 / 50ms = 0.02
        var offset = 1 / checkInterval

        // if no buffering is currently detected,
        // and the position does not seem to increase
        // and the player isn't manually paused...
        if (
                !bufferingDetected 
                && currentPlayPos < (lastPlayPos + offset)
                && !player.paused
            ) {
            console.log("buffering")
            bufferingDetected = true

            let id = evt.target.getAttribute("data-videoid");
            console.log("buffer id ",evt.target, " ", id)
            document.getElementById("spinner_id_"+id).style.visibility = "visible";
        }

        // if we were buffering but the player has advanced,
        // then there is no buffering
        if (
            bufferingDetected 
            && currentPlayPos > (lastPlayPos + offset)
            && !player.paused
            ) {
            console.log("not buffering anymore")
            bufferingDetected = false

            let id = evt.target.getAttribute("data-videoid")
            document.getElementById("spinner_id_"+id).style.visibility = "hidden";
        }
        lastPlayPos = currentPlayPos
    }


      //console.log(evt.target.getAttribute("data-videoId"));
    if(evt.target.paused){//neccessary to avoid errors
      evt.target.play();
    }
    }else if(evt.type=="mouseleave"){
      evt.target.pause();
      bufferingDetected = false
      let id = evt.target.getAttribute("data-videoid")
      document.getElementById("spinner_id_"+id).style.visibility = "hidden";
    }
    
  },
  render: function() {
    var captionList = this.props.videos.map((cap,i)=>{
          if(cap.preview!=null){//if small resolution preview exist
            return (
              <div style={styles.container} key={'video_preview_id'+i}>
                <video
                  data-type="video"
                  data-src={cap.preview.url}  
                  loop
                  data-videoid={i}
                  preload="metadata"
                  poster={cap.image}
                  style={styles.video}
                  onMouseEnter={this.handleMouseEvents}
                  onMouseLeave={this.handleMouseEvents}>
                  Your browser does not support HTML5 video.
                  <source src={cap.preview.url}>
                  </source>
                </video>
                <Spinner id={"spinner_id_"+i} style={{visibility:'hidden',position:'absolute',top:8,left:8}}spinnerName='circle' />
              </div>)
          }else if(cap.preview==null){//if preview doesnt exist show full resolution version (loading will be slower though)
            return (
              <div style={styles.container} key={'video_preview_id'+i}>
                <video 
                  data-type="video"
                  data-src={cap.original.url}  
                  loop
                  data-videoid={i}
                  preload="metadata"
                  poster={cap.image}
                  style={styles.video}
                  onMouseEnter={this.handleMouseEvents}
                  onMouseLeave={this.handleMouseEvents}>
                  Your browser does not support HTML5 video.
                  <source src={cap.original.url}>
                  </source>
                </video>
                <Spinner id={"spinner_id_"+i} style={{visibility:'hidden',position:'absolute',top:8,left:8}}spinnerName='circle' />
              </div>)
          }
    });
    
    return (
      <div style={{width:'100%'}}>
      <Spinner className={this.props.videosLoader?'':'displayNone'} style={{paddingTop:'15% '}} spinnerName='three-bounce' />
      <StackGrid
        className={this.props.videosLoader?'displayNone':''}
        monitorImagesLoaded
        columnWidth={200}
        duration={600}
        gutterWidth={10}
        gutterHeight={10}
        easing={easings.cubicOut}
        appearDelay={60}
        appear={transition.appear}
        appeared={transition.appeared}
        enter={transition.enter}
        entered={transition.entered}
        leaved={transition.leaved}>
        {captionList}
      </StackGrid>
      </div>
    );
  }
});



module.exports = StackedVideos;
//export default App;
