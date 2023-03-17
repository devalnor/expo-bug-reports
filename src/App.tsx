import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as Updates from 'expo-updates'

export default function App() {
  return (
    <View style={styles.container}>
      <Text>This is app use channel "{Updates.channel || 'Unknow'}" !</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
