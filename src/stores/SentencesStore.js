import {EventEmitter} from "events";
import dispatcher from '../dispatcher';

class SentencesStore extends EventEmitter{
    constructor(){
        super();
        this.sentences=[];
        this.loader=false;
    }
    getAll(){
        return {
            sentences:this.sentences,
            loader:this.loader,
        };
    }
    updateSentencesList(sentences){
        //console.log("Sortable List is updated now ", items)
        this.sentences = sentences;
        this.emit("change");
        console.log("Updated ",sentences)
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
        alert("Error occured, make sure that you entered a valid URL and try again")
    }
    handleActions(action){
        switch(action.type){
            case "RECEIVE_SENTENCES":
                this.updateSentencesList(action.sentences);
                this.stopLoader();
                break;
            case "FETCH_SENTECES"://implement loading
                this.startLoader();
                break;
            case "FETCH_SENTECES_ERROR"://implement error
                this.showError();
                break;
        }
    }
}


const sentencesStore = new SentencesStore();
dispatcher.register(sentencesStore.handleActions.bind(sentencesStore));
export default sentencesStore;