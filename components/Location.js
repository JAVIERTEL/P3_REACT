import { View, Text } from "react-native";
import {useParams} from "react-router-dom";

export default function Location(props) {
  let { productId } = useParams();

	return (<View style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}> 
    	<Text >Location es: {window.location.pathname}</Text>
		{productId && <Text >ProductId es: {productId}</Text>}
	</View>)
}
