import { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet, Alert } from 'react-native';
import Voci from '@/models/voci';

interface VociDetailProps {
  initialVoci?: Voci;
  onSave: (voci: Voci) => void;
  onCancel?: () => void;
  onDelete?: () => void;
}

export default function VociDetail({ initialVoci, onSave, onCancel, onDelete }: VociDetailProps) {
  const [term, setTerm] = useState(initialVoci?.term ?? '');
  const [translation, setTranslation] = useState(initialVoci?.translation ?? '');
  const isEditMode = !!initialVoci;

  function handleSave() {
    if (!term.trim() || !translation.trim()) {
      Alert.alert('Fehler', 'Bitte beide Felder ausfüllen.');
      return;
    }

    onSave({ term: term.trim(), translation: translation.trim() });

    if (!isEditMode) {
      setTerm('');
      setTranslation('');
    }
  }

  function handleDelete() {
    Alert.alert(
      'Vokabel löschen',
      `Möchten Sie "${initialVoci?.term}" wirklich löschen?`,
      [
        { text: 'Abbrechen', style: 'cancel' },
        { text: 'Löschen', style: 'destructive', onPress: onDelete },
      ]
    );
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

      {isEditMode && (
        <>
          <Pressable style={[styles.button, styles.cancelButton]} onPress={onCancel}>
            <Text style={[styles.buttonText, styles.cancelButtonText]}>Abbrechen</Text>
          </Pressable>
          <Pressable style={[styles.button, styles.deleteButton]} onPress={handleDelete}>
            <Text style={styles.buttonText}>Löschen</Text>
          </Pressable>
        </>
      )}
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
    marginTop: 16,
    backgroundColor: '#005380',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
  },
  cancelButton: {
    backgroundColor: '#eee',
  },
  cancelButtonText: {
    color: '#333',
  },
  deleteButton: {
    backgroundColor: '#c62828',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
