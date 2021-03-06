import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import {
    createSwitchNavigator,
    createAppContainer
} from 'react-navigation';

import {createStackNavigator} from 'react-navigation-stack'
import {createDrawerNavigator} from 'react-navigation-drawer';
import Home from './Home'
import BMICalculator from './BMICalculator'

export default class MainContainer extends Component {
    render() {
        return <AppContainer/>;
    }
}

// class WelcomeScreen extends Component {
//     static navigationOptions = {
//         title: 'Welcome',
//     };
//
//     render() {
//         return (
//             <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//                 <Text>WelcomeScreen</Text>
//                 <Button
//                     title="Go to DashboardScreen"
//                     onPress={() => this.props.navigation.navigate('Dashboard')}
//                 />
//             </View>
//         );
//     }
// }
//
// class DashboardScreen extends Component {
//     static navigationOptions = {
//         title: 'Dashboard',
//     };
//
//     render() {
//         return (
//             <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//                 <Text>DashboardScreen</Text>
//             </View>
//         );
//     }
// }

const DashboardStackNavigator = createStackNavigator(
    {
        DashboardNavigator: Home
    },
    {
        defaultNavigationOptions: ({navigation}) => {
            return {
                headerLeft: (
                    <Icon
                        style={{paddingLeft: 10}}
                        onPress={() => navigation.openDrawer()}
                        name="md-menu"
                        size={30}
                    />
                )

            };
        }
    }
);

const WelcomeStackNavigator = createStackNavigator(
    {
        WelcomeNavigator: BMICalculator
    },
    {
        defaultNavigationOptions: ({navigation}) => {
            return {
                headerLeft: (
                    <Icon
                        style={{paddingLeft: 10}}
                        onPress={() => navigation.openDrawer()}
                        name="md-menu"
                        size={30}
                    />
                )

            };
        }
    }
);
const AppDrawerNavigator = createDrawerNavigator({
    Home: {
        screen: DashboardStackNavigator
    },
    BMICalc: {
        screen: WelcomeStackNavigator
    },
});

const AppSwitchNavigator = createSwitchNavigator({
    Dashboard: {screen: AppDrawerNavigator},

});

const AppContainer = createAppContainer(AppSwitchNavigator);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
