import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, SectionList, FlatList, RefreshControl, TextInput, ProgressBar } from 'react-native';
import { RoundBtn } from './roundedbtn';
import { fontSize, paddingSize, marginSize } from '../utils.js/sizes';
import { Countdown } from './countdown';

export const Timer = ({
    userInput,
    ...props
}) => {
    
    const [isStarted, setIsStarted] = useState(false);
    const [progress, setProgress] = useState(1)

    const onProgress = (progress) => {
        setProgress(progress)
    }
    return(
        <View style = {styles.container}>
            <Countdown isPaused={!isStarted} onProgress = {onProgress} />

            <Text style={styles.title}>Current Task:</Text>
            <Text style={styles.task}>{userInput}</Text>


        <View style={{marginTop: marginSize.lg, width: '100%'}}>
                <ProgressBar 
                    progress = {progress}
                    color='#5E84E2'
                    style = {{height: 10}}            
                />
        </View>

            <View style={styles.btnContainer}>
                {/**
                 * Setting the value of `isStarted` to start countdown
                 */}

                 {/**
                  * If isStarted is true then show pause button if false show start button
                  */}
                  
                  {isStarted ? (
                    <RoundBtn title="pause" size={50} onPress={() => setIsStarted(false)} />
                  ) :(
                    <RoundBtn title="start" size={50} onPress={() => setIsStarted(true)} />
                  )
                }
                
                
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    title :{
        fontSize: fontSize.xl,
        color: 'white',
    },
    task : {
        color: 'white',
        fontSize: fontSize.lg
    },
    btnContainer: {
        marginTop: marginSize.lg,
        flexDirection: 'row'
    }
})
