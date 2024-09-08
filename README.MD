```base
import React from 'react';
import { View, Button, Alert, StyleSheet } from 'react-native';
import LogAlert from 'log-react-native';

const App = () => {
  const showCustomAlert = () => {
    LogAlert.show('This is a custom alert!', '#ff5733', '#ffffff');
  };

  return (
    <View style={styles.container}>
      <Button title="Show Alert" onPress={showCustomAlert} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
});

export default App;
```
