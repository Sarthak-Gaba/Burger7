import React, { Component } from 'react';
import { connect } from 'react-redux';

import Aux from '../Auxiliary/Auxiliary';
import classes from './Layout.module.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state = {
        showSideDrawer: false
    }

    showSideDrawerHandler = () => {
        this.setState({ showSideDrawer: false });
    }

    toggleSideDrawer = () => {
        this.setState((prevState) => {
            return { showSideDrawer: !prevState.showSideDrawer };
        })
    }
    render() {
        return (
            <Aux>
                <Toolbar isAuth={this.props.isAuth} clicked={this.toggleSideDrawer} />
                <SideDrawer isAuth={this.props.isAuth} show={this.state.showSideDrawer} clicked={this.showSideDrawerHandler} />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        );
    }
}

const mapStateToProps = state => {
    return {
        isAuth: state.auth.tokenId !== null
    }
}

export default connect(mapStateToProps)(Layout);