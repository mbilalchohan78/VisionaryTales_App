import React, { useState } from 'react';
import {
  View, Text, StyleSheet, SafeAreaView, Image, TouchableOpacity,
  ScrollView
} from 'react-native';

const HomeScreen = ({ navigation }: { navigation: any }) => {
  const [searchingItem, setSearchingItem] = useState('');

  const handleNavigation = (screen: string) => {
    navigation.navigate(screen);
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Updated Top Bar with Back Button and Heading */}
      <View style={styles.headerRow}>
        {/* Optional: Only show if Home is not the first screen */}
        <TouchableOpacity onPress={() => navigation.navigate('Welcome')}>
          <Image
            source={require('../assets/images/backerrow.png')}
            style={styles.backIcon}
          />
        </TouchableOpacity>
        <Text style={styles.heading}>Home</Text>
      </View>

      <Text style={styles.subHeading}>Explore and Learn with Interactive Content</Text>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.imageContainer}>
          <TouchableOpacity style={styles.imageWrapper} onPress={() => handleNavigation('Books')}>
            <Image
              source={require('../assets/images/bookimage3d.png')}
              style={styles.image}
            />
            <Text style={styles.imageText}>Books</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.imageWrapper} onPress={() => handleNavigation('ARVR')}>
            <Image
              source={require('../assets/images/Fruits.png')}
              style={styles.image}
            />
            <Text style={styles.imageText}>Fruits</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.imageContainer}>
          <TouchableOpacity style={styles.imageWrapper} onPress={() => handleNavigation('TeacherLibrary')}>
            <Image
              source={require('../assets/images/solarSystem.png')}
              style={styles.image}
            />
            <Text style={styles.imageText}>Solar System</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.imageWrapper} onPress={() => handleNavigation('Class')}>
            <Image
              source={require('../assets/images/vegetables.png')}
              style={styles.image}
            />
            <Text style={styles.imageText}>Vegetables</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.imageWrapper} onPress={() => handleNavigation('VisionaryTales')}>
            <Image
              source={require('../assets/images/imagesteacherfemale.png')}
              style={styles.image}
            />
            <Text style={styles.imageText}>Others</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f0f4f7' },

  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 5,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#fff',
    elevation: 5,
  },
  backIcon: {
    width: 28,
    height: 24,
    marginRight: 10,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
  },
  subHeading: {
    fontSize: 16,
    color: 'black',
    marginTop: 10,
    marginLeft: 20,
    marginBottom: 10,
  },

  scrollContainer: { alignItems: 'center', paddingBottom: 10 },

  imageContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginTop: 30,
    gap: 20,
  },
  imageWrapper: { alignItems: 'center' },
  image: {
    width: 190,
    height: 190,
    borderRadius: 30,
    resizeMode: 'contain',
    backgroundColor: 'white',
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
  },
  imageText: { fontSize: 18, fontWeight: 'bold', color: 'black', marginTop: 5 },
});

export default HomeScreen;
