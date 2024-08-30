import { Stack } from 'expo-router';
import React, { useContext,useState } from 'react';
import { useColorScheme } from '@/hooks/useColorScheme';

export const Context = React.createContext<any>(null);
export default function TabLayout() {
  const colorScheme = useColorScheme();
  const [home, setHome] = useState(true);
  return (
    <Context.Provider value={[home,setHome]}>
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
    </Context.Provider>
    
  );
}
