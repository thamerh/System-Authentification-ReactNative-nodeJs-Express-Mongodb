import React, { createContext, useState,useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import client from '../config'
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [splashLoading, setSplashLoading] = useState(false);
  const [error, setError] = useState('');


  const  register= async(name,email, password,Confpassword, navigation)=>{
    try {
      const {data} =  await client.post(
        '/create-user',
        {
          fullname:name,
          email,
          password,
          confirmPassword:Confpassword
        },
        {
            headers: {
            'Content-Type': "application/json",
            'Accept': "application/json",
            }  
        }   
     );
    console.log(data);  
        
      if (data.success) {
        let userInfo = data;
        console.log(userInfo);
        setUserInfo(userInfo);
        AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
        setIsLoading(false);
        navigation.replace('Login');

      }else{
        alert(data.message);
        setIsLoading(false);
      }
    } catch (e) {
      console.log(e);
        console.log(`register error ${e}`);
        setIsLoading(false);
    }
    }
  

  const login = async (email, password) => {
    setIsLoading(true);
    try {
      const {data} =  await client.post(
        '/sign-in',
        {
          email,
          password,
        },
        {
            headers: {
            'Content-Type': "application/json",
            'Accept': "application/json",
            }  
        }   
     );
 

      if (data.success) {
        let userInfo = data;
        console.log(userInfo);
        setUserInfo(userInfo);
        AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
        setIsLoading(false);
      }else{
        setError(data.message)
        setIsLoading(false);
      }

      console.log(data);
    } catch (error) { 
      setIsLoading(false);
      console.log(error);
    }
  };

  const logout = () => {
    setIsLoading(true);
    client.post(
      '/sign-in',
      {},
      
    {      headers: {
            headers: {Authorization: `Bearer ${userInfo.token}`}  ,
      } }  
   ).then(res => {
    console.log(res.data);
    AsyncStorage.removeItem('userInfo');
    setUserInfo({});
    setIsLoading(false);
    setError(null)
  })
  .catch(e => {
    console.log(`logout error ${e}`);
    setIsLoading(false);
  });      
  };

  const isLoggedIn = async () => {
    try {
      setSplashLoading(true);

      let userInfo = await AsyncStorage.getItem('userInfo');
      userInfo = JSON.parse(userInfo);

      if (userInfo) {
        setUserInfo(userInfo);
      }

      setSplashLoading(false);
    } catch (e) {
      setSplashLoading(false);
      console.log(`is logged in error ${e}`);
    }
  };

  useEffect(() => {
    isLoggedIn();
  }, []);
  return (
    <AuthContext.Provider
    value={{
      isLoading,
      userInfo,
      splashLoading,
      error,
      register,
      login,
      logout,
    }}>
    {children}
  </AuthContext.Provider>
  );
};
