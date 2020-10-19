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
import styles from './styles';

export default class kalkuEmas extends Component{
  constructor(props){
    super(props)
    this.state = {
      emas:0,
      perak:0,
      jumlahemas:0,
      jumlahperak:0,
      nishabemas:0,
      nishabperak:0,
      totalemas:0,
      totalperak:0,
      kadaremas:0,
      kadarperak:0,
    };
  }

  kondisi=()=>{
    var emas = this.state.emas
    var perak = this.state.perak 
    var jumlahemas = this.state.jumlahemas
    var jumlahperak = this.state.jumlahperak
    var totalemas = this.state.totalemas
    var totalperak = this.state.totalperak
    var nishabemas = this.state.nishabemas
    var nishabperak = this.state.nishabperak
    var kadaremas = this.state.kadaremas
    var kadarperak = this.state.kadarperak

    nishabemas = emas * 85
    nishabperak = perak * 595
    totalemas = emas * jumlahemas
    totalperak = perak * jumlahperak
    kadaremas = totalemas * 2.5 / 100  
    kadarperak = totalperak * 2.5 / 100

    this.setState({totalemas});
    this.setState({totalperak});
    this.setState({kadaremas});
    this.setState({kadarperak});
    this.setState({nishabemas});
    this.setState({nishabperak});

    if (jumlahemas >= 85) {
      Alert.alert(
        "Anda Wajib Zakat Emas !!!",
        "Zakat Yang Wajib Dibayarkan                 Rp. " +kadaremas,) 
    } else if (jumlahemas < 85 && jumlahemas >0){
      Alert.alert(
        "Tidak Wajib Zakat Emas !!!",
        "Jumlah Emas Kurang dari Nishab yang telah ditetapkan.",)
    }
    if (jumlahperak>= 595) {
      Alert.alert(
        "Anda Wajib Zakat Perak !!!",
        "Zakat Yang Wajib Dibayarkan                 Rp. " +kadarperak,) 
    } else if (jumlahperak < 595 && jumlahperak >0){
      Alert.alert(
        "Tidak Wajib Zakat Perak !!!",
        "Jumlah Perak Kurang dari Nishab yang telah ditetapkan.",)
    }
  }

    render(){ 
        return (
          <View style={styles.container}>
          <StatusBar backgroundColor= 'white'/>
          <SafeAreaView style={{
            height: 180,
            width: Dimensions.get('window').width,
            backgroundColor: '#108B5F',
            justifyContent: 'flex-start',
            flexDirection: 'column',
            }}>
              <TouchableOpacity style={{
              width: 80,
            height: 90,}}
              onPress={() => this.props.navigation.goBack()}> 
              <Icon type="FontAwesome" name='arrow-left' style={{
                  color: 'white',
                  top: 45, 
                  left: 30
              }}/> 
              </TouchableOpacity>
              <View style={{
              height : 100,
              width : 100,
              borderRadius : 50,
              backgroundColor: 'white',
              alignSelf: 'center',
              bottom : 50,
              }}>
              <Image source={require('../src/Content/coin.png')} style={{
                alignSelf: 'center',
                height : 70,
                width : 70,
                marginTop : 15, 
              }}/> 
              </View>
              <Image source={require('../src/arrowbawah.png')} style={{
                alignSelf: 'center',
                height : 50,
                width : 50,
                marginTop : 150,
                position : 'absolute',
              }}/>    
              <Text style={{
                fontWeight: 'bold',
                textAlign : 'center',
                fontSize: 20,
                color: 'white',
                bottom :50,
              }}>Zakat Emas dan Perak</Text>      
          </SafeAreaView>
            
            <View style={{// ISI CONTENT
            alignItems : 'center',
            justifyContent: 'center',
            height: Dimensions.get('window').height,
            width: Dimensions.get('window').width,
              }}>
                <SafeAreaView style={styles.pagingsafearea}>

                    <ScrollView showsVerticalScrollIndicator={false}>
                        <Text style={styles.judul}>Zakat Emas dan Perak</Text>
                        <Text style={styles.tulisan}>   Zakat emas, perak, atau logam mulia adalah zakat yang dikenakan atas emas, perak dan logam mulia lainnya yang telah mencapai nisab dan haul.</Text>
                        <Text style={styles.tulisan}><Text style={styles.fonttebal}>Zakat emas</Text> wajib ditunaikan jika emas yang tersimpan telah mencapai atau melebihi nisabnya yakni 85 gram.</Text>      
                        <Text style={styles.tulisan}><Text style={styles.fonttebal}>Zakat perak</Text> wajib ditunaikan jika perak yang tersimpan telah mencapai atau melebihi nisab sebesar 595 gram.</Text>
                        <Text style={styles.fonttebal}>Rumus : </Text>
                        <Text style={styles.tulisan}>2,5% x Jumlah emas/perak yang tersimpan selama 1 tahun</Text>

                        <SafeAreaView style={{
                          height: Dimensions.get('window').height,
                          width: Dimensions.get('window').width,
                          paddingHorizontal:10
                        }}>

                          <View style={{//format kebawah
                            flexDirection: 'column',
                            justifyContent: 'flex-start',
                            height: Dimensions.get('window').height,
                            width: Dimensions.get('window').width,}}> 

                            <View style={{//format kesamping
                                flexDirection: 'row',
                                justifyContent: 'flex-start',}}>

                                <View style={{// kolom bagian Kiri
                                    height: Dimensions.get('window').height,
                                    width : 150,}}>
                                    <Text style={styles.fonttebal}>Zakat Emas</Text>
                                    <View style={styles.boxkiri}>
                                        <Text style={styles.white}>Harga Emas saat ini</Text>
                                    </View>
                                    <View style={styles.boxkiri}>
                                        <Text style={styles.white}>Jumlah Nishab</Text>
                                    </View>
                                    <View style={styles.boxkiri}>
                                        <Text style={styles.white}>Jumlah Emas</Text>
                                    </View>
                                    <View style={styles.boxkiri}>
                                        <Text style={styles.white}>Total Harga Emas</Text>
                                    </View>
                                    <View style={styles.boxkiri1}>
                                        <Text style={styles.white}>Zakat Emas yang harus dibayar</Text>
                                    </View>
                                    <Text style={styles.fonttebal}>Zakat Perak</Text>
                                    <View style={styles.boxkiri}>
                                        <Text style={styles.white}>Harga Perak saat ini</Text>
                                    </View>
                                    <View style={styles.boxkiri}>
                                        <Text style={styles.white}>Jumlah Nishab</Text>
                                    </View>
                                    <View style={styles.boxkiri}>
                                        <Text style={styles.white}>Jumlah Perak</Text>
                                    </View>
                                    <View style={styles.boxkiri}>
                                        <Text style={styles.white}>Total Harga Perak</Text>
                                    </View>
                                    <View style={styles.boxkiri1}>
                                        <Text style={styles.white}>Zakat Perak yang harus dibayar</Text>
                                    </View>

                                    <TouchableOpacity
                                      style={{
                                      backgroundColor: '#7DBF37',
                                      justifyContent :'center',
                                      alignItems : 'center',
                                      borderRadius : 12,
                                      height : 40,
                                      marginTop : 10,
                                      width: 140}}
                                      onPress={ ()=>{ Linking.openURL('https://harga-emas.org/1-gram/')}}>
                                      <Text style={{fontSize: 14,
                                        fontStyle: 'normal',
                                        color : 'white',
                                        textAlign:'center',}}>Cek Harga Emas & Perak</Text>
                                    </TouchableOpacity>
                                    
                                </View>

                                <View style={{//kolom bagian tengah
                                    height: Dimensions.get('window').height,
                                    width : 115,}}>      
                                    <View style={{//spasi
                                      height :26,}}></View>
                                    <View style={styles.boxtengah}>
                                        <TextInput style={styles.inputan}
                                          placeholder='0'
                                          keyboardType = 'numeric'
                                          multiline={false}
                                          onChangeText={(emas)=>this.setState({emas})}/>
                                    </View>
                                    <View style={styles.boxtengah}>
                                        <Text style={styles.inputan}>
                                        {this.state.nishabemas}</Text>
                                    </View>
                                    <View style={styles.boxtengah}>
                                        <TextInput style={styles.inputan} 
                                            placeholder='0'
                                            keyboardType = 'numeric'
                                            multiline={false}
                                            onChangeText={(jumlahemas)=>this.setState({jumlahemas})}/>
                                    </View>
                                    <View style={styles.boxtengah}>
                                        <Text style={styles.inputan}>
                                        {this.state.totalemas}</Text>
                                    </View>
                                    <View style={styles.boxtengah1}>
                                        <Text style={styles.inputan}>
                                        {this.state.kadaremas}</Text>
                                    </View>
                                    <View style={{//spasi
                                      height :26,}}></View>
                                    <View style={styles.boxtengah}>
                                        <TextInput style={styles.inputan} 
                                            placeholder='0'
                                            keyboardType = 'numeric'
                                            multiline={false}
                                            onChangeText={(perak)=>this.setState({perak})}/>
                                    </View>  
                                    <View style={styles.boxtengah}>
                                        <Text style={styles.inputan}>
                                        {this.state.nishabperak}</Text>
                                    </View>
                                    <View style={styles.boxtengah}>
                                        <TextInput style={styles.inputan} 
                                            placeholder='0'
                                            keyboardType = 'numeric'
                                            multiline={false}
                                            onChangeText={(jumlahperak)=>this.setState({jumlahperak})}/>
                                    </View>    
                                    <View style={styles.boxtengah}>
                                        <Text style={styles.inputan}>
                                        {this.state.totalperak}</Text>
                                    </View>
                                    <View style={styles.boxtengah1}>
                                        <Text style={styles.inputan}>
                                        {this.state.kadarperak}</Text>
                                    </View>
                                    <TouchableOpacity
                                      style={{
                                      backgroundColor: '#108B5F',
                                      justifyContent :'center',
                                      alignItems : 'center',
                                      borderRadius : 12,
                                      height : 40,
                                      marginTop : 10,
                                      width: 115}}
                                      onPress={this.kondisi}>
                                      <Text style={styles.white}>PROSES</Text>
                                    </TouchableOpacity>
      
                                </View>

                                <View style={{//kolom bagian kanan
                                    height: Dimensions.get('window').height,
                                    width: Dimensions.get('window').width,}}>
                                    <View style={{//spasi
                                      height :26,}}></View>
                                    <View style={styles.boxkanan}>
                                        <Text style={styles.abu}>Rupiah/Gram</Text>
                                    </View>
                                    <View style={styles.boxkanan}>
                                        <Text style={styles.abu}>Rupiah</Text>
                                    </View>
                                    <View style={styles.boxkanan}>
                                        <Text style={styles.abu}>Gram</Text>
                                    </View>
                                    <View style={styles.boxkanan}>
                                        <Text style={styles.abu}>Rupiah</Text>
                                    </View>
                                    <View style={styles.boxkanan1}>
                                        <Text style={styles.abu}>Rupiah</Text>
                                    </View>
                                    <View style={{//spasi
                                      height :26,}}></View>
                                    <View style={styles.boxkanan}>
                                        <Text style={styles.abu}>Rupiah/Gram</Text>
                                    </View>
                                    <View style={styles.boxkanan}>
                                        <Text style={styles.abu}>Rupiah</Text>
                                    </View>
                                    <View style={styles.boxkanan}>
                                        <Text style={styles.abu}>Gram</Text>
                                    </View>
                                    <View style={styles.boxkanan}>
                                        <Text style={styles.abu}>Rupiah</Text>
                                    </View>
                                    <View style={styles.boxkanan1}>
                                        <Text style={styles.abu}>Rupiah</Text>
                                    </View>

                                </View>   
                            </View>     
                          </View>
                        </SafeAreaView>
                    </ScrollView>
                </SafeAreaView>
            </View>
        </View>
        );
    }
}