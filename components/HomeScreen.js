import Header from './Header.js';
import LoadingSpinner from './LoadingSpinner.js';
import SearchPage from './SearchPage.js';
import config from './config/config.js';
import { mockdata } from './constants/products.js';
import { useState } from 'react';
import { useEffect } from 'react';
import { View} from 'react-native';

function HomeScreen(props) {
  const [loading, setLoading] = useState(true);
  const [getProductos, setProductos] = useState([]);

  const download = async () => {
    let ListaProductos;
    if(config.use_server){
			const res = await fetch(config.server_url);
			ListaProductos = await res.json();
      setProductos(ListaProductos.products);
    }else{
      ListaProductos = mockdata.products;
      setProductos(ListaProductos);
    }
	}
  useEffect(() => {
    async function fetchData() {
      await download();
				
			setTimeout(()=>{
				setLoading(false);
			},500);		
    }

    fetchData();
  }, []);
  return (
    <View>
      {loading 
      ? <LoadingSpinner/>
      : <View>
          <Header/> 
          <SearchPage theproducts={getProductos} navigation={props.navigation}/>
        </View>
      }
    </View>
  );
}
export default HomeScreen;

