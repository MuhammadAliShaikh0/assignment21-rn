import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const About = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About Us</Text>
      <Text style={styles.description}>
        We are a company dedicated to providing the best products and services to our customers. 
        Our mission is to deliver quality and excellence in everything we do.
      </Text>
      <Text style={styles.subTitle}>Our Vision</Text>
      <Text style={styles.description}>
        To be a leader in our industry and a trusted partner for our clients.
      </Text>
      <Text style={styles.subTitle}>Our Values</Text>
      <Text style={styles.description}>
        Integrity, Customer Focus, Innovation, and Excellence.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black', 
  },
  subTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginTop: 15,
    color: 'black',
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 10,
    color: 'black',
  },
});

export default About;
