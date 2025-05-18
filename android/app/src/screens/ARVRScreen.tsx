import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Image,
  Alert, // 👈 Import Alert
} from 'react-native';

const DATA = [
  {
    id: '1',
    title: 'Apple is round and can be red, green, or yellow. It is sweet and crunchy. Apples help you stay strong, clean your teeth, and give you lots of energy to play.',
    image: require('../assets/images/apple.png'),
  },
  {
    id: '2',
    title: 'Watermelon is big and green outside, red and juicy inside. It has lots of water, so it keeps you cool and not thirsty. Watermelon is sweet and fun to eat in summer.',
    image: require('../assets/images/watermelon.png'),
  },
  {
    id: '3',
    title: 'Banana is yellow and soft inside. It is easy to eat and gives you quick energy. Bananas help your muscles and help you run and jump better.',
    image: require('../assets/images/banana.png'),
  },
  {
    id: '4',
    title: 'Strawberry is small, red, and shaped like a heart. It is sweet and juicy. Strawberries help you not get sick and keep your skin soft and nice.',
    image: require('../assets/images/strawberry.png'),
  },
  {
    id: '5',
    title: 'Orange is round and orange! It has juice inside that is good for you. Oranges help you stay healthy and stop colds from coming.',
    image: require('../assets/images/orange.png'),
  },
];

const Fruits = ({ navigation }: { navigation: any }) => {
  const renderItem = ({ item }: any) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => Alert.alert('Model not found', 'Try later. Thanks')} // 👈 Alert on press
    >
      <Image source={item.image} style={styles.image} resizeMode="cover" />
      <Text style={styles.cardText}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require('../assets/images/backerrow.png')}
            style={styles.backIcon}
          />
        </TouchableOpacity>
        <Text style={styles.heading}>Fruits</Text>
      </View>

      <Text style={styles.subHeading}>Immerse yourself in interactive learning.</Text>

      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

// ...styles remain unchanged...



const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 5,
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
  list: {
    paddingBottom: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 12,
    marginBottom: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
    flexDirection: 'column',
    alignItems: 'center',
  },
  image: {
    width: 400,
    height: 400,
    borderRadius: 8,
    marginBottom: 10,
  },
  cardText: {
    fontSize: 20,
    color: 'black',
    textAlign: 'center',
    fontWeight:'bold',
  },
});

export default Fruits;
