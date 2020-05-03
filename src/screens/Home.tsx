import React from 'react';
import { View, Text, TouchableWithoutFeedback, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Home = ({ navigation }: any) => {

  const options = [{
    title: 'Barcode Scanner',
    screen: 'BarCode'
  }, {
    title: 'View Contacts',
    screen: 'Contact'
  }];

  const Card = ({ title, screen }: {title: string; screen: string;}) => (
    <TouchableWithoutFeedback onPress={() => navigation.navigate(screen)}>
      <View
        style={{
          width: '100%',
          flexDirection: "row",
          borderTopLeftRadius: 20,
          borderBottomRightRadius: 20,
          backgroundColor: '#fff',
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.1,
          shadowRadius: 1,
          paddingHorizontal: 10,
          marginBottom: '5%',
          height: 70
        }}
      >
        <Text style={{color: '#000', alignSelf: 'center', fontSize: 16, fontWeight: '400'}}>{title}</Text>
      </View>
    </TouchableWithoutFeedback>
  );

  return (
    <SafeAreaView
      style={{
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#5C4DB1'
      }}
    >
      <View
       style={{
         flex: 1,
         marginTop: '20%',
         marginHorizontal: '5%'
       }}
      >
        <View>
          <Text 
            style={{
              fontSize: 24,
              fontWeight: '600',
              marginBottom: '5%',
              textAlign: 'center',
              color: '#fff'
            }}
          >Welcome to BarCon</Text>
          <Text style={{fontSize: 17, color: '#fff', textAlign: 'center'}}>scan barcodes and view contacts</Text>
          <Text style={{fontSize: 16, color: '#fff', marginTop: '5%', fontWeight: 'bold'}}>Select an option</Text>
        </View>
        <View
          style={{marginTop: '5%'}}
        >
          {
            options.map((data, i) => (
              <Card {...data}  key={i} />
            ))
          }
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Home;
