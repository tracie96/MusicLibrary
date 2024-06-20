// screens/LoginScreen.js
import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TextInput, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Checkbox from 'expo-checkbox';

export default function SelectAccountType({ navigation }) {
  const [isRememberMe, setIsRememberMe] = useState(false);

  return (
    <ImageBackground
      source={require('../assets/signup-bg.jpeg')} // Replace with your image path
      style={styles.background}
    >
      <LinearGradient
        colors={['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 0.9)']}
        style={styles.gradient}
      >
        <View style={styles.content}>
          <Text style={styles.title}>Log In</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your email"
            placeholderTextColor="#888"
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#888"
            secureTextEntry
          />
          <View style={styles.optionsContainer}>
            <View style={styles.rememberMeContainer}>
              <TouchableOpacity>
              <Checkbox
                value={isRememberMe}
                onValueChange={setIsRememberMe}
                color={isRememberMe ? '#E94B3C' : undefined}
              />
                <Text style={styles.optionText}>Remember me</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity>
              <Text style={styles.optionText}>Forgot password</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
            <Text style={styles.buttonText}>Log In</Text>
          </TouchableOpacity>
          <Text style={styles.orText}>Or</Text>
          <TouchableOpacity style={styles.guestButton} onPress={() => navigation.navigate('Home')}>
            <Text style={styles.guestButtonText}>Continue as a guest</Text>
          </TouchableOpacity>
          <Text style={styles.signUpText}>
            Don’t have an account? <Text style={styles.signUpLink} onPress={() => navigation.navigate('Signup')}>Sign Up</Text>
          </Text>
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
    top: '20%',
    justifyContent: 'flex-end',
  },
  content: {
    width: '100%',
    padding: 20,
    height:'70%'
  },
  title: {
    fontSize: 24,
    color: 'white',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#1C1C1C',
    color: 'white',
    borderRadius: 8,
    paddingVertical: 15,
    paddingHorizontal: 10,
    marginBottom: 10,
    borderColor:'#303033',
  },
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  rememberMeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionText: {
    color: 'white',
    fontSize: 14,
  },
  button: {
    backgroundColor: '#E94B3C',
    paddingVertical: 15,
    alignItems: 'center',
    borderRadius: 8,
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  orText: {
    color: 'white',
    textAlign: 'center',
    marginVertical: 10,
  },
  guestButton: {
    backgroundColor: '#444',
    paddingVertical: 15,
    alignItems: 'center',
    borderRadius: 8,
    marginBottom: 20,
  },
  guestButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  signUpText: {
    color: 'white',
    textAlign: 'left',
  },
  signUpLink: {
    color: '#E94B3C',
    fontWeight: 'bold',
  },
});