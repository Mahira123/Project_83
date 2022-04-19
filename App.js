import * as React from 'react';
import {NavigatorContainer} from '@react-navigation/native';
import DrawerNavigator from "./navigation/DrawerNavigator";

export default function App(){
    return(
        <NavigatorContainer>
            <DrawerNavigator/>
        </NavigatorContainer>
    );
    
}