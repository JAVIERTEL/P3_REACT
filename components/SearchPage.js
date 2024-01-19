import Lista from './Lista.js'
import { useState } from 'react';
import { Text, View, TextInput, TouchableHighlight, StyleSheet } from 'react-native';
export default function SearchPage(props){
    const [filtro, setFiltro] = useState("");
    const [lista, setLista] = useState(props.theproducts);
    const _filtrado = (filtro) => {
        let filter=props.theproducts;
        if(filtro){
          filter=(filter.filter((element)=>{
              return(
                  element.title.toLowerCase().includes(filtro.toLowerCase())
              )
          }))
        }
        setLista(filter);
      }    
    return(<View>
        <Text testID="catalogo" style={{fontSize: 25, marginBottom: 3, display: 'flex', justifyContent: 'center', alignItems: 'center', 
        marginLeft:140}}>Catálogo</Text>
        <View className="container" style={styles.ContenedorVistaBuscador}>
            <View style={styles.VistaBuscar}>
                <Text style={{fontSize: 17, marginBottom: 3}}>Buscar: </Text>
                <TextInput testID="filtro" value={filtro} style={styles.FiltroInput} onChangeText={(text) => setFiltro(text)}></TextInput>
                <TouchableHighlight testID="buscador" style={styles.BuscadorBoton} onPress={() => _filtrado(filtro)}>
                    <Text style={styles.BotonTexto}>Buscar</Text></TouchableHighlight>
            </View>
        </View>
        <Lista lista={lista} navigation={props.navigation} theproducts={props.theproducts}/>
    </View>
    )     
}
const styles = StyleSheet.create({
    ContenedorVistaBuscador: {padding: 10, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'},
    VistaBuscar: {width: 400, height: 50, border: '2px solid #000000', display: 'flex', justifyContent: 'center',
     alignItems: 'center', flexDirection: 'column'},
    BuscadorBoton: {backgroundColor: '#49792c', width: 70, heigh: 20, paddingRight: 7, paddingLeft: 15, marginLeft: 5},
    BotonTexto: {color: '#FFFFFF', justifyContent: 'center'},
    FiltroInput: {backgroundColor: '#F5F5F5', width: 200, paddingRight: 7, paddingLeft: 10, marginLeft: 5}
  })