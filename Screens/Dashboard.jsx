import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home';
import About from './About'; 
import Contact from './Contact'; 
import Products from './Products';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const Dashboard = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen 
        name="Home" 
        component={Home} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="home-outline" size={size} color={color} />
          ),
        }} 
      />
      <Tab.Screen 
        name="About" 
        component={About} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="information-circle-outline" size={size} color={color} />
          ),
        }} 
      />
      <Tab.Screen 
        name="Contact" 
        component={Contact} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="call-outline" size={size} color={color} />
          ),
        }} 
      />
      <Tab.Screen 
        name="Products" 
        component={Products} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="cart-outline" size={size} color={color} />
          ),
        }} 
      />
    </Tab.Navigator>
  );
};

export default Dashboard;
