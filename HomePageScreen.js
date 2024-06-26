import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useState, useEffect } from 'react';
import SQLite from 'react-native-sqlite-storage';
import { Platform } from 'react-native';






const HomePageScreen = ({ navigation }) => {

  const [recipes, setRecipes] = useState([]);


  const handleNavigation = (routeName) => {
    navigation.navigate(routeName);
  };

  const handleButton1Press = () => {
    // Add logic for button 1 press
  };

  const handleButton2Press = () => {
    // Add logic for button 2 press
  };

  const handleButton3Press = () => {
    // Add logic for button 3 press
  };

  const handleButton4Press = () => {
    // Add logic for button 4 press
  };

  //CREATE DATABASE
 // Function to retrieve recipes from the database
 const getRecipes = () => {
  const db = SQLite.openDatabase({ name: 'budgetbite.db', createFromLocation: '~budgetbite.db' });
  db.transaction(tx => {
    tx.executeSql(
      'SELECT * FROM Recipe',
      [],
      (_, { rows }) => {
        const recipesArray = rows._array;
        setRecipes(recipesArray);
      },
      error => {
        console.error('Error fetching recipes:', error);
      }
    );
  });
};

useEffect(() => {
  // Initialize database and add a hardcoded recipe
  const initializeDatabase = async () => {
    let dbFilePath;
    if (Platform.OS === 'android') {
      dbFilePath = 'budgetbite.db';
    } else if (Platform.OS === 'ios') {
      dbFilePath = SQLite.MAIN_BUNDLE_PATH + 'budgetbites/assets/budgetbite.db';
    }

    try {
      await SQLite.copyDatabaseFile(dbFilePath, SQLite.DATABASE_LOCATION_DEFAULT);
    } catch (error) {
     
      return;
    }

    // Open the database
    const db = SQLite.openDatabase({ name: 'budgetbite.db', createFromLocation: 1 });

      
    // Create tables)
    db.transaction(tx => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS Recipe (id INTEGER PRIMARY KEY AUTOINCREMENT, recipe TEXT)',
        [],
        () => {
          // Recipe table created successfully
        },
        error => {
          // Handle error creating Recipe table
          console.error('Error creating Recipe table:', error);
        }
      );
    });

    // Add hardcoded recipe
    db.transaction(tx => {
      tx.executeSql(
        'INSERT INTO Recipe (recipe) VALUES (?)',
        ['Your hardcoded recipe text here'],
        (_, { insertId }) => {
          console.log('Recipe inserted successfully. Recipe ID:', insertId);
          // After adding the recipe, retrieve all recipes from the database
          getRecipes();
        },
        error => {
          console.error('Error inserting recipe:', error);
        }
      );
    });

    return () => {
      db.close();
    };
  };

  initializeDatabase();
}, []);

 
  
  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <Text style={styles.welcomeText}>Welcome back!</Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => handleNavigation('Button1Screen')}>
          <Text style={styles.buttonText}>Budget Guru {"\n"}Stick to your budget with our shopping planner</Text>
          <Icon name="arrow-right" size={20} color="black" style={styles.buttonIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleNavigation('RecipeOfTheWeek')}>
        <Text style={styles.buttonText}>Our top budget-friendly recipe of the week: {"\n"}Creamy pesto & kale pasta</Text>
        <Icon name="arrow-right" size={20} color="black" style={styles.buttonIcon} />
        </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={() => handleNavigation('Button3Screen')}>
                <Text style={styles.buttonText}>BargainBites@gmail.com{"\n"}@BargainBites{"\n"}07123456780</Text>
              </TouchableOpacity>
            </View>

            <Text style={styles.additionalText}>
              Get personalised meal plans and shopping lists that suit your budget without sacrificing taste
            </Text>


      {/* images */}
      <View style={styles.bottomImagesContainer}>
          <Image
            source={require('./assets/cspa.jpg')}
            style={styles.bottomImage}
          />
          <Image
            source={require('./assets/age.png')}
            style={styles.bottomImage}
          />
        </View>

            <View style={styles.bottomNavBar}>
            <TouchableOpacity style={styles.navBarButton} onPress={() => handleNavigation('HomeScreen')}>
        <Icon name="home" size={24} color="black" />
        <Text style={styles.navBarText}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navBarButton} onPress={() => handleNavigation('ShoppingScreen')}>
        <Icon name="shopping-cart" size={24} color="black" />
        <Text style={styles.navBarText}>Shopping</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navBarButton} onPress={() => handleNavigation('Favorite')}>
        <Icon name="heart" size={24} color="black" />
        <Text style={styles.navBarText}>Favorites</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navBarButton} onPress={() => handleNavigation('ProfileScreen')}>
        <Icon name="user" size={24} color="black" />
        <Text style={styles.navBarText}>Profile</Text>
      </TouchableOpacity>


      



      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  topSection: {
    alignItems: 'center',
    paddingVertical: 30,
  },
  welcomeText: {
    fontSize: 24,
    marginBottom: 5,
  },
  subText: {
    fontSize: 25,
    color: 'gray',
  },
  buttonContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#DDDDDD',
    width: 370,
    height: 75,
    padding: 10,
    margin: 20,
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-between', 
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    textAlign: 'left',
  },
  buttonIcon: {
  
  
  },

  additionalText: {
    marginTop: 20,
    fontSize: 17,
    textAlign: 'center',
  },
  bottomNavBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    height: 110,
    backgroundColor: '#eee',
    position: 'absolute',
    bottom: 0,
  },
  navBarButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  navBarText: {
    fontSize: 12,
    marginTop: 2,
  },

  bottomImagesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    paddingVertical: 5, 
    backgroundColor: 'white',
    marginBottom: 400 
  },

 
  bottomImage: {
    width: 200,
    height: 200,
    resizeMode: 'contain', 
   
  },

  
  
});

export default HomePageScreen;
