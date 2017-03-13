import dispatcher from '../dispatcher';
import axios from 'axios';

export function sendToRender(comp){
    var url = 'http://127.0.0.1:8000/api/aws_win_render'
    axios.post(url,{
      data:comp
    })
    .then(function (data) {
      //console.log("this is data for render ",data);
      //dispatcher.dispatch({type:'RECEIVE_VIDEOS',videos:data.data.urls,chipItems:array});

    })
    .catch(function (error) {
      console.log(error);
      //dispatcher.dispatch({type:'FETCH_VIDEOS_ERROR'});
      //dispatcher.dispatch({type:'FETCH_TODOS_ERROR'})
    })
}


