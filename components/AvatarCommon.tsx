import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

interface AvatarProps {
  name: string;
  size?: number;
  backgroundColor?: string;
}

const AvatarCommon: React.FC<AvatarProps> = ({ name, size = 40, backgroundColor = '#ccaabb' }) => {
  const initials = name ? name.charAt(0).toUpperCase() : '?';

  return (
    <View style={[styles.avatar, { width: size, height: size, borderRadius: size / 2, backgroundColor }]}>
      <Text style={[styles.avatarText, { fontSize: size / 2.5 }]}>{initials}</Text>
    </View>
  )
}

export default AvatarCommon

const styles = StyleSheet.create({
  avatar: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: {
    fontWeight: 'bold',
    color: '#fff', // White text color
  },
})
