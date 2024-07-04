import React, { useState, useEffect } from 'react';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, FlatList, SafeAreaView } from 'react-native';

//import components
import CustomTextInput from './components/CustomInput';
import CustomButton from './components/CustomButton';
import NameCard from './components/NameCard';

export default function App() {
  const [name, setName] = useState('');
  const [id, setId] = useState(null)
  const [names, setNames] = useState([
    { id: 0, name: 'Gladiolus Amicitia' },
    { id: 1, name: 'Kento Nanami' },
    { id: 2, name: 'Sebastian Stan' },
  ])

  const addNewName = () => {
    const new_id = names.length !== 0 ? names.length + 1 : 0;
    const new_name = { id: new_id, name: name }

    setNames([...names, new_name])
  };

  const onRemoveItem = (id) => {
    setNames(names.filter((item) => item.id !== id));
  };

  const onUpdateItem = () => {
    setNames(names.map((item) => (item.id === id ? { ...item, name: name } : item)));
    setId(null);
    setName('');
  };

  const onPressUpdate = (id, name) => {
    setName(name);
    setId(id);
  }

  const keyExtractor = (item, index) => index.toString();

  const renderName = ({ item }) => (
    <NameCard
      name={item.name}
      onEdit={() => onPressUpdate(item.id, item.name)}
      onRemove={() => onRemoveItem(item.id)}
    />
  )

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.main}>
        <View style={styles.inputContainer}>
          <CustomTextInput
            value={name}
            onChangeText={setName} />
          <CustomButton
            title={id !== null ?  'Save' : '+ Add'}
            color={id !== null ?  '#F7942B' : '#33aad1'}
            onPress={id !== null ? onUpdateItem : addNewName}
          />
        </View>

        <View style={{ marginVertical: 20 }}>
          <FlatList
            data={names}
            keyExtractor={keyExtractor}
            renderItem={renderName}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  main: {
    marginVertical: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
  }
});
