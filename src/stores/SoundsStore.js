import {EventEmitter} from "events";
import dispatcher from '../dispatcher';
import sounds from '../sounds/soundsLoader.js';

class SoundsStore extends EventEmitter{
    constructor(){
        super();
        this.sounds=sounds.tracks;
        this.loader=false;
        this.selectedSoundId = -1;//-1 equals no current playing sounds
        this.selectedSoundUrl='';
        this.currentPlayingSound = -1;
    }
    getAll(){
        return {
            sounds:this.sounds,
            loader:this.loader,
            selectedSoundId:this.selectedSoundId,
            selectedSoundUrl:this.selectedSoundUrl,
            currentPlayingSound:this.currentPlayingSound,
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
    updateCurrentPlayingSound(id,dataSoundId){ //e.g. "1" and "data_sound_1"
        console.log("el received in store ", this.currentPlayingSound ,  " ",document.getElementById(id))
        if(dataSoundId==this.currentPlayingSound){//if the same element is clicked again, pause it 
            document.getElementById("sound_id_"+this.currentPlayingSound).pause()
            this.currentPlayingSound = -1;
            console.log("called sound first ")
        }else if(this.currentPlayingSound!=-1){// when the page loads for the fi there
            document.getElementById("sound_id_"+this.currentPlayingSound).pause()
            this.currentPlayingSound = dataSoundId;
            document.getElementById(id).play()
            console.log("called sound second ")
        } else{
            this.currentPlayingSound = dataSoundId;
            document.getElementById(id).play()
            console.log("called sound third ")
        }
        
        //document.getElementById(id).play()
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
            case "PLAY_SOUND":
                this.updateCurrentPlayingSound(action.id,action.dataSoundId);
                break;
                
        }
    }
}


const soundsStore = new SoundsStore();
dispatcher.register(soundsStore.handleActions.bind(soundsStore));
export default soundsStore;