import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  FlatList,
  Alert,
} from 'react-native';

const DATA = [
  { id: '1', title: 'Pakistan Studies',},
  { id: '2', title: 'Urdu',  },
  // Add more items as needed
];

const BookScreen = ({ navigation }: { navigation: any }) => {
  const [search, setSearch] = useState('');

  const renderItem = ({ item }: any) => (
    <TouchableOpacity style={styles.card} 
    onPress={() => Alert.alert('Book not found', 'Try later. Thanks')}>
      <Image source={item.image} style={styles.image} resizeMode="cover" />
      <Text style={styles.cardText}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Header with Back Button and Heading */}
      <View style={styles.headerRow}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require('../assets/images/backerrow.png')}
            style={styles.backIcon}
          />
        </TouchableOpacity>
        <Text style={styles.heading}>Books</Text>
      </View>

      <Text style={styles.subHeading}>Immerse yourself in interactive learning.</Text>

      {/* Search Input */}
      <TextInput
        style={styles.input}
        placeholder="Search book..."
        value={search}
        onChangeText={setSearch}
      />

      {/* No Book Found Message */}
      {search.length > 0 && (
        <Text style={styles.noBook}>No book found</Text>
      )}

      {/* List of Books / Items */}
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 10,
    backgroundColor: 'white',
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  backIcon: {
    width: 30,
    height: 25,
  },
  heading: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333',
    marginLeft: 10,
  },
  subHeading: {
    fontSize: 16,
    color: 'black',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
  },
  noBook: {
    fontSize: 18,
    color: 'red',
    textAlign: 'center',
    marginBottom: 10,
  },
  list: {
    paddingBottom: 20,
  },
  card: {
    backgroundColor: '#f0f0f0',
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  cardText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default BookScreen;
