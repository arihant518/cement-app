import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import ScreenWrapper from '@/components/ScreenWrapper'
import Typo from '@/components/Typo'
import { colors, spacingX, spacingY } from '@/constants/theme'
import { verticalScale } from '@/utils/styling'
import ButtonCommon from '@/components/ButtonCommon'
import Animated, { FadeIn, FadeInDown } from 'react-native-reanimated'
import { useRouter } from 'expo-router'

const Welcome = () => {
  const router = useRouter()
  return (
    <ScreenWrapper>
      <View style={styles.container}>
        {/* <--------login button -> */}

        <View>
          <TouchableOpacity onPress={() => router.push('/auth/login')} style={styles.loginButton}>
            <Typo fontWeight={"500"}>Sign in</Typo>
          </TouchableOpacity>

          <Animated.Image
            entering={FadeIn.duration(2000)}
            source={require('../../assets/images/cement_plan.png')}
            style={styles.welcomeImage}
            resizeMode='contain' />
        </View>

        {/* <-------footer ----> */}

        <View style={styles.footer}>
          <Animated.View entering={FadeInDown.duration(1000).delay(200).springify().damping(12)} style={{ alignItems: 'center', marginBottom: spacingY._15 }}>
            <Typo fontWeight={"500"}>Welcome to</Typo>
            <Typo size={30} fontWeight={"700"}>Cement Store</Typo>
          </Animated.View>

          <Animated.View entering={FadeInDown.duration(1000).springify().damping(12)} style={styles.buttonContainer}>
            <ButtonCommon onPress={() => router.push('/auth/home')} loading={false}>
              <Typo size={22} color={colors.neutral900} fontWeight={"600"}>Get Started</Typo>
            </ButtonCommon>
          </Animated.View>
        </View>
      </View>
    </ScreenWrapper>
  )
}

export default Welcome

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingTop: spacingY._7,
  },
  welcomeImage: {
    width: '100%',
    height: verticalScale(300),
    alignSelf: 'center',
    marginTop: verticalScale(100),
  },

  loginButton: {
    alignSelf: 'flex-end',
    marginRight: spacingX._20,
  },
  footer: {
    backgroundColor: colors.lightPink,
    alignItems: 'center',
    paddingVertical: verticalScale(30),
    paddingHorizontal: spacingX._15,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -8 },
    shadowOpacity: 0.2,
    shadowRadius: 20,
    elevation: 12,
  },
  buttonContainer: {
    width: '100%',
    paddingHorizontal: spacingX._25,
  }
})