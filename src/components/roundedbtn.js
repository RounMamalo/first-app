import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, SectionList, FlatList, RefreshControl, TextInput, TouchableOpacity } from 'react-native';
import { paddingSize } from '../utils.js/sizes';

export const RoundBtn = ({
    /**
     * Adding A manual props when calling roundBtn
     */
    style = {},
    textStyle = {},
    size = 100,
    ...props /**Accessing all other props of this roundBtn */
}) => {
    return(
        <TouchableOpacity style={[styles(size).radius, style]}>
            <Text style={[styles(size).text, textStyle]} onPress={props.onPress} >{props.title}</Text>
        </TouchableOpacity>
    );
}

const styles = (size) =>StyleSheet.create({
    radius: {
        borderRadius: size/2,
        width: size,
        height: size,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'white',
        borderWidth: 2,
        padding: paddingSize.xxl 
    },
    text:{
        color: 'white',
        fontSize: size/3,
        alignItems: 'center'
    }
})