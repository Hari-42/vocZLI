import { File, Paths } from 'expo-file-system';
import { ImageManipulator, SaveFormat } from 'expo-image-manipulator';

export async function copyImageToAppDirectory(sourceUri: string): Promise<string> {
  const context = ImageManipulator.manipulate(sourceUri);
  context.resize({ width: 800 });
  const image = await context.renderAsync();
  const result = await image.saveAsync({ compress: 0.7, format: SaveFormat.JPEG });

  const fileName = `${Date.now()}.jpg`;
  const sourceFile = new File(result.uri);
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
