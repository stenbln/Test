import dispatcher from '../dispatcher';
import axios from 'axios';


export function loadImages(array,page){
    var encodedArray = JSON.stringify(array);
    var url = 'http://127.0.0.1:8000/api/image_search?keywords=' + encodeURIComponent(encodedArray)+'&page='+page;
    //console.log("load these array -------------", array)
    dispatcher.dispatch({type:'FETCH_IMAGES'});
    axios.get(url)
    .then(function (data) {
      //console.log("this is data for images ",data);
      dispatcher.dispatch({type:'RECEIVE_IMAGES',images:data.data.urls,chipItems:array});

    })
    .catch(function (error) {
      console.log(error);
      dispatcher.dispatch({type:'FETCH_IMAGES_ERROR'});
      //dispatcher.dispatch({type:'FETCH_TODOS_ERROR'})
    });
}

export function addChip(chip){
  dispatcher.dispatch({type:'ADD_CHIP',chip:chip})
}

export function updateChips(chipData){
  dispatcher.dispatch({type:'UPDATE_CHIPS',chipData:chipData})
}

export function loadMoreImages(array,page){
    var encodedArray = JSON.stringify(array);
    var url = 'http://127.0.0.1:8000/api/image_search?keywords=' + encodeURIComponent(encodedArray)+'&page='+page;
    //console.log("load these array -------------", array)
    //dispatcher.dispatch({type:'FETCH_IMAGES'});
    axios.get(url)
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
