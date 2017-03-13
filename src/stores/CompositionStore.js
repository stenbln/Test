import {EventEmitter} from "events";
import dispatcher from '../dispatcher';
import ReactDOM from 'react-dom'

class CompositionStore extends EventEmitter{
    constructor(){
        super();
        this.compositionItems=[];
        this.dragging = false;
        this.addNewComp = this.addNewComp.bind(this);

    }
    updateSortableList(items){
        console.log("Sortable List is updated now ", items)
        this.compositionItems = items;
        this.dragging = false;
        this.emit("change");
    }
    addNewComp(src,renderSrc,dataType,poster){
        var compItem = {src:src,renderSrc:renderSrc, dataType:dataType, poster:poster}
        this.compositionItems = this.compositionItems.concat(compItem);
        this.emit("change");
        console.log(this.compositionItems)
    }
    getAll(){
        console.log("Get all is called FROM THE COMPOSITION STORE ", this.compositionItems);
        return {
            compositionItems:this.compositionItems,
            dragging:this.dragging
        };
    }
    setDragginStateToTrue(){
        this.dragging=true;
        this.emit("change");
    }

    handleActions(action){
        switch(action.type){
            case "ADD_NEW_COMP":
                this.addNewComp(action.src,action.renderSrc,action.dataType,action.poster);
                break;
            case "UPDATE_SORTABLE_COMPOSITIONS":
                this.updateSortableList(action.items);
                break;
            case "START_SORTING_COMPOSITIONS":
                this.setDragginStateToTrue();
                break;

        }
    }
}

const compositionStore = new CompositionStore();
dispatcher.register(compositionStore.handleActions.bind(compositionStore));
export default compositionStore;