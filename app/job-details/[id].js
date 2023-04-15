import { View, Text, SafeAreaView, ScrollView, ActivityIndicator, RefreshControl, RefreshControlComponent } from 'react-native';
import { Stack, useRouter, useSearchParams } from 'expo-router';
import { useCallback, useState } from 'react';

import { COLORS, icons, jobTabs, SIZES } from '../../constants';
import useFetch from '../../hook/useFetchTemp';
import ScreenHeaderBtn from '../../components/common/header/ScreenHeaderBtn';
import Company from '../../components/jobdetails/Company';
import JobTabs from '../../components/jobdetails/JobTabs';
import Specifics from '../../components/jobdetails/Specifics';
import About from '../../components/jobdetails/About';
import Footer from '../../components/jobdetails/Footer';



const JobDetails = () => {
    const [refreshing, setRefreshing] = useState(false);
    const [activeTab, setActiveTab] = useState(jobTabs[0]);


    const params = useSearchParams();
    const router = useRouter();

    const {data, isLoading, error, refetch} = useFetch('job-details', {
        job_id:params.id
    }) 
    const onRefresh = () => {}

    

    const displayTabContent = () => {
        switch (activeTab) {
            case 'About':
                return <About 
                            info={data[0].job_description ?? 'No data provided'}/>
            case 'Qualifications':
                return <Specifics
                            title='Qualifications' 
                            points ={data[0].job_highlights?.Qualifications ?? ['N/A']}/>
            case 'Responsibilites':
                return <Specifics
                            title='Responsibilites' 
                            points ={data[0].job_highlights?.Responsibilities ?? ['N/A']}/>
        }
    }

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
                            <Company
                                companyLogo={data[0].employer_logo}
                                jobTitle={data[0].job_title}
                                companyName={data[0].employer_name}
                                location={data[0].job_country}
                            />
                            <JobTabs
                                tabs={jobTabs}
                                activeTab={activeTab}
                                setActiveTab={setActiveTab}
                            />
                            {displayTabContent()}
                        </View>)
                    }
                </ScrollView>
                <Footer job={data[0]} url={data[0]?.job_google_link ?? 'https://careers.google.com/jobs/results/?distance=50&location=Raleigh,%20NC,%20USA&q=Frontend%20developer'}/>
            </>
        </SafeAreaView>
    );
};

export default JobDetails;