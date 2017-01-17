import React from 'react';

export default class TextEditorCore extends React.Component {
  static propTypes = {
    defaultValue: React.PropTypes.string,
    onChange:React.PropTypes.func
  };
  static defaultProps = {
    defaultValue:"" ,
    onChange:()=>{console.warn("TextEditorCore need onChange props")}
  };
  constructor(props) {
    super(props);
    this.handleChange=this.handleChange.bind(this);
  }
  handleChange(e){
    this.props.onChange(e.target.value)
  }
  render() {
    return (
      <textarea defaultValue={this.props.defaultValue} onChange={this.handleChange} style={{width:"100%",height:"100%"}}/>
    );
  }
}