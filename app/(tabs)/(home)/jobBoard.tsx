import { View, Text, Pressable, ScrollView,KeyboardAvoidingView,Image, TextInput, Keyboard } from 'react-native'
import { KeyboardAwareScrollView } from "react-native-keyboard-controller";
import React, { useState } from 'react'
import { router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useThemeColor } from '@/hooks/useThemeColor';
import { ScaledSheet,scale } from 'react-native-size-matters';
import { LinearGradient } from 'expo-linear-gradient';
import MaskedView from '@react-native-masked-view/masked-view';
import Profile from "../../../assets/svgs/profile"
import Jobboard from "../../../assets/svgs/jobboard"
import Alumini from "../../../assets/svgs/alumini"
import Search from "../../../assets/svgs/search"
import Tick from "../../../assets/svgs/tick"
import Nhyira from "../../../assets/svgs/nhyira.js"

const jobBoard = () => {
     const color = useThemeColor();
    const [search, setSearch] = useState("")

  const styles = ScaledSheet.create({
  Container:{
    flex: 1, backgroundColor: color.background,padding:10,
    gap: "5@s"
  },
  container1: {
    flex: 0.15,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "5@s",
  },
  container11: {
    display: "flex",
    flexDirection: "row",
    alignItems: 'center',
    gap: "10@s"
  },
  welcometext1:{
    color: color.textblack,
    fontsize: "14@s",
    margin: "3@s"
  },
   welcometext2:{
    color: color.textPrimary,
    fontsize: "14@s",
    margin: "3@s"
  },
  container12:{
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "10@s",
    backgroundColor: color.backgroundSecondary,
    paddingHorizontal: "20@s",
    paddingVertical: "10@s",
    borderRadius: "50@s",
    
  },
  container2: {
    flex: 0.1,
    alignItems: "stretch", 
    justifyContent: "center",
  },
  searchBar:{
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center", 
    padding: "15@s",
    borderRadius: "50@s",
    backgroundColor: color.backgroundSecondary,
  },
  searchBarText:{
    color: color.textPrimary,
  },
  container3: {
    flex: 0.65,
    display: "flex",
    padding: "15@s",
  },
  job:{
    padding: "10@s",
    display: "flex",
    flexDirection: "row",
    height: "180@s",
    backgroundColor: color.backgroundSecondary,
    borderRadius:"20@s",
    marginBottom:"10@s"
  },
  container31:{

  },
  container32:{

  },
    heading:{
    flex: 0.1,
    display: "flex",
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: "center",
    
  },
  forYou:{
    fontSize: "13@s",
    color: color.textPrimary,
  },
  more:{
    fontSize: "13@s",
    color: color.color1
  },
  job1:{
    flex: 0.65,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
  },
  job11:{
    display: "flex", flexDirection: 'row', alignItems: "center"
  },
  job2: {
    display: "flex",
    flexDirection: "row",
    alignItems: "stretch",
    gap: "5@s",
    
  },
    job21: {
    padding: "5@s",
    paddingHorizontal: "10@s",
    backgroundColor: color.highlight1,
    borderRadius:"30@s",
  },
    job22: {
    padding: "5@s",
    paddingHorizontal: "10@s",
    backgroundColor: color.highlight2,
    borderRadius:"30@s",
  },
  job3:{flex: 0.35,display: "flex",
    flexDirection: "column",
     justifyContent: "space-between",
     alignItems: "flex-end"},
  job31:{
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: color.highlight3,
    paddingVertical: "5@s",
    paddingHorizontal: "10@s",
    borderRadius: '30@s'},
  container4: {
    flex: 0.1,
    display: "flex",
    justifyContent: "space-around",
    backgroundColor: color.backgroundSecondary,
    borderRadius: "50@s",
  },
  view:{
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
    hiveButton: {
    
    padding: "10@s",
    paddingHorizontal: "25@s",
    alignItems: "center",
    borderRadius: "24@s",
  },
   jobBoardButton: {
    backgroundColor: color.hiveB,
   padding: "10@s",
   paddingHorizontal: "25@s",
   borderRadius: "24@s",
   alignItems: "center",
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
const handlePress = () => {
  router.push('./');
}
  return (
    <SafeAreaView style={styles.Container}>
  
    <View style={styles.container1}>
        <View style={styles.container11}>
            <Profile />
            <View>
                <Text style={styles.welcometext1}>Welcome to</Text>
                <Text style={styles.welcometext2}>BYOI Learning</Text>
            </View>
        </View>
        <View style={styles.container12}>
            <View>
                <Jobboard />
            </View>
            <View>
                <Alumini />
            </View> 
        </View>
      </View>
      <View style={styles.container2}>
       <View style={styles.searchBar}>
        <TextInput style={styles.searchBarText}
        placeholder="Search for Contracts or Full-time jobs"
        placeholderTextColor={color.textSecondary}
        value={search}
        onChangeText={setSearch}
        >
       </TextInput>
       <Search />
       </View>
      </View>
      <View style={styles.container3}>
         <View style={styles.heading}>
          <Text style={styles.forYou}>Open Roles</Text>
          <Text style={styles.more}>more coming soon</Text>
        </View>
        <ScrollView style={{flex: 0.9}}>
           <View style={styles.job}>
              <View style={styles.job1}>
                <View style={styles.job11}>
                    <Text style={[styles.welcometext2,{fontSize: scale(19)}]}>Fleet Labs Ghana</Text>
                    <Tick /> 
                </View>
                <Text style={[styles.welcometext2,{fontSize: scale(16)}]}>Flutter Developer</Text>
                <View style={styles.job2}>
                    <View style={styles.job21}><Text style={styles.welcometext1}>Mampong</Text></View>
                    <View style={styles.job22}><Text style={styles.welcometext1}>Full-time</Text></View>
                </View>
              </View>
              <View style={styles.job3}>
                <Text style={styles.welcometext2}>3d ago</Text>
                <View style={styles.job31}>
                    <Nhyira />
                    <Text style={styles.welcometext1}>Easy Apply</Text>
                </View>
              </View>
            </View>
            <View style={styles.job}>
              <View style={styles.job1}>
                <View style={styles.job11}>
                    <Text style={[styles.welcometext2,{fontSize: scale(19)}]}>Fleet Labs Ghana</Text>
                    <Tick /> 
                </View>
                <Text style={[styles.welcometext2,{fontSize: scale(16)}]}>Flutter Developer</Text>
                <View style={styles.job2}>
                    <View style={styles.job21}><Text style={styles.welcometext1}>Mampong</Text></View>
                    <View style={styles.job22}><Text style={styles.welcometext1}>Full-time</Text></View>
                </View>
              </View>
              <View style={styles.job3}>
                <Text style={styles.welcometext2}>3d ago</Text>
                <View style={styles.job31}>
                    <Nhyira />
                    <Text style={styles.welcometext1}>Easy Apply</Text>
                </View>
              </View>
            </View>
            <View style={styles.job}>
              <View style={styles.job1}>
                <View style={styles.job11}>
                    <Text style={[styles.welcometext2,{fontSize: scale(19)}]}>Fleet Labs Ghana</Text>
                    <Tick /> 
                </View>
                <Text style={[styles.welcometext2,{fontSize: scale(16)}]}>Flutter Developer</Text>
                <View style={styles.job2}>
                    <View style={styles.job21}><Text style={styles.welcometext1}>Mampong</Text></View>
                    <View style={styles.job22}><Text style={styles.welcometext1}>Full-time</Text></View>
                </View>
              </View>
              <View style={styles.job3}>
                <Text style={styles.welcometext2}>3d ago</Text>
                <View style={styles.job31}>
                    <Nhyira />
                    <Text style={styles.welcometext1}>Easy Apply</Text>
                </View>
              </View>
            </View>
            <View style={styles.job}>
              <View style={styles.job1}>
                <View style={styles.job11}>
                    <Text style={[styles.welcometext2,{fontSize: scale(19)}]}>Fleet Labs Ghana</Text>
                    <Tick /> 
                </View>
                <Text style={[styles.welcometext2,{fontSize: scale(16)}]}>Flutter Developer</Text>
                <View style={styles.job2}>
                    <View style={styles.job21}><Text style={styles.welcometext1}>Mampong</Text></View>
                    <View style={styles.job22}><Text style={styles.welcometext1}>Full-time</Text></View>
                </View>
              </View>
              <View style={styles.job3}>
                <Text style={styles.welcometext2}>3d ago</Text>
                <View style={styles.job31}>
                    <Nhyira />
                    <Text style={styles.welcometext1}>Easy Apply</Text>
                </View>
              </View>
            </View>

        </ScrollView>
      </View>
      <View style={styles.container4}>
         <View style={styles.view}>
          <Pressable onPress={handlePress}>
            <View style={styles.hiveButton}>
              <Text style={styles.buttonText}>Learning Hive</Text>
            </View>
          </Pressable>
          <Pressable >
            <View style={styles.jobBoardButton}>
              <Text style={styles.buttonText}>Job board</Text>
            </View>
          </Pressable>
        </View>
      </View>
     
    </SafeAreaView>
  )
}

export default jobBoard