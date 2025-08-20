import { Link } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function index() {
    const [greeting, setGreeting] = useState('');

    useEffect(() => {
        fetchData('Motamad').then((result) => {
            console.log(result);
            setGreeting(result.welcome);
        });
    });

    const fetchData = async (name: string) => {
        const response = await fetch(`/api/welcome?name=${name}`);
        const data = await response.json();
        return data;
    };

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{greeting}</Text>

            <Link href="/(authenticated)/(modal)/news" prefetch asChild>
                <Button title="News" />
            </Link>
            <Link href="/(authenticated)/(modal)/sheet" asChild>
                <Button title="Sheet" />
            </Link>
            <Link href="/admin" asChild>
                <Button title="Open Admin Area" />
            </Link>
        </View>
    )
}

const styles = StyleSheet.create({})