import { Image, StyleSheet, Platform, View, StatusBar, Text,Pressable } from 'react-native';
import { router } from 'expo-router';
import { useThemeColor } from '@/hooks/useThemeColor';
import MaskedView from '@react-native-masked-view/masked-view';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { ScaledSheet } from 'react-native-size-matters';



export default function HomeScreen() {
  const color = useThemeColor();
   const GetStarted = () => {
    router.push('./(home)')

  };

const styles = ScaledSheet.create({
  container1:{
    flex: 1, backgroundColor: color.background,padding:10,
  },
  container2: {
    flex: 0.5,
    display: "flex",
    
    justifyContent: "space-around"
  },
  header1: {
    color: color.textPrimary,
    fontSize: "42@s",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap"
  },
  info1:{
    height: "22@s",
    width: "200@s",
  },
  info2:{
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    color: color.textSecondary,
    fontSize: "14@s"
  },
  buttonText:{
    color: color.textPrimary,
  },
  button: {
    paddingVertical: "20@s",
    borderRadius: "10@s",
    alignItems: 'center'
  },
});


  return (
    <>
    <SafeAreaView style={styles.container1} >
    
    <View style={{flex: 0.5,margin: 5}}>
      
    </View>
    
      <View style={styles.container2}>
        <View>
          <MaskedView maskElement={<Text style={{ fontSize: 15, fontFamily: 'Poppins-Bold' }}>No Signup required!</Text>}>
            <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={['#F5525B', '#F6BF47', '#4BCCA5']} style={styles.info1}>
              
            </LinearGradient>
          </MaskedView>

          <Text style={styles.header1}>Gain industry- standard based skills.</Text>
          <Text style={styles.info2}>
            Get job-ready skills and critical competencies in 3-6 months with our hands-on apprenticeship program.
          </Text>
        </View>
         <View >
        <Pressable onPress={GetStarted}>
          <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={['rgba(157, 77, 82, 0.37)', '#101E3B', 'rgba(148, 176, 97, 0.51)']} style={styles.button}>
            <Text style={styles.buttonText}>Get started</Text>
          </LinearGradient>
        </Pressable>
      </View>
      </View>
     
   
    
    </SafeAreaView>
    
    
    </>
  )
}



