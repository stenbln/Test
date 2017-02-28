import dispatcher from '../dispatcher';
import axios from 'axios';


export function loadSentences(url){
    dispatcher.dispatch({type:'FETCH_SENTECES'});
    axios.get('http://127.0.0.1:8000/api/text_summary?url='+url)
      .then(function (data) {
        //console.log("this is data ",data);
        dispatcher.dispatch({type:'RECEIVE_SENTENCES',sentences:data.data.sentences});
        dispatcher.dispatch({type:'UPDATE_SORTABLE_ITEMS_AUTOMATIC',items:data.data.summary});

        var keywords = data.data.keywords;

        var encodedArray = JSON.stringify(keywords);
        console.log("keywords from result are ",keywords)
        var url = 'http://127.0.0.1:8000/api/image_search?keywords=' + encodeURIComponent(encodedArray)+'&page='+ 1;
        //console.log("load these array -------------", array)
        dispatcher.dispatch({type:'FETCH_IMAGES'});
        axios.get(url)
        .then(function (data) {
          console.log("this is data for images ",data);
          dispatcher.dispatch({type:'RECEIVE_IMAGES',images:data.data.urls,chipItems:keywords});

        })
        .catch(function (error) {
          console.log(error);
          dispatcher.dispatch({type:'FETCH_IMAGES_ERROR'});
          //dispatcher.dispatch({type:'FETCH_TODOS_ERROR'})
        });









      })
      .catch(function (error) {
        console.log(error);
        dispatcher.dispatch({type:'FETCH_SENTECES_ERROR'});
        dispatcher.dispatch({type:'FETCH_SORTABLE_ITEMS_AUTOMATIC_ERROR'});
        //dispatcher.dispatch({type:'FETCH_TODOS_ERROR'})
      });


}