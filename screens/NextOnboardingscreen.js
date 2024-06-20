// screens/LoginScreen.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, TextInput, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import DropDownPicker from 'react-native-dropdown-picker';

export default function SelectAccountType({ navigation }) {
    const [role, setRole] = useState('');
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
      { label: 'Listener', value: 'listener' },
      { label: 'Talent', value: 'talent' },
      { label: 'Business', value: 'business' },
    ]);


    const handleSelectAccount = () => {
        if (!value) {
          Alert.alert('Please select your role');
          return;
        }
    
        switch (value) {
          case 'listener':
            navigation.navigate('SignupListener');
            break;
          case 'talent':
            navigation.navigate('SignupTalent');
            break;
          case 'business':
            navigation.navigate('SignupBusinessCheck');
            break;
          default:
            break;
        }
      };
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
          <Text style={styles.title}>Sign Up</Text>
          <DropDownPicker
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            placeholder="Account type"
            style={styles.dropdown}
            dropDownContainerStyle={styles.dropdownContainer}
            textStyle={styles.dropdownText}
            placeholderStyle={styles.placeholderStyle}
          />
       
          <TouchableOpacity style={styles.button} onPress={handleSelectAccount}>
            <Text style={styles.buttonText}>Continue</Text>
          </TouchableOpacity>
          <Text style={styles.orText}>Or</Text>
          <TouchableOpacity style={styles.guestButton} onPress={() => navigation.navigate('Home')}>
            <Text style={styles.guestButtonText}>Continue as a guest</Text>
          </TouchableOpacity>
          <Text style={styles.signUpText}>
            Already have an account? <Text style={styles.signUpLink} onPress={() => navigation.navigate('Login')}>Log In</Text>
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
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#333',
    color: 'white',
    borderRadius: 8,
    paddingVertical: 15,
    borderColor:'#303033',
    paddingHorizontal: 10,
    marginBottom: 10,
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
    backgroundColor: '#D93507',
    paddingVertical: 15,
    alignItems: 'center',
    borderRadius: 8,
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  orText: {
    color: 'white',
    fontSize:'12',
    textAlign: 'center',
    marginVertical: 10,
  },
  guestButton: {
    backgroundColor: '#303033',
    paddingVertical: 15,
    alignItems: 'center',
    borderRadius: 8,
    marginBottom: 20,
  },
  guestButtonText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  signUpText: {
    color: 'white',
    textAlign: 'left',
    fontSize:10
  },
  signUpLink: {
    color: '#E94B3C',
    fontWeight: 'bold',
  },
  dropdown: {
    backgroundColor: '#1C1C1C',
    borderColor: '#333',
    borderRadius: 8,
    marginBottom: 10,
  },
  dropdownContainer: {
    backgroundColor: '#333',
    borderColor: '#333',
    borderRadius: 8,
  },
  dropdownText: {
    color: 'white',
  },
  placeholderStyle: {
    color: '#888',
  },
});