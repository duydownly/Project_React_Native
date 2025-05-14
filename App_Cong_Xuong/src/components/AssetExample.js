import { Text, View, Image } from 'react-native';
import styles from '../styles/AssetExampleStyles';

export default function AssetExample() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        sLocal files and assets can be imported by dragging and dropping them into the editor
      </Text>
      <Image style={styles.logo} source={require('../assets/images/snack-icon.png')} />
    </View>
  );
}
