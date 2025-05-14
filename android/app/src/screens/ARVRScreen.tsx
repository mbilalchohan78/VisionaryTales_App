import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const ARVRScreen = ({ navigation }: { navigation: any }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>AR/VR Learning</Text>
      <Text style={styles.subHeading}>Immerse yourself in interactive learning.</Text>

      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.goBack()} 
      >
        <Text style={styles.buttonText}>Go Back</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f5f7fa', padding: 20 },
  heading: { fontSize: 29, fontWeight: 'bold', color: '#333', marginBottom: 10 },
  subHeading: { fontSize: 16, color: '#666', marginBottom: 30, textAlign: 'center' },
  button: { backgroundColor: 'rgb(255, 0, 230)', paddingVertical: 12, paddingHorizontal: 30, borderRadius: 8 },
  buttonText: { fontSize: 18, fontWeight: 'bold', color: '#fff', textAlign: 'center' },
});

export default ARVRScreen;
