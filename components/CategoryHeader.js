import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Divider, Icon } from 'react-native-elements';

const CategoryHeader = ({navigation}) => {
  return (
    <SafeAreaView>
     <View style={{flexDirection: 'row', alignItems: 'center'}}> 
       <TouchableOpacity 
         onPress={() => {}}
         style={{flexDirection: 'row', alignItems: 'center', marginLeft: 10,}}
         onPress= {() => navigation.navigate('Home')}
         >
          <Icon 
            name='chevron-back-outline'
            type='ionicon'
            size={25}
            color='#3779F6'
          />
          <Text style={{color: '#3779F6'}}>Home</Text>
       </TouchableOpacity>
       <Text style={styles.txt}>Category</Text>
    </View> 
    <Divider width={0.7} />
    </SafeAreaView>
  );
};

export default CategoryHeader;

const styles = StyleSheet.create({
    txt: {
        marginLeft: 100,
        fontWeight: '700',

    }
});
