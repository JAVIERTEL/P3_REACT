import { Text, View, Image, StyleSheet } from 'react-native';
export default function Header(){
    return (<View testID="cabecera" style={styles.ContenedorCabeceras}>
        <Image source={require("./../public/sun.webp")} testID="logo" alt="logo" style={styles.imagenCabecera}/>
        <Text testID='mensaje' style={styles.TextoCabecera}>Página de Javier González Pérez</Text>
    </View>);
};
const styles = StyleSheet.create({
    imagenCabecera: {width: 40 , height: 40, marginRight: 10, marginLeft: 10},
    ContenedorCabeceras: {display: 'flex', flexDirection: 'row', backgroundColor: '#2c5d0f', justifyContent: 'center', alignContent: 'center'},
    TextoCabecera: {margin: 5, fontSize: 20, color: 'black'}
  })
  