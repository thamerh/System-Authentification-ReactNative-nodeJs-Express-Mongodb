import React, { useContext,useState} from 'react';
import {
  Button,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import client from '../config';
import Spinner from 'react-native-loading-spinner-overlay';
import {AuthContext} from '../context/AuthContext.js';
const RegisterScreen = ({navigation}) => {
  const [name, setName] = useState(null); 
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [Confpassword, setConfPassword] = useState(null);
  const {isLoading, register,error} = useContext(AuthContext);
  const image = { uri: "https://img.freepik.com/free-vector/abstract-shiny-grey-technology-background_1035-12620.jpg?w=740&t=st=1667419101~exp=1667419701~hmac=3bbdef34e890179fbe282cbbf64169f4f1d670dcc98086340713541f09d6ac23" };
  
  return (
    <View style={styles.container}>
    <Spinner visible={isLoading} />
     <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <Text style={styles.title}>Sing Up</Text>
      <View style={styles.wrapper}>
        <TextInput
          style={styles.input}
          value={name}
          placeholder="Enter name"
          onChangeText={text => setName(text)}
        />

        <TextInput
          style={styles.input}
          value={email}
          placeholder="Enter email"
          onChangeText={text => setEmail(text)}
        />

        <TextInput
          style={styles.input}
          value={password}
          placeholder="Enter password"
          onChangeText={text => setPassword(text)}
          secureTextEntry
        />

        <TextInput
          style={styles.input}
          value={Confpassword}
          placeholder="confirmer password"
          onChangeText={text => setConfPassword(text)}
          secureTextEntry
        />

        <Button
          title="Register"
          onPress={() => {
            register(name,email,password,Confpassword, navigation);
          }}
        />

        <View style={{flexDirection: 'row', marginTop: 20}}>
          <Text>Already have an accoutn? </Text>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
            <Text style={styles.link}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  image: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center',
  },
  title:{
    fontSize:30,
    fontWeight:'bold',
    paddingBottom:40,
    fontFamily:'sans-serif-condensed'
  },
  wrapper: {
    width: '80%',
  },
  input: {
    padding:5,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  link: {
    color: 'blue',
  },
  button:{
    marginLeft:10,
  }
});

export default RegisterScreen;
