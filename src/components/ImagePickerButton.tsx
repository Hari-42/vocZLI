import { Image, TouchableOpacity, View, Text, StyleSheet, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

interface ImagePickerButtonProps {
  imageUri?: string;
  onImageSelected: (uri: string) => void;
}

export default function ImagePickerButton({ imageUri, onImageSelected }: ImagePickerButtonProps) {
  async function handlePress() {
    Alert.alert('Bild auswählen', undefined, [
      { text: 'Foto aufnehmen', onPress: openCamera },
      { text: 'Aus Galerie wählen', onPress: openGallery },
      { text: 'Abbrechen', style: 'cancel' },
    ]);
  }

  async function openCamera() {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Fehler', 'Kamera-Zugriff benötigt!');
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      quality: 1,
    });

    if (!result.canceled) {
      onImageSelected(result.assets[0].uri);
    }
  }

  async function openGallery() {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Fehler', 'Galerie-Zugriff benötigt!');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      quality: 1,
    });

    if (!result.canceled) {
      onImageSelected(result.assets[0].uri);
    }
  }

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      {imageUri ? (
        <Image source={{ uri: imageUri }} style={styles.image} />
      ) : (
        <View style={styles.placeholder}>
          <Text style={styles.placeholderText}>Bild hinzufügen</Text>
        </View>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 120,
    height: 120,
    alignSelf: 'center',
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 12,
  },
  placeholder: {
    width: 120,
    height: 120,
    borderRadius: 12,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
  placeholderText: {
    color: '#888',
    fontSize: 13,
    textAlign: 'center',
  },
});
