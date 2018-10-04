import React from 'react';
import "../App.css";


const Recipes = props => (
    <div  className="recipes" >
        {props.recipes.map((recipe) => {
            return (
                <div key={recipe.recipe_id}>
                    <img src={recipe.image_url} alt={recipe.title} />
                    <p>{recipe.title}</p>
                </div>
            )
        })}
    </div>
)
export default Recipes;
