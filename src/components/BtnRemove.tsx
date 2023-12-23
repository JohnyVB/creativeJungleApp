import React from 'react';
import { useStore } from '../hooks/useStore';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, TouchableOpacity } from 'react-native';

interface Props {
    id: string,
    supplier: boolean
}

export const BtnRemove = ({ id, supplier }: Props) => {

    const { removeProd, removeSupp } = useStore();

    return (
        <TouchableOpacity style={styles.BtnRemove} activeOpacity={0.8} onPress={() => supplier ? removeSupp(id) : removeProd(id)}>
            <Ionicons name='close-outline' size={20} color={'white'} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    BtnRemove: {
        backgroundColor: 'red',
        borderRadius: 2,
        position: 'absolute',
        top: -10,
        right: -10
    },
    iconRemove: {
        color: 'white'
    }
});
