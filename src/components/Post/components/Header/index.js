import React from 'react'
import { View, Text } from 'react-native'
import ProfilePicture from '../../../ProfilePiccture'
import Icon from 'react-native-vector-icons/Entypo'
import styles from './styles'
const Header = ({imageUrl,name}) => {
      return (
            <View style={styles.container}>
                  <View style={styles.row}>
                  <ProfilePicture uri={imageUrl} size={40}/>
                  <Text style={styles.text}>{name}</Text>
                  </View>
                  <Icon name={'dots-three-vertical'} size={30}/>
            </View>
      )
}

export default Header
