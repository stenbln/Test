import dispatcher from '../dispatcher';
import axios from 'axios';


export function loadSentences(url){
    dispatcher.dispatch({type:'FETCH_SENTECES'});
    axios.get('http://127.0.0.1:8000/api/text_summary?url='+url)
      .then(function (data) {
        //console.log("this is data ",data);
        dispatcher.dispatch({type:'RECEIVE_SENTENCES',sentences:data.data.sentences});
        dispatcher.dispatch({type:'UPDATE_SORTABLE_ITEMS_AUTOMATIC',items:data.data.summary});

            // this is for fetching images when link to url is passed 
            var keywords = data.data.keywords;
            var params = new URLSearchParams();
            params.append('keywords', keywords);
            params.append('page', 1);//always load first page of the results when passing url article link
            //console.log("keywords from result are ",keywords)

            var url = 'http://127.0.0.1:8000/api/image_search';
            //console.log("load these array -------------", array)
            dispatcher.dispatch({type:'FETCH_IMAGES'});
            axios.get(url,{
              params:params
            })
            .then(function (data) {
              console.log("this is data for images ",data);
              dispatcher.dispatch({type:'RECEIVE_IMAGES',images:data.data.urls,chipItems:keywords});

            })
            .catch(function (error) {
              console.log(error);
              dispatcher.dispatch({type:'FETCH_IMAGES_ERROR'});
              //dispatcher.dispatch({type:'FETCH_TODOS_ERROR'})
            });

                    // this is for fetching images when link to url is passed 
                    var url = 'http://127.0.0.1:8000/api/video_search';
                    //console.log("load these array -------------", array)
                    dispatcher.dispatch({type:'FETCH_VIDEOS'});
                    axios.get(url,{
                      params:params
                    })
                    .then(function (data) {
                      console.log("this is data for videos ",data);
                      dispatcher.dispatch({type:'RECEIVE_VIDEOS',videos:data.data.urls,chipItems:keywords});

                    })
                    .catch(function (error) {
                      console.log(error);
                      dispatcher.dispatch({type:'FETCH_VIDEOS_ERROR'});
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