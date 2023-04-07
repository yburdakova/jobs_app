import React, {useState} from 'react';
import { View, Text, ScrollView, SafeAreaView } from "react-native";
import { Stack, useRouter } from 'expo-router';

import {COLORS, icons, images, SIZES} from '../constants';


const Home = () => {

    const router = useRouter();

    return (
        <SafeAreaView style={{ flex:1, backgroundColor:COLORS.lightWhite }}>
            <Stack.Screen
                options={{
                    headerStyle:{ backgroundColor:COLORS.lightWhite},
                    headerShadowVisible: false,
                    headerTitle: '',
                    headerLeft: ()=> {return (<Text>Left Button</Text>)},
                    headerRight: ()=> {return (<Text>Right Button</Text>)},
                }}
            />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{flex:1, padding:SIZES.medium}}>
                    <Text>
                        Wellcome
                    </Text>
                    <Text>
                        Popular Jobs
                    </Text>
                    <Text>
                        Nearby Jobs
                    </Text>
                </View>
            </ScrollView>
        </SafeAreaView>
        
    );
};

export default Home;