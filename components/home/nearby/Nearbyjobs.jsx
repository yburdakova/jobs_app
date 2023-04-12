import {useState} from 'react';
import { View, Text, TouchableOpacity,  ActivityIndicator } from 'react-native';
import { useRouter } from 'expo-router';

import styles from './nearbyjobs.style';
import { COLORS } from '../../../constants';
import useFetch from '../../../hook/useFetch';
import NearbyjobsCard from './NearbyjobsCard';
import {data} from '../../../api/fakeAPI'
import dataBase from '../../../api/fakeAPI';

const Nearbyjobs = () => {
    const router = useRouter();
    const isLoading = false;
    const error = false;

    // const {data, isLoading, error} = useFetch('search', {
    //     query: 'Frontend developer',
    //     num_pages: 1
    // })

    const [selectedJob, setSelectedJob] = useState();

    const handleCardPress = (item) => {
        router.push(`/job-details/${item.job_id}`);
        setSelectedJob(item.job_id);
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>
                    Nearby Jobs
                </Text>
                <TouchableOpacity>
                    <Text style={styles.headerBtn}>
                        Show all
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.cardsContainer}>
                {isLoading
                ? (<ActivityIndicator size='large' color={COLORS.primary}/>)
                : error ? (<Text>Something wrong</Text>) : (
                    dataBase.data?.map ((job) => (
                        <NearbyjobsCard 
                            job={job}
                            key={`nearby-job-${job.job_id}`}
                            handleNavigate={() => router.push(`/job-details/${job.job_id}`)}
                        />
                    ))
                )}
            </View>
        </View>
    );
};

export default Nearbyjobs;