import React from 'react';
import "../App.css";

const Recipes = props => (
  <div className="container">
    <div className="row">
    {props.recipes.map((recipe) => {
        return (
            <div className="col" key={recipe.recipe_id} style={{marginBottom:"2rem"}}>
                <div className="recipe_box">
                    <img src={recipe.image_url} alt={recipe.title} />
                    <div className="recipe_text">
                        <h5>{recipe.title.length < 20 ? `${recipe.title}`: `${recipe.title.substring(0,25)}...`}</h5>
                        <p className="recipe_subtitle">
                            Publisher:<span>{recipe.publisher}</span>
                        </p>
                    </div>
                    <button className="recipe_button">View Recipe</button>
                </div>
            </div>
        )
    })}
    </div>
  </div>
);

export default Recipes;
