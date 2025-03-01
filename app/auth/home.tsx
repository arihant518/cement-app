import { StyleSheet, View } from 'react-native'
import React from 'react'
import ScreenWrapper from '@/components/ScreenWrapper'
import CommonBox from '@/components/CommonBox'
import Typo from '@/components/Typo'
import { colors, spacingY } from '@/constants/theme'
import { useRouter } from 'expo-router'
import BackButton from '@/components/BackButton'
import AvatarCommon from '@/components/AvatarCommon'

const Home = () => {
    const router = useRouter();

    return (
        <ScreenWrapper>

            <View style={styles.header}>
                <BackButton iconSize={28} />
                <Typo size={20} fontWeight="700" color={colors.black}>
                    Home Page
                </Typo>
                <AvatarCommon name="Arihant" size={40} backgroundColor={colors.gray} />
            </View>


            <View style={styles.container}>
                <View style={styles.buttonContainer}>
                    <CommonBox
                        style={StyleSheet.flatten([styles.box, { backgroundColor: colors.blue }])}
                    >
                        <Typo size={22} color={'white'} fontWeight={"600"}>
                            MR
                        </Typo>
                    </CommonBox>

                    <CommonBox
                        style={StyleSheet.flatten([styles.box, { backgroundColor: colors.red }])}
                    >
                        <Typo size={22} color={'white'} fontWeight={"600"}>
                            OR
                        </Typo>
                    </CommonBox>

                    <CommonBox
                        onPress={() => router.push('/reviewRecords/RrMainPage')}
                        style={StyleSheet.flatten([styles.box, { backgroundColor: colors.green }])}
                    >
                        <Typo size={22} color={'white'} fontWeight={"600"}>
                            RR
                        </Typo>
                    </CommonBox>
                </View>
            </View>
        </ScreenWrapper>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: spacingY._7,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        paddingVertical: 15,
        paddingHorizontal: spacingY._20,
        backgroundColor: colors.lightGray, // Adjust color as needed
        borderBottomWidth: 1,
        borderBottomColor: colors.gray,
    },
    buttonContainer: {
        width: '80%',  // Adjust for better responsiveness
    },
    box: {
        width: '100%',  // Ensures equal width for all buttons
        paddingVertical: 15,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 18,
        marginBottom: 50, // Adds gap between buttons
    },
})
