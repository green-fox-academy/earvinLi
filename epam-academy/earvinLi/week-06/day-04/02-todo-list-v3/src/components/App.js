// External Dependencies
import React, { Component } from 'react';
import {
  css,
  StyleSheet,
} from 'aphrodite';

// Internal Dependencies
import TodoAddInput from './TodoAddInput';
import TodoItem from './TodoItem';

// Local Variables
const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    backgroundColor: '#F7F7F7',
    display: 'flex',
    flexDirection: 'column',
    margin: '50px auto',
    padding: '35px 0',
    width: '60%',
  },
  mainTitle: {
    color: '#b8b8b8',
    fontFamily: ['Lato', 'sans-serif'],
    fontSize: 64,
    fontWeight: 300,
  },
  todoListContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
});

// Component Definition
class App extends Component {
  constructor() {
    super();
    this.state = {
      todo: [
        { text: 'Buy some Focal Banger', prio: 100 },
        { text: 'Drink them all', prio: 1000},
      ],
      doneTodo: [
        { text: 'Sleep 8 hours', prio: 2 },
        { text: 'Mentoring others', prio: 1 },
      ],
    };
    this.onAddTodo = this.onAddTodo.bind(this);
    this.onDoneTodo = this.onDoneTodo.bind(this);
    this.onDeleteTodo = this.onDeleteTodo.bind(this);
  }

  onAddTodo(todo) {
    this.state.todo.push(todo);
    this.setState({ todo: this.state.todo });
    console.log(this.state.todo);
  }

  onDeleteTodo(index) {
    this.state.doneTodo.splice(index, 1);
    return this.setState({ doneTodo: this.state.doneTodo });
  }

  onDoneTodo(todo, index) {
    this.state.todo.splice(index, 1);
    this.state.doneTodo.push(todo);
    // Only setState fulfills rendering
    // Even though state has changed
    return this.setState({
      todo: this.state.todo,
      doneTodo: this.state.doneTodo,
    });
  }

  renderTodoItems(todoData, buttonText, buttonFunc) {
    return todoData.map(todo => (
      <TodoItem
        key={todo.text}
        todoText={todo.text}
      />
    ));
  }

  render() {
    const {
      todo,
      doneTodo,
    } = this.state;

    const {
      mainContainer,
      mainTitle,
      todoListContainer,
    } = styles;

    return (
      <>
        <div className={css(mainContainer)}>
          <div className={css(mainTitle)}>TODOS</div>
          <div className={css(todoListContainer)}>
            <TodoAddInput onAddTodo={this.onAddTodo}/>
            {this.renderTodoItems(todo)}
          </div>
        </div>
      </>
    );
  }
}

export default App;
