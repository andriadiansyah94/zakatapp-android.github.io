import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { Icon } from 'native-base';
import { 
  StyleSheet, 
  ScrollView, 
  Text, 
  TextInput, 
  View, 
  SafeAreaView, 
  TouchableOpacity, 
  Image, 
  Dimensions, 
  Linking,
  Alert } from 'react-native';

export default class beranda extends Component {
    render(){
        return (
        <View style={styles.container}>
          <StatusBar backgroundColor= 'white'/>
          <View style={{
            height: 90,
            width: Dimensions.get('window').width,
            backgroundColor: '#108B5F',
            justifyContent: 'flex-start',
            flexDirection: 'row'
          }}>
            <View style={{
              height:30,
              width: 30,
              top  :45,
              left : 30,
              justifyContent :'center'            
              }}>
              <Image source={require('../src/Content/icon.png')} style={{
                height:30,
                width: 30,
                }}/> 
                </View>
                <View style={{
              height:30,
              width: 270,
              top  :45,
              left : 30,
              marginLeft : 15,
              justifyContent :'center'            
              }}>
                <Text style={{
                fontWeight: 'bold',
                fontSize: 20,
                color: 'white'}}>Aplikasi Perhitungan Zakat</Text>
                </View>
          </View>
        
          <View>
              <SafeAreaView style={{
                height: 250,
                width: Dimensions.get('window').width,
                paddingVertical : 5,
              }}>
              <Image source={require('../src/Home/gambarhome4.jpg')} style={{
                height: 240,
                width: Dimensions.get('window').width,
                alignSelf: 'center',
            }}/>
              <Text style={{
                fontSize: 20,
                position: 'absolute',
                bottom: 40,
                left: 20,
                color: 'white',}}>Selamat Datang,
              </Text>
              <Text style={{
                fontSize: 20,
                position: 'absolute',
                bottom: 10,
                left: 20,
                color: 'white',}}>
                Aplikasi Perhitungan Zakat
              </Text>
              </SafeAreaView>
          </View>

          <ScrollView 
          showsVerticalScrollIndicator={false}
          >
            <View style={{
            flexDirection: 'row',
            justifyContent: 'center'
            }}>  
            <TouchableOpacity style={{
              backgroundColor : 'white',
              justifyContent : 'center',
              alignItems : 'center',
              height : 80,
              borderRadius: 12,    
              marginRight : 20,
            }}onPress={() => this.props.navigation.navigate('Ilmuzakat')}>
              <Image source={require('../src/Content/study.png')} style={{ height : 40, width : 40,}}/>
              <Text>   Pelajari Tentang Zakat   </Text>
            </TouchableOpacity>

            <TouchableOpacity style={{
              backgroundColor : 'white',
              justifyContent : 'center',
              alignItems : 'center',
              height : 80,
              borderRadius: 12,    
            }}onPress={() => this.props.navigation.navigate('Faqzakat')}>
              <Image source={require('../src/Content/question.png')} style={{ height : 40, width : 40,}}/>
              <Text>   FAQ Zakat   </Text>
            </TouchableOpacity>
            </View>
  
            <View style={{
                height :10,
                marginTop : 5,
                width : Dimensions.get('window').width,
                backgroundColor: 'white',
                alignItems: 'flex-start',
                justifyContent: 'center',
            }}>
            </View>
            
          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            }}> 
              <View style={styles.boxContent}>
              <TouchableOpacity 
              style={styles.boxContentClick}
              onPress={() => this.props.navigation.navigate('Kalku1')}> 
                <Image source={require('../src/Content/gandum.png')} style={styles.gambaricon}/>
                <Text style={styles.TextContent}> Zakat Fitrah dan Fidyah</Text>
                </TouchableOpacity>
                </View>

              <View style={styles.boxContent}> 
              <TouchableOpacity
              style={styles.boxContentClick}
              onPress={() => this.props.navigation.navigate('Kalku2')}> 
                <Image source={require('../src/Content/coin.png')} style={styles.gambaricon}/>
                <Text style={styles.TextContent}> Zakat Emas dan Perak</Text>
                </TouchableOpacity>
                </View>

              <View style={styles.boxContent}>
              <TouchableOpacity
              style={styles.boxContentClick}
              onPress={() => this.props.navigation.navigate('Kalku3')}>
                <Image source={require('../src/Content/profesi.png')} style={styles.gambaricon}/>
                <Text style={styles.TextContent}> Zakat Profesi / Penghasilan</Text>
                </TouchableOpacity>
                </View>  
               
          </View>
          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}>
            <View style={styles.boxContent}> 
            <TouchableOpacity
              style={styles.boxContentClick}
              onPress={() => this.props.navigation.navigate('Kalku4')}>
              <Image source={require('../src/Content/dompet.png')} style={styles.gambaricon}/>
              <Text style={styles.TextContent}> Zakat Perdagangan</Text>
              </TouchableOpacity>
             </View> 

            <View style={styles.boxContent}> 
            <TouchableOpacity
              style={styles.boxContentClick}
              onPress={() => this.props.navigation.navigate('Kalku5')}>
              <Image source={require('../src/Content/sapi.png')} style={styles.gambaricon}/>
              <Text style={styles.TextContent}> Zakat Peternakan</Text>
              </TouchableOpacity>
              </View>

            <View style={styles.boxContent}> 
            <TouchableOpacity style={styles.boxContentClick}
              onPress={buttonkaget}>
              <Image source={require('../src/Content/tanaman.png')} style={styles.gambaricon}/>
              <Text style={styles.TextContent}> Zakat Pertanian</Text>
              </TouchableOpacity>
              </View> 
            </View>

            </ScrollView>

        </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F2F2F2',
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
    boxContent:{
      flex : 1,
      width : 120,
      height : 180,
      borderRadius: 12,
      backgroundColor: 'white',
      marginHorizontal: 5,
      marginVertical: 5,
      justifyContent: 'center'
    },
    boxContentClick:{
      flex : 1,
      width : 120,
      height : 180,
      borderRadius: 12,
      marginHorizontal: 5,
      marginVertical: 5,
      justifyContent: 'center'
    },
    TextContent:{
      top:15,
      fontSize: 12,
      textAlign: 'center'
    },
    gambaricon:{
      height: 70,
      width: 70,
      alignSelf: 'center'
    },
  });
  
  const buttonkaget = () =>
        Alert.alert(
          "Segera Hadir !!!",
          "Program masih dalam tahap pengembangan",
          [
            { text: "OK", onPress: () => console.log("OK Pressed") }
          ],
          { cancelable: false }
        ); 