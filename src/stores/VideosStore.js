import {EventEmitter} from "events";
import dispatcher from '../dispatcher';

class VideosStore extends EventEmitter{
    constructor(){
        super();
        this.videos=[];
        this.videosLoader=false;
        this.chipData= [];
        this.page=1;
    }
    getAll(){
        return {
            videos:this.videos,
            videosLoader:this.videosLoader,
            chipData:this.chipData,
            page:this.page,
        };
    }
    updateVideosList(videos,chipItems){
        console.log("Sortable List of videos is updated now ", videos);
        this.videos = videos;
        var chips=[]
        if(chipItems.length!=0||typeof chipItems !=="undefined"){
            for(var i=0;i<chipItems.length;i++){
                chips = chips.concat({key:i,label:chipItems[i]})
            }
        }
        this.updateChips(chips);
        //this.emit("change");
        //console.log("Updated videos first time ", this.videos)
    }
    addChipItem(chip){
        //console.log("Sortable List is updated now ", items)
        var keyNum = this.chipData.length;
        chip={key:keyNum,label:chip};
        this.chipData.push(chip);
        this.emit("change");
        //console.log("Updated videos ",videos)
    }

    updateChips(chipData){
        this.chipData = chipData;
        this.page=1;
        this.emit("change");
        //console.log("received chipdata" ,chipData)
    }
    startLoader(){
        //console.log("Sortable List is updated now ", items)
        this.videosLoader = true;
        this.emit("change");
    }
    stopLoader(){
        //console.log("Sortable List is updated now ", items)
        this.videosLoader = false;
        this.emit("change");
    }
    showError(){
        alert("Error occured while downloading videos")
    }
    receiveMoreVideos(videos,page){
        this.videos = this.videos.concat(videos);
        this.page+=1;
        this.emit("change");
        console.log("scro Updated videos second time ", this.videos)
    }

    handleActions(action){
        switch(action.type){
            case "RECEIVE_VIDEOS":
                this.updateVideosList(action.videos,action.chipItems);
                this.stopLoader();
                break;
            case "FETCH_VIDEOS"://implement loading
                this.startLoader();
                break;
            case "FETCH_VIDEOS_ERROR"://implement error
                this.showError();
                break;
            case "ADD_VIDEO_CHIP"://implement error
                this.addChipItem(action.chip);
                break;
            case "UPDATE_VIDEO_CHIPS"://implement error
                this.updateChips(action.chipData);
                break;    
            case "RECEIVE_MORE_VIDEOS":
                this.receiveMoreVideos(action.videos,action.page);
                this.stopLoader();
                break; 
                
                          
        }
    }
}


const videosStore = new VideosStore();
dispatcher.register(videosStore.handleActions.bind(videosStore));
export default videosStore;