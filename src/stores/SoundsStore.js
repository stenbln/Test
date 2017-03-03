import {EventEmitter} from "events";
import dispatcher from '../dispatcher';
import sounds from '../sounds/soundsLoader.js';

class SoundsStore extends EventEmitter{
    constructor(){
        super();
        this.sounds=sounds.tracks;
        this.loader=false;
        this.selectedSoundId=-1;
        this.selectedSoundUrl=''
    }
    getAll(){
        return {
            sounds:this.sounds,
            loader:this.loader,
            selectedSoundId:this.selectedSoundId,
            selectedSoundUrl:this.selectedSoundUrl,
        };
    }
    updateSoundsList(sounds){
        //console.log("Sortable List is updated now ", items)
        this.sounds = sounds;
        this.emit("change");
        console.log("Updated ",sounds)
    }
    startLoader(){
        //console.log("Sortable List is updated now ", items)
        this.loader = true;
        this.emit("change");
    }
    stopLoader(){
        //console.log("Sortable List is updated now ", items)
        this.loader = false;
        this.emit("change");
    }
    showError(){
        alert("Error occured while fetching sounds, please try again")
    }
    updatedSelectedSound(id,url){
        this.selectedSoundId = id;
        this.selectedSoundUrl = url;
        this.emit("change");
    }
    handleActions(action){
        switch(action.type){
            case "RECEIVE_SOUNDS":
                this.updateSoundsList(action.sounds);
                this.stopLoader();
                break;
            case "FETCH_SOUNDS":
                this.startLoader();
                break;
            case "FETCH_SOUNDS_ERROR":
                this.showError();
                break;
            case "UPDATE_SELECTED_SOUND":
                this.updatedSelectedSound(action.id,action.url);
                break;
                
        }
    }
}


const soundsStore = new SoundsStore();
dispatcher.register(soundsStore.handleActions.bind(soundsStore));
export default soundsStore;