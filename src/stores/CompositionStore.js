import {EventEmitter} from "events";
import dispatcher from '../dispatcher';
import ReactDOM from 'react-dom'

class CompositionStore extends EventEmitter{
    constructor(){
        super();
        this.compositionItems=[];
        this.addNewComp = this.addNewComp.bind(this);

    }
    updateSortableList(items){
        //console.log("Sortable List is updated now ", items)
        this.compositionItems = items;
        this.emit("change");
    }
    addNewComp(src){
        this.compositionItems.push(src);
        this.emit("change");
        console.log(this.compositionItems)
    }
    getAll(){
        console.log("Get all is called FROM THE COMPOSITION STORE ", this.compositionItems);
        return this.compositionItems;
    }
    handleActions(action){
        switch(action.type){
            case "ADD_NEW_COMP":
                this.addNewComp(action.src);
                break;
            case "UPDATE_SORTABLE_COMPOSITIONS":
                this.updateSortableList(action.items);
                break;

        }
    }
}

const compositionStore = new CompositionStore();
dispatcher.register(compositionStore.handleActions.bind(compositionStore));
export default compositionStore;