
import { View, Text, TouchableOpacity, Image } from "react-native";

import styles from "./nearbyjobscard.style";
import { checkImageURL } from "../../../utils";
import {data} from '../../../api/jobit.json';
import { defaulCompanyLogo } from "../../../constants";


const NearbyJobCard = ({ job, handleNavigate }) => {

    return (
        <TouchableOpacity style={styles.container} onPress={handleNavigate}>
        <TouchableOpacity style={styles.logoContainer}>
            <Image 
                source={{ uri: checkImageURL(job.employer_logo) ? job.employer_logo : defaulCompanyLogo}}
                resizeMode='contain'
                style={styles.logoImage}
            />
        </TouchableOpacity>

        <View style={styles.textContainer}>
            <Text style={styles.jobName} numberOfLines={1}>
            {job?.job_title}
            </Text>

            <Text style={styles.jobType}>{job?.job_employment_type}</Text>
        </View>
        </TouchableOpacity>
    );
};

export default NearbyJobCard;