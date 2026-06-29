import { View, Text, StyleSheet } from 'react-native';
import Voci from '@/models/voci';

type Props = {
  item: Voci;
};

export default function VociItem({ item }: Props) {
  return (
    <View style={styles.card}>
      <Text style={styles.term}>{item.term}</Text>
      <Text style={styles.translation}>{item.translation}</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 16,
    marginHorizontal: 16,
    marginVertical: 8,
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  term: {
    fontSize: 18,
    fontWeight: '600',
  },
  translation: {
    fontSize: 16,
    fontWeight: '300',
    color: '#555',
  },
});
