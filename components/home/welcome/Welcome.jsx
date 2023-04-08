import React, {useState} from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, FlatList  } from "react-native";
import { useRouter } from 'expo-router';

import styles from './welcome.style';
import { icons, SIZES, jobTypes} from '../../../constants';

const Welcome = () => {

    const [value, setValue] = useState('')

    const router = useRouter();

    return (
        <View>
            <View style={styles.container}>
                <Text style={styles.userName}>Hello Yana</Text>
                <Text style={styles.welcomeMessage}>Find your perfect job</Text>
            </View>

            <View style={styles.searchContainer}>
                <View style={styles.searchWrapper}>
                    <TextInput 
                        style={styles.searchInput}
                        value={value}
                        placeholder='What position are you looking for?'
                        placeholderTextColor='lightgray'
                        onChange={()=> {}}
                        
                    />
                </View>
                <TouchableOpacity style={styles.searchBtn}>
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
                        <TouchableOpacity>
                            <Text >
                                {item}
                            </Text>
                        </TouchableOpacity>
                    )}
                    keyExtractor={(item) => item}
                    contentContainerStyle={{ columnGap: SIZES.small }}
                />
            </View>

        </View>
    );
};

export default Welcome;