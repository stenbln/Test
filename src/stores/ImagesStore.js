import {EventEmitter} from "events";
import dispatcher from '../dispatcher';

class ImagesStore extends EventEmitter{
    constructor(){
        super();
        this.images=[];
        this.imagesLoader=false;
        this.chipData= [];
        this.page=1;
    }
    getAll(){
        return {
            images:this.images,
            imagesLoader:this.imagesLoader,
            chipData:this.chipData,
            page:this.page,
        };
    }
    updateImagesList(images,chipItems){
        console.log("Sortable List is updated now ", chipItems);
        this.images = images;
        var chips=[]
        if(chipItems.length!=0||typeof chipItems !=="undefined"){
            for(var i=0;i<chipItems.length;i++){
                chips = chips.concat({key:i,label:chipItems[i]})
            }
        }
        this.updateChips(chips);
        //this.emit("change");
        //console.log("Updated images first time ", this.images)
    }
    addChipItem(chip){
        //console.log("Sortable List is updated now ", items)
        var keyNum = this.chipData.length;
        chip={key:keyNum,label:chip};
        this.chipData.push(chip);
        this.emit("change");
        //console.log("Updated images ",images)
    }

    updateChips(chipData){
        this.chipData = chipData;
        this.page=1;
        this.emit("change");
        //console.log("received chipdata" ,chipData)
    }
    startLoader(){
        //console.log("Sortable List is updated now ", items)
        this.imagesLoader = true;
        this.emit("change");
    }
    stopLoader(){
        //console.log("Sortable List is updated now ", items)
        this.imagesLoader = false;
        this.emit("change");
    }
    showError(){
        alert("Error occured while downloading images")
    }
    receiveMoreImages(images,page){
        this.images = this.images.concat(images);
        this.page+=1;
        this.emit("change");
        console.log("scro Updated images second time ", this.images)
    }

    handleActions(action){
        switch(action.type){
            case "RECEIVE_IMAGES":
                this.updateImagesList(action.images,action.chipItems);
                this.stopLoader();
                break;
            case "FETCH_IMAGES"://implement loading
                this.startLoader();
                break;
            case "FETCH_IMAGES_ERROR"://implement error
                this.showError();
                break;
            case "ADD_CHIP"://implement error
                this.addChipItem(action.chip);
                break;
            case "UPDATE_CHIPS"://implement error
                this.updateChips(action.chipData);
                break;    
            case "RECEIVE_MORE_IMAGES":
                this.receiveMoreImages(action.images,action.page);
                this.stopLoader();
                break; 
                
                          
        }
    }
}


const imagesStore = new ImagesStore();
dispatcher.register(imagesStore.handleActions.bind(imagesStore));
export default imagesStore;