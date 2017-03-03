//import React, { Component } from 'react';
var React = require('react');
var captions = require('./captions.js');
import StackGrid from "react-stack-grid";
import Image from 'react-bootstrap/lib/Image';
import { easings } from "react-stack-grid/lib/";
import { transitions } from "react-stack-grid/lib/";
var Spinner = require('react-spinkit');
import './RawText.css' //need this because of music background color change
import soundIcon from '../images/soundIcon.png'


const transition = transitions.scaleDown;

const styles = {
    wrapper: {
        alignContent:'flex-start',
        justifyContent: 'center',
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection:'row',

    },
    img:{
      padding:'25px',
      maxWidth:'80px',
      height:'auto',
      width:'auto',
      cursor:'pointer'
    },
    container:{
      border:'2px solid #f3f3f3'
    },
    innerDiv:{
      backgroundColor:'#f3f3f3'
    },
};

const images = [
  { src: "https://static.pexels.com/photos/36487/above-adventure-aerial-air.jpg", label: "Sample image 1" },
  { src: "http://www.wallpapereast.com/static/images/Wallpaper-488.jpg", label: "Sample image 2" },
  { src: "https://www.planwallpaper.com/static/images/i-should-buy-a-boat.jpg", label: "Sample image 3" },
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
const music = {
  "tracks": [
    {
      "genre": "calm",
      "url": "/Users/petenilson/projects/ba47/web_app_django/speedboat_web/speedboatweb/static/music/calm/Meditation_Impromptu_01.mp3"
    },
    {
      "genre": "cheerful",
      "url": "/Users/petenilson/projects/ba47/web_app_django/speedboat_web/speedboatweb/static/music/cheerful/Carefree_Melody.mp3"
    },
    {
      "genre": "classical",
      "url": "/Users/petenilson/projects/ba47/web_app_django/speedboat_web/speedboatweb/static/music/classical/Prelude_No_2.mp3"
    },
    {
      "genre": "dark",
      "url": "/Users/petenilson/projects/ba47/web_app_django/speedboat_web/speedboatweb/static/music/dark/Haunt.mp3"
    },
    {
      "genre": "focused",
      "url": "/Users/petenilson/projects/ba47/web_app_django/speedboat_web/speedboatweb/static/music/focused/Destiny_Day.mp3"
    },
    {
      "genre": "funky",
      "url": "/Users/petenilson/projects/ba47/web_app_django/speedboat_web/speedboatweb/static/music/funky/Sunday.mp3"
    },
    {
      "genre": "inspirational",
      "url": "/Users/petenilson/projects/ba47/web_app_django/speedboat_web/speedboatweb/static/music/inspirational/Triangles.mp3"
    }
  ]
};

var StackedMusic = React.createClass({
  render: function() {
    console.log("these are the sounds", this.props.selectedSoundId)
    var soundsList = this.props.sounds.map((sound,i)=>{
            return (
              <div key={'image_preview_id'+i} >
                
                <Image 
                  className={this.props.selectedSoundId==i?'greenBackgroundColor':'whiteBackgroundColor'}
                  data-url={sound.url}  
                  data-soundNr={i}   
                  style={styles.img}
                  data-type="sound"        
                  src={soundIcon} thumbnail responsive>
                </Image>
                <div><i data-playingindicator="true" className="fa fa-play" style={{cursor:'pointer'}} aria-hidden="false"><audio src={sound.url}></audio></i> {sound.genre}</div>
              </div>)
    });
    
    return (
      <div style={{width:'100%',cursor:'default'}}>
      <audio  controls></audio>
      <Spinner className={this.props.imagesLoader?'':'displayNone'} style={{paddingTop:'15% '}} spinnerName='three-bounce' />
      <StackGrid
        className={this.props.imagesLoader?'displayNone':''}
        monitorImagesLoaded
        columnWidth={120}
        duration={600}
        gutterWidth={10}
        gutterHeight={30}
        easing={easings.cubicOut}
        appearDelay={60}
        appear={transition.appear}
        appeared={transition.appeared}
        enter={transition.enter}
        entered={transition.entered}
        leaved={transition.leaved}>
        {soundsList}
      </StackGrid>
      </div>
    );
  }
});



module.exports = StackedMusic;
//export default App;
