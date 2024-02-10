import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import Product from './product';



const host = ""
const token = ''

export default function App() {
  const [productsList, setProductsList] = useState([]);

  function fetchProducts(){
    fetch(`${host}/api/products/`, {
      headers: {
        "Authorization": `Token ${token}`
      }
    })
    .then(response => {
      return response.json()
    })
    .then(data => {
      setProductsList(data)
    })
  }
  fetchProducts()

  return (
    <View style={styles.container}>
      {productsList.map(product => (
        <Product name={product.name} price={product.price} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00f",
    width: "100%",
    height: "100%"
  }
})