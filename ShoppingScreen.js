import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList, Modal, TextInput } from 'react-native';

const shoppingHistoryData = [
  { date: '01/11/2023', amount: '£24.68', store: 'Tesco' },
  { date: '08/11/2023', amount: '£31.22', store: 'Asda' },
  // Can add more shopping history items here...
];

const ShoppingHistoryItem = ({ item }) => (
  <View style={styles.itemContainer}>
    <Text style={styles.itemText}>{`${item.date} - ${item.amount} spent in ${item.store}`}</Text>
  </View>
);

const ShoppingScreen = () => {
  const [shoppingHistory, setShoppingHistory] = useState(shoppingHistoryData);
  const [modalVisible, setModalVisible] = useState(false);
  const [date, setDate] = useState('');
  const [amount, setAmount] = useState('');
  const [store, setStore] = useState('');

  const renderShoppingItem = ({ item }) => <ShoppingHistoryItem item={item} />;

  const handleAddShopping = () => {
    setModalVisible(true);
  };

  const handleSaveShopping = () => {
    if (date && amount && store) {
      const newShoppingItem = { date, amount, store };
      setShoppingHistory([...shoppingHistory, newShoppingItem]);
      setModalVisible(false);
      // Reset input fields
      setDate('');
      setAmount('');
      setStore('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your recent shopping history</Text>
      <FlatList
        data={shoppingHistory}
        renderItem={renderShoppingItem}
        keyExtractor={(item, index) => `shopping-${index}`}
      />
      <TouchableOpacity style={styles.addButton} onPress={handleAddShopping}>
        <Text style={styles.buttonText}>Add new shopping</Text>
      </TouchableOpacity>
      <View style={styles.footer}>
        {/* Footer icons would go here */}
      </View>

      {/* Modal for adding new shopping */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Add New Shopping</Text>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Date:</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter date"
                value={date}
                onChangeText={text => setDate(text)}
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Amount Spent:</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter amount spent"
                value={amount}
                onChangeText={text => setAmount(text)}
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Store:</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter store"
                value={store}
                onChangeText={text => setStore(text)}
              />
            </View>
            <TouchableOpacity style={styles.saveButton} onPress={handleSaveShopping}>
              <Text style={styles.buttonText}>Save</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cancelButton} onPress={() => setModalVisible(false)}>
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  itemContainer: {
    backgroundColor: '#f0f0f0',
    padding: 15,
    borderRadius: 10,
    marginVertical: 8,
  },
  itemText: {
    fontSize: 18,
  },
  addButton: {
    marginBottom: 500,
    backgroundColor: 'black',
    padding: 15,
    borderRadius: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  footer: {
    // Style for the footer icons
    bottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '80%',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  saveButton: {
    backgroundColor: 'black',
    padding: 15,
    borderRadius: 20,
    marginTop: 10,
  },
  cancelButton: {
    backgroundColor: 'gray',
    padding: 15,
    borderRadius: 20,
    marginTop: 10,
  },
});

export default ShoppingScreen;
