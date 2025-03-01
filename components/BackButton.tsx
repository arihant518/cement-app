import { StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { BackButtonProps } from '@/types'
import { useRouter } from 'expo-router'
import { verticalScale } from '@/utils/styling'
import { colors, radius } from '@/constants/theme'

const BackButton = ({
    style,
    iconSize = 26,
} : BackButtonProps) => {
    const router = useRouter();
  
    return (
        <TouchableOpacity onPress={() => router.back()} style={[styles.button, style]}>
            <View style={[styles.arrow, { borderRightWidth: verticalScale(iconSize) }]} />
        </TouchableOpacity>
    );
}

export default BackButton;

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.white,
        alignSelf: 'flex-start',
        borderRadius: radius._6,
        padding: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    arrow: {
        width: 0,
        height: 0,
        borderTopWidth: 8,
        borderBottomWidth: 8,
        borderRightWidth: 12,
        borderTopColor: 'transparent',
        borderBottomColor: 'transparent',
        borderLeftColor: colors.black,
    }
});
