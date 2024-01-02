import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, SectionList, FlatList, RefreshControl, TextInput } from 'react-native';
import { RoundBtn } from './roundedbtn';
import { fontSize, paddingSize, marginSize } from '../utils.js/sizes';

export const Focus = ({
  setText
}
) =>{
  
  const [userInp, setUserInp] = useState('Black')
  return (
      <>
      <Text style={styles.heroMess}>
        What are you going to prioritize today?
      </Text>
      
      <View style={styles.mainContainer}> 

        <View style={styles.inputContainer}>

          <TextInput style={styles.inp}
            onChangeText={text => setUserInp(text)}
          />

          <Text>{userInp}</Text>
        </View>

        <View style={styles.btnContainer}> 
          <RoundBtn size={50} title = '+' onPress={() => {setText(userInp)}} />
        </View>

      </View>

      </>

  );
}

const styles = StyleSheet.create({
  inputContainer:{
    borderWidth: 2,
    padding: paddingSize.md,
    marginTop: marginSize.sm,
    backgroundColor: 'white',
    flex: 1
  },
  inp:{
    fontSize: fontSize.md,
  },
  heroMess:{
    fontSize: fontSize.lg,
    color: 'white',
    fontWeight: '600'
  },
  mainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15
  },
  btnContainer:{
    alignItems: "center"
  }
});
