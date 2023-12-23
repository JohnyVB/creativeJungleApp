import React from 'react'
import { FlatList, View } from 'react-native'
import { useStore } from '../hooks/useStore'
import { SupplierCard } from '../components/SupplierCard'

export const SupplierPage = () => {

    const { suppliers } = useStore()

    return (
        <View style={{
            alignItems: 'center'
        }}>
            <FlatList
                data={suppliers}
                keyExtractor={supp => supp.id}
                renderItem={({ item }) => <SupplierCard supplier={item} />}
                showsVerticalScrollIndicator={false}
                numColumns={2}
            />
        </View>
    )
}
