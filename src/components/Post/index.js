import React from 'react'
import { View, Text } from 'react-native'
import Body from './components/Body'
import Header from './components/Header'
import Footer from './components/Footer'
const Post = ({post}) => {
      return (
            <View>
                  <Header imageUrl={post.img} name={post.name}/>
                  <Body imageUrl={post.img}/>
                  <Footer caption={post.caption} posted={post.posted} likeCount={post.likeCount}/>
            </View>
      )
}

export default Post
