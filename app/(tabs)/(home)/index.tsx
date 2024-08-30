import { View, Text, Pressable, ScrollView,TouchableOpacity,Image } from 'react-native'
import React,{useContext} from 'react'
import { router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useThemeColor } from '@/hooks/useThemeColor';
import { ScaledSheet,scale } from 'react-native-size-matters';
import { LinearGradient } from 'expo-linear-gradient';
import MaskedView from '@react-native-masked-view/masked-view';
import Profile from "../../../assets/svgs/profile"
import Jobboard from "../../../assets/svgs/jobboard"
import Alumini from "../../../assets/svgs/alumini"
import Arrow from "../../../assets/svgs/arrow"
import Play from "../../../assets/svgs/play"
import Group from "../../../assets/svgs/group"
import { Context } from './_layout';
import Rectangle from "../../../assets/svgs/rectangle1"

const index = () => {
     const color = useThemeColor();
     const [home, setHome] = useContext(Context)

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
    color: color.textPrimary,
    fontsize: "14@s"
  },
   welcometext2:{
    color: color.textPrimary,
    fontsize: "50@s"
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
    flex: 0.25,
    display: "flex",
    justifyContent: "space-around",
    padding: "5@s",
  },
  container22:{
    padding: "10@s",
    borderRadius:"20@s",
    paddingVertical: "25@s",
  },
  announcement:{
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
   CTA: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    
  },
    JoinAClass: {
    fontSize: "16@s",
    color: color.color1, 
  },
    Learn: {
    fontSize: "20@s",
    color: color.textPrimary, 
  },
  LearnContainer:{
    display: "flex",
    justifyContent: "space-evenly"
  },
  maskedtext:{
    fontSize: "16@s",
  },
  container3: {
    flex: 0.50,
    display: "flex",
    padding: "5@s",
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
  More: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 0,
    justifyContent: "space-between"
    
  },
   Group12: {
    width: "48%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: color.backgroundSecondary,
    padding: "6@s",
    height: "160@s",
    borderRadius: "20@s",
    marginBottom:"7@s",
   },
  Rectangle12: {
  },
  Frame11: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: 0,
    gap: "6@s",
    position: "absolute",
    width: "128@s",
    height: "61@s",
    left: "15@s",
    top: "107@s",
  },
  ProductDesign: {
    width: "106@s",
    height: "15@s",
    fontFamily: "Poppins-Light",
    fontStyle: "normal",
    fontSize: "10@s",
    lineHeight: "15@s",
    color: "#FFFFFF",
  },
    productDesignText: {
    color: color.textPrimary,
    fontFamily: "Poppins-Light",
    fontSize: "10@s",
  },
  rowContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
   
  },
  row: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "4@s",
  },
  rowText: {
    color: color.textPrimary,
    fontFamily: "Poppins-Light",
    fontSize: "10@s",
  },
   learnersRow: {
    
  },
  expertContainer: {
    backgroundColor: color.lightRed ,
    width: "50@s",
    padding: "3@s",   
    borderRadius: "8@s",
    alignContent: "center",
    marginBottom: "5@s"
  },
  expertText: {
    color: color.Red,
    alignSelf: "center",
    fontFamily: "Poppins-Regular",
    fontSize: "10@s",
  },
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
  bottonTop:{
    backgroundColor: color.background,
    borderRadius: scale(20),
    paddingHorizontal: scale(15),
    paddingVertical: scale(7),
  },
    hiveButton: {
    backgroundColor: color.hiveB,
    padding: "10@s",
    paddingHorizontal: "25@s",
    alignItems: "center",
    borderRadius: "24@s",
  },
   jobBoardButton: {
   padding: "10@s",
   paddingHorizontal: "25@s",
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
  router.push('./jobBoard');
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
            <Pressable style={styles.bottonTop} >
                <Jobboard />
            </Pressable>
            <Pressable style={{backgroundColor: ""}}  onPress={()=> {router.navigate("./alumni"),setHome(false)}}>
                <Alumini />
            </Pressable> 
        </View>
      </View>
      <View style={styles.container2}>
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          colors={[
            "rgba(157,77,82,0.37)",
            "rgba(16,30,59,1)",
            "rgba(148,176,97,0.51)",
          ]}
          style={styles.container22}
        >
          <View style={styles.announcement}>
            <View style={styles.CTA}>
              <Text style={styles.JoinAClass}>Join a Class For Free</Text>
              <Pressable>
                <Arrow />
              </Pressable>
            </View>
            <View >
              <Text style={styles.Learn}>Learn the most creative</Text>
              <MaskedView
                maskElement={
                  <Text style={styles.maskedtext}>in-demand skills</Text>
                }
                style={{ height: 30 }}
              >
                <LinearGradient
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                  colors={["#F5525B", "#F6BF47", "#4BCCA5"]}
                  style={{ height: 30 }}
                >
                  <Text></Text>
                </LinearGradient>
              </MaskedView>
              <Text style={styles.Learn}>curated for you.</Text>
            </View>
          </View>
        </LinearGradient>
      </View>
      <View style={styles.container3}>
         <View style={styles.heading}>
          <Text style={styles.forYou}>Personalized For You</Text>
          <Text style={styles.more}>more coming soon</Text>
        </View>
        <ScrollView style={{flex: 0.9}}>
            <View style={styles.More}>
            <TouchableOpacity
              style={styles.Group12}
              
            >
                
             
                <View style={{alignSelf: "center"}}>
                    <Rectangle />
                </View>
                <View >
                <View>
                  <Text style={styles.productDesignText}>Product Design</Text>
                </View>
                <View style={styles.rowContainer}>
                  <View style={styles.row}>
                    <Play />
                    <Text style={styles.rowText}>8 Hours</Text>
                  </View>
                  <View style={[styles.row, styles.learnersRow]}>
                    <Group />
                    <Text style={styles.rowText}>76k learners</Text>
                  </View>
                </View>
                <View style={styles.expertContainer}>
                  <Text style={styles.expertText}>Expert</Text>
                </View>
              </View>
              
              
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.Group12}
              
            >
                
             
                <View style={{alignSelf: "center"}}>
                    <Rectangle />
                </View>
                <View >
                <View>
                  <Text style={styles.productDesignText}>Product Design</Text>
                </View>
                <View style={styles.rowContainer}>
                  <View style={styles.row}>
                    <Play />
                    <Text style={styles.rowText}>8 Hours</Text>
                  </View>
                  <View style={[styles.row, styles.learnersRow]}>
                    <Group />
                    <Text style={styles.rowText}>76k learners</Text>
                  </View>
                </View>
                <View style={styles.expertContainer}>
                  <Text style={styles.expertText}>Expert</Text>
                </View>
              </View>
              
              
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.Group12} >
                <View style={{alignSelf: "center"}}>
                  <Rectangle />  
                </View>
                <View >
                <View>
                  <Text style={styles.productDesignText}>Product Design</Text>
                </View>
                <View style={styles.rowContainer}>
                  <View style={styles.row}>
                    <Play />
                    <Text style={styles.rowText}>8 Hours</Text>
                  </View>
                  <View style={[styles.row, styles.learnersRow]}>
                    <Group />
                    <Text style={styles.rowText}>76k learners</Text>
                  </View>
                </View>
                <View style={styles.expertContainer}>
                  <Text style={styles.expertText}>Expert</Text>
                </View>
              </View>
              
              
            </TouchableOpacity>

          </View>

        </ScrollView>
      </View>
      <View style={styles.container4}>
         <View style={styles.view}>
          <Pressable>
            <View style={styles.hiveButton}>
              <Text style={styles.buttonText}>Learning Hive</Text>
            </View>
          </Pressable>
          <Pressable onPress={handlePress}>
            <View style={styles.jobBoardButton}>
              <Text style={styles.buttonText}>Job board</Text>
            </View>
          </Pressable>
        </View>
      </View>
      
    </SafeAreaView>
  )
}

export default index