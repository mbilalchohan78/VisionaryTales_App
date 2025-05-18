import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Image,
  Alert,
} from 'react-native';

const DATA = [
  {
    id: '1',
    title: 'Explore the Solar System starting from the center — the Sun. It is a massive ball of hot gases and the primary source of energy for all planets.',
    image: require('../assets/images/sun.png'),
  },
  {
    id: '2',
    title: 'Our home planet, Earth is the only known world with life, water, and a breathable atmosphere.',
    image: require('../assets/images/earth.png'),
  },
  {
    id: '3',
    title: 'Often called the Red Planet, Mars is a dusty, cold desert world with signs of ancient water flows.',
    image: require('../assets/images/mars.png'),
  },
  {
    id: '4',
    title: 'The largest planet in the solar system, Jupiter is a gas giant with powerful storms — including the famous Great Red Spot.',
    image: require('../assets/images/jupiter.png'),
  },
   {
    id: '5',
    title: 'Famous for its stunning ring system, Saturn is another gas giant made mostly of hydrogen and helium.',
    image: require('../assets/images/saturn.png'),
  },
   {
    id: '6',
    title: 'Known as Earth’s twin due to its size, Venus has a thick, toxic atmosphere and surface temperatures hot enough to melt lead',
    image: require('../assets/images/venus.png'),
  },
  {
    id: '7',
    title: 'The farthest known planet from the Sun, Neptune is a deep blue, windy world with supersonic winds.',
    image: require('../assets/images/neptune.png'),
  },
   {
    id: '8',
    title: 'A cold, icy giant with a bluish color caused by methane in its atmosphere, Uranus rotates on its side.',
    image: require('../assets/images/uranus.png'),
  },
    {
    id: '9',
    title: 'The closest planet to the Sun, Mercury is a rocky and extremely hot planet with no atmosphere.',
    image: require('../assets/images/mercury.png'),
  },
];

const Others = ({ navigation }: { navigation: any }) => {
  const renderItem = ({ item }: any) => (
    <TouchableOpacity
     style={styles.card}
     onPress={() => Alert.alert('Model not found', 'Try later. Thanks')}
     >
      
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
        <Text style={styles.heading}>Others</Text>
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

export default Others;
