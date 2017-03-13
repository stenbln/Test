require('rc-slider/assets/index.css');
require('rc-tooltip/assets/bootstrap.css');

const React = require('react');
const ReactDOM = require('react-dom');
const Tooltip = require('rc-tooltip');
const Slider = require('rc-slider');
const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);
const Handle = Slider.Handle;

const handle = (props) => {
  const { value, dragging, index, ...restProps } = props;
  return (
    <Tooltip
      overlay={value}
      visible={dragging}
      placement="top"
      key={index}
    >
      <Handle {...restProps} />
    </Tooltip>
  );
};

const wrapperStyle = { width: '93%',paddingLeft:13};


const RangeSelector = React.createClass({
  handleChange(value){
    console.log("something changed ",value)
  },
  render:function(){
    return(
        <div style={wrapperStyle}>
          <Slider onChange={this.handleChange} min={0} max={20} defaultValue={5} handle={handle} />
        </div>
    )
  }
});

module.exports = RangeSelector;