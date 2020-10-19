import { Dimensions } from 'react-native';

const styles ={
    // background Color
    container: {
      flex: 1,
      backgroundColor: '#F2F2F2',
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
    // Ilmu Zakat Styles
    buttonback: {
      width : 120,
      height: 150,
      backgroundColor : 'white',
      justifyContent: 'center',
    },
    pagingsafearea: {
      height : Dimensions.get('window').height,
      width: Dimensions.get('window').width,
      paddingHorizontal : 20,
    },
    gambarpaging:{
      height:200,
      width: 330,
      alignSelf: 'center',
      marginVertical: 5,
  },
    // Font Styles
    judul: {
      fontWeight: 'bold',
      fontSize: 20,
      marginVertical:10,
    },
    fonttebal:{
      marginTop: 5,
      fontWeight: 'bold',
      fontSize: 14,
    },
    tulisan:{
      fontSize: 14,
      fontStyle: 'normal',
      color : 'black',
      textAlign:'justify',
    },
    tulisanA: {
      left: 15,
      fontSize: 14,
      fontStyle: 'normal',
      textAlign:'justify', 
    },
    fontmiring:{
      fontSize: 14,
      fontStyle: 'italic',
      textAlign: 'justify',
    },
    //Box Content Calculator
    boxkiri: {
      width:  150,
      height: 30,
      backgroundColor : '#108B5F',
      justifyContent : 'center',
      marginVertical : 2,
      paddingHorizontal : 5,
      borderTopLeftRadius : 10,
      borderBottomLeftRadius : 10,
    },
    boxtengah : {
      height: 30,
      width: 115,
      backgroundColor : 'white',
      justifyContent : 'center',
      marginVertical : 2,  
      paddingHorizontal : 5,
      borderTopRightRadius : 10,
      borderBottomRightRadius : 10,
    },
    boxkanan : {
      height:30,
      justifyContent : 'center',  
      paddingHorizontal : 5,
      marginVertical : 2,
    },
    boxkiri1 :{
      width:  150,
      height: 45,
      backgroundColor : '#108B5F',
      justifyContent : 'center',
      alignItems : 'center',
      marginVertical : 2,
      paddingHorizontal : 5,
      borderTopLeftRadius : 10,
      borderBottomLeftRadius : 10,  
    },
    boxtengah1 : {
      height: 45,
      width: 115,
      backgroundColor : 'white',
      justifyContent : 'center',
      marginVertical : 2,  
      paddingHorizontal : 5,
      borderTopRightRadius : 10,
      borderBottomRightRadius : 10,
    },
    boxkanan1 : {
      height:45,
      justifyContent : 'center',  
      paddingHorizontal : 5,
      marginVertical : 2,
    },
    bigbox : {
      width:  150,
      height: 64,
      backgroundColor : '#108B5F',
      justifyContent : 'center',
      marginVertical : 2,
      paddingHorizontal : 5,
      borderTopLeftRadius : 10,
      borderBottomLeftRadius : 10,
    },
    inputan : {
      textAlign : 'right',
      paddingRight : 5,  
      fontSize : 14,
      color : 'black',
    },
    white:{
      fontSize: 14,
      fontStyle: 'normal',
      color : 'white',
      textAlign:'left',
    },
    abu : {
      fontSize: 14,
      fontStyle: 'normal',
      color : '#575757',
      textAlign:'left',
    },
}

export default styles;