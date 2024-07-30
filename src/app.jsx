class Todo extends React.Component {
  render() {
    let checked = (this.props.done);
    let text = this.props.text;
 
    return <div className="todo">
              <span>
                <input type="checkbox" checked={checked} />
                <input type="text" value={text}/>
                </span>
           </div>;
  }
}


ReactDOM.render(
  <Todo text="Todo" done ="false"/>,
  document.getElementById('root')
);
