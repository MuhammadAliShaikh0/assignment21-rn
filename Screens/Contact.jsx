import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const Contact = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contact Us</Text>
      <Text style={styles.description}>
        We would love to hear from you! If you have any questions or comments, please reach out to us at:
      </Text>
      <Text style={styles.contactInfo}>Email: abc@example.com</Text>
      <Text style={styles.contactInfo}>Phone: +1-234-567-890</Text>
      <Text style={styles.description}>
        Thank you for your interest!
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
    color:"black",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
  },
  contactInfo: {
    fontSize: 16,
    marginBottom: 5,
    color: 'black',
  },
});

export default Contact;
