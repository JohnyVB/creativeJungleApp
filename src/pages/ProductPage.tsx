import React from 'react';
import { FlatList, View } from 'react-native';
import { useStore } from '../hooks/useStore';
import { ProductCard } from '../components/ProductCard';

export const ProductPage = () => {

    const { products } = useStore();

    return (
        <View style={{
            alignItems: 'center'
        }}>

            <FlatList
                data={products}
                keyExtractor={prod => prod.id}
                renderItem={({ item }) => <ProductCard product={item} />}
                showsVerticalScrollIndicator={false}
                numColumns={2}
            />

        </View>
    )
}
