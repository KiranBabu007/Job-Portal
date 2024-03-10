import { View, Text, ScrollView, SafeAreaView } from 'react-native';
import { useRouter, Stack } from 'expo-router';

import { COLORS, icons, images, SIZES } from '../constants';
import { Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome } from '../components';

const Home = () => {

    const router = useRouter();

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: COLORS.lightwhite },
                    headerShadowVisible: false,
                    headerLeft: () => (
                        <View>
                            <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />
                        </View>
                    ),
                    headerRight: () => (
                        <View>
                            <ScreenHeaderBtn iconUrl={images.profile} dimension="100%" />
                        </View>
                    ),
                    headerTitle: ""
                }}
            />
        <ScrollView showsVerticalScrollIndicator={false}>
            <View
            style={{
                            flex: 1,
                            padding: SIZES.medium
                        }}>
                <Welcome />
                <Popularjobs />
                <Nearbyjobs />

            </View>

        </ScrollView>

        </SafeAreaView>
    )
}

export default Home;
