import {EventEmitter} from "events";
import dispatcher from '../dispatcher';

class TodoStore extends EventEmitter{
    constructor(){
        super();
        this.todos = [
        {
            id:11223121333,
            text: "Go shopping",
            complete: false,
            name: "Toni"
        },
        {
            id: 23112341,
            text: "Pay Water Bill",
            complete: false,
            name: "Ante"
        }];
    }
    createTodo(name){
        const id = Date.now();
        this.todos.push({
            id,
            name,
            complete:false,
        });

        this.emit("change");
    }
    receiveTodos(todos){
        console.log(" OVO SU TUDOIV : ",todos)
        this.todos = todos.data;
        this.emit("change"); //need to emit the change so the component knows when to update
    }
    getAll(){
        return this.todos;
    };

    handleActions(action){
        switch(action.type){
            case "CREATE_TODO":
                this.createTodo(action.name);
                //console.log("This is action object ", action);
                break;
            case "RECEIVE_TODOS":
                this.receiveTodos(action.todos);
                break;
        }
        //console.log("TodoStore received an action", action)
    }
}

const todoStore = new TodoStore();
dispatcher.register(todoStore.handleActions.bind(todoStore));
window.todoStore = todoStore;
window.dispatcher = dispatcher;
export default todoStore;