import React, { useEffect, useCallback } from 'react';
import { View, Alert, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { checkPackage } from 'react-native-android-appcheck';

const App: React.FunctionComponent = () => {
  const testAppChecker = useCallback(
    (packageName) => async () => {
      try {
        const isInstalled = await checkPackage(packageName)
        Alert.alert(`${packageName} installed?`, `${isInstalled}`);
      } catch (e) {
        Alert.alert('Error', e?.message || 'Unknown error');
      }
    },
    []
  );

  return (
    <View style={styles.container}>
      <Text style={{ textAlign: 'center' }}>react-native-android-appcheck example</Text>
      <TouchableOpacity>
        <Text style={styles.button} onPress={testAppChecker('com.apple.android.music')}>
          Check for Apple Music
        </Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.button} onPress={testAppChecker('com.ubercab')}>
          Check for Uber
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: { flex: 1, marginTop: 50, marginBottom: 50, justifyContent: 'space-around' },
  button: { fontWeight: 'bold', textAlign: 'center', padding: 10 },
});
