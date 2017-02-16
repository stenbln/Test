import {EventEmitter} from "events";
import dispatcher from '../dispatcher';
import ReactDOM from 'react-dom'

class SortableStore extends EventEmitter{
    constructor(){
        super();
        this.sortableItems = ['Title goes here']; 
        this.createRange = this.createRange.bind(this);
        this.setCurrentCursorPosition = this.setCurrentCursorPosition.bind(this);
        this.referenceElement = this.referenceElement.bind(this);
        this.emit=this.emit.bind(this);
    }
    referenceElement(dataitemID){
        if(typeof dataitemID === 'undefined'){
            return document.getElementById('sortableDiv');
        }else{
            return ReactDOM.findDOMNode(document.getElementById('sortableDiv')).childNodes[0].childNodes[dataitemID].childNodes[0].childNodes[0];
        }
    }
    getAll(){
        console.log("Get all is called ", this.sortableItems);
        //this.sortableItems=this.sortableItems.filter((val)=> val!=="") //remove empty items in the array eg. ["a", "", "b", " c i d"] => ["a", "b", " c i d"]
        return this.sortableItems;
    }
    updateSortableList(items){
        //console.log("Sortable List is updated now ", items)
        this.sortableItems = items;
        this.emit("change");
    }
    changeParticularItem(item,index){
        //console.log("aAAAAAAAAAAA : ",item);
        this.sortableItems[index] = item;
        this.emit("change");
    }
    addNewItem(item,index){
        item = item.trim();
        if(this.sortableItems[index]!=""){

        
            //var sortableDiv = document.getElementById('sortableDiv');//delete this
            //console.log("Add new Item ", item)
            //console.log("Da vidimo jel undefined    ",typeof ReactDOM.findDOMNode(sortableDiv).childNodes[0].childNodes[index+1])
            
            //console.log("sortable items length:::", this.sortableItems.length)
            //console.log("index:::", index)
            let length = this.sortableItems[index].length - item.length;
            this.sortableItems[index] = this.sortableItems[index].substr(0,length);
            if(index != this.sortableItems.length-1){
                //console.log(";;;;;;;;; THISI IS CALLED;;;;;;;;;",this.sortableItems[index])
                this.sortableItems.splice(index+1,0,item);//this inserts item string into index+1 position and doesnt remove anythin
            }else{
                this.sortableItems.push(item);
            }
            let promiseToEmitChange = new Promise((resolve,reject)=>{
                let checker = this.emit("change");
                if(checker){
                    resolve();
                }else{
                    reject('Could not finish performing emit event')
                }
            });
    
            promiseToEmitChange.then(()=>{
                this.referenceElement(index+1).focus();}
                ).catch((fromReject)=>{
                    console.log("ERROR: " + fromReject)
            });
        }
    }

    deleteItem(index,caretPos,fieldValueAfterPressingDelete){
         console.log("STA VRACA ''''''''''''''''''' ",this.sortableItems)
        //console.log("Carret position is here  ", caretPos)
        //console.log("This is delete fucntion call", this.sortableItems[index])


        if(caretPos==0 && index!=0){
            //console.log("BREEEEEEEEEEEEEEE ",fieldValueAfterPressingDelete)
            if(typeof this.sortableItems[index] != 'undefined' || this.sortableItems[index].length>=1){
                if(fieldValueAfterPressingDelete.length==1){
                    //this.sortableItems[index]="";
                    this.sortableItems[index-1]+= fieldValueAfterPressingDelete;
                    //console.log("BREEEEEEEEEE JEDINICA ",fieldValueAfterPressingDelete)
                }else{
                    //console.log("BREEEEEEEEEE DVICA ",fieldValueAfterPressingDelete)
                    this.sortableItems[index-1]+=fieldValueAfterPressingDelete;
                }
            }
            //console.log("SECA! ",this.sortableItems)
            if(fieldValueAfterPressingDelete==""){
                this.sortableItems.splice(index,1);

                //console.log("SECA2 ",this.sortableItems)
                //var sortableDiv = document.getElementById('sortableDiv');
                let el = this.referenceElement(index-1);
                el.focus();
                console.log("Carret position is called ");
                var textContent = el.textContent;
                for (var i=index-2;i>=0;i--){
                    //console.log("This is the index: ", i)
                    textContent+=this.referenceElement(i).textContent
                }
                //console.log(" This is the length of the total elements ",textContent.length)
                //console.log(" Text Content of the element", textContent)
                
                let promiseToEmitChange = new Promise((resolve,reject)=>{
                    let checker = this.emit("change");
                    if(checker){
                        resolve();
                    }else{
                        reject('Could not finish performing emit event')
                    }
                });
                promiseToEmitChange.then(()=>{
                this.setCurrentCursorPosition(textContent.length);}
                ).catch((fromReject)=>{
                    console.log("ERROR : " + fromReject)
                });
            }else{
                this.sortableItems.splice(index,1);

                //console.log("SECA2 ",this.sortableItems)
                //var sortableDiv = document.getElementById('sortableDiv');
                let el = this.referenceElement(index-1);
                el.focus();
                console.log("Carret position is called ");
                var textContent = el.textContent;
                for (var i=index-2;i>=0;i--){
                    //console.log("This is the index: ", i)
                    textContent+=this.referenceElement(i).textContent
                }
                //console.log(" This is the length of the total elements ",textContent.length)
                //console.log(" Text Content of the element", textContent)
                
                let promiseToEmitChange = new Promise((resolve,reject)=>{
                    let checker = this.emit("change");
                    if(checker){
                        resolve();
                    }else{
                        reject('Could not finish performing emit event')
                    }
                });
                promiseToEmitChange.then(()=>{
                this.setCurrentCursorPosition(textContent.length);}
                ).catch((fromReject)=>{
                    console.log("ERROR : " + fromReject)
                });    
            }
            
        }

    }

    createRange(node, chars, range) {
        if (!range) {
            range = document.createRange()
            range.selectNode(node);
            range.setStart(node, 0);
        }
     console.log(" ---------------------- ul 6 puta ", node ," ======lp: "+lp)

        if (chars.count === 0) {
            range.setEnd(node, chars.count);
        } else if (node && chars.count >0) {
            if (node.nodeType === Node.TEXT_NODE) {
                    //console.log(" ---------------------- ul 6 puta ", node," ======lp: "+lp)
                if (node.textContent.length < chars.count) {
                    chars.count -= node.textContent.length;
                } else {
                     range.setEnd(node, chars.count);
                     chars.count = 0;
                }
            } else {

                for (var lp = 0; lp < node.childNodes[0].childNodes.length; lp++) {
                    range = this.createRange(node.childNodes[0].childNodes[lp].childNodes[0].childNodes[0].childNodes[0], chars, range);

                    if (chars.count === 0) {
                       break;
                    }
                }
            }
       } 
       return range;
    }

    setCurrentCursorPosition(chars) {
        if (chars >= 0) {
            var selection = window.getSelection();
            this.range = this.createRange(this.referenceElement(), { count: chars });
            if (this.range) {
                this.range.collapse(false);
                selection.removeAllRanges();
                selection.addRange(this.range);
            }
        }
    }

    pushToStack(sentence){
        this.sortableItems.push(sentence);
        this.emit("change");
    }

    handleActions(action){
        switch(action.type){
            case "UPDATE_SORTABLE_ITEMS":
                this.updateSortableList(action.items);
                break;
            case "CHANGE_PARTICULAR_ITEM":
                this.changeParticularItem(action.item,action.index);
                break;
            case "ADD_NEW_ITEM":
                this.addNewItem(action.item,action.index);
                break;
            case "DELETE_ITEM":
                this.deleteItem(action.index,action.caretPos,action.fieldValueAfterPressingDelete);
                break;
            case "PUSH_ITEM_TO_STACK":
                this.pushToStack(action.sentence);
                break;

        }
        console.log("Sortable Store recevied an action :",action);
    }
}

const sortableStore = new SortableStore();
dispatcher.register(sortableStore.handleActions.bind(sortableStore));
export default sortableStore;
