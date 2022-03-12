import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import HomeHeader from '../components/HomeHeader';
import { RecipeData } from '../assets/Data/RecipeData';



const Home = ({navigation}) => {
  return (
    <>
       <HomeHeader navigation={navigation} />
       <ScrollView>
            <MainContent 
              navigation={navigation}
             /> 
       </ScrollView>   
    </>
  );
};

//Commponents

const MainContent = ({navigation}) => (
    <>
    {RecipeData.map((recipe, index) => (
    <View 
       key={index}
       style={{flexDirection: 'row', 
                marginHorizontal: 15,
                justifyContent: 'space-evenly'
                }}>
         <Content1 
           name={recipe.name}
           image={recipe.image}
           category={recipe.category}
           ingredients={recipe.ingredients}
           formula1={recipe.formula1}
           navigation={navigation}
           time={recipe.time}
         />
         <Content2 
            name2={recipe.name2}
            image2={recipe.image2}
            category2={recipe.category2}
            ingredients2={recipe.ingredients2}
            formula2={recipe.formula2}
            navigation={navigation}
            time2={recipe.time2}
         />
    </View>
    ))}
    </>
)

const Content1 = ({name,image,category,ingredients,formula1, navigation,time}) => (

    <TouchableOpacity 
       style={styles.content}
       onPress={() => navigation.navigate('RecipeDetailScreen', {name,image,category,ingredients,formula1,time})}
     >
         <Image 
           source={{uri: image}}
           style={styles.img}
         />
         <View style={styles.detail}>
            <Text style={styles.txt}>{name}</Text>
            <View style={styles.cat}>
              <Text>{category}</Text> 
            </View>
         </View>
    </TouchableOpacity>
)

const Content2 = ({name2, image2,category2,ingredients2,formula2,navigation,time2}) => (
    <TouchableOpacity 
      style={styles.content}
      onPress={() => navigation.navigate('RecipeDetailScreen', {name2, image2,category2,ingredients2,formula2, time2})}
    >
         <Image 
           source={{uri: image2}}
           style={styles.img}
         />
         <View style={styles.detail}>
            <Text style={styles.txt}>{name2}</Text>
            <View style={styles.cat}>
               <Text>{category2}</Text> 
            </View>
         </View>
    </TouchableOpacity>
)

export default Home;

const styles = StyleSheet.create({
    content:{
        borderWidth: 1,
        borderRadius: 15,
        marginTop: 15,
    },
    detail: {
        alignItems: 'center',
        paddingBottom: 40,
        padding: 10,
    },
    img: {
        height: 180, 
        width: 170, 
        borderRadius: 15
    },
    cat: {
        position: 'absolute',
        bottom: 2,
    },
    txt: {
        fontWeight: '700',
    }
});
