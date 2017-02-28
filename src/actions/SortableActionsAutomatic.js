import dispatcher from '../dispatcher';

export function updateSortables(items){
    dispatcher.dispatch({
        type:"UPDATE_SORTABLE_ITEMS_AUTOMATIC",
        items,
    });
}

export function changeSortableItem(item,index){
    dispatcher.dispatch({
        type:"CHANGE_PARTICULAR_ITEM_AUTOMATIC",
        item,
        index,
    });
}

export function addNewItem(item,index){
    dispatcher.dispatch({
        type:"ADD_NEW_ITEM_AUTOMATIC",
        item,
        index,
    });
}
export function pushItemToStack(sentence){
    dispatcher.dispatch({
        type:"PUSH_ITEM_TO_STACK_AUTOMATIC",
        sentence,
    });
}

export function deleteItem(index,caretPos,fieldValueAfterPressingDelete){
    dispatcher.dispatch({
        type:"DELETE_ITEM_AUTOMATIC",
        index,
        caretPos,
        fieldValueAfterPressingDelete,
    });

}
