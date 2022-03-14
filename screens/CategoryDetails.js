import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CategoryDetails = () => {
  return (
    <>
       <View>
          <Image 
            source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/e/e5/2019-11-29_14_52_43_The_interior_of_a_tin_of_McKenzie_%26_Lloyds_Danish_Style_Butter_Cookies_in_the_Dulles_section_of_Sterling%2C_Loudoun_County%2C_Virginia.jpg'}}
            style={styles.img}
          /> 
       </View>
       <View style={styles.content}>
           <Text style={styles.header}>Cookies</Text>
       </View>
    </>
  )
}

export default CategoryDetails

const styles = StyleSheet.create({
    img: {
        height: 240,
        width: '100%'
    },
    content: {
        justifyContent: 'center',
        alignItems: 'center',
    }, 
    header:{
        fontSize: 18,
        fontWeight: '700',
        marginVertical: 15,
        letterSpacing: 1.5
    }
})