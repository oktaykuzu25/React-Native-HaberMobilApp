import React from "react";
import { SafeAreaView,View,Text ,Image} from "react-native";
import styles from './NewsCard.style';


const NewsCard =({news}) => {

    return (
 <SafeAreaView style={styles.container}>
    <Image style={styles.image} source={{uri: news.imageUrl
    }} />

    <View style = {styles.innercontainer}> 
    <Text style={styles.title}>  {news.title}  </Text>
    <Text style={styles.description}> {news.description}  </Text>
    <Text style= {styles.author}> {news.author} </Text>
    </View>
 </SafeAreaView>
    );
}

export default NewsCard;