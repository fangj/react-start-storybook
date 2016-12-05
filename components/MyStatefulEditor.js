import React, {Component, PropTypes} from 'react';
import RichTextEditor from 'react-rte';

export default class MyStatefulEditor extends Component {
  static propTypes = {
    onChange: PropTypes.func
  };

  constructor(props) {
    super(props);
    this.state = {value: RichTextEditor.createEmptyValue()};
  }

  onChange = (value) => {
    this.setState({value});
    if (this.props.onChange) {
      // Send the changes up to the parent component as an HTML string.
      // This is here to demonstrate using `.toString()` but in a real app it
      // would be better to avoid generating a string on each change.
      this.props.onChange(
        value.toString('html')
      );
    }
  };

  render () {
     const toolbarConfig = {
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
  };
    return (
      <RichTextEditor
        value={this.state.value}
        onChange={this.onChange}
        toolbarConfig={toolbarConfig} 
      />
    );
  }
}