import React from 'react'
import { View, Text } from 'react-native'
import ProfilePicture from '../ProfilePiccture'

const Story = ({image,name}) => {
      return (
            <View style={{paddingTop:5}}>
                 <ProfilePicture uri={image}/>
                 <Text style={{textAlign:'center',fontSize:16,fontWeight:'600'}}>{name}</Text>
            </View>
      )
}

export default Story
