import React, { Component } from 'react';

/// Modifica el componente para que se puedan agregar tareas

class App extends Component {
  constructor(){
    super();
    this.state = {
      task: "",
      tasks: ["Sacar la ropa", "Hacer la cama", "Leer un rato"]
    }
  }
  
  render() {
    return (
      <div className="wrapper">
        <div className="list">
          <h3>Por hacer:</h3>
          <ul className="todo">
          {this.state.tasks.map((task, index) => <li key={index}>{task}</li>)}
          </ul>
           <form onSubmit={this.addTask.bind(this)}>
             <input value={this.state.task} type="text" id="new-task" onChange={this.newTask.bind(this)} placeholder="Ingresa una tarea y oprime Enter" />
           </form>
        </div>
      </div>
    )
  }
  newTask(e){
    this.setState({
      task: e.target.value
    });
  }
  addTask(e){
    this.setState((state) => {
      return {tasks: this.state.tasks.concat(this.state.task)}
    });
    e.preventDefault();
    this.setState({task: ""});
    
  }
}


export default App;
