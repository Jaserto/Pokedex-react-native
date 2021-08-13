import React from 'react'
import { Dimensions, FlatList } from 'react-native';
import { View,Text, Platform } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Loading } from '../components/Loading';
import { PokemonCard } from '../components/PokemonCard';
import { SearchInput } from '../components/SearchInput';
import { usePokemonSearch } from '../hooks/usePokemonSearch';
import {styles} from '../theme/appTheme'



const screenWidth = Dimensions.get('window').width

export const SearchScreen = () => {

    const { isFetching, simplePokemonList} = usePokemonSearch();

    const {top}=useSafeAreaInsets();

    
    if( isFetching ){
        return <Loading /> 

    }

    return (
        <View style={{
            flex: 1, 
        /*     marginTop:(Platform.OS === 'ios') ? top : top+10, */
            marginHorizontal: 20
        }}>
            <SearchInput
              style={{  
                  position: 'absolute',
                  zIndex: 999,
                  width:screenWidth - 40,
                  top: (Platform.OS === 'ios') ? top : top+30, 
                }}
            />
            
            <FlatList 
                    data={ simplePokemonList }
                    keyExtractor={ (pokemon) => pokemon.id }
                    showsVerticalScrollIndicator={ false }
                    numColumns={ 2 }

                    // Header
                    ListHeaderComponent={(
                        <Text style={{
                            ...styles.title,
                            ...styles.globalMargin,
                            paddingBottom: 10,
                            marginTop: (Platform.OS === 'ios') ? top + 60 : top+30,
                        }}>Pokedex </Text>
                    )}

                    renderItem={ ({ item }) => ( <PokemonCard pokemon={ item } /> )}

                

                    
                />
        </View>
    )
}

