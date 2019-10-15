import React, { Component, Fragment } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todo: [
        { text: 'Feed the monkey', prio: 2 },
        { text: 'Buy milk', prio: 1},
      ],
      doneTodo: [
        { text: 'Sleep 8 hours', prio: 2 },
        { text: 'Mentoring others', prio: 1 },
      ],
    };
    this.done = this.done.bind(this);
    this.delete = this.delete.bind(this);
  }

  delete(index) {
    this.state.doneTodo.splice(index, 1);
    return this.setState({ doneTodo: this.state.doneTodo });
  }

  done(todo, index) {
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
    return todoData.sort((a, b) => a.prio - b.prio).map((todo, i) => (
      <li key={todo.text}>
        {todo.text}
        <button onClick={() => { buttonFunc(todo, i) }}>{buttonText}</button>
      </li>
    ));
  }

  render() {
    const {
      todo,
      doneTodo,
    } = this.state;

    return (
      <Fragment>
        <h3>TODOS:</h3>
        <ul>{this.renderTodoItems(todo, 'done', this.done)}</ul>
        <h3>DONE TODOS:</h3>
        <ul>{this.renderTodoItems(doneTodo, 'delete', this.delete)}</ul>
      </Fragment>
    );
  }
}

export default App;
