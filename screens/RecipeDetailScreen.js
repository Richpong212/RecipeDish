import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React,{useState} from 'react';
import { Icon } from 'react-native-elements';

const RecipeDetailScreen = ({navigation, route}) => {
  const {name,image,category, name2, image2,category2, ingredients, ingredients2,formula1,formula2,time,time2 } = route.params;
  const [visible, setVisible] = useState(false)
  
  return (
    <>
      <View>
          <Image 
            source={{uri: image || image2}}
            style={{height: 250, width: '100%',resizeMode: 'cover'}}
          />
          <TouchableOpacity 
            style={styles.icon}
            onPress={() => navigation.goBack()}
          >
              <Icon 
                name='chevron-back-outline'
                type='ionicon'
                size={35}
                color='#2AD18A'
              />
          </TouchableOpacity>
          <View style={{alignContent: 'center', alignItems: 'center'}}>
             <Text style={styles.txt}>{name || name2}</Text>
             <Text style={{color: '#2AD18A', marginVertical: 10, fontWeight: '700'}}>{category || category2}</Text>
             <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Icon 
                  name='timer-outline'
                  type='ionicon'
                  size={20}
                /> 
                <Text style={{fontWeight: '700'}}> {time || time2}</Text>
             </View>
             <TouchableOpacity
               style={styles.btn}
               onPress = {() => {
                  setVisible(!visible)
                 }
                }
             >
                 <Text style={{color:'#2AD18A' }}>{!visible ? 'View Ingredients' : 'Checkout Details'}</Text>
             </TouchableOpacity>
             {!visible ? 
             <View style={{marginHorizontal: 40}}>
                <Text style={{lineHeight: 22}}>{formula1 || formula2}</Text>
             </View>
             :
             <View style={{marginHorizontal: 40}}>
                <Text style={{lineHeight: 45}}>{ingredients || ingredients2}</Text>
             </View>
             }
          </View>
      </View>
    </>
  );
};

export default RecipeDetailScreen;

const styles = StyleSheet.create({
    icon: {
       borderWidth: 1,
       height: 40,
       width: 40,
       borderRadius: 20, 
       position: 'absolute',
       top: 55,
       backgroundColor: 'white',
       borderColor: '#2AD18A',
       left: 10
    },
    txt: {
        fontWeight: '800',
        marginTop: 20,
        fontSize: 18
    },
    btn:{
        marginVertical: 15,
        borderColor: '#2AD18A',
        borderWidth: 1,
        paddingHorizontal: 70,
        paddingVertical: 10,
        borderRadius: 20,
    }
});
