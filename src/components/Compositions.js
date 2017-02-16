//import React, { Component } from 'react';
var React = require('react');
var captions = require('./captions.js');
import StackGrid from "react-stack-grid";
import Image from 'react-bootstrap/lib/Image';
import { easings } from "react-stack-grid/lib/";
import { transitions } from "react-stack-grid/lib/";

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
      maxWidth:'200px',
      height:'auto',
      width:'auto',
    },
    container:{
      border:'2px solid #f3f3f3'
    },
    innerDiv:{
      textAlign:'left',
      color:'grey',
      paddingLeft:5,
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

var Compositions = React.createClass({
  render: function() {
    var captionList = this.props.compositionItems.map(function(item,i){
            return (
              <div key={'item_'+i} >
                <Image 
                  style={styles.img}
                  src={item} thumbnail responsive>
                </Image>
                <div style={styles.innerDiv}>Composition {i+1}</div>
              </div>)
    });
    
    return (
      <div style={{width:'100%'}}>
      <StackGrid
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



module.exports = Compositions;
//export default App;
