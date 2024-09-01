import { Stack } from 'expo-router';
import React, { useContext,useState } from 'react';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  
  const [home, setHome] = useState(true);
  return (
    
      <Stack
      screenOptions={{
        
        headerShown: false,
        
       
      }}>
      <Stack.Screen
        name="index"
        options={{
           title: 'Home',
           animation: "slide_from_left",
          
        }}
      />
      <Stack.Screen
        name="jobBoard"
        options={{
          title: 'Explore',
          animation: "slide_from_right",
        }}
      />
      <Stack.Screen
        name="alumni"
        options={{
          title: 'Explore',
          animation: "slide_from_bottom",
        }}
      />
      <Stack.Screen
        name="courseLessons"
        options={{
          title: 'Explore',
          animation: "slide_from_bottom",
        }}
      />
    </Stack>
    
    
  );
}
