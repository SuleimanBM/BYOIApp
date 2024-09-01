import { View, Text, Pressable, ScrollView,Image, SectionList, } from 'react-native'
import React, { useState, useRef, useEffect } from 'react'
import { router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useThemeColor } from '@/hooks/useThemeColor';
import { ScaledSheet,scale } from 'react-native-size-matters';
import { LinearGradient } from 'expo-linear-gradient';
import Profile from "../../../assets/svgs/profile"
import Tick from "../../../assets/svgs/tick"
import {Video} from "expo-av"
import Collapsible from 'react-native-collapsible';
import Arrowdown from "../../../assets/svgs/arrowDown"
import Arrowup from "../../../assets/svgs/arrowUp"
import Playbutton from "../../../assets/svgs/playButton.js"
import People from "../../../assets/svgs/people"
import Star from  "../../../assets/svgs/star"

const courseLessons = () => {
    const color = useThemeColor();
    const [lesson, setLesson] = useState(true)    

    useEffect(() => {
       const toggleLessons = () => {
    setLesson(!lesson)
  }  
    })
  const toggleLessons = () => {
    setLesson(!lesson)
  }
    
  const styles = ScaledSheet.create({
  Container:{
    flex: 1, backgroundColor: color.background,padding:10,
    gap: "5@s"
  },
  container1: {
    flex: 0.2,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "flex-start",
    padding: "5@s",
    margin: "5@s",
  },
    title: {
    fontSize: "25@s",
    fontWeight:"bold",
    color: color.textPrimary,
  },
  profile:{ 
    display: "flex",
    flexDirection: "row", 
    gap: 10,alignItems: "center"
},
  name:{ 
    color: color.textPrimary, 
    fontSize: "15@s"
    },
  container2:{
    flex: 0.07,
    alignItems: "center",
    justifyContent: "space-around",
    padding: "5@s",
    margin: "5@s",
    borderRadius: "50@s",
    backgroundColor: color.backgroundSecondary
  },
    view:{
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    
  },

    hiveButton: {
    paddingVertical: "15@s",
    paddingHorizontal: "30@s",
    alignItems: "center",
    borderRadius: "24@s",
  },
   jobBoardButton: {
    backgroundColor: lesson? "": color.hiveB,
   paddingVertical: "15@s",
   paddingHorizontal: "30@s",
   alignItems: "center",
   borderRadius: "24@s",
  },
  header1: {
    color: color.textPrimary,
    fontSize: "42@s",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap"
  },
  buttonText:{
    color: color.textPrimary,
  },
  button: {
    paddingVertical: "20@s",
    borderRadius: "10@s",
    alignItems: 'center'
  },

    container5:{
    flex: 0.1,
  },
  
})

const handlePress = () => {
  router.push('./jobBoard');
}

  return (
    <SafeAreaView style={styles.Container}>
        <View style={styles.container1}>
          <Text style={styles.title}>Fundamentals of UI/UX Design Course</Text>
          <View style={styles.profile}>
            <Profile />
            <Text style={styles.name}>
              By Joshua Ofosu
            </Text>
            <Tick />
           </View>
        </View>
        <View style={styles.container2}>
            <View style={styles.view}>
          <Pressable onPress={()=> setLesson(true)}>
            <View style={[styles.hiveButton,{backgroundColor: lesson? color.hiveB: "transparent"}]}>
              <Text style={styles.buttonText}>Learning Hive</Text>
            </View>
          </Pressable>
          <Pressable onPress={()=> setLesson(false)}>
            <View style={[styles.jobBoardButton,{backgroundColor: lesson? "transparent": color.hiveB}]}>
              <Text style={styles.buttonText}>Job board</Text>
            </View>
          </Pressable>
        </View>
        </View>
        {lesson? <Courselesson /> : <Overview />} 
        <View style={styles.container5}>
            <Pressable >
          <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={['rgba(157, 77, 82, 0.37)', '#101E3B', 'rgba(148, 176, 97, 0.51)']} style={styles.button}>
            <Text style={styles.buttonText}>Subscribe Now</Text>
          </LinearGradient>
        </Pressable>
        </View>
    </SafeAreaView>
  )
}
const Courselesson = ()=> {
    const color = useThemeColor()
    const video = useRef<Video>(null);
    const [collapsed, setCollapsed] = useState<{ [key: number]: boolean }>({});

  // Function to toggle the collapsed state of an item
  const toggleCollapsed = (id: number) => {
    setCollapsed((prevState) => ({
      ...prevState,
      [id]: !prevState[id],// Toggle the state of the item with the given id
      
    }));
  };


    const styles = ScaledSheet.create({
    container3:{
    flex: 0.3,
      padding: "5@s",
    margin: "5@s",
  },
    container4:{
    flex: 0.33,
      padding: "5@s",
    margin: "5@s",
  }, 
  topBar:{
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  text:{
    color: color.textPrimary,
    fontSize: "10@s",
    fontFamily: "Poppins-Regular",
  },
   lessonItem: {
    padding: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomColor: "rgba(157, 77, 82, 0.37)",
    borderBottomWidth: 0.4,
  },
  lessonText: {
    color: "#fff",
    fontFamily: "Poppins-Light",
  },
  lessonTime: {
    color: "#fff",
    fontFamily: "Poppins-Light",
  },
    })
    return( <>
        <View style={styles.container3}>
            <Video 
            ref={video}
            source={require("../../../assets/images/Video.mp4")}
            useNativeControls={true}
            resizeMode="contain"
            isLooping={false}
            style={{height: "90%",alignSelf: "stretch"}}
            />
        </View>
        <View style={styles.container4}>
            <View style={styles.topBar}>
                <View style={{display: "flex",flexDirection: "row",alignItems: "center"}}>
                    <Playbutton />
                    <Text style={[styles.text,{color: color.highlight1}]}>Now playing,</Text>
                    <Text style={styles.text}>Introduction to UX Design</Text>
                </View>
                <Text style={[styles.text,{color: color.Red}]}>skip</Text>
            </View>
            <SectionList 
            sections={Lessons}
            keyExtractor={item=>item.id.toString()}
            renderItem={({item})=>(
                 <View style={styles.lessonItem}>
                    <View>
                    <Text style={styles.lessonText}>{item.name}</Text>
                    <Collapsible collapsed={!collapsed[item.id]}>
                        <Text style={styles.lessonText}>{item.duration}</Text>
                    </Collapsible>
                    </View>
                    <Pressable style={{paddingHorizontal: scale(15),paddingVertical: scale(8)}} onPress={()=> toggleCollapsed(item.id)}>
                        {collapsed[item.id]? <Arrowup /> : <Arrowdown />}
                    </Pressable>
                 </View>
                 )}
            /> 
        </View>
        </>
)}
const Overview = ()=>{
    const color = useThemeColor()
    const styles = ScaledSheet.create({
    instructorProfile: {
    flexDirection: "row",
    alignItems: "center",
  },
  instructorInfo: {
    flexDirection: "column",
  },
  instructorName: {
    color: "#fff",
    fontFamily: "Poppins-Light",
  },
  instructorTitle: {
    color: "#fff",
    fontFamily: "Poppins-Light",
  },
  description: {
    color: "#fff",

  },
    textBold: {
    color: "#ffffff",
    fontFamily: "Poppins-Bold",
    fontSize: 15,
  },
  textLight: {
    color: "#ffffff",
    fontFamily: "Poppins-Light",
    fontSize: 10,
  },
    textLightSmall: {
    color: "#ffffff",
    fontFamily: "Poppins-Light",
    fontSize: 11,
  },
  row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rowItem: {
    display: "flex",
    flexDirection: "row",
    gap: 4,
    alignItems: "center",
  },
  section:{
    marginVertical: "10@s"
  }

    })

    return(
        
        <View
              style={{flex: 0.63,display: "flex",flexDirection: "column",justifyContent: "space-evenly", backgroundColor: color.backgroundSecondary, padding: 20 }}
            >
              <View style={styles.instructorProfile}>
                <Profile />
                <View style={styles.instructorInfo}>
                  <Text style={styles.instructorName}>Joshua Ofosu</Text>
                  <Text style={styles.instructorTitle}>UX/UI Engineer</Text>
                </View>
              </View>
              <View style={styles.description}>
                <View style={styles.section}>
                <Text style={styles.textBold}>About</Text>
                <Text style={styles.textLight}>
                  Hello there, Champion. I am Joshua, a senior User Experience
                  Designer and Engineer at Fleet Labs Ghana Ltd. I help
                  businesses and individuals craft user-friendly ProductDesig
                  that exceeds their expectation.
                </Text>
                </View>
                <View style={styles.section}>
                <Text style={styles.textBold}>Who is this course for</Text>
                <Text style={styles.textLight}>
                  Anyone who will like to Fast-track their career in Product
                  Design and Get job-ready skills in less than 6 months with
                  critical competencies, and qualify for top positions in small
                  or large organizations.
                </Text>
                </View>
               <View style={styles.section}>
                 <Text style={styles.textBold}>Perks</Text>
                <Text style={styles.textLight}>
                  Complete a minimum of 2 to 3 Capstone projects on time to
                  receive a valuable certificate with an 'on-time' badge,
                  showcasing your reliability to future employers.
                </Text>
               </View>
                <View style={styles.section}>
                    <View style={styles.row}>
                  <View style={styles.rowItem}>
                    <People />
                    <Text style={styles.textLightSmall}>0.2k learners</Text>
                  </View>
                  <View style={styles.rowItem}>
                    <Playbutton />
                    <Text style={styles.textLightSmall}>10 lessons</Text>
                  </View>
                  <View style={styles.rowItem}>
                   <Star />
                    <Text style={styles.textLightSmall}>4.5 score</Text>
                  </View>
                </View>
                <Text style={styles.textLight}>
                  Your journey to become a successful Product Designer that
                  companies love to hire starts here.
                </Text>
                </View>
              </View>
            </View>
       
)}



const Lessons = [
  {
    title: "",
    data:[
    {id: 1,
    name: 'Introduction to UX Design',
    duration: '29m 12s',
  },
  {
    id: 2,
    name: 'Principles of UI Design',
    duration: '29m 12s',
  },
  {
    id: 3,
    name: 'Design Systems vs UI Kits',
    duration: '15m 34s',
  },
  {
    id: 4,
   name: 'Advanced UI/UX Design',
    duration: '30m 25s',
  },
  {
    id: 5,
    name: 'UX Design Capstone',
    duration: '1hr 15m 12s',
  },
    ]
    
}
];

export default courseLessons