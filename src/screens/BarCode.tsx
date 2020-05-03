import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, Dimensions } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function BarCode() {
  const [hasPermission, setHasPermission] = useState<boolean|null>(null);
  const [scanned, setScanned] = useState<boolean>(false);
  const [details, setDetails] = useState<string>('');

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }: any) => {
    setScanned(true);
    setDetails(data)
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <SafeAreaView
      style={{
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#f8f8f8',
      }}
    >
    <View
      style={{
        marginBottom: '5%',
        backgroundColor: '#f8f8f8',
        flex: 1
      }}
    >
        <Text style={{fontSize: 18, fontWeight: '500', textAlign: 'center', textTransform: 'uppercase'}}>BarCode Scanner</Text>
        <View
          style={{
            height: '45%',
            marginTop: '20%',
            marginHorizontal: '5%'
          }}
        >
          <BarCodeScanner
            onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
            style={StyleSheet.absoluteFillObject}
          />
        </View>
        {scanned && <Button title={'Click to Scan Again'} color='blue' onPress={() => setScanned(false)} />}
        {
          scanned &&
          <View
          style={{
            height: '100%',
            marginTop: '5%',
            marginHorizontal: '5%'
          }}
        >
          <Text style={{color: '#000', fontSize: 20, marginBottom: '5%'}}>Scanned Data</Text>
          <Text style={{ fontSize: 16, fontWeight: 'bold'}}>{details}</Text>
        </View>
}
    </View>
    </SafeAreaView>
  );
}