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
    title: 'Cabbage is a big, round, green or purple vegetable with lots of leaves. It helps you stay strong and not get sick. It keeps your tummy happy and helps your body feel good.',
    image: require('../assets/images/cabbage.png'),
  },
  {
    id: '2',
    title: 'Carrot is orange and crunchy. It helps you see better, especially at night. Carrots also help your skin look nice and make your body strong and healthy.',
    image: require('../assets/images/carrot.png'),
  },
  {
    id: '3',
    title: 'Pepper can be red, green, yellow, or orange. It is sweet and yummy. Peppers help your eyes and help you feel full of energy.',
    image: require('../assets/images/pepper.png'),
  },
  {
    id: '4',
    title: 'Cucumber is green and full of water. It keeps you cool and helps you not feel thirsty. Cucumbers are good for your skin and help your tummy feel good too.',
    image: require('../assets/images/cucumber.png'),
  },
   {
    id: '5',
    title: 'Tomato is red and juicy. It is good for your heart and skin. Tomatoes help you stay healthy and give you lots of strength.',
    image: require('../assets/images/tomato.png'),
  },

];

const Vegetables = ({ navigation }: { navigation: any }) => {
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
        <Text style={styles.heading}>Vegetables</Text>
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

export default Vegetables;
