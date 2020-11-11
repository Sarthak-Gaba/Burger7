import React from 'react';
import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

const burger = (props) => {
    let ingredients = Object.keys(props.ingredients).map(igKey => {
        return [...Array(props.ingredients[igKey])].map((_,index) => {
            return <BurgerIngredient key={igKey+index} type={igKey} />
        })
    }).reduce((arr,ele) => {
        return arr.concat(ele);
    },[])

    if(ingredients.length===0){
        ingredients=(
            <p>Start adding ingredients!</p>
        )
    }

    return(
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {ingredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
};

export default burger;