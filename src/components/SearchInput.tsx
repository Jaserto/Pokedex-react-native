import React from 'react'
import { useState } from 'react'
import { Platform } from 'react-native'
import { StyleProp } from 'react-native'
import { ViewStyle } from 'react-native'
import { StyleSheet, View, Text } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/Ionicons'

interface Props {
    style?: StyleProp<ViewStyle>
}



export const SearchInput = ({ style }: Props) => {
    
    const [textValue, setTextValue] = useState('');
    
    return (
        <View style={{ 
            ...styles.container,
            ...style as any}
        }>
            <View style={styles.textBackground}>
                <TextInput 
                    placeholder="Buscar Pokemon"
                    style= {{
                        ...styles.textInput,
                        top: (Platform.OS === 'ios') ? 0 : 2
                    }}
                    autoCapitalize="none"
                    autoCorrect ={false}
                    value={textValue}
                    onChangeText={setTextValue}
                />
                <Icon 
                    name="search-outline"
                    color="grey"
                    size={30}
                />
            </View>
        </View>
    )
}


const styles =  StyleSheet.create({
    container: {
       
    },
    textBackground: {
        backgroundColor: '#F3F1F3',
        borderRadius: 50,
        height: 40,
        paddingHorizontal:20,
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    textInput: {
        flex:1,
        fontSize: 18
    }
});