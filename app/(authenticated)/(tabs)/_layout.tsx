import { Tabs } from 'expo-router'
import React from 'react'
import { StyleSheet } from 'react-native'

export default function _layout() {
    return (
        <Tabs>
            <Tabs.Screen name='pokemon' />
            <Tabs.Screen name='profile' />
            <Tabs.Screen name='index' />
        </Tabs>
    )
}

const styles = StyleSheet.create({})