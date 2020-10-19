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

export default class kalkuProfesi extends Component{
  constructor(props){
    super(props)
    this.state = { 
      emas:0,
      nishab:0,
      sebulan:0,
      setahun:0,
      kadarprofesi:0,
    };
  }

  kondisi=()=>{
    var emas = this.state.emas
    var nishab = this.state.nishab
    var sebulan = this.state.sebulan
    var setahun = this.state.setahun
    var kadarprofesi = this.state.kadarprofesi
    
    nishab = emas * 85
    setahun = sebulan * 12
    kadarprofesi = sebulan * 2.5 / 100

    this.setState({setahun});
    this.setState({nishab});
    this.setState({kadarprofesi});
    
    if (setahun < nishab) {
      Alert.alert(
        "Tidak Wajib Zakat !!!",
        "Jumlah Penghasilan selama setahun masih dibawah nishab yang telah ditetapkan.",)
    } 
    else if (setahun > nishab){
      Alert.alert(
        "Anda Wajib Zakat !!!",
        "Zakat Yang Wajib Dibayarkan                 Rp. " +kadarprofesi,)
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
              <Image source={require('../src/Content/profesi.png')} style={{
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
              }}>Zakat Profesi</Text>      
          </SafeAreaView>
            
            <View style={{// ISI CONTENT
            alignItems : 'center',
            justifyContent: 'center',
            height: Dimensions.get('window').height,
            width: Dimensions.get('window').width,
              }}>
                <SafeAreaView style={styles.pagingsafearea}>

                    <ScrollView showsVerticalScrollIndicator={false}>
                        <Text style={styles.judul}>Zakat Profesi</Text>
                        <Text style={styles.tulisan}>   Zakat Profesi / Penghasilan adalah bagian dari zakat mal yang wajib dikeluarkan atas harta yang berasal dari pendapatan / penghasilan rutin dari pekerjaan yang tidak melanggar syariah. </Text>
                        <Text style={styles.tulisan}><Text style={styles.fonttebal}>Zakat Profesi</Text> wajib ditunaikan apabila pendapatan selama setahun melebihi 85 gram emas.</Text>      
                        <Text style={styles.tulisan}>Kadar zakat penghasilan senilai 2,5%.</Text>
                        <Text style={styles.fonttebal}>Rumus : </Text>
                        <Text style={styles.tulisan}>2,5% x Jumlah penghasilan selama 1 Bulan</Text>

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
                                    <Text style={styles.fonttebal}>Zakat Profesi</Text>

                                    <View style={styles.boxkiri}>
                                        <Text style={styles.white}>Harga Emas saat ini</Text>
                                    </View>
                                    <View style={styles.boxkiri}>
                                        <Text style={styles.white}>Jumlah Nishab</Text>
                                    </View>
                                    <View style={styles.boxkiri1}>
                                        <Text style={styles.white}>Penghasilan Selama Satu Bulan</Text>
                                    </View>
                                    <View style={styles.boxkiri1}>
                                        <Text style={styles.white}>Penghasilan Selama Satu Tahun</Text>
                                    </View>
                                    <View style={styles.boxkiri1}>
                                        <Text style={styles.white}>Jumlah Kadar Zakat yang harus dibayar</Text>
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
                                        textAlign:'center',}}>Cek Harga Emas</Text>
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
                                        {this.state.nishab}</Text>
                                    </View> 
                                    <View style={styles.boxtengah1}>
                                        <TextInput style={styles.inputan} 
                                            placeholder='0'
                                            keyboardType = 'numeric'
                                            multiline={false}
                                            onChangeText={(sebulan)=>this.setState({sebulan})}/>
                                    </View>  
                                    <View style={styles.boxtengah1}>
                                        <Text style={styles.inputan}>
                                        {this.state.setahun}</Text>
                                    </View>
                                    <View style={styles.boxtengah1}>
                                        <Text style={styles.inputan}>
                                        {this.state.kadarprofesi}</Text>
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
                                        <Text style={styles.abu}>Rupiah/gram</Text>
                                    </View>
                                    <View style={styles.boxkanan}>
                                        <Text style={styles.abu}>Rupiah</Text>
                                    </View>
                                    <View style={styles.boxkanan1}>
                                        <Text style={styles.abu}>Rupiah</Text>
                                    </View>
                                    <View style={styles.boxkanan1}>
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