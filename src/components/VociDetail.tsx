import { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet, Alert } from 'react-native';
import Voci from '@/models/voci';

interface VociDetailProps {
  onSave: (voci: Voci) => void;
}

export default function VociDetail({ onSave }: VociDetailProps) {
  const [term, setTerm] = useState('');
  const [translation, setTranslation] = useState('');

  function handleSave() {
    if (!term.trim() || !translation.trim()) {
      Alert.alert('Fehler', 'Bitte beide Felder ausfüllen.');
      return;
    }

    onSave({ term: term.trim(), translation: translation.trim() });
    setTerm('');
    setTranslation('');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Begriff</Text>
      <TextInput
        style={styles.input}
        value={term}
        onChangeText={setTerm}
        placeholder="z.B. apple"
      />
      <Text style={styles.label}>Übersetzung</Text>
      <TextInput
        style={styles.input}
        value={translation}
        onChangeText={setTranslation}
        placeholder="z.B. Apfel"
      />
      <Pressable style={styles.button} onPress={handleSave}>
        <Text style={styles.buttonText}>Speichern</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
  label: {
    fontSize: 14,
    color: '#555',
    marginBottom: 4,
    marginTop: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
  },
  button: {
    marginTop: 32,
    backgroundColor: '#005380',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
