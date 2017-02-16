import dispatcher from '../dispatcher';
import axios from 'axios';

export function updateSortables(items){
    dispatcher.dispatch({
        type:"UPDATE_SORTABLE_ITEMS",
        items,
    });
}

export function changeSortableItem(item,index){
    dispatcher.dispatch({
        type:"CHANGE_PARTICULAR_ITEM",
        item,
        index,
    });
}

export function addNewItem(item,index){
    dispatcher.dispatch({
        type:"ADD_NEW_ITEM",
        item,
        index,
    });
}
export function pushItemToStack(sentence){
    dispatcher.dispatch({
        type:"PUSH_ITEM_TO_STACK",
        sentence,
    });
}

export function deleteItem(index,caretPos,fieldValueAfterPressingDelete){
    dispatcher.dispatch({
        type:"DELETE_ITEM",
        index,
        caretPos,
        fieldValueAfterPressingDelete,
    });

}
