import React from 'react'
import { View, Text,FlatList } from 'react-native'
import Post from '../Post'
import Stories from '../Stories'
const data = [
       { 
         img:'https://www.talkwalker.com/images/2020/blog-headers/image-analysis.png',
         name:'Shokh',
         caption:'Life is The Best',
         likeCount:2004,
         posted:'6 minuts ago' ,
         id:0   
       },
       { 
       img:'https://www.talkwalker.com/images/2020/blog-headers/image-analysis.png',
       name:'Shokh',
       caption:'Life is The Best',
       likeCount:2004,
       posted:'6 minuts ago' ,
       id:1   
     },
     {
    img:'https://www.talkwalker.com/images/2020/blog-headers/image-analysis.png',
     name:'Shokh',
     caption:'Life is The Best',
     likeCount:2004,
     posted:'6 minuts ago' ,
     id:2   
   },
   { 
   img:'https://www.talkwalker.com/images/2020/blog-headers/image-analysis.png',
   name:'Shokh',
   caption:'Life is The Best',
   likeCount:2004,
   posted:'6 minuts ago' ,
   id:3   
 },
 { 
 img:'https://www.talkwalker.com/images/2020/blog-headers/image-analysis.png',
 name:'Shokh',
 caption:'Life is The Best',
 likeCount:2004,
 posted:'6 minuts ago'  ,
 id:4
}
]
const Feed = () => {
      return (
            
                <FlatList
                keyExtractor={item=>item.id}
                data={data}
                ListHeaderComponent={Stories}
                renderItem={({item})=><Post post={item}/>}
                />
      )
}

export default Feed
