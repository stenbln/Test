import React, { Component } from 'react';
var StackedMyVideos = require('../components/StackedMyVideos');

const style={
  item:{
    border:'1px solid black',
    width:'160px',
    height:'120px',
    margin:'15px'
  },
  container:{
    display:'flex',
    flexWrap:'wrap',
    justifyContent:'center',
    width:'80vw',
    margin:'0 auto',
    paddingTop:'15px',
    paddingLeft:'35px',
    paddingRight:'35px',
    width:'100%',
  }
}

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

const VideoItem = () => {
  return <div style={style.item}>as</div>
}
class MyVideos extends Component {
  constructor(props){
    super();

  }

  render() {
    var array = ["g","g","d","sd","s","t","s","7","5","3","g","d","sd","s","t","s","7","5","3","g","d","sd","s","t","s","7","5","3"];
    return (
      <div style={style.container}>
      <StackedMyVideos videos={videos["urls"]}/>
          {/*<SortableComponent items={this.state.items} /><br/><br/><br/>*/}
          {
            /*array.map((value,index)=>{
              return <VideoItem key={"videoItem_"+index}/>
            })*/
          }
      </div>
    );
  }
} 

export default MyVideos;
