import React from 'react'
import { StyleSheet, Dimensions } from 'react-native'

const styles = StyleSheet.create({
      container:{
        elevation:3
      },
      image:{
            width:Dimensions.get('window').width,
            height:Dimensions.get('window').width,
            resizeMode:'cover'
      }
})

export default styles


