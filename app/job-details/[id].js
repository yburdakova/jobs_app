import { View, Text, SafeAreaView, ScrollView, ActivityIndicator, RefreshControl, RefreshControlComponent } from 'react-native';
import { Stack, useRouter, useSearchParams } from 'expo-router';
import { useCallback, useState } from 'react';

import { COLORS, icons, SIZES } from '../../constants';
import useFetch from '../../hook/useFetch';
import ScreenHeaderBtn from '../../components/common/header/ScreenHeaderBtn';

const JobDetails = () => {
    const [refreshing, setRefreshing] = useState(false);

    const params = useSearchParams();
    const router = useRouter();

    const {data, isLoading, error, refetch} = useFetch('job-details', {
        job_id:params.id
    })
    const onRefresh = () => {}

    return (
        <SafeAreaView style={{flex:1, backgroundColor:COLORS.lightWhite}}>
            <Stack.Screen
                options={{
                    headerStyle: {backgroundColor:COLORS.lightWhite},
                    headerShadowVisible: false,
                    headerBackVisible:false,
                    headerLeft: () => (
                        <ScreenHeaderBtn
                            iconUrl={icons.left}
                            dimension='60%'
                            handlePress={()=> router.back()}
                        />
                    ),
                    headerRight: () => (
                        <ScreenHeaderBtn
                            iconUrl={icons.share}
                            dimension='60%'
                        />
                    ),
                    headerTitle:''
                }}
            >
                
            </Stack.Screen>
            <>
                <ScrollView 
                    showsVerticalScrollIndicator={false} 
                    refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>}
                >
                    {isLoading ?
                        (<ActivityIndicator size='large' color={ COLORS.primary }/>)
                    : error ?
                        (<Text>Something went wrong</Text>)
                    : data.length === 0 ?
                        (<Text>No data</Text>)
                    : (<View style={{ padding:SIZES.medium, paddingBottom: 100}}>
                            <Text>JOB DETAILS WILL BE HERE</Text>
                        </View>)
                    }
                </ScrollView>
            </>
        </SafeAreaView>
    );
};

export default JobDetails;