import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ScreenWrapper from '@/components/ScreenWrapper'
import BackButton from '@/components/BackButton'
import Typo from '@/components/Typo'
// import UserAvatar from 'react-native-user-avatar';
import { colors, spacingY } from '@/constants/theme'
import PieChartCommon from '@/components/PieChartCommon'
import AvatarCommon from '@/components/AvatarCommon'

const InspectorCompliance = () => {
    return (
        <ScreenWrapper>
            {/* Header Section */}
            <View style={styles.header}>
                <BackButton iconSize={28} />
                <Typo size={20} fontWeight="700" color={colors.black}>
                    RR Review Records
                </Typo>
                <AvatarCommon name="Arihant" size={40} backgroundColor={colors.gray} />
            </View>

            <PieChartCommon />
        </ScreenWrapper>
    )
}

export default InspectorCompliance

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        paddingVertical: 15,
        paddingHorizontal: spacingY._20,
        backgroundColor: colors.green, // Adjust color as needed
        borderBottomWidth: 1,
        borderBottomColor: colors.gray,
    },
})