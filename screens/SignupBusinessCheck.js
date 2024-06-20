import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import OnboardingHeader from '../components/OnboardingHeader';

const SignupBusinessCheck = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <OnboardingHeader title="Logo" subtitle="Business account sign up" />
            <View style={styles.content}>
                <Text style={styles.questionText}>Which of these describes you better</Text>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.optionButton} onPress={() => navigation.navigate('SignupBusiness')}>
                        <Text style={styles.optionButtonText}>Independent Individual</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.optionButton, styles.selectedButton]} onPress={() => navigation.navigate('SignupBusiness')}>
                        <Text style={[styles.optionButtonText, styles.selectedButtonText]}>Registered Business</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',
        paddingTop: 10, 
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 16,
    },
    questionText: {
        color: 'white',
        fontSize: 14,
        marginBottom: 30,
        textAlign: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    optionButton: {
        backgroundColor: '#303033',
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 8,
        marginHorizontal: 5,
        flex: 1,
        alignItems: 'center',
    },
    optionButtonText: {
        color: 'white',
        fontSize: 12,
    },
    selectedButton: {
        backgroundColor: '#D93507',
    },
    selectedButtonText: {
        fontWeight: 'bold',
    },
});

export default SignupBusinessCheck;
