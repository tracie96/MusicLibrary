// screens/OnboardingScreen.js
import React, { useState } from 'react';
import { View, Button, StyleSheet , Text, ImageBackground,TouchableOpacity} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { LinearGradient } from 'expo-linear-gradient';

export default function OnboardingScreen({ navigation }) {
  const [selectedValue, setSelectedValue] = useState('talent');


  return (
    <ImageBackground
      source={require('../assets/background-image.jpeg')} // Replace with your image path
      style={styles.background}
    >
      <LinearGradient
        colors={['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 0.9)']}
        style={styles.gradient}
      >
      <View style={styles.overlay}>
        <View style={styles.content}>
          <Text style={styles.title}>Discover new artists and stream new songs</Text>
          <Text style={styles.subtitle}>Join our community and earn money doing what you love</Text>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('AccountType')}>
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </View>
      </LinearGradient>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gradient: {
    flex: 1,
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: '60%',
    justifyContent: 'flex-end',
  },
   content: {
    padding: 20,
    width: '100%',
    marginBottom:50
  },
  title: {
    fontSize: 24,
    color: 'white',
    textAlign: 'left',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 12,
    color: 'white',
    textAlign: 'left',
    marginBottom: 20,

  },
  button: {
    backgroundColor: '#D93507',
    paddingVertical: 15,
    width: '100%', 
    alignItems: 'center',
    borderRadius: 6,
  },
  buttonText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
});