import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import HeaderComponent from '../components/OnboardingHeader'; // Adjust the import path as necessary

const VerifyEmail = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');

    const handleVerify = () => {
        // Handle verify email logic here
        navigation.navigate('FavoriteArtistSelection')
    };

    const handleResendCode = () => {
        // Handle resend code logic here
    };

    return (
        <View style={styles.container}>
            <HeaderComponent title="Verify Email" />
<View>
    <Text style={styles.subtitle}>A verification code has been sent to example@johndoe.com, enter the verification code below</Text>
</View>
            <KeyboardAvoidingView behavior="padding" style={styles.inputContainer}>
                <View style={styles.inputWrapper}>
                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                        placeholderTextColor="#fff"
                        keyboardType="email-address"
                        autoCapitalize="none"
                        value={email}
                        onChangeText={setEmail}
                    />
                    <TouchableOpacity onPress={handleResendCode} style={styles.resendButton}>
                        <Text style={styles.resendButtonText}>Resend Code</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>

            <TouchableOpacity style={styles.button} onPress={handleVerify}>
                <Text style={styles.buttonText}>Verify</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        paddingTop:'30%'
    },
    inputContainer: {
        flex: 1,
        paddingHorizontal: 16,
    },
    subtitle: {
        color: 'white',
        fontSize: 10,
        marginTop: 4,
        paddingHorizontal: 16,

    },
    input: {
        height: 50,
        backgroundColor: '#1C1C1C',
        borderWidth: 1,
        borderRadius: 8,
        marginVertical: 10,
        paddingHorizontal: 10,
        color: '#fff',
        borderColor:'#303033',

    },
    resendButton: {
        flexDirection:'row-reverse'
        // position: 'absolute',
    },
    resendButtonText: {
        color: '#E94B3C',
        fontSize: 10,
    },
    button: {
        backgroundColor: '#D93507',
        paddingVertical: 15,
        alignItems: 'center',
        borderRadius: 8,
        margin: 16,
        marginBottom:100
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default VerifyEmail;
