// components/Header.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const OnboardingHeader = ({ title, subtitle }) => {
    const navigation = useNavigation();

    return (
        <View style={styles.headerContainer}>
            <TouchableOpacity style={styles.backArrow} onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back" size={24} color="white" />
            </TouchableOpacity>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>{title}</Text>
                {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        paddingVertical: 20,
        backgroundColor: '#000', // Optional: If you want a specific background color
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 10,
    },
    backArrow: {
        position: 'absolute',
        top: 50,
        left: 20,
    },
    titleContainer: {
        alignItems: 'center',
        marginTop: 40,
    },
    title: {
        color: 'white',
        fontSize: 32,
    },
    subtitle: {
        color: 'white',
        fontSize: 16,
        marginTop: 10,
    },
});

export default OnboardingHeader;
