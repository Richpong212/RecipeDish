import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Divider, Icon } from 'react-native-elements';


const HomeHeader = ({navigation}) => {
  
  return (
   <>  
    <SafeAreaView style={styles.container}>
       <TouchableOpacity 
          onPress={() => navigation.toggleDrawer()}
       >
        <Icon 
          name='menu-outline'
          type='ionicon'
          size={25}
        />
       </TouchableOpacity> 
        <Text style={styles.txt}>Home</Text>
    </SafeAreaView>
    <Divider width={0.7} />
  </> 
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 15,
    },
    txt: {
        fontWeight: '700',
        fontSize: 16, 
        marginLeft: 120,
    },
});
