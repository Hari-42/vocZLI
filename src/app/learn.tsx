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
  const [correct, setCorrect] = useState(0);
  const [wrong, setWrong] = useState(0);
  const currentVoci = vociList[currentIndex];

  function handleNext(knew: boolean) {
    if (knew) setCorrect(c => c + 1);
    else setWrong(w => w + 1);
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
      <Text style={styles.stats}>✓ {correct}  ✗ {wrong}</Text>
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
        <View style={styles.row}>
          <Pressable style={[styles.button, styles.buttonWrong]} onPress={() => handleNext(false)}>
            <Text style={styles.buttonText}>Nicht gewusst</Text>
          </Pressable>
          <Pressable style={[styles.button, styles.buttonCorrect]} onPress={() => handleNext(true)}>
            <Text style={styles.buttonText}>Gewusst</Text>
          </Pressable>
        </View>
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
  stats: {
    fontSize: 14,
    color: '#888',
    marginBottom: 16,
  },
  row: {
    flexDirection: 'row',
    marginTop: 32,
    gap: 16,
  },
  button: {
    marginTop: 32,
    backgroundColor: '#005380',
    paddingHorizontal: 32,
    paddingVertical: 14,
    borderRadius: 12,
  },
  buttonCorrect: {
    marginTop: 0,
    backgroundColor: '#2e7d32',
  },
  buttonWrong: {
    marginTop: 0,
    backgroundColor: '#c62828',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
