import { useColorScheme } from 'react-native';
import { Colors } from '../constants/Colors' // Import your color definitions


// Adjust the path to where your colors file is located

export const useThemeColor = () => {
  // Ensure that the colorScheme is either 'light' or 'dark'
  const colorScheme: 'light' | 'dark' = useColorScheme() ?? 'light'; // Default to 'light' if null or undefined

  return Colors[colorScheme];
};

