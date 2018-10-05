import React, { Component } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';



const API_KEY = 'f1288db264f906b3ea44e6e21d4a2f59';

class Recipe extends Component{
    state = {
            activeRecipe: []
        }
        componentDidMount = async (e) =>{
            const title = this.props.location.state.recipe;
            e.preventDefault()
            await Axios.get(`https://www.food2fork.com/api/search?key=${API_KEY}&q=${title}&count=30`)
            .then(res => res.this.setState({
                activeRecipe:res.data.recipes
            }))
            .catch(err => console.log(err))
        }
    render(){
        const recipe = this.state.activeRecipe;
        return(
            <div className="container">
            { this.state.activeRecipe.length !== 0 && 
                <div className="active-recipe">
                    <img className="active-recipe-img" src={recipe.image_url} alt={recipe.title} />
                    <h3 className="active-recipe-title">{recipe.title}</h3>
                    <h4 className="active-recipe-publisher">
                        Publisher: <span>{recipe.publisher}</span>
                    </h4>
                    <p className="active=recipe-website">
                        WebSite:<span><a href={recipe.publisher_url}>{recipe.publisher_url}</a></span>
                    </p>
                    <button className="active-recipe-button"><Link to="/">Go Home</Link></button>
                </div>
                }
            </div>
        );
    }
}

export default Recipe;