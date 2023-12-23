import React from 'react'
import { Dimensions, Text, View, Image, StyleSheet } from 'react-native'
import { Supplier } from '../interfaces/supplier.interface'
import { styles } from './ProductCard'
import { TouchableOpacity } from 'react-native-gesture-handler';

const windowWi = Dimensions.get('window').width;

interface Props {
    supplier: Supplier
}

export const SupplierCard = ({ supplier }: Props) => {
    return (
        <View style={{
            ...styles.cardContainer,
            width: windowWi * 0.4
        }}>
            <View>
                <Text style={styles.name}>{supplier.name}</Text>
                <Text style={styles.subText}>{'#' + supplier.suppCode}</Text>
            </View>
            <Image style={stylesSupp.image} source={require('../../assets/suppliers.png')} />
            <Text style={styles.textDesc}>{supplier.desc}</Text>
        </View>
    )
}

const stylesSupp = StyleSheet.create({
    image: {
        width: 100,
        height: 100,
        right: -47,
        top: -40,
        opacity: 0.4
    }
});
