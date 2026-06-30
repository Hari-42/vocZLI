import { Stack, useRouter } from 'expo-router';
import { Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { VociProvider } from '../context/vociContext';

function AddButton() {
  const router = useRouter();
  return (
    <Pressable onPress={() => router.push('/addVoci')} hitSlop={8}>
      <Ionicons name="add" size={28} color="#fff" />
    </Pressable>
  );
}

export default function RootLayout() {
  return (
    <VociProvider>
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: '#005380',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen
          name="index"
          options={{
            title: 'Meine Vokabeln',
            headerRight: () => <AddButton />,
          }}
        />
        <Stack.Screen
          name="learn"
          options={{
            title: 'Vokabeln lernen',
          }}
        />
        <Stack.Screen
          name="addVoci"
          options={{
            title: 'Neue Vokabel',
            presentation: 'modal',
          }}
        />
      </Stack>
    </VociProvider>
  );
}
