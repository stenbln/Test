import dispatcher from '../dispatcher';

export function pushNewComposition(src){
    dispatcher.dispatch({
        type:"ADD_NEW_COMP",
        src,
    });
}

export function updateSortables(items){
    dispatcher.dispatch({
        type:"UPDATE_SORTABLE_COMPOSITIONS",
        items,
    });
}