import React, { useState } from 'react'
import { Text, View, StyleSheet, Switch } from 'react-native'

export const AddPage = () => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggle = () => setIsEnabled(state => !state);

    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text>Add: {isEnabled ? 'Supplier' : 'Product'}</Text>
            </View>
            <View style={styles.switch}>
                <Switch onValueChange={toggle} value={isEnabled} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 20,
        margin: 10,
        borderRadius: 10,
        flexDirection: 'row'
    },
    titleContainer: {
        flex: 1,
        marginTop: 12
    },
    switch: {
        flex: 1
    }
});
