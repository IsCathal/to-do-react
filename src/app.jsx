class Todo extends React.Component {

  constructor(props) {
    super(props);
    console.log(props);
    this.state = { 
      done: (this.props.done == "true" && props.done),
      text: props.text
    };
    this.handelClick = this.handelClick.bind(this);
  }
  
  handelClick(event){ 
    this.setState({done: !this.state.done});
    console.log('I an clicked')
  }

  render() {
    let checked = (this.props.done);
    let text = this.props.text;
 
    return <div className="todo">
              <span>
                <input type="checkbox" checked={this.state.done} onClick={this.handelClick}/>
                <input type="text" value={this.state.text}/>
                </span>
           </div>;
  }
}


ReactDOM.render(
  <Todo text="Todo" done ="true"/>,
  document.getElementById('root')
);
