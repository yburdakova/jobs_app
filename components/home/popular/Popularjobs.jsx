import {useState} from 'react';
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';
import { useRouter } from 'expo-router';

import styles from './popularjobs.style';
import { COLORS, SIZES } from '../../../constants';
// import useFetch from '../../../hook/useFetch';
import PopularjobCard from './PopularjobCard';
import dataBase from '../../../api/fakeAPI';

const Popularjobs = () => {
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
                    Popular jobs
                </Text>
                <TouchableOpacity>
                    <Text style={styles.headerBtn}>
                        Show all
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.cardsContainer}>
                {isLoading ? 
                    (<ActivityIndicator size='large' color={COLORS.primary}/>)
                : error ? 
                    (<Text>Something wrong</Text>) 
                : ( <FlatList
                        data={dataBase.data}
                        renderItem={({ item }) => (
                            <PopularjobCard
                                item={item}
                                selectedJob={selectedJob}
                                handleCardPress={handleCardPress}
                            />
                        )}
                        keyExtractor={(item) => item.job_id}
                        contentContainerStyle={{ columnGap: SIZES.medium }}
                        horizontal
                    />
                )}
            </View>
        </View>
    );
};

export default Popularjobs;