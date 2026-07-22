import {Share} from 'react-native';

export async function shareText(title: string, message: string) {
  try {
    await Share.share({title, message});
  } catch {
    // Share sheet dismissed or unavailable — nothing to recover.
  }
}
