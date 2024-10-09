import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Registration = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Icon name="bowling-ball" size={100} color="#8A2BE2" />
      <Text style={styles.heading}>Login Template</Text>
      <Text style={styles.p}>
        The easiest way to start with your amazing application.
      </Text>
      
      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={styles.buttonText}>LOGIN</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.signupButton}
        onPress={() => navigation.navigate('Signup')}
      >
        <Text style={styles.signupText}>SIGN UP</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  p:{
    color:"black",
    textAlign:"center",
    marginBottom:15,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0f0f0',
    padding: 20,
  },
  heading: {
    fontSize: 24,
    color: '#6A5ACD',
    marginVertical: 20,
  },
  loginButton: {
    backgroundColor: '#6A5ACD',
    padding: 15,
    borderRadius: 5,
    width: '80%',
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
  },
  signupButton: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 5,
    width: '80%',
    alignItems: 'center',
    borderColor: '#6A5ACD',
    borderWidth: 1,
  },
  signupText: {
    color: '#6A5ACD',
    fontSize: 18,
  },
});

export default Registration;
