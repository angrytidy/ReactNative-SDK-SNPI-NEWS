/**
 * Copyright (c) Flexi Apps.
 *
 * A basic component to config the different app screens
 * in a router component
 *
 * Example usage:
 *
 * ```
 * import Router  from 'router';
 * ...
 *
 * <Router />
 * ```
 */

import React from "react";
import { BackHandler } from 'react-native';
import { Router, Scene, Actions } from "react-native-router-flux";
import { connect } from "react-redux";

//scenes

import configureRoutes from "./routingConfig";


const RouterRedux = connect()(Router);

// injected routes
const routes = configureRoutes();

const AppRouter = () => {

  return (
    <RouterRedux backAndroidHandler={() => {
        let cs = Actions.currentScene;
        console.log(cs)
        if (cs === 'List') { BackHandler.exitApp(); }
    }}>
            <Scene hideNavBar>
                {routes.map(
                    ({ key, component, type, drawer, ...others }) =>
                        !drawer && (
                            <Scene key={key} component={component} type={type} {...others} />
                        )
                )}
            </Scene>
    </RouterRedux>
  );
};

export default AppRouter;
