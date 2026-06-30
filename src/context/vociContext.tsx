import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Voci from '../models/voci';

const STORAGE_KEY = 'vocis';

interface VociContextType {
  vociList: Voci[];
  addVoci: (voci: Voci) => void;
  updateVoci: (term: string, updatedVoci: Voci) => void;
  removeVoci: (term: string) => void;
}

const VociContext = createContext<VociContextType | undefined>(undefined);

export function VociProvider({ children }: { children: ReactNode }) {
  const [vociList, setVociList] = useState<Voci[]>([
    { term: 'apple', translation: 'Apfel' },
    { term: 'house', translation: 'Haus' },
    { term: 'car', translation: 'Auto' },
    { term: 'book', translation: 'Buch' },
    { term: 'water', translation: 'Wasser' },
    { term: 'sun', translation: 'Sonne' },
    { term: 'dog', translation: 'Hund' },
    { term: 'cat', translation: 'Katze' },
  ]);

  useEffect(() => {
    async function loadVocis() {
      try {
        const stored = await AsyncStorage.getItem(STORAGE_KEY);
        if (stored !== null) {
          setVociList(JSON.parse(stored));
        }
        console.log('Vocis geladen');
      } catch (error) {
        console.error('Fehler beim Laden der Vocis:', error);
      }
    }
    loadVocis();
  }, []);

  useEffect(() => {
    async function saveVocis() {
      try {
        await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(vociList));
        console.log('Vocis gespeichert');
      } catch (error) {
        console.error('Fehler beim Speichern der Vocis:', error);
      }
    }
    saveVocis();
  }, [vociList]);

  function addVoci(voci: Voci) {
    setVociList(prev => [...prev, voci]);
  }

  function updateVoci(term: string, updatedVoci: Voci) {
    setVociList(prev => prev.map(v => (v.term === term ? updatedVoci : v)));
  }

  function removeVoci(term: string) {
    setVociList(prev => prev.filter(v => v.term !== term));
  }

  return (
    <VociContext.Provider value={{ vociList, addVoci, updateVoci, removeVoci }}>
      {children}
    </VociContext.Provider>
  );
}

export function useVoci() {
  const context = useContext(VociContext);
  if (!context) {
    throw new Error('useVoci muss innerhalb von VociProvider verwendet werden');
  }
  return context;
}
