import React, { Component } from 'react';
import Axios from 'axios';
import './App.css';
import Form from './components/Form';
import Recipes from './components/Recipes';

const API_KEY = "f1288db264f906b3ea44e6e21d4a2f59";

class App extends Component {
  state = {
    recipes: []
  }

  getRecipe = async (e) => {
    const recipeName = e.target.elements.recipeName.value;
    e.preventDefault();
   await Axios.get(
      `https://www.food2fork.com/api/search?key=${API_KEY}&q=${recipeName}&count=30`)
    .then(res => this.setState({recipes: res.data.recipes}))
    .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Recipe Search</h1>
        </header>
        <Form getRecipe={this.getRecipe} />
        <Recipes recipes={this.state.recipes} />
      </div>
    );
  }
}

export default App;
