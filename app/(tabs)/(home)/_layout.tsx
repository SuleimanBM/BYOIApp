import { Stack } from 'expo-router';
import React from 'react';

import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

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
    </Stack>
  );
}
