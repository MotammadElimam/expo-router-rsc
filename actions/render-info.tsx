'use-server';

import { Text } from "react-native";

export async function renderInfo({ name }: { name: string }) {
    console.log('my render info:', name);
    return <Text style={{ fontSize: 20, fontWeight: "bold" }}>Hello {name}</Text>
}