import React, { useState } from 'react';
import { Keyboard, Text, View, StyleSheet, Switch, TextInput, TouchableOpacity, ActivityIndicator, Alert } from 'react-native';
import { useForm } from '../hooks/useForm';
import { useStore } from '../hooks/useStore';

export const AddPage = () => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggle = () => setIsEnabled(state => !state);
    const [isCreating, setCreating] = useState(false);
    const { code, name, desc, onChangeForm } = useForm({ code: '', name: '', desc: '' });

    const { addProd, addSupp } = useStore();

    const onCreate = () => {
        Keyboard.dismiss();
        setCreating(true);
        if (isEnabled) {
            addSupp(code, name, desc);
        } else {
            addProd(code, name, desc);
        }
        setCreating(false);
        Alert.alert(
            'ADD',
            'Item created correctly!'
        )
    }

    return (
        <View style={styles.container}>
            <View style={styles.containerTitle}>
                <Text style={styles.title}>Add: {isEnabled ? 'Supplier' : 'Product'}</Text>
                <Switch onValueChange={toggle} value={isEnabled} />
            </View>
            <View>

                <View>
                    <Text style={styles.label}>{isEnabled ? 'SuppCode' : 'ProdCode'}</Text>
                    <TextInput
                        style={styles.inputField}
                        autoCapitalize="words"
                        autoCorrect={false}
                        onChangeText={(value) => onChangeForm(value, 'code')}
                        value={code}
                        onSubmitEditing={onCreate}
                    />
                </View>

                <View>
                    <Text style={styles.label}>Name</Text>
                    <TextInput
                        style={styles.inputField}
                        autoCapitalize="words"
                        autoCorrect={false}
                        onChangeText={(value) => onChangeForm(value, 'name')}
                        value={name}
                        onSubmitEditing={onCreate}
                    />
                </View>

                <View>
                    <Text style={styles.label}>Description</Text>
                    <TextInput
                        style={styles.inputField}
                        autoCapitalize="words"
                        autoCorrect={false}
                        onChangeText={(value) => onChangeForm(value, 'desc')}
                        value={desc}
                        onSubmitEditing={onCreate}
                    />
                </View>

                <TouchableOpacity
                    disabled={isCreating}
                    activeOpacity={0.8}
                    style={styles.btn}
                    onPress={onCreate}
                >
                    {
                        (isCreating)
                            ? <ActivityIndicator size={20} color="white" />
                            : <Text style={styles.btnText}>Create</Text>

                    }

                </TouchableOpacity>


            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 20,
        margin: 10,
        borderRadius: 10,
    },
    containerTitle: {
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 20,
        color: '#3A3E40'
    },
    formContainer: {
        flex: 1,
        marginHorizontal: 30,
        justifyContent: 'center',
        height: 600,
        marginBottom: 110,
        fontSize: 15
    },
    label: {
        marginTop: 25,
        fontWeight: 'bold',
        fontSize: 17,
        color: '#3A3E40'
    },
    inputField: {
        color: '#3A3E40',
        backgroundColor: '#F8F7F7',
        borderRadius: 2,
        opacity: 0.7
    },
    btn: {
        paddingHorizontal: 20,
        paddingVertical: 5,
        borderRadius: 5,
        backgroundColor: '#3B688C',
        marginTop: 10
    },
    btnText: {
        fontSize: 15,
        color: 'white',
        alignSelf: 'center'
    },
});
