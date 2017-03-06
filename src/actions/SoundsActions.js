import dispatcher from '../dispatcher';
import axios from 'axios';



export function updateSelectedSound(id,url){
    dispatcher.dispatch({
        type:'UPDATE_SELECTED_SOUND',
        id,
        url,
    })
}

export function updatePlayingSound(id,dataSoundId){
    dispatcher.dispatch({
        type:'PLAY_SOUND',
        id,
        dataSoundId,
    })
}
