import { useState } from 'react';
import { Text, View, TouchableOpacity, Image, Linking } from 'react-native';
import { icons } from '../../constants';
import styles from './footer.style';
import { favoriteJobsTemp, favoriteJobs } from '../../constants';

const Footer = ({url, job}) => {

    const [isLike, setIsLike] = useState(false);

    

    const favorite = () =>{

        if (isLike) {
            setIsLike(false);
            job.favorite = false;
            
        } else {
            setIsLike(true);
            job.favorite = true;            
        }
        
    }

    
    return (
        <View style={styles.container}>
            <TouchableOpacity 
                style={styles.likeBtn(isLike)}
                onPress={favorite}
            >
                <Image
                    source={icons.heartOutline}
                    resizeMode='contain'
                    style={styles.likeBtnImage(isLike)}
                />
            </TouchableOpacity>
            <TouchableOpacity 
                style={styles.applyBtn}
                onPress={()=> Linking.openURL(url)}
            >
                <Text style={styles.applyBtnText}>
                    Apply for job
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default Footer;