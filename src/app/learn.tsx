import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useState } from 'react';
import { useRouter } from 'expo-router';
import Voci from '@/models/voci';

const vociList: Voci[] = [
  { term: 'apple', translation: 'Apfel' },
  { term: 'house', translation: 'Haus' },
  { term: 'car', translation: 'Auto' },
  { term: 'book', translation: 'Buch' },
  { term: 'water', translation: 'Wasser' },
  { term: 'sun', translation: 'Sonne' },
  { term: 'dog', translation: 'Hund' },
  { term: 'cat', translation: 'Katze' },
];

export default function LearnScreen() {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showTranslation, setShowTranslation] = useState(false);
  const currentVoci = vociList[currentIndex];

  function handleNext() {
    if (currentIndex + 1 >= vociList.length) {
      router.back();
    } else {
      setCurrentIndex(currentIndex + 1);
      setShowTranslation(false);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.progress}>{currentIndex + 1} / {vociList.length}</Text>
      <View style={styles.card}>
        <Text style={styles.term}>{currentVoci.term}</Text>
        {showTranslation && (
          <Text style={styles.translation}>{currentVoci.translation}</Text>
        )}
      </View>
      {!showTranslation && (
        <Pressable style={styles.button} onPress={() => setShowTranslation(true)}>
          <Text style={styles.buttonText}>Übersetzung zeigen</Text>
        </Pressable>
      )}
      {showTranslation && (
        <Pressable style={styles.button} onPress={handleNext}>
          <Text style={styles.buttonText}>
            {currentIndex + 1 >= vociList.length ? 'Fertig' : 'Weiter'}
          </Text>
        </Pressable>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#f5f5f5',
  },
  progress: {
    fontSize: 16,
    color: '#555',
    marginBottom: 24,
  },
  card: {
    backgroundColor: '#fff',
    width: '100%',
    padding: 40,
    borderRadius: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  term: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  translation: {
    fontSize: 24,
    color: '#005380',
    marginTop: 16,
    textAlign: 'center',
  },
  button: {
    marginTop: 32,
    backgroundColor: '#005380',
    paddingHorizontal: 32,
    paddingVertical: 14,
    borderRadius: 12,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
