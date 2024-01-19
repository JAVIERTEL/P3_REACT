import { Text, View, TouchableHighlight, FlatList, StyleSheet, Image } from 'react-native';
export default function Lista (props) {
    return(<View testID="productosresultados" style={styles.ContenedorLista}>
        <FlatList
        data={props.lista}
        renderItem={({item}) => {
            return(<View style={styles.ContenedorListaVista} >
                <Image style={styles.ListaImagen} source={{uri: item.images[0]}}/>
                <View testID={"item_" +item.id} style={styles.VistaLista}>
                    <Text testID={"title_" +item.id} style={{fontSize:20}}>{item.title}</Text>
                    <Text style={{margin:3}}>{item.description}</Text>
                    <TouchableHighlight testID={"button_" +item.id} style={styles.ListaBoton} 
onPress={() => props.navigation.navigate('Product', {item: item})}><Text style={styles.ListaInput}>Ver</Text></TouchableHighlight>
                </View>
            </View>) 
            }}
        />
    </View>
    )
}
const styles = StyleSheet.create({
    ContenedorLista: {display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'flex-start', padding:5},
    ContenedorListaVista: {display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding:5,
     maxHeight:300, maxWidth:250, backgroundColor: '#e0eec2', marginLeft: 50, marginRight: 50, margin:20},
    VistaLista: {display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'},
    ListaImagen: {width: 200 , height: 100, margin:5},
    ListaBoton: {backgroundColor: '#49792c', width: 70, height: 20, paddingRight: 7, paddingLeft: 25, marginLeft: 5},
    ListaInput: {color: '#FFFFFF', justifyContent: 'center'}
})