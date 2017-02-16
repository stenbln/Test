import dispatcher from '../dispatcher';
import axios from 'axios';

export function createTodo(name){
    dispatcher.dispatch({
        type:'CREATE_TODO',
        name,
    });
}

export function deleteTodo(id){
    dispatcher.dispatch({
        type:'DELETE_TODO',
        id,
    })
}

export function reloadTodos(){
    dispatcher.dispatch({type:'FETCH_TODOS'});//Can be used for loaders 

    axios.get('https://jsonplaceholder.typicode.com/users/')
      .then(function (data) {
        console.log(data);
        dispatcher.dispatch({type:'RECEIVE_TODOS',todos:data});
      })
      .catch(function (error) {
        console.log(error);
        dispatcher.dispatch({type:'FETCH_TODOS_ERROR'})
      });
}