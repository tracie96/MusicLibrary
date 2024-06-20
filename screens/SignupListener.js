import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, TouchableOpacity } from 'react-native';
import Checkbox from 'expo-checkbox';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import OnboardingHeader from '../components/OnboardingHeader';

const SignUpListener = () => {
    const navigation = useNavigation();
    const [isRememberMe, setIsRememberMe] = useState(false);

    return (
        <View style={styles.container}>
            <OnboardingHeader title={'Logo'} subtitle={'Sign up'}/>
            <View style={styles.content}>
            <TextInput
                style={styles.input}
                placeholder="Full name"
                placeholderTextColor="#A1A3A7"
                autoCapitalize="none"
            />

            <TextInput
                style={styles.input}
                placeholder="Email"
                placeholderTextColor="#A1A3A7"
                keyboardType="email-address"
                autoCapitalize="none"
            />
            <TextInput
                style={styles.input}
                placeholder="Phone number"
                placeholderTextColor="#A1A3A7"
                autoCapitalize="none"
            />

            <TextInput
                style={styles.input}
                placeholder="Residential address"
                placeholderTextColor="#A1A3A7"
                keyboardType="email-address"
                autoCapitalize="none"
            />
            <TextInput
                style={styles.input}
                placeholder="Mailing address"
                placeholderTextColor="#A1A3A7"
                autoCapitalize="none"
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                placeholderTextColor="#A1A3A7"
                secureTextEntry
            />
            <TextInput
                style={styles.input}
                placeholder="Confirm Password"
                placeholderTextColor="#A1A3A7"
                secureTextEntry
            />

            <View style={styles.optionsContainer}>
                <View style={styles.rememberMeContainer}>
                        <Checkbox
                            value={isRememberMe}
                            onValueChange={setIsRememberMe}
                            color={isRememberMe ? '#E94B3C' : undefined}
                            style={{height:12,width:12}}
                        />
                        <Text style={styles.optionText}>I accept Terms of services and Privacy Policy</Text>
                </View>
            </View>


            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('VerifyEmail')}>
                <Text style={styles.buttonText}>Signup</Text>
            </TouchableOpacity>    
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
        backgroundColor: '#000000',
    },
    backArrow: {
        position: 'absolute',
        top: 40,
        left: 20,
        zIndex: 10,
    },
    content: {
        width: '100%',
      },
      title: {
        fontSize: 24,
        color: 'white',
        textAlign: 'center',
        marginBottom: 20,
      },
      subtitle: {
        fontSize: 18,
        color: 'white',
        textAlign: 'center',
        marginBottom: 20,
      },
    input: {
        height: 41,
        backgroundColor: '#1C1C1C',
        borderWidth: 1,
        borderRadius: 8,
        marginVertical: 10,
        fontSize:12,
        paddingHorizontal: 10,
        color: '#fff',
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
        fontSize: 10,
        marginLeft: 8
    },
    button: {
        backgroundColor: '#D93507',
        paddingVertical: 15,
        alignItems: 'center',
        borderRadius: 8,
        marginTop: 15,
        color:'#fff'
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
      },
});

export default SignUpListener;
