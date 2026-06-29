import { StyleSheet, View, Text, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
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
});