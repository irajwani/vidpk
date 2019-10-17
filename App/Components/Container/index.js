import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { Colors } from '../../Theme'

const Container = ({children}) => (
    <View style={styles.container}>
        {children}
    </View>
)

export default Container

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background.primary,
    }
})
