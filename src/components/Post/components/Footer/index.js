import React,{useState,useEffect} from 'react'
import { View, Text, Pressable, TouchableOpacity } from 'react-native'
import styles from './styles'
import Heart from 'react-native-vector-icons/AntDesign'
import Comment from 'react-native-vector-icons/Fontisto'
import Plane from 'react-native-vector-icons/Ionicons'
import Bookmark from 'react-native-vector-icons/Fontisto'
const Footer = ({posted,caption,likeCount:like}) => {
      const [liked,setLiked] = useState(false)
      const [likeCount,setLikeCount] = useState(0)
      const hand = ()=>{
            setLiked(!liked)
            const amount = liked?1:-1;
            setLikeCount(likeCount+amount)
            

      }
      useEffect(() => {
           setLikeCount(like)
      }, [])

      return (
            <View>
                  <View style={styles.row}>
                  <View style={styles.rows}>
                        <TouchableOpacity onPress={hand}>
                    {liked ?<Heart 
                        name="hearto" 
                        size={25}
                        color="grey"
                        />:<Heart 
                        name="heart" 
                        size={25}
                        color="red"
                        />}
                        </TouchableOpacity>
                        
                        <Comment name="comment" size={25}/>
                        <Plane name={'paper-plane-outline'} size={25}/>

                  </View>
                    <Bookmark name="bookmark" size={25}/>
                  </View>

                  <Text style={styles.liked}>{likeCount} Liked</Text>
                  <Text style={styles.caption}>{caption}</Text>
                  <Text style={styles.posted}>{posted}</Text>
            </View>
      )
}

export default Footer
