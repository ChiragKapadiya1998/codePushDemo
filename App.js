/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import codePush from "react-native-code-push";




const App  = () => {
  
  return (
    <SafeAreaView style={{backgroundColor:'#fff' ,flex:1}}>
       <View style={{backgroundColor:'#fff'}}>
         <Text style={{color:'#000'}}>Chirag kapadiya</Text>
         <Text style={{color:'#000'}}>Chirag 123</Text>
         <Text style={{color:'#000'}}>hiren 123</Text>
       </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  
});

export default codePush(App);
