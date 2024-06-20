import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const FavoriteArtistSelection = () => {
    const navigation = useNavigation();
    const [selectedArtists, setSelectedArtists] = useState([]);

    const artists = [
        { id: 1, image: require('../assets/fav_artist/flavour.jpeg') },
        { id: 2, image: require('../assets/fav_artist/davido.jpeg') },
        { id: 3, image: require('../assets/fav_artist/tems.jpeg')},
        { id: 4, image: require('../assets/fav_artist/mercy.jpeg')},
        { id: 5, image: require('../assets/fav_artist/mi.jpeg') },
        { id: 6, image: require('../assets/fav_artist/wizkid.jpeg') },
        { id: 7, image: require('../assets/fav_artist/asake.jpeg') },
        { id: 8, image: require('../assets/fav_artist/sunny_ade.jpeg') },
    ];

    const toggleSelectArtist = (id) => {
        setSelectedArtists((prevSelectedArtists) => {
            if (prevSelectedArtists.includes(id)) {
                return prevSelectedArtists.filter((artistId) => artistId !== id);
            } else {
                return [...prevSelectedArtists, id];
            }
        });
    };

    const handleGetStarted = () => {
                navigation.navigate('Main');

    };

    const handleContinueAsListener = () => {
                navigation.navigate('Main');

    };

    const handleSkip = () => {
        // Handle Skip logic
        navigation.navigate('Main');
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <Text style={styles.headerText}>Select 3 or more of your favorite music genres</Text>
                <View style={styles.grid}>
                    {artists.map((artist) => (
                        <TouchableOpacity
                            key={artist.id}
                            style={[
                                styles.gridItem,
                                selectedArtists.includes(artist.id) && styles.selectedGridItem,
                            ]}
                            onPress={() => toggleSelectArtist(artist.id)}
                        >
                            <Image source={artist.image} style={styles.image} />
                        </TouchableOpacity>
                    ))}
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={[styles.button, { backgroundColor: '#D93507' }]} onPress={handleGetStarted}>
                        <Text style={styles.buttonText}>Get Started</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, { backgroundColor: '#303033' }]} onPress={handleContinueAsListener}>
                        <Text style={styles.buttonText}>Continue as Listener</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleSkip}>
                        <Text style={styles.buttonText}>Skip</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
    scrollContainer: {
        flexGrow: 1,
        padding: 16,
        paddingBottom: 100,
    },
    headerText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 10,
    },
    grid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    gridItem: {
        width: '43%',
        aspectRatio: 1,
        marginBottom: 20,
        overflow: 'hidden',
        borderRadius: 100, 
        borderWidth: 2,
        borderColor: 'transparent',
    },
    selectedGridItem: {
        borderColor: '#fff',
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover', 
        borderRadius: 100, 
    },
    buttonContainer: {
        alignItems: 'center',
        marginTop: 20,
    },
    button: {
        paddingVertical: 15,
        width: '100%',
        paddingHorizontal: 20,
        alignItems: 'center',
        borderRadius: 8,
        marginBottom: 20,
    },
    buttonText: {
        color: '#C9D0D7',
        fontSize: 12,
        fontWeight: 'bold',
    },
});

export default FavoriteArtistSelection;
