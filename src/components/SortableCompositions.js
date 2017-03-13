import React, {Component} from 'react';
if (!Array.from) {
  Array.from = (function () {
    var toStr = Object.prototype.toString;
    var isCallable = function (fn) {
      return typeof fn === 'function' || toStr.call(fn) === '[object Function]';
    };
    var toInteger = function (value) {
      var number = Number(value);
      if (isNaN(number)) { return 0; }
      if (number === 0 || !isFinite(number)) { return number; }
      return (number > 0 ? 1 : -1) * Math.floor(Math.abs(number));
    };
    var maxSafeInteger = Math.pow(2, 53) - 1;
    var toLength = function (value) {
      var len = toInteger(value);
      return Math.min(Math.max(len, 0), maxSafeInteger);
    };

    // The length property of the from method is 1.
    return function from(arrayLike/*, mapFn, thisArg */) {
      // 1. Let C be the this value.
      var C = this;

      // 2. Let items be ToObject(arrayLike).
      var items = Object(arrayLike);

      // 3. ReturnIfAbrupt(items).
      if (arrayLike == null) {
        throw new TypeError('Array.from requires an array-like object - not null or undefined');
      }

      // 4. If mapfn is undefined, then let mapping be false.
      var mapFn = arguments.length > 1 ? arguments[1] : void undefined;
      var T;
      if (typeof mapFn !== 'undefined') {
        // 5. else
        // 5. a If IsCallable(mapfn) is false, throw a TypeError exception.
        if (!isCallable(mapFn)) {
          throw new TypeError('Array.from: when provided, the second argument must be a function');
        }

        // 5. b. If thisArg was supplied, let T be thisArg; else let T be undefined.
        if (arguments.length > 2) {
          T = arguments[2];
        }
      }

      // 10. Let lenValue be Get(items, "length").
      // 11. Let len be ToLength(lenValue).
      var len = toLength(items.length);

      // 13. If IsConstructor(C) is true, then
      // 13. a. Let A be the result of calling the [[Construct]] internal method 
      // of C with an argument list containing the single item len.
      // 14. a. Else, Let A be ArrayCreate(len).
      var A = isCallable(C) ? Object(new C(len)) : new Array(len);

      // 16. Let k be 0.
      var k = 0;
      // 17. Repeat, while k < len… (also steps a - h)
      var kValue;
      while (k < len) {
        kValue = items[k];
        if (mapFn) {
          A[k] = typeof T === 'undefined' ? mapFn(kValue, k) : mapFn.call(T, kValue, k);
        } else {
          A[k] = kValue;
        }
        k += 1;
      }
      // 18. Let putStatus be Put(A, "length", len, true).
      A.length = len;
      // 20. Return A.
      return A;
    };
  }());
}
import {SortableContainer, SortableElement, SortableHandle, arrayMove} from 'react-sortable-hoc';
import * as CompositionActions from '../actions/CompositionActions'
import EditableDiv from '../components/EditableDiv';
import XButton from '../components/XButton'
import './SortableComponent.css'; 
import 'font-awesome/css/font-awesome.css';
import 'react-tooltip-component/lib/tooltip.css';
import Tooltip from 'react-tooltip-component';
import Image from 'react-bootstrap/lib/Image';
var CompositionItem = require ('../components/CompositionItem');


const SortableItem = SortableElement(({dragging,value,dataitemID,items,compositionItems}) => {
  var substringedArray = "a";
  if(typeof items[dataitemID]=="undefined"||items[dataitemID].length==0){
    substringedArray = "";
  }else if(items[dataitemID].length<60){
    substringedArray=items[dataitemID];
  }else if(items[dataitemID].length>60){
    substringedArray = items[dataitemID].substring(0,60)+ "...";
  }
    return (
      <div  key={'item_'+dataitemID} >

                <CompositionItem 
                  dragging={dragging}
                  dataitemID={dataitemID} 
                  value={value} 
                  substringedArray={substringedArray}
                  compositionItems={compositionItems}/>

        </div>
    )}
);

const SortableList = SortableContainer(({dragging,items,compositionItems}) => {
    return (
        <ul className="list">
            {compositionItems.map((value, index) =>
                <SortableItem dragging={dragging} items={items} key={`item-${index}`} dataitemID={index} index={index} value={value} compositionItems={compositionItems}/>
            )}
        </ul>
    );
});

class SortableCompositions extends Component {
    constructor(props){
        super(props);
        this.updateSortables = this.updateSortables.bind(this);
    }
    updateSortables(items){
        CompositionActions.updateSortables(items);
    }

    onSortEnd = ({oldIndex, newIndex}) => {
        let items =  arrayMove(this.props.compositionItems, oldIndex, newIndex)
        this.updateSortables(items);
        //console.log("updated aa ", items)
    //need action here
    };
    onSortStart = ({})=>{
        console.log("sorting started")
        //this.setState({dragging: true});
        CompositionActions.causeCompositionHandlerUpdate();
    };
    render() {
        return (
          <div id="sortableDivComposition">
            <SortableList useDragHandle={true} dragging={this.props.dragging} items={this.props.items} compositionItems={this.props.compositionItems} lockAxis="y" onSortStart={this.onSortStart} onSortEnd={this.onSortEnd} />
          </div>
        )
    }
}

export default SortableCompositions;