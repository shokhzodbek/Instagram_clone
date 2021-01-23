import React from 'react'
import { View, Text, FlatList } from 'react-native'
import Story from '../Story'
const data = [
      {     id:0,
            imageUrl:'https://www.talkwalker.com/images/2020/blog-headers/image-analysis.png',
            name:"Valie"
      },
      {     id:1,
            imageUrl:'https://www.talkwalker.com/images/2020/blog-headers/image-analysis.png',
            name:"Kod"
      },
      {     id:2,
            imageUrl:'https://www.talkwalker.com/images/2020/blog-headers/image-analysis.png',
            name:"Lol"
      },
      {     id:3,
            imageUrl:'https://www.talkwalker.com/images/2020/blog-headers/image-analysis.png',
            name:"Mol"
      }, 
      {     id:4,
            imageUrl:'https://www.talkwalker.com/images/2020/blog-headers/image-analysis.png',
            name:"Con"
      },
]
const Stories = () => {
      return (
            <View style={{marginBottom:10}}>
              <FlatList   
                showsHorizontalScrollIndicator={false}
                data={data}
                keyExtractor={item=>item.id}
                horizontal
                renderItem={({item})=><Story image={item.imageUrl} name={item.name}/>}
                 />
            </View>
      )
}

export default Stories
