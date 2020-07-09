import React from 'react';
import { StyleSheet, Text, TextInput } from 'react-native';

export default function Questions({ Qs}) {
    return(
        <Text style={styles.item}>{Qs.text}=</Text>
    )
}

const styles = StyleSheet.create({
    item: {
        padding: 16,
        marginTop: 16,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 10 
    }
})