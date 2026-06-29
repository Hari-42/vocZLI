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
  },
});
