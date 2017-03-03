import dispatcher from '../dispatcher';

export function pushNewComposition(src,dataType,poster){
    dispatcher.dispatch({
        type:"ADD_NEW_COMP",
        src,
        dataType,
        poster
    });
}

export function updateSortables(items){
    dispatcher.dispatch({
        type:"UPDATE_SORTABLE_COMPOSITIONS",
        items,
    });
}

export function causeCompositionHandlerUpdate(){
    dispatcher.dispatch({
        type:"START_SORTING_COMPOSITIONS",
    });
}

