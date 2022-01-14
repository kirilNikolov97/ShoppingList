import React, {useState} from 'react';
import {View, StyleSheet, FlatList, Alert, Button, TouchableOpacity, Text} from 'react-native';


import ListItem from '../components/ListItem';
import AddItem from '../components/AddItem';

const Edit = props => {
  const [items, setItems] = useState([
    {
      id: Math.random(),
      text: 'Milk',
    },
    {
      id: Math.random(),
      text: 'Eggs',
    },
    {
      id: Math.random(),
      text: 'Bread',
    },
    {
      id: Math.random(),
      text: 'Juice',
    },
  ]);

  const deleteItem = id => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id !== id);
    });
  };
  
  const addItem = text => {
    if (!text) {
      Alert.alert(
        'No item entered',
        'Please enter an item when adding to your shopping list',
        [
          {
            text: 'Understood',
            style: 'cancel',
          },
        ],
        {cancelable: true},
      );
    } else {
      setItems(prevItems => {
        return [{id: Math.random(), text}, ...prevItems];
      });
    }
  };


  return (
      <View>
        <AddItem addItem={addItem} />
        <FlatList
          data={items}
          renderItem={({item}) => (
            <ListItem
              item={item}
              deleteItem={deleteItem}
            />
          )}
        />
        <TouchableOpacity style={styles.button} onPress={() => props.changeScreenParam('1')}>
          <Text style={styles.backText} >Back</Text>
        </TouchableOpacity>
      </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: 'darkslateblue',
    fontSize: 23,
    textAlign: 'center',
  },
  backText: {
    color: 'darkslateblue',
    textAlign: 'center',
  },
  button: {
    color: 'darkslateblue',
    padding: 9,
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
  }
});

export default Edit;