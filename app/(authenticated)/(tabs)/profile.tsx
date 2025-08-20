import { renderInfo } from '@/actions/render-info';
import { myAction } from '@/actions/server-action';
import { AuthContext } from '@/provider/AuthProvider';
import React, { Suspense, use, useState } from 'react';
import { ActivityIndicator, Button, StyleSheet, Text, View } from 'react-native';

export default function profile() {
    const { logout } = use(AuthContext);
    const [counter, setCounter] = useState(0);

    const onButtonActionPressed = async () => {
        const newCounter = await myAction(counter);
        setCounter(newCounter);
    }
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Button title='Call action' onPress={onButtonActionPressed} />
            <Text>{counter}</Text>
            <Button title='Logout' onPress={logout} />

            <Suspense fallback={<ActivityIndicator />}>
                {renderInfo({ name: 'Motamad' })}
            </Suspense>
        </View>
    )
}

const styles = StyleSheet.create({})