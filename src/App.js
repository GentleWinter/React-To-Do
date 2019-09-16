import React, { Component } from 'react';
import './App.css';
import {Button, Checkbox, FormControlLabel, TextField, FormGroup} from '@material-ui/core'

class App extends Component {

  constructor(){
    super();
    this.state = {
      listcb: [],
      tarefa: ""
    }
    this.digitaTarefa = this.digitaTarefa.bind(this);
  }

  UNSAFE_componentWillMount(){
    this.setState({
      listcb: [...this.state.listcb,]
    })
  }

  addTodo = (objeto) => {
    if (!this.state.tarefa) return;
    console.log(objeto)
    this.setState({
      listcb: [...this.state.listcb, objeto ],
      tarefa: ""
    })
  }
  
  digitaTarefa(event){
    this.setState({tarefa: event.target.value})
  }
  check = id => {
    let newLista = [];

    this.state.listcb.map(item => {
      let newItem = item;

      if (item.id === id) {
        newItem = {
          ...item,
          checked: !item.checked
        };
      }

      return newLista.push(newItem);
    });

    return this.setState({ listcb: newLista });
  };

  render() {
    return (
      <div>
        <div>
          <header>
            <p id="nome"> To-Do </p>
          </header>

          <FormGroup>
            {this.state.listcb.map((elemento, index) => {
              return (
                <FormControlLabel
                  key={index}
                  control={
                    <Checkbox
                      onClick={() => this.check(elemento.id)}
                      checked={elemento.checked}
                      value={0}
                      color={elemento.color}
                    />
                  }
                  label={elemento.title}
                />
              );
            })}
          </FormGroup>
          <footer>
            <TextField
              id="tarefa"
              placeholder="Escreva sua tarefa"
              value={this.state.tarefa}
              onChange={this.digitaTarefa}
            />
            <Button
              color="primary"
              onClick={() =>
                this.addTodo({
                  checked: false,
                  color: "primary",
                  title: this.state.tarefa,
                  id: this.state.listcb.length
                })
              }
            >
              ADD TO-DO
            </Button>
          </footer>
        </div>
    </div>
  );
}
}

export default App;
