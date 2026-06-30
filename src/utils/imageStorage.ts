import { File, Paths } from 'expo-file-system';

export async function copyImageToAppDirectory(sourceUri: string): Promise<string> {
  const fileName = `${Date.now()}.jpg`;
  const sourceFile = new File(sourceUri);
  const destinationFile = new File(Paths.document, fileName);
  sourceFile.copy(destinationFile);
  return destinationFile.uri;
}

export function deleteImage(uri?: string) {
  if (!uri) return;
  try {
    const file = new File(uri);
    if (file.exists) {
      file.delete();
    }
  } catch (error) {
    console.error('Fehler beim Löschen des Bildes:', error);
  }
}
