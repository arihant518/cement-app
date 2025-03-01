import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { CustomButtonProps } from '@/types'
import { colors, radius } from '@/constants/theme'
import { verticalScale } from '@/utils/styling'
import Loading from './Loading'

const CommonBox = ({
    style,
    onPress,
    loading = false,
    children
}: CustomButtonProps) => {
    if (loading) {
        return (
            <View style={[styles.button, style, { backgroundColor: 'transparent' }]}>
                <Loading />
            </View>
        )
    }
    return (
        <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
            {children}
        </TouchableOpacity>
    )
}

export default CommonBox

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.primary,
        borderRadius: radius._10,
        borderCurve: 'continuous',
        height: verticalScale(70),
        justifyContent: 'center',
        alignItems: 'center',
    }
})