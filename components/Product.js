import Header from "./Header.js";
import { Text, View, TouchableHighlight, Image, StyleSheet } from 'react-native';

export default function Product (props) {
    const item = props.route.params.item;
    return(<View>
        <Header/>
        <View testID="product_container" style={styles.ContenedorProductoVista}>
            <Image testID="img_product" style={styles.ProductoImagen} source={{uri: item.images[0]}} alt="ProductImage" />
            <Text testID="detalle" style={styles.ProductoTitulo}>{item.title}</Text>
            <Text>Descripción: {item.description}</Text>
            <Text>Precio: {item.price}€</Text>
            <Text>Nota:{item.rating}</Text>
            <Text style={{marginBottom: 7}}>Stock: {item.stock}</Text>
            <TouchableHighlight style={styles.ProductoBoton} testID="volver" onPress={() => props.navigation.navigate('Home')}><Text style={styles.BotonInput}>Volver</Text></TouchableHighlight>
        </View>
    </View>
    )

}

const styles = StyleSheet.create({
    ContenedorProductoVista: {display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', margin:20},
    ProductoImagen: {width: 300 , height: 300},
    ProductoBoton: {backgroundColor: '#49792c', width: 100, heigh: 30, paddingRight: 7, paddingLeft: 30, marginLeft: 5},
    BotonInput: {color: '#FFFFFF', justifyContent: 'center'},
    ProductoTitulo: {fontSize: 25, margin: 5}
})