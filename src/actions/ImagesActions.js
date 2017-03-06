import dispatcher from '../dispatcher';
import axios from 'axios';


export function loadImages(array,page){
  var params = new URLSearchParams();
  params.append('keywords', array);
  params.append('page', page);
  //console.log("arary : ", array.length, "   ", typeof array)
    if(array.length>0){//because when last chip item is deleted we want to clear all the images shown
      var url = 'http://127.0.0.1:8000/api/image_search'
      //console.log("load these array -------------", array)
      dispatcher.dispatch({type:'FETCH_IMAGES'});
      axios.get(url,{
        params:params
      })
      .then(function (data) {
        //console.log("this is data for images ",data);
        dispatcher.dispatch({type:'RECEIVE_IMAGES',images:data.data.urls,chipItems:array});

      })
      .catch(function (error) {
        console.log(error);
        dispatcher.dispatch({type:'FETCH_IMAGES_ERROR'});
        //dispatcher.dispatch({type:'FETCH_TODOS_ERROR'})
      });
    }else if(array.length==0){
        dispatcher.dispatch({type:'RECEIVE_IMAGES',images:[],chipItems:array});//we send empty array
    }
}

export function addChip(chip){
  dispatcher.dispatch({type:'ADD_CHIP',chip:chip})
}

export function updateChips(chipData){
  dispatcher.dispatch({type:'UPDATE_CHIPS',chipData:chipData})
}

export function loadMoreImages(array,page){
  var params = new URLSearchParams();
  params.append('keywords', array);
  params.append('page', page);
    
    var url = 'http://127.0.0.1:8000/api/image_search';
    //console.log("load these array -------------", array)
    //dispatcher.dispatch({type:'FETCH_IMAGES'});
    axios.get(url,{
      params:params
    })
    .then(function (data) {
      //console.log("this is data for images ",data);
        dispatcher.dispatch({type:'RECEIVE_MORE_IMAGES',images:data.data.urls,page:page});
        //console.log("RESULTS=================== -------------", data.data.urls)

    })
    .catch(function (error) {
      console.log(error);
      dispatcher.dispatch({type:'FETCH_IMAGES_ERROR'});
      //dispatcher.dispatch({type:'FETCH_TODOS_ERROR'})
    });
  
}