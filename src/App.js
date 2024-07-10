import React from "react";
import { SafeAreaView,View,Text, FlatList, StyleSheet ,ScrollView, Image, Dimensions} from "react-native";
import news_data from './news_data.json';
import NewsCard  from "./components/NewsCard";
import news_banner_data from './news_banner_data.json';


const App =() =>{

 const renderıtems = ({item})=> <NewsCard  news={item} />
 
 
    return(
     <SafeAreaView style = {styles.container}>
        
 
        <View>
         <Text style={styles.headr_title}> Haber Mobil App</Text>
            <FlatList ListHeaderComponent={()=> <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            { news_banner_data.map(bannerNews => <Image  style={styles.banner_image} source={{uri: bannerNews.imageUrl}}/>)}
</ScrollView> } keyExtractor={(item,index) => item.u_id.toString()} data={news_data} renderItem={renderıtems}/>
        </View>
     </SafeAreaView>

    );
}


const styles = StyleSheet.create({


    container :{
        flex : 1,
        backgroundColor : '#eceff1',


    },
    banner_image : {
        height : Dimensions.get('window').height /5,
        width : Dimensions.get ('window').width /2,
    },
    headr_title : {
        fontSize : 18,
        fontWeight :'bold',
        margin : 10,
    }
})

export default App;