
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import addEntry from './components/addCourse.jsx'

export default function App() {
  return (
    <View style={styles.container}>
<addEntry />
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
