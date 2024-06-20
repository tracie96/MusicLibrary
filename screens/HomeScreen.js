import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import TrendingMusic from '../components/TrendingMusic';
import NewActs from '../components/NewActs';
import Producers from '../components/Producers';
import Top20Songs from '../components/Top20Songs';
import HipHopNewAct from '../components/HipHopnewAct';
import AfrobeatsNewAct from '../components/AfrobeatsNewAct';
import DJs from '../components/DJs';
import HighlifeNewAct from '../components/HighlifeNewAct';
import ArtistsYouMayLike from '../components/ArtistsYouMayLike';
import FeaturedArtist from './FeaturedArtist';

const HomeScreen = () => {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView >
<FeaturedArtist/>
          
            <TrendingMusic />
            {/* <NewActs />
            <Producers />
            <Top20Songs />
            <HipHopNewAct />
            <AfrobeatsNewAct />
            <DJs />
            <HighlifeNewAct />
            <ArtistsYouMayLike /> */}
        </ScrollView>
        </SafeAreaView>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
});

export default HomeScreen;
