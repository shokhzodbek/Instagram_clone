import React from 'react'
import { View, Text,Image } from 'react-native'
import styles from './styles'
const Body = ({imageUrl}) => {
      return (
            <View style={styles.container}>
                  <Image 
                  style={styles.image}
                  source={{uri:imageUrl}}/>
            </View>
      )
}

export default Body
