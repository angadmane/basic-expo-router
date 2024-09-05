import { StyleSheet, Text, View, TouchableOpacity, Image, Button } from 'react-native';
import React from 'react';
import Animated, { FadeIn, FadeOut, } from 'react-native-reanimated';
import { Link } from 'expo-router';


export default function Page() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to </Text>
      <Animated.View entering={FadeIn.delay(1000)} exiting={FadeOut.delay(500)} style={styles.logoContainer}>
        <Image 
          source={require('../assets/logo1.png')} 
          style={styles.logo} 
        />
      </Animated.View>
      {/* Uncomment these to enable navigation */}
      {/* <Link href={'/about'}>
        <Text style={{fontSize:18}}>Go to About Page</Text>
      </Link>
      <Link href={'/blog'} asChild>
        <Button title='Go to Blog Page' />
      </Link>
      <Link href={'/blog'} asChild>
        <Button title='Go to Contact Page' />
      </Link> */}
      <Link href={'(drawer)/(tabs)/home'} asChild>
  <TouchableOpacity style={styles.button}>
    <Text style={styles.buttonText}>पुढे जा</Text>
  </TouchableOpacity>
</Link>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    marginBottom: 20,
  },
  logoContainer: {
    marginBottom: 20,
  },
  logo: {
    width: 600,
    height: 450,
  },
  buttonText: {
    fontSize: 25,
    
    color: '#3A416F',
    textAlign: 'center',
    borderWidth: 3,
    borderColor: '#252F40',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius:15
    
  }
});
