import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const TrendingMusic = () => {
    // Sample data
    const trendingMusic = [
        { title: 'Poe', artist: 'Ruger', imageUrl: 'path/to/image1.jpg', rank: 1 },
        { title: 'Sharpally', artist: 'Young John', imageUrl: 'path/to/image2.jpg', rank: 2 },
        // Add more items here
    ];

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Trending music</Text>
                <TouchableOpacity>
                    <Text style={styles.viewMore}>View more</Text>
                </TouchableOpacity>
            </View>
            {trendingMusic.map((music, index) => (
                <View key={index} style={styles.musicItem}>
                    <Image source={{ uri: music.imageUrl }} style={styles.musicImage} />
                    <View style={styles.musicInfo}>
                        <Text style={styles.musicTitle}>{music.title}</Text>
                        <Text style={styles.musicArtist}>{music.artist}</Text>
                    </View>
                    <Text style={styles.musicRank}>{music.rank}</Text>
                </View>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 16,
        backgroundColor: '#000',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    title: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    viewMore: {
        color: '#E94B3C',
    },
    musicItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    musicImage: {
        width: 50,
        height: 50,
        borderRadius: 8,
    },
    musicInfo: {
        flex: 1,
        marginLeft: 10,
    },
    musicTitle: {
        color: 'white',
        fontSize: 16,
    },
    musicArtist: {
        color: '#777',
        fontSize: 14,
    },
    musicRank: {
        color: '#E94B3C',
        fontSize: 16,
    },
});

export default TrendingMusic;
