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
      <View style={styles.topBar}>
        <Text style={styles.homeText}>Home</Text>
      </View>
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
            <Text style={styles.imageText}>Solar System </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.imageWrapper} onPress={() => handleNavigation('Class')}>
            <Image 
              source={require('../assets/images/vegetables.png')} 
              style={styles.image}
            />
            <Text style={styles.imageText}>Vegetables </Text>
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
  container: { flex: 1, backgroundColor: 'rgb(235, 235, 235)' },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    height: 25,
    backgroundColor: 'rgba(250, 221, 255, 0)',
    elevation: 5,
    borderBottomStartRadius: 15,
    borderBottomEndRadius: 15,
  },
  homeText: { fontSize: 18, fontWeight: 'bold', color: 'black', marginLeft: 10 },
  scrollContainer: { alignItems: 'center', paddingBottom: 10 },
  imageContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginTop: 50,
    gap: 20,
  },
  imageWrapper: { alignItems: 'center' },
  image: {
    width: 160,
    height: 160,
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
