import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { InputProps } from '@/types'
import { colors, radius, spacingX } from '@/constants/theme'
import { verticalScale } from '@/utils/styling'

const CustomInput = (props: InputProps) => {
    return (
        <View style={[styles.container, props.containerStyle && props.containerStyle]}>

            {
                props.icon && props.icon
            }
            <TextInput
                style={[styles.input, props.inputStyle]}
                placeholder={props.placeholder}
                placeholderTextColor={colors.neutral400}
                ref={props.inputRef && props.inputRef}
            />
        </View>
    )
}

export default CustomInput

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: verticalScale(64),
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: colors.neutral900,
        borderRadius: radius._17,
        borderCurve: 'continuous',
        paddingHorizontal: spacingX._15,
        gap: spacingX._10
    },
    input: {
        flex: 1,
        color: colors.neutral900,
        fontSize: verticalScale(18),
    }
})