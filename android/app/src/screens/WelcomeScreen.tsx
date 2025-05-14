import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const WelcomeScreen = ({ navigation }: { navigation: any }) => {
  return (
    <View style={styles.container}>
      {/* Top Image */}
      <Image source={require('../assets/images/welcomeimages2.png')} style={styles.topImage} />

      <Text style={styles.heading}>Welcome to the App</Text>
      <Text style={styles.subHeading}>Discover an immersive 3D learning experience</Text>

      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.replace('Home')}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>

      {/* Bottom Image */}
      <Image source={require('../assets/images/welcomeimages.png')} style={styles.bottomImage} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor:'white', },
  topImage: { width: 370, height: 330, marginBottom: 5, borderRadius: 20, },
  heading: { fontSize: 26, fontWeight: 'bold', marginBottom: 10, },
  subHeading: { fontSize: 16, textAlign: 'center', marginBottom: 20 },
  button: { backgroundColor: '#8E2DE2', padding: 12, borderRadius: 5 },
  buttonText: { color: 'white', fontSize: 18 },
  bottomImage: { width: 370, height: 330, marginTop: 5 , borderRadius: 20},
});

export default WelcomeScreen;
