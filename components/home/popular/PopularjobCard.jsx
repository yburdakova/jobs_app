import { View, Text, TouchableOpacity, Image } from "react-native";

import styles from "./popularjobcard.style";
import { checkImageURL } from "../../../utils";
import { defaulCompanyLogo } from "../../../constants";

const PopularJobCard = ({ item, selectedJob, handleCardPress }) => {
    return (
        <TouchableOpacity
        style={styles.container(selectedJob, item)}
        onPress={() => handleCardPress(item)}
        >
        <TouchableOpacity style={styles.logoContainer(selectedJob, item)}>
            <Image 
                source={{ uri: checkImageURL(item?.employer_logo) ? item.employer_logo : defaulCompanyLogo,}}
                resizeMode='contain'
                style={styles.logoImage}
            />
        </TouchableOpacity>
        <Text style={styles.companyName} numberOfLines={1}>
            {item.employer_name}
        </Text>

        <View style={styles.infoContainer}>
            <Text style={styles.jobName(selectedJob, item)} numberOfLines={1}>
            {item.job_title}
            </Text>
            <View style={styles.infoWrapper}>
                <Text style={styles.publisher(selectedJob, item)}>
                    {item?.job_publisher} -
                </Text>
                <Text style={styles.location}>{item.job_city? `${item.job_city}, ${item.job_state}`:`City not specified`}</Text>
                
            </View>
        </View>
        </TouchableOpacity>
    );
};

export default PopularJobCard;