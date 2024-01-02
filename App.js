import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, SectionList, FlatList, RefreshControl, TextInput } from 'react-native';
import {Focus} from '../first-app/src/components/focus'
import { Timer } from './src/components/timer';

export default function App() {

  const [textInp, setTextInp] = useState('Studying')
  
  return (
    <SafeAreaView style={styles.container}>  
      <View style={styles.nav}>   
        <Text style={styles.title}>RESTLESS</Text>
      </View>

      <View style={styles.body}>
        {textInp ? (
            <Timer userInput={textInp}/> //If textInp is true or not empty, run this
          ):(   
            <Focus setText={setTextInp} /> //Else If textInp is false or empty, run this
          )
        }
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    alignItems: 'center',
    backgroundColor: '#11009E'
  },
  nav:{
    alignItems: 'center'
  },
  title:{
    fontWeight: 'bold',
    fontSize: 35,
    color: '#EEF5FF'
  },
  body:{
    marginTop: 20,
    padding: 5,
    width: '100%'
  },
  inputContainer:{
    borderWidth: 2,
    padding: 20,
    marginTop: 5,
    backgroundColor: 'white'
  },
  inp:{
    fontSize: 20,
  },
  heroMess:{
    fontSize: 20,
    color: 'white',
    fontWeight: '600'
  }
});
