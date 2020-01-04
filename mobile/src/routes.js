import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';

import Icon from 'react-native-vector-icons/MaterialIcons';

import SignIn from './Pages/SignIn';
import Checkin from './Pages/Checkin';
import Order from './Pages/Order';
import NewOrder from '~/Pages/NewOrder';
import Answer from '~/Pages/Answer';

export default (isSigned = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Sign: createSwitchNavigator({
          SignIn,
        }),
        App: createBottomTabNavigator(
          {
            Checkin,
            New: {
              screen: createStackNavigator(
                {
                  Order,
                  NewOrder,
                  Answer,
                },
                {
                  defaultNavigationOptions: {
                    headerTransparent: true,
                  },
                }
              ),
              navigationOptions: {
                tabBarLabel: 'Pedir ajuda',
                tabBarIcon: ({ tintColor }) => (
                  <Icon name="live-help" size={20} color={tintColor} />
                ),
              },
            },
          },
          {
            tabBarOptions: {
              keyboardHidesTabBar: true,
              activeTintColor: '#EE4E62',
              inactiveTintColor: '#999999',
              labelStyle: {
                fontSize: 14,
                marginTop: -10,
                marginBottom: 10,
              },
              style: {
                height: 70,
              },
            },
          }
        ),
      },
      {
        initialRouteName: isSigned ? 'App' : 'Sign',
      }
    )
  );
