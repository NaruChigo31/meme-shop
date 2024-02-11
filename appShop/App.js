import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useState } from 'react';
import Product from './product';



const host = "https://testing021024.pythonanywhere.com/"
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
    <ScrollView style={styles.page}>
      <View style={styles.footerHeader}>
        <View style={styles.shopName}>
          <Text style={styles.shopNameText}>Meme shop :3</Text>
        </View>

        <TouchableOpacity>
          <Image style={styles.imageStyle} source={require('./burgerMenu.png')}/>
        </TouchableOpacity>
      </View>
      <View style={styles.main}>
        {productsList.map(product => (
          <Product name={product.name} price={product.price} />
        ))}
      </View>
      <View style={styles.footerHeader}>
        <View style={styles.socialsIcons}>
          <TouchableOpacity>
            <Image style={styles.imageStyle} source={require('./discord.png')}/>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image style={styles.imageStyle} source={require('./youtube.png')}/>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image style={styles.imageStyle} source={require('./instagram.png')}/>
          </TouchableOpacity>
        </View>
        <View style={styles.socialsTextView}>
          <Text style={styles.socialsText}>+xxxxxxxxxx</Text>
          <Text style={styles.socialsText}>xxxx@gmail.com</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  page: {
    flexGrow: 1,
    backgroundColor: "#fff",
    width: "100%",
    height: "100%",
    gap:10,

  },
  footerHeader:{
    backgroundColor: "#190482",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    flexDirection:"row",
  },
  shopName:{
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#7752FE"
  },
  shopNameText:{
    color: "#fff",
    fontSize: 32
  },
  imageStyle:{
    width: 50,
    height: 50
  },
  socialsIcons:{
    flexDirection:"row",
    gap: 10
  },
  socialsTextView:{
    flexDirection:"column",
    gap: 10,
    justifyContent:"center",
    alignItems: "flex-end",

  },
  socialsText:{
    color: "#fff",
    fontSize: 14
  },
  main:{
    width:"90%",
    alignItems: "center",
    justifyContent: "top",
    gap: 10,
    padding: 10
  }
})