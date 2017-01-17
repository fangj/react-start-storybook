import React from 'react';

export default class Viewer extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.handleMsg=this.handleMsg.bind(this);
    this.handleMsgEdit=this.handleMsgEdit.bind(this);
    this.handleMsgRemove=this.handleMsgRemove.bind(this);
  }

  render() {
    return (
      <div>viewser</div>
    );
  }

  showEditor(){
    const {ns}=this.props;
    PubSub.publish(ns,{show:"editor"});
  }

  handleMsg(_id,msg){
    switch(msg.action){
      case "edit":return this.handleMsgEdit();
      case "remove":return this.handleMsgRemove();
    }
  }

  handleMsgEdit(){
    console.log("todo,handleMsgEdit",this.data);
    this.showEditor()
  }

  handleMsgRemove(){
    console.log("todo,handleMsgRemove",this.data);
  }
  componentDidMount() {
    const {data}=this.props;
  	this.token=PubSub.subscribe(data._id,this.handleMsg)
  }
  componentWillUnmount() {
    PubSub.unsubscribe(this.token);
  }
}
