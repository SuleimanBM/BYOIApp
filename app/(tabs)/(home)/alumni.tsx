import { View, Text, Pressable, ScrollView,Image, TextInput, } from 'react-native'
import React, { useState,useContext } from 'react'
import { router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useThemeColor } from '@/hooks/useThemeColor';
import { ScaledSheet,scale } from 'react-native-size-matters';
import Profile from "../../../assets/svgs/profile"
import Jobboard from "../../../assets/svgs/jobboard"
import Alumini from "../../../assets/svgs/alumini"
import Search from "../../../assets/svgs/search"
import Dropdown from "../../../assets/svgs/dropdown"
import Collapsible from "react-native-collapsible";

const alumni= () => {
     const color = useThemeColor();
    const [search, setSearch] = useState("")
   
      // State to manage the collapsed state of each item
  const [collapsed, setCollapsed] = useState<{ [key: number]: boolean }>({});

  // Function to toggle the collapsed state of an item
  const toggleCollapsed = (id: number) => {
    setCollapsed((prevState) => ({
      ...prevState,
      [id]: !prevState[id], // Toggle the state of the item with the given id
    }));
  };


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
    flex: 0.75,
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
  component: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#12182B",
    borderRadius: 16,
    padding: 20,
    marginBottom: 10,
  },
  componentHeader: {
    flexDirection: "row",
    alignItems: "center",
  },
  alumniInfo: {
    marginLeft: "8@s",
  },
  alumniDetails: {
    marginBottom: "4@s",
  },
  alumniName: {
    color: color.textPrimary,
    fontFamily: "Poppins-Bold",
    fontSize: "16@s",
  },
  alumniRole: {
    color: color.textPrimary,
    fontFamily: "Poppins-Light",
    fontSize: "12@s",
  },
  alumniSkills: {
    flexDirection: "row",
    alignItems: "center",
  },
  skillTag: {
    backgroundColor: "rgba(230, 215, 163, 0.2)",
    borderRadius: "7.5@s",
    paddingHorizontal: "2@s",
    paddingVertical: "4@s",
    marginRight: "4@s",
  },
  skillText: {
    fontSize: "7@s",
    color: "#E5D7A3",
    fontFamily: "Poppins-Light",
  },
  dropdownIcon: {
    width: 16,
    height: 16,
  },
 bottonTop:{
    backgroundColor: color.background,
    borderRadius: scale(20),
    paddingHorizontal: scale(15),
    paddingVertical: scale(7),
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
            <Pressable style={{backgroundColor: ""}} onPress={()=> {router.replace("./")}}>
                <Jobboard />
            </Pressable >
            <Pressable style={styles.bottonTop}  onPress={()=> {router.replace("./alumni")}}>
                <Alumini />
            </Pressable> 
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
           {alumniData.map((alumni, index) => (
          <View key={index} style={styles.component}>
            <View style={styles.componentHeader}>
              <Image source={alumni.image} />
              <View style={styles.alumniInfo}>
                <View style={styles.alumniDetails}>
                  <Text style={styles.alumniName}>{alumni.name}</Text>
                  <Text style={styles.alumniRole}>{alumni.role}</Text>
                </View>
                <View style={styles.alumniSkills}>
                  {alumni.skills.map((skill, idx) => (
                    <View key={idx} style={styles.skillTag}>
                      <Text style={styles.skillText}>{skill}</Text>
                    </View>
                  ))}
                </View>
                <Collapsible key={index} collapsed={collapsed[alumni.id]}>
                <Text style={styles.welcometext1}>{alumni.info}</Text>
                </Collapsible>
              </View>
            </View>
            <Pressable style={{padding: scale(30)}} onPress={()=> toggleCollapsed(alumni.id)}>
                  <Dropdown />
            </Pressable>
            
          </View>
        ))}

        </ScrollView>
      </View>
     
     
    </SafeAreaView>
  )
}

const alumniData = [
  {
    id: 1,
    name: 'Raha Matahari',
    role: 'User Experience Designer',
    image: require("../../../assets/images/Raha.png"),
    skills: ['Figma', 'Wireframe', 'Prototyping'],
    info: "More info about me here"
  },
  {
    id: 2,
    name: 'Samuel Adeyemi',
    role: 'Frontend Developer',
    image: require("../../../assets/images/Samuel.png"),
    skills: ['React', 'JavaScript', 'CSS'],
    info: "More info about me here"
  },
  {
    id: 3,
    name: 'Fati Abubakar',
    role: 'Backend Developer',
    image: require("../../../assets/images/Fati.png"),
    skills: ['Node.js', 'Express', 'MongoDB'],
    info: "More info about me here"
  },
  {
    id: 4,
    name: 'Asamoah Gyan',
    role: 'Product Manager',
    image: require("../../../assets/images/Asamoah.png"),
    skills: ['Agile', 'Scrum', 'Roadmap'],
    info: "More info about me here"
  },
  {
    id: 5,
    name: 'Joshua King',
    role: 'Mobile Developer',
    image: require("../../../assets/images/Joshua.png"),
    skills: ['React Native', 'Flutter', 'Swift'],
    info: "More info about me here"
  },
];

export default alumni