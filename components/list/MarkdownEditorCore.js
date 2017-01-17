import React from 'react';
import RichTextEditor from 'react-rte';

export default class MarkdownEditorCore extends React.Component {
  static propTypes = {
    defaultValue: React.PropTypes.string,
    onChange:React.PropTypes.func
  };
  static defaultProps = {
    defaultValue:"" ,
    onChange:()=>{console.warn("MarkdownEditorCore need onChange props")}
  };
  constructor(props) {
    super(props);
    this.handleChange=this.handleChange.bind(this);
    const {defaultValue}=this.props;
    const value=defaultValue?
    			RichTextEditor.createValueFromString(defaultValue, 'markdown'):
    			RichTextEditor.createEmptyValue();
    this.state = {value:value};
  }

  handleChange(value){
  	this.setState({value: value});
    this.props.onChange(value.toString('markdown'))
  }

  get toolbarConfig() {
	  	return {
	    // Optionally specify the groups to display (displayed in the order listed).
	    display: ['INLINE_STYLE_BUTTONS', 'BLOCK_TYPE_BUTTONS', 'LINK_BUTTONS', 'BLOCK_TYPE_DROPDOWN', 'HISTORY_BUTTONS'],
	    INLINE_STYLE_BUTTONS: [
	      {label: '加粗', style: 'BOLD'},
	      {label: '斜体', style: 'ITALIC'},
	      {label: '下划线', style: 'UNDERLINE'}
	    ],
	    BLOCK_TYPE_DROPDOWN: [
	      {label: '正文', style: 'unstyled'},
	      {label: '大标题', style: 'header-one'},
	      {label: '中标题', style: 'header-two'},
	      {label: '小标题', style: 'header-three'}
	    ],
	    BLOCK_TYPE_BUTTONS: [
	      {label: '无序列表', style: 'unordered-list-item'},
	      {label: '有序列表', style: 'ordered-list-item'}
	    ]
	  }
	}

  render() {
    return (
      <RichTextEditor
        value={this.state.value}
        onChange={this.handleChange}
        toolbarConfig={this.toolbarConfig} 
      />
    );
  }
}
