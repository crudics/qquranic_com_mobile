import React, {useState} from 'react';
import { View, Text, StyleSheet, StatusBar, Image } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import { Button, TextInput,   } from 'react-native-paper';
import { Picker } from '@react-native-picker/picker';

const Purchase = ({navigation}) => {

  const { colors } = useTheme();
  const theme = useTheme();
  
  const [text, setText] = React.useState('');

  const [country, setCountry] = useState('');

    return (
      <View style={styles.container}>
      <ScrollView>
        <StatusBar barStyle= { theme.dark ? "light-content" : "dark-content" }/>
        
          <View>

            <View style={{alignContent: 'center', justifyContent: 'center'}}>
              <Image style={{alignSelf: 'center', marginBottom: '-5%'}} source={require('./atmCards.png')} />
            </View>

            <View>
              <Text style={{textAlign: 'center'}}>We accept these cards.</Text>
            </View>
            <View style={{flexDirection: 'row', alignContent: 'center', justifyContent: 'center'}}>
              <Text>Don't have one.</Text>
              <Button style={{marginTop: '-3%', marginLeft: '-6%'}} onPress={() => navigation.navigate('Contact Us')}>
              <Text style={{textAlign: 'center'}}> Contact us?</Text>
              </Button>
            </View>

            <View style={styles.paymentForm}>
              <View style={{flexDirection: 'row', alignContent: 'center', justifyContent: 'center'}}>
                <TextInput style={{width: '48.7%'}}
                  label="First Name"
                  mode= "flat"
                  value={text}
                  onChangeText={text => setText(text)}
                />
                <TextInput style={{width: '48.7%', marginLeft: '2%'}}
                  label="Last Name"
                  mode= "flat"
                  value={text}
                  onChangeText={text => setText(text)}
                />
              </View>
              <TextInput 
                label="Email"
                mode="flat"
                value={text}
                onChangeText={text => setText(text)}
              />
              <TextInput 
                label="Billing Address"
                mode="flat"
                value={text}
                onChangeText={text => setText(text)}
              />
              <TextInput 
                label="City"
                mode="flat"
                value={text}
                onChangeText={text => setText(text)}
              />
              <TextInput 
                label="State"
                mode="flat"
                value={text}
                onChangeText={text => setText(text)}
              />
              <TextInput 
                label="Zip Code"
                mode="flat"
                value={text}
                onChangeText={text => setText(text)}
              />
              <Text style={{padding: '1%'}}>Country</Text>
              <Picker
                selectedValue={country}
                onValueChange={(itemValue, itemIndex) =>
                  setCountry(itemValue)
                }>
                <Picker.Item label="Select Country" value="Select Country" />  
                <Picker.Item label="Pakistan" value="Pakistan" />
                <Picker.Item label="India" value="India" />
                <Picker.Item label="Saudi Arab" value="Saudi Arab" />
                <Picker.Item label="Dubai" value="Dubai" />
                <Picker.Item label="Kuwait" value="Kuwait" />
                <Picker.Item label="Oman" value="Oman" />
                <Picker.Item label="Qatar" value="Qatar" />
                <Picker.Item label="Bahrain" value="Bahrain" />
                <Picker.Item label="US" value="US" />
                <Picker.Item label="UK" value="UK" />
                <Picker.Item label="Malaysia" value="Malaysia" />
                <Picker.Item label="Australia" value="Australia" />
              </Picker>
            </View>

          </View>

      </ScrollView>
      </View>
    );
};

export default Purchase;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
  paymentForm: {
    width: '98%'
  }
});
