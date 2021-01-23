import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const styles = StyleSheet.create({
      caption:{
            margin:3
      },
      posted:{
            margin:3,
            color:'#8c8c8c'
      },
      liked:{
            margin:3,
            fontWeight:'bold'
      },
      row:{
            flexDirection:'row',
            margin:10,
            justifyContent:'space-between',
            alignItems:'center'
      },
      rows:{
            flexDirection:'row',
            width:120,
            justifyContent:'space-between'
      }
})
export default styles


