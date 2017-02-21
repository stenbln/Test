import React, { Component } from 'react';

const style={
  item:{
    border:'1px solid black',
    width:'160px',
    height:'120px',
    margin:'15px'
  },
  container:{
    display:'flex',
    flexWrap:'wrap',
    justifyContent:'center',
    width:'80vw',
    margin:'0 auto',
    paddingTop:'15px',
    paddingLeft:'35px',
    paddingRight:'35px',
    width:'100%',
  }
}

const VideoItem = () => {
  return <div style={style.item}>as</div>
}
class MyVideos extends Component {
  constructor(props){
    super();

  }

  render() {
    var array = ["g","g","d","sd","s","t","s","7","5","3","g","d","sd","s","t","s","7","5","3","g","d","sd","s","t","s","7","5","3"];
    return (
      <div style={style.container}>
          {/*<SortableComponent items={this.state.items} /><br/><br/><br/>*/}
          {
            array.map((value,index)=>{
              return <VideoItem key={"videoItem_"+index}/>
            })
          }
      </div>
    );
  }
} 

export default MyVideos;
