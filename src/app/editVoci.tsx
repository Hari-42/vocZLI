import { useRouter, useLocalSearchParams } from 'expo-router';
import { Text } from 'react-native';
import VociDetail from '@/components/VociDetail';
import { useVoci } from '@/context/vociContext';
import Voci from '@/models/voci';

export default function EditVociScreen() {
  const router = useRouter();
  const { term } = useLocalSearchParams<{ term: string }>();
  const { vociList, updateVoci, removeVoci } = useVoci();

  const voci = vociList.find(v => v.term === term);

  if (!voci) {
    return <Text>Vokabel nicht gefunden</Text>;
  }

  function handleSave(updatedVoci: Voci) {
    updateVoci(voci!.term, updatedVoci);
    router.back();
  }

  function handleDelete() {
    removeVoci(voci!.term);
    router.back();
  }

  return (
    <VociDetail
      initialVoci={voci}
      onSave={handleSave}
      onCancel={() => router.back()}
      onDelete={handleDelete}
    />
  );
}
