import { StyleSheet, Text, TouchableOpacity, View, KeyboardAvoidingView, Platform, ScrollView, Keyboard } from 'react-native';
import React from 'react';
import ScreenWrapper from '@/components/ScreenWrapper';
import { colors, spacingY } from '@/constants/theme';
import { verticalScale } from '@/utils/styling';
import BackButton from '@/components/BackButton';
import Typo from '@/components/Typo';
import CustomInput from '@/components/CustomInput';
import ButtonCommon from '@/components/ButtonCommon';
import { useRouter } from 'expo-router';
import Animated from 'react-native-reanimated';
import { TouchableWithoutFeedback } from 'react-native';

const Login = () => {
    const router = useRouter();

    return (
        <ScreenWrapper>
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={{ flex: 1 }}
            >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <ScrollView contentContainerStyle={styles.scrollContainer} keyboardShouldPersistTaps="handled">
                        <View style={styles.container}>
                            <BackButton iconSize={28} />
                            <View style={{ gap: 5, marginTop: spacingY._20 }}>
                                <Typo size={28} fontWeight={"700"}>Hey,</Typo>
                                <Typo size={28} fontWeight={"700"}>Welcome Back!</Typo>
                            </View>

                            {/* <--------form --------> */}
                            <View style={styles.form}>
                                <CustomInput placeholder='Enter email address' />
                                <CustomInput placeholder='Password' />
                            </View>
                            <View style={styles.form}>
                                <ButtonCommon onPress={() => router.push('/auth/otp')} loading={false}>
                                    <Typo size={22} color={colors.neutral900} fontWeight={"600"}>Login</Typo>
                                </ButtonCommon>
                            </View>
                        </View>

                        {/* Prevents image from moving up when keyboard appears */}
                        <View style={styles.imageContainer}>
                            <Animated.Image
                                source={require('../../assets/images/cement_plan.png')}
                                style={styles.welcomeImage}
                                resizeMode='contain'
                            />
                        </View>
                    </ScrollView>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </ScreenWrapper>
    );
};

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: spacingY._30,
        paddingHorizontal: spacingY._20
    },
    scrollContainer: {
        flexGrow: 1,
        justifyContent: "space-between",
    },
    welcomeImage: {
        width: '100%',
        height: verticalScale(300),
        alignSelf: 'center',
        marginTop: verticalScale(70),
    },
    imageContainer: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    form: {
        gap: spacingY._20
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 5
    },
    footerText: {
        textAlign: 'center',
        color: colors.black,
        fontSize: verticalScale(15)
    }
});
