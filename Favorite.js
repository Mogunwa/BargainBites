import React from 'react';
import { ScrollView, Text, View, StyleSheet, TouchableOpacity, Alert } from 'react-native';

const Favorite = () => {
  const addToFavorites = () => {
    // You can implement your logic here to add the recipe to favorites
    Alert.alert('Recipe Added', 'The recipe has been added to your favorites!');
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>My Favorites</Text>

   
     
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    backgroundColor: 'white',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  ingredients: {
    fontSize: 16,
    lineHeight:35,
  },
  button: {
    backgroundColor: '#ccc', // Grey color
    borderRadius: 20, // Rounded shape
    paddingVertical: 15,
    paddingHorizontal:15,
    marginTop: 35,
  },
  buttonText: {
    fontSize: 16,
    color: 'black', // White text color
    textAlign: 'center',
    fontWeight: 'bold'
  },
});

export default Favorite;
