import { Stack } from 'expo-router';
import React from 'react';
import { StyleSheet } from 'react-native';

export const unstable_settings = {
    anchor: '(tabs)'
}

export default function _layout() {
    return (
        <Stack>
            <Stack.Screen name='(tabs)' options={{ headerShown: false }} />
            <Stack.Screen name='(modal)/news' options={{ presentation: "modal" }} />
            <Stack.Screen name='(modal)/sheet' options={{
                presentation: "formSheet",
                sheetAllowedDetents: [0.3, 0.6, 1],
                animation: "slide_from_bottom",
                sheetExpandsWhenScrolledToEdge: true,
                sheetGrabberVisible: true,
                sheetCornerRadius: 20,
                headerShown: false,
                contentStyle: { backgroundColor: "blue" },
                sheetInitialDetentIndex: 1
            }} />
        </Stack>
    )
}

const styles = StyleSheet.create({})