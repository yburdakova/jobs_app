import { Text, TouchableOpacity, View, FlatList } from 'react-native';
import { SIZES } from '../../constants';
import styles from './jobstabs.style';

const TabButton = ({name, activeTab, onHandleSearchType}) => (
    <TouchableOpacity style={styles.btn(name, activeTab)} onPress={onHandleSearchType}>
        <Text style={styles.btnText(name, activeTab)}>{name}</Text>
    </TouchableOpacity>
)

const JobTabs = ({tabs, activeTab, setActiveTab}) => {
    return (
        <View style={styles.container}>
            <FlatList
                data={tabs}
                renderItem={({item}) => (
                    <TabButton
                        name={item}
                        activeTab={activeTab}
                        onHandleSearchType={()=>setActiveTab(item)}
                    />
                )}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={item=>item}
                contentContainerStyle={{columnGap:SIZES.small / 2}}
            />
        </View>
    );
};

export default JobTabs;