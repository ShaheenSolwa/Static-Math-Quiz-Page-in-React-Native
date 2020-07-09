import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
    return(
        <View style={styles.header}>
            <Text style={styles.title}>QUIZZZ UP</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        height: 80,
        padding: 38,
        backgroundColor: 'coral',
        width: '100%',
    },
    title: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    }
});