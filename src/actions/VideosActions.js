import dispatcher from '../dispatcher';
import axios from 'axios';


export function loadVideos(array,page){
  var params = new URLSearchParams();
  params.append('keywords', array);
  params.append('page', page);

  if(array.length>0){//because when last VIDEO chip item is deleted we want to clear all the videos shown
    
    var url = 'http://127.0.0.1:8000/api/video_search'
    //console.log("load these array -------------", array)
    dispatcher.dispatch({type:'FETCH_VIDEOS'});
    axios.get(url,{
      params:params
    })
    .then(function (data) {
      //console.log("this is data for videos ",data);
      dispatcher.dispatch({type:'RECEIVE_VIDEOS',videos:data.data.urls,chipItems:array});

    })
    .catch(function (error) {
      console.log(error);
      dispatcher.dispatch({type:'FETCH_VIDEOS_ERROR'});
      //dispatcher.dispatch({type:'FETCH_TODOS_ERROR'})
    });
  }else if(array.length==0){
    dispatcher.dispatch({type:'RECEIVE_VIDEOS',videos:[],chipItems:array});
  }
}

export function addChip(chip){
  dispatcher.dispatch({type:'ADD_VIDEO_CHIP',chip:chip})
}

export function updateChips(chipData){
  dispatcher.dispatch({type:'UPDATE_VIDEO_CHIPS',chipData:chipData})
}

export function loadMoreVideos(array,page){
  var params = new URLSearchParams();
  params.append('keywords', array);
  params.append('page', page);

    var url = 'http://127.0.0.1:8000/api/video_search'
    //console.log("load these array -------------", array)
    //dispatcher.dispatch({type:'FETCH_VIDEOS'}); //this can be used later for videosLoader indicator
    axios.get(url,{
      params:params
    })
    .then(function (data) {
      console.log("this is data for vidoes received ",data);
        dispatcher.dispatch({type:'RECEIVE_MORE_VIDEOS',videos:data.data.urls,page:page});
        //console.log("RESULTS=================== -------------", data.data.urls)

    })
    .catch(function (error) {
      console.log("error while loading more videos: ",error);
      dispatcher.dispatch({type:'FETCH_VIDEOS_ERROR'});
      //dispatcher.dispatch({type:'FETCH_TODOS_ERROR'})
    });
  
}
