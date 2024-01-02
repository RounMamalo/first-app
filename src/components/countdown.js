import React, {useState, useEffect} from "react";
import { Text, View, StyleSheet } from "react-native";
import { fontSize, paddingSize } from "../utils.js/sizes";
// Mostly this component is mainly about the logic, how the timer of the application will run 
// ====== Creating the Timer (Start) ======

const minutesToMillis = (min) => min * 1000 * 60 //To convert minutes to Milliseconds to calculate the minutes and seconds; An outside function
const timeFormat = (time) => time < 10 ? `0${time}` : time; //To format the time properly so that if it is less than 10  it'll look like this 11:09 ano not look like this 11:9

//Since this is just a component and is not the main npm start, it does not need `default` when exporting
export const Countdown = ({
    minutes = 0.1, /**
        When accepting arguments, parameters for the components store them within a curly braces: {*insert additional components*}
     */
    isPaused,
    onProgress
}) => {
    /**
     * Creating the countdown feature which will run when countdown.js is called (START) !!IMPORTANT
     */
    const interval = React.useRef(null)

    const countDown = () => {
        setMills((time) => {
            if(time === 0){
                return time
            }
            const timeLeft = time - 1000

            onProgress (timeLeft / minutesToMillis(minutes)) //It will call the onProgresss props referencing a function in timer in which it will return the value decreased to less than 1
            return timeLeft;
            }
        )
    }

    useEffect(() => {
        if(isPaused){
            return;
        }
        interval.current = setInterval(countDown, 1000);
        return () => clearInterval(interval.current)
    }, [isPaused]) 

    /**
     * Creating the countdown feature which will run when countdown.js is called (END)
     */


    const [millis, setMills] = useState(minutesToMillis(minutes)) //Storing the converted minutes into millisecond using a useState so it can be dynamic and easy to change value just by calling setMills
    const minute = Math.floor(millis / 1000 /60) % 60; //Formula for calculating the minute of a millisecond
    const seconds = Math.floor(millis/1000) % 60; //Formula for calculating a second of a millisecond

    return (
        <View style = {styles.timerContainer}>
            <Text style={styles.title}>{timeFormat(minute)}:{timeFormat(seconds)}</Text>
        </View>
    )

}

const styles =  StyleSheet.create({
    title : {
        fontSize: fontSize.xxl,
        color: 'white',
        fontWeight: 'bold'
    },
    timerContainer : {
        backgroundColor: 'rgba(255,255,255,0.4)',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: paddingSize.md
    }
})