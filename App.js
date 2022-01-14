import React, {useState} from 'react';
import {View, StyleSheet, FlatList, Alert} from 'react-native';

import Header from './components/Header';
import EditScreen from './screens/Edit';
import WelcomeScreen from './screens/Welcome';


const App = () => {
  const [isOnWelcomeScreen, setIsOnWelcomeScren] = useState('1');

  const changeScreen = changeIsOnWelcomeScreen => {
    setIsOnWelcomeScren(changeIsOnWelcomeScreen);
  }

  let content = <WelcomeScreen changeScreenParam={changeScreen} />;

  if (isOnWelcomeScreen !== '1') {
    content = <EditScreen changeScreenParam={changeScreen}/>
  }

  return (
    <View style={styles.container}>
        <Header title="Shopping List" />
        {content}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;