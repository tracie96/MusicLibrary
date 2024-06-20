import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from 'expo-vector-icons';
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground } from 'react-native';
import BellIcon from '../assets/svg/bell';
import { EmojioneMoneyBag } from '../assets/svg/emojione_money-bag';

const FeaturedArtist = () => {
    return (
        <ImageBackground
        source={require('../assets/bgfeatured.jpg')} // Replace with your image path
        style={styles.background}
        >
     <LinearGradient
  start={{ x: 0, y: 1 }}
  end={{ x: 1, y: 0 }}
  colors={['rgba(70, 10, 31, 100)', 'rgba(60, 15, 100, 3)']}
  style={styles.gradient}
>


        <View style={styles.container}>
            
            <View style={styles.header}>
                <Image source={require('../assets/user.jpeg')} style={styles.profileImage} />
                <View style={styles.rightHeader}>
                    <TouchableOpacity style={styles.earnMoneyButton}>
                        <EmojioneMoneyBag/>
                        <Text style={styles.earnMoneyText}>Earn money</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <BellIcon />

                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.featured}>
                <Text style={styles.title}>Rising act</Text>
                <View style={styles.artistInfo}>
                    <Image source={require('../assets/risingstar-image.png')} style={styles.artistImage} />
                    <View style={styles.artistText}>
                        <Text style={styles.subtitle}>New single</Text>
                        <Text style={styles.artistName}>Small Money</Text>
                        <Text style={styles.artist}>Nasboi</Text>
                    </View>
                </View>
                <TouchableOpacity style={styles.listenNowButton}>
                    <Text style={styles.listenNowText}>Listen Now</Text>
                </TouchableOpacity>
            </View>
        </View>
        </LinearGradient>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 16,
        // backgroundColor: '#000',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    profileImage: {
        width: 40,
        height: 40,
        borderRadius: 20,
    },
    rightHeader: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    earnMoneyButton: {
        borderColor: '#4E4D4E',
        borderWidth: 1,
        paddingVertical: 6,
        flexDirection:'row',
        paddingHorizontal: 12,
        borderRadius: 5,
        marginRight: 8,
    },
    earnMoneyText: {
        color: '#fff',
        fontSize:12,
        marginLeft:3
    },
    bellIcon: {
        width: 24,
        height: 24,
    },
    featured: {
        marginTop: 16,
        backgroundColor: '#E94B3C',
        borderRadius: 12,
        padding: 16,
    },
    title: {
        fontSize: 28,
        color: '#fff',
        fontWeight: 'bold',
    },
    artistInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 8,
    },
    artistImage: {
        width: 60,
        height: 60,
        borderRadius: 8,
    },
    artistText: {
        marginLeft: 12,
    },
    subtitle: {
        color: '#fff',
    },
    artistName: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
    artist: {
        color: '#fff',
        fontSize: 14,
    },
    listenNowButton: {
        marginTop: 12,
        backgroundColor: '#fff',
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 20,
    },
    listenNowText: {
        color: '#E94B3C',
        fontWeight: 'bold',
    },
});

export default FeaturedArtist;
