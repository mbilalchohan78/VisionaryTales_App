import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const VisionaryTalesScreen = ({ navigation }: { navigation: any }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Explore New Features</Text>

      <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText}>Go Back to home</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  heading: { fontSize: 24, fontWeight: 'bold' },
  button: { backgroundColor: 'blue', padding: 10, margin: 10, borderRadius: 5 },
  buttonText: { color: 'white' },
});

export default VisionaryTalesScreen;
