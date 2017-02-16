var React = require('react');
var ContentEditable = require('react-contenteditable');
import * as SortableActions from '../actions/SortableActions'


  var EditableDiv = React.createClass({
    referenceElement(dataitemID){
      return document.getElementById("sortableDiv").childNodes[0].childNodes[dataitemID].childNodes[0].childNodes[0];
    },

    changeParticularItem(evt){
      let item = evt.target.value;
      //console.log("ovo je promijenjeni item", item);
      //console.log("ovo je evt.key item", evt);
      if(evt.type!='blur'){
        let tmp = document.createElement('div');
        tmp.innerHTML = item;
        tmp = tmp.textContent;
        //console.log(" This is item ::::::::: ", tmp)
        if(tmp!=""){
          SortableActions.changeSortableItem(tmp,this.props.dataitemID);
        }
        //console.log("ovo je evt.key item", evt);
        //this.textLength=this.el.childNodes[0].childNodes.item(0).textContent.length;
      }
    },

    addNewItem(evt){
    if (evt.key === 'Enter'){
        evt.preventDefault()
        //console.log("Enter Key was pressed", evt);
        let el = this.referenceElement(this.props.dataitemID);
        let caretPos = this.getCaretCharacterOffsetWithin(el);
        if(caretPos!=0){
          let textContent = el.textContent.substring(caretPos);
          el.textContent = el.textContent.substring(0,caretPos);
          //console.log(textContent);
          SortableActions.addNewItem(textContent,this.props.dataitemID);
        }
      }
    },

    deleteItem(evt,caretPos){
      if(evt.keyCode == 46 || evt.keyCode == 8){
        //let fieldValueAfterPressingDelete = document.createElement('div');
        let fieldValueAfterPressingDelete = this.referenceElement(this.props.dataitemID).textContent;
        console.log("VRIJEDNOST U FIELDUUUUUUUUUUUUU : ",fieldValueAfterPressingDelete)
        let el = this.referenceElement(this.props.dataitemID);
        let caretPos = this.getCaretCharacterOffsetWithin(el);
        console.log("CARRETT ", caretPos);
        SortableActions.deleteItem(this.props.dataitemID,caretPos,fieldValueAfterPressingDelete);
      }
    },

    getCaretCharacterOffsetWithin(element) {
        var caretOffset = 0;
        var doc = element.ownerDocument || element.document;
        var win = doc.defaultView || doc.parentWindow;
        var sel;
        if (typeof win.getSelection != "undefined") {
            sel = win.getSelection();
            if (sel.rangeCount > 0) {
                var range = win.getSelection().getRangeAt(0);
                var preCaretRange = range.cloneRange();
                preCaretRange.selectNodeContents(element);
                preCaretRange.setEnd(range.endContainer, range.endOffset);
                caretOffset = preCaretRange.toString().length;
            }
        } else if ( (sel = doc.selection) && sel.type != "Control") {
            var textRange = sel.createRange();
            var preCaretTextRange = doc.body.createTextRange();
            preCaretTextRange.moveToElementText(element);
            preCaretTextRange.setEndPoint("EndToEnd", textRange);
            caretOffset = preCaretTextRange.text.length;
        }
        //console.log("oFFSET ::::: ",caretOffset)
        return caretOffset;
    },
    handleBlur(){//not implemented
      if(this.referenceElement(this.props.dataitemID).textContent==""){
        console.log("Input is now Blured ", this.props.dataitemID);
        SortableActions.deleteItem(this.props.dataitemID);
      }
    },
    render: function(){
      //console.log("djeca "+ this.props.children);
      return <ContentEditable autoFocus
                html={this.props.textValue} // innerHTML of the editable div 
                disabled={false}       // use true to disable edition 
                onChange={this.changeParticularItem} // handle innerHTML change 
                onKeyPress={this.addNewItem}
                onKeyUp={this.deleteItem}
                data-itemID={this.props.dataitemID}
                
              />
    }
  });

  module.exports = EditableDiv;