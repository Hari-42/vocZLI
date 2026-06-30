import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import Voci from '@/models/voci';

type Props = {
  item: Voci;
};

export default function VociItem({ item }: Props) {
  const router = useRouter();

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => router.push(`/editVoci?term=${encodeURIComponent(item.term)}`)}
    >
      {item.imageUri ? (
        <Image source={{ uri: item.imageUri }} style={styles.thumbnail} />
      ) : (
        <View style={[styles.thumbnail, styles.placeholder]} />
      )}
      <View style={styles.textContainer}>
        <Text style={styles.term}>{item.term}</Text>
        <Text style={styles.translation}>{item.translation}</Text>
      </View>
    </TouchableOpacity>
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
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  thumbnail: {
    width: 60,
    height: 60,
    borderRadius: 12,
  },
  placeholder: {
    backgroundColor: '#eee',
  },
  textContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 16,
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
