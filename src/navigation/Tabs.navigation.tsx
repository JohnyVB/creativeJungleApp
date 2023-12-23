import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ProductPage } from '../pages/ProductPage';
import { SupplierPage } from '../pages/SupplierPage';
import { Ionicons } from '@expo/vector-icons';
import { AddPage } from '../pages/AddPage';


const Tab = createBottomTabNavigator();

export const Tabs = () => {
    return (
        <Tab.Navigator initialRouteName='Products' screenOptions={{
            tabBarLabelStyle: {
                fontSize: 15
            },
            tabBarActiveTintColor: 'red'
        }}>
            <Tab.Screen name="Products" options={{ tabBarIcon: (props) => <Ionicons name='pricetags-outline' size={22} color={props.color} /> }} component={ProductPage} />
            <Tab.Screen name="Suppliers" options={{ tabBarIcon: (props) => <Ionicons name='people-circle-outline' size={22} color={props.color} /> }} component={SupplierPage} />
            <Tab.Screen name="Add" options={{ tabBarIcon: (props) => <Ionicons name='add-circle-outline' size={22} color={props.color} /> }} component={AddPage} />
        </Tab.Navigator>
    );
}