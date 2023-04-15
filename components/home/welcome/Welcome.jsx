import React, {useState} from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, FlatList  } from "react-native";
import { useRouter } from 'expo-router';

import styles from './welcome.style';
import { icons, SIZES, jobTypes} from '../../../constants';


const Welcome = ({searchTerm, setSearchTerm, handlePress}) => {

    const [value, setValue] = useState('')
    const [activeJobType, setActiveJobType] = useState('Full-time')
    const router = useRouter();

    return (
        <View>
            <View style={styles.container}>
                <Text style={styles.userName}>Hello Yana</Text>
                <Text style={styles.welcomeMessage}>Let`s find your dream job!</Text>
            </View>

            <View style={styles.searchContainer}>
                <View style={styles.searchWrapper}>
                    <TextInput 
                        style={styles.searchInput}
                        value={searchTerm}
                        placeholder='What position are you looking for?'
                        placeholderTextColor='lightgray'
                        onChangeText={(text)=> setSearchTerm(text)}
                        
                    />
                </View>
                <TouchableOpacity style={styles.searchBtn} onPress={handlePress}>
                    <Image 
                        source={icons.search}
                        style={styles.searchBtnImage}
                    />
                </TouchableOpacity>
            </View>

            <View style={styles.tabsContainer}>
                <FlatList
                    data={jobTypes}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            style={styles.tab(activeJobType, item)}
                            onPress={()=> {
                                setActiveJobType(item);
                                router.push(`/search/${item}`)}}
                        >
                            <Text style={styles.tabText(activeJobType, item)} >
                                {item}
                            </Text>
                        </TouchableOpacity>
                    )}
                    keyExtractor={(item) => item}
                    contentContainerStyle={{ columnGap: SIZES.small }}
                    horizontal
                    
                />
            </View>

        </View>
    );
};

export default Welcome;