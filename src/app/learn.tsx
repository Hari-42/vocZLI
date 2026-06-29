import { View, Text, StyleSheet } from 'react-native';
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
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Vokabeln lernen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
  },
});
