import React from 'react';

export default class HaveApi extends React.Component {
  static propTypes = {
    api: React.PropTypes.object,
  };

  constructor(props) {
    super(props);
    this.state={};
  }

  componentDidMount() {
  	const me=this;
  	const {api}=this.props;
  	console.log("this.props")

  	console.log(this.props)
  	api.all().then(data=>{
  		console.log('api.all',data)
  		me.setState(data)
  	})
  }

  render() {
  	const {children}=this.props;
    return (
      <pre>{JSON.stringify(this.state)}{children}</pre>
    );
  }
}
