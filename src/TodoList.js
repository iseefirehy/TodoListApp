import React from 'react';
import TodoItem from './TodoItem';

class TodoList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      list: [],
      inputValue:''
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBtnClick = this.handleBtnClick(this);
    this.handleDelete = this.handleDelete.bind(this);
}
  handleBtnClick(){
    this.setState({
        list:[...this.state.list,this.state.inputValue],
        inputValue:''
    })
  }
  handleInputChange(e){
      this.setState({
        inputValue: e.target.value
      })
  }


  handleDelete(index){
      const list = [...this.state.list];
      list.splice(index,1);
      this.setState({
          list
      })
  }
  getTodoItems(){
    return(
        this.state.list.map((item,index)=>{
        return (
            <TodoItem
                delete={this.handleDelete.bind}
                key={index}
                content={item}
                index={index}
            /> //父组件通过content来传递参数
        )
        //<li key = {index} onClick={this.handleItemClick.bind(this,index)}>{item}</li>
    })
    )
  }
  //父组件通过属性的形式向子组件传递参数
  render() {
    return (
        <div>
      <div>
        <input value={this.state.inputValue} onChange={this.handleInputChange}/>
          <button onClick={this.handleBtnClick}>add</button>
      </div>
          <ul>
              {this.getTodoItems()}
          </ul>
        </div>
    );
  }
}

export default TodoList;
