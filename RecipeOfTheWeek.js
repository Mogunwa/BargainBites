import React from 'react';
import { ScrollView, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';

const RecipeOfTheWeekScreen = () => {
  const addToFavorites = () => {
    // You can implement your logic here to add the recipe to favorites
    Alert.alert('Recipe Added', 'The recipe has been added to your favorites!');
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Creamy Pesto & Kale Pasta</Text>
      <Text style={styles.ingredients}>
        <Text style={styles.boldText}>Ingredients and Tips:</Text>
        {"\n"} <Text style={styles.boldText}>Pasta:</Text> Penne or rigatoni (dried pasta is most economical)
        {"\n"} <Text style={styles.boldText}>Kale:</Text> Lacinato or curly green kale
        {"\n"} <Text style={styles.boldText}>Pesto:</Text> Make homemade using budget items like basil, garlic, olive oil, parmesan, pine nuts
        {"\n"} <Text style={styles.boldText}>Cream/Milk:</Text> Canned coconut milk, powdered milk, or regular milk
        {"\n"} <Text style={styles.boldText}>Vegetable Broth:</Text> Low sodium broth or bouillon
        {"\n"} <Text style={styles.boldText}>Onion and/or Garlic:</Text> Buy in bulk when on sale
        {"\n"} <Text style={styles.boldText}>Lemon:</Text> Adds brightness for serving
        {"\n"} <Text style={styles.boldText}>Parmesan Cheese:</Text> Buy grated or grate your own block
        {"\n"} <Text style={styles.boldText}>Butter/Oil:</Text> Look for sales or use olive oil
        {"\n"} <Text style={styles.boldText}>Herbs/Spices:</Text> Dried and generic brands save costs
        {"\n"} <Text style={styles.boldText}>Chicken/Protein:</Text> Use affordable thighs or leave out for vegetarian
      </Text>
      <TouchableOpacity style={styles.button} onPress={addToFavorites}>
        <Text style={styles.buttonText}>Add to Favorites</Text>
      </TouchableOpacity>
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
    lineHeight: 25,
  },
  boldText: {
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#ccc',
    borderRadius: 20,
    paddingVertical: 15,
    paddingHorizontal: 30,
    marginTop: 20,
    alignSelf: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default RecipeOfTheWeekScreen;
