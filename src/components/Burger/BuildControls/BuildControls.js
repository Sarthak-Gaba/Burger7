import React from 'react';
import classes from './BuildControls.module.css'
import BuildControl from './BuildControl/BuildControl'

const controls = [
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' },
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' }
];

const buildControls = (props) => {
    return (
        <div className={classes.BuildControls}>
            <p>Current price: <strong>{props.price}</strong></p>
            {controls.map(ctrl => {
                return <BuildControl 
                    key={ctrl.label} 
                    label={ctrl.label} 
                    added = {() => props.added(ctrl.type)}
                    removed = {() => props.removed(ctrl.type)}
                    disabled = {props.disabled[ctrl.type]}
                    />
            })}
            <button
                className={classes.OrderButton}
                disabled={!props.purchasable}
                onClick={props.ordered}
            >{props.isAuth ? 'Order' : 'SignUp to order'}</button>
        </div>
    ); 
}

export default buildControls;