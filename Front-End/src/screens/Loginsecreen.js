import React,{ useState,useContext} from 'react';
import {
  Button,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  View,
  StyleSheet,
} from 'react-native';
import {AuthContext} from '../context/AuthContext';
import UserAvatar from 'react-native-user-avatar';
import Spinner from 'react-native-loading-spinner-overlay';
// const login= async(email, password)=>{
// try {
//   const {data} =  await client.post(
//     '/sign-in',
//     {
//       email,
//       password,
//     },
//     {
//         headers: {
//         'Content-Type': "application/json",
//         'Accept': "application/json",
//         }  
//     }   
//  );
// console.log(data);  
//   if (data.success) {
//     alert("7chineh")
//   }else{
//     alert(data.message)
//   }

//   console.log(res.data);
// } catch (e) {
//   console.log(e);
 
// }
// }

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const {isLoading, login,error} = useContext(AuthContext);
//   const { setIsLoggedIn, setProfile } = useLogin();
// const [userInfo, setUserInfo] = useState({
//   email: '',
//   password: '',
// });

// const [error, setError] = useState('');

// const { email, password } = userInfo;
const image = { uri: "https://img.freepik.com/free-vector/abstract-shiny-grey-technology-background_1035-12620.jpg?w=740&t=st=1667419101~exp=1667419701~hmac=3bbdef34e890179fbe282cbbf64169f4f1d670dcc98086340713541f09d6ac23" };
// const handleOnChangeText = (value, fieldName) => {
//   setUserInfo({ ...userInfo, [fieldName]: value });
// };

// const isValidForm = () => {
//   if (!isValidObjField(userInfo))
//     return updateError('Required all fields!', setError);

//   if (!isValidEmail(email)) return updateError('Invalid email!', setError);

//   if (!password.trim() || password.length < 8)
//     return updateError('Password is too short!', setError);

//   return true;
// };

// const submitForm = async () => {
//   if (isValidForm()) {
//     try {
//       const res = await client.post('/sign-in', { ...userInfo });

//       if (res.data.success) {
//         setUserInfo({ email: '', password: '' });
//         setProfile(res.data.user);
//         setIsLoggedIn(true);
//       }

//       console.log(res.data);
//     } catch (error) {
//       console.log(error);
//     }
//   }
// };
  

  return (
    <View style={styles.container}>
    <Spinner visible={isLoading} />
     <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <UserAvatar size={200} style={styles.avatar}  src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" />
      <View style={styles.wrapper}>
      {error ? (
        <Text style={{ color: 'red', fontSize: 18, textAlign: 'center' }}>
          {error}
        </Text>
      ) : null}
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={text => setEmail(text)}
          label='Email'
          placeholder='example@email.com'
          autoCapitalize='none'
        />

        <TextInput
          style={styles.input}
          value={password}
          onChangeText={text => setPassword(text)}
          label='Password'
          placeholder='********'
          autoCapitalize='none'
          secureTextEntry
        />

        <Button
          title="Login"
          onPress={() => {
            login(email, password);
          }}
        />

        <View style={{flexDirection: 'row', marginTop: 20}}>
          <Text>Don't have an account? </Text>
          <TouchableOpacity style={styles.button}onPress={() => navigation.navigate('Register')}>
            <Text style={styles.link}>Register</Text>
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
  wrapper: {
    width: '80%',
  
  },
  avatar:{
    marginBottom:37,
    backgroundColor:'white',
  },
  input: {
    marginBottom: 12,
    padding:5,
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

export default LoginScreen;
