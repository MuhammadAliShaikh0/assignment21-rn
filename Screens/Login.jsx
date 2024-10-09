import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (!email || !password) {
      alert('Please fill in both fields.');
      return;
    }

    navigation.navigate('Dashboard');
  };

  return (
    <View style={styles.container}>
      <Icon name="bowling-ball" size={100} color="#8A2BE2" />

      <Text style={styles.heading}>Welcome back</Text>
      
      <TextInput 
        placeholder='Email' 
        value={email}
        onChangeText={setEmail}
        style={styles.input} 
        keyboardType="email-address" 
        required 
        placeholderTextColor="black"

      />
      
      <TextInput 
        placeholder="Password" 
        value={password}
        onChangeText={setPassword}
        secureTextEntry 
        style={styles.input} 
        required 
        placeholderTextColor="black"

      />
      

      
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      
      <View style={styles.footerContainer}>
        <Text style={styles.footerText}>Don't have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
          <Text style={styles.linkText}> Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  heading: {
    fontSize: 24,
    color: '#6A5ACD',
    marginVertical: 20,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
    borderRadius: 5,
    color: "black",
  },
  loginButton: {
    backgroundColor: '#6A5ACD',
    padding: 15,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  footerText: {
    color: "black",
  },
  linkText: {
    color: '#6A5ACD',
  },
});

export default Login;
