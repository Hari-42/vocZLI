import { StyleSheet, View, Text, FlatList, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import Voci from '@/models/voci';
import VociItem from '@/components/VociItem';

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

export default function HomeScreen() {
    const router = useRouter();

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>VocZLI</Text>
                <Text style={styles.subtitle}>Meine Vokabel-Lern-App</Text>
            </View>
            <FlatList
                data={vociList}
                keyExtractor={(item) => item.term}
                renderItem={({ item }) => <VociItem item={item} />}
                ListEmptyComponent={
                    <View style={styles.empty}>
                        <Text style={styles.emptyText}>Keine Vokabeln vorhanden</Text>
                    </View>
                }
            />
            <Pressable
                style={({ pressed }) => [styles.fab, { opacity: pressed ? 0.7 : 1 }]}
                onPress={() => router.push('/learn')}
            >
                <Ionicons name="play" size={28} color="#fff" />
            </Pressable>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        alignItems: 'center',
        paddingVertical: 24,
    },
    title: {
        fontSize: 36,
        fontWeight: 'bold',
    },
    subtitle: {
        fontSize: 18,
        marginTop: 8,
        color: '#555',
    },
    empty: {
        alignItems: 'center',
        marginTop: 48,
    },
    emptyText: {
        fontSize: 16,
        color: '#999',
    },
    fab: {
        position: 'absolute',
        bottom: 20,
        right: 20,
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#005380',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 6,
        elevation: 6,
    },
});