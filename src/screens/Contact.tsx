import React, { useEffect, useState } from 'react';
import {View, Text, FlatList, Dimensions} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as Contacts from 'expo-contacts';

const Contact = () => {
  const [contacts, setContacts] = useState<Contacts.Contact[]>([]);
  useEffect(() => {
    (async () => {
      const { status } = await Contacts.requestPermissionsAsync();
      if (status === 'granted') {
        const { data } = await Contacts.getContactsAsync({
          fields: [Contacts.Fields.FirstName, Contacts.Fields.LastName, Contacts.Fields.Emails],
        });

        if (data.length > 0) {
          setContacts(data)
        }
      }
    })();
  }, []);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#f8f8f8'
      }}
    >
      <View
        style={{
          marginBottom: '5%',
          backgroundColor: '#f8f8f8',
          flex: 1
        }}
      >
        <Text style={{fontSize: 18, fontWeight: '500', textAlign: 'center', textTransform: 'uppercase'}}>Contacts</Text>
        <View
        style={{
          backgroundColor: '#f8f8f8',
          paddingHorizontal: '5%',
          marginTop: '10%',
          height: Dimensions.get('screen').height
        }}
      >
        <FlatList
          data={contacts}
          renderItem={({ item, index }) => (
            <View style={{height: 60, width: '100%', backgroundColor: '#DFDEFF', marginVertical: 5, flexDirection: 'column', paddingHorizontal: 10, paddingVertical: 5}} key={index}>
              <Text style={{fontSize: 16}}>{item.firstName} {item.lastName}</Text>
              <Text style={{fontSize: 13, marginTop: 5}}>{item.emails ? item.emails[0].email : 'n/a'}</Text>
            </View>
          )}
          keyExtractor={item => item.id}
        />
      </View>
      </View>
    </SafeAreaView>
  );
}

export default Contact;
