import 'react-native-gesture-handler';
import 'react-native-get-random-values';
import { NavigationContainer } from '@react-navigation/native';
import { Tabs } from './src/navigation/Tabs.navigation';

export default function App() {
  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
}
