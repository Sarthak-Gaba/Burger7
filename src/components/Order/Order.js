import React from 'react';
import classes from './Order.module.css';

const order = (props) => {
    const ingredient = [];

    for(let key in props.ingredient){
        ingredient.push({
            name: key, amount: props.ingredient[key]
        });
    }

    const ingredientOutput = ingredient.map(ig => {
        return <span key={ig.name} className={classes.Ingredient}> {ig.name}:{ig.amount} </span>;
    });

    return (
        <div className={classes.Order}>
            <p>Ingredients: {ingredientOutput}</p>
            <p>Price: <strong>Rs {props.price} </strong></p>
        </div>
    )
}

export default order;