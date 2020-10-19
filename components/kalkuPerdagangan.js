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

export default class kalkuPerdagangan extends Component{
  constructor(props){
    super(props)
    this.state = { 
      emas:0,
      nishab:0,
      aset:0,
      utang:0,
      totalaset:0,
      kadarperdagangan:0,
    };
  }

  kondisi=()=>{
    var emas = this.state.emas
    var nishab = this.state.nishab
    var aset = this.state.aset
    var utang = this.state.utang
    var totalaset = this.state.totalaset
    var kadarperdagangan = this.state.kadarperdagangan

    nishab = emas * 85
    totalaset = aset - utang
    kadarperdagangan = totalaset* 2.5 / 100

    this.setState({totalaset});
    this.setState({nishab});
    this.setState({kadarperdagangan});
    
    if (totalaset < nishab) {
      Alert.alert(
        "Tidak Wajib Zakat !!!",
        "Jumlah Aset Perusahaan selama setahun masih dibawah nishab yang telah ditetapkan.",)
    } 
    else if (totalaset > nishab){
      Alert.alert(
        "Anda Wajib Zakat !!!",
        "Zakat Yang Wajib Dibayarkan                 Rp. " +kadarperdagangan,)
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
              <Image source={require('../src/Content/dompet.png')} style={{
                alignSelf: 'center',
                height : 60,
                width : 60,
                marginTop : 20, 
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
              }}>Zakat Perdagangan</Text>      
          </SafeAreaView>
            
            <View style={{// ISI CONTENT
            alignItems : 'center',
            justifyContent: 'center',
            height: Dimensions.get('window').height,
            width: Dimensions.get('window').width,
              }}>
                <SafeAreaView style={styles.pagingsafearea}>

                    <ScrollView showsVerticalScrollIndicator={false}>
                        <Text style={styles.judul}>Zakat Perdagangan</Text>
                        <Text style={styles.tulisan}>   Zakat perdagangan adalah zakat yang dikeluarkan dari harta niaga, sedangkan harta niaga adalah harta atau aset yang diperjualbelikan dengan maksud untuk mendapatkan keuntungan.</Text>
                        <Text style={styles.tulisan}><Text style={styles.fonttebal}>Perdagangan</Text> wajib ditunaikan apabila aset usaha selama setahun melebihi 85 gram emas.</Text> 
                        <Text style={styles.fonttebal}>Rumus : </Text>
                        <Text style={styles.tulisan}>2,5% x (aset lancar – hutang jangka pendek)</Text>

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
                                    <View style={styles.boxkiri}>
                                        <Text style={styles.white}>Aset Usaha Lancar</Text>
                                    </View>
                                    <View style={styles.boxkiri}>
                                        <Text style={styles.white}>Hutang Usaha</Text>
                                    </View>
                                    <View style={styles.boxkiri}>
                                        <Text style={styles.white}>Total Aset</Text>
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
                                          placeholder = '0'
                                          keyboardType = 'numeric'
                                          multiline={false}
                                          onChangeText={(emas)=>this.setState({emas})}/>
                                    </View>
                                    <View style={styles.boxtengah}>
                                        <Text style={styles.inputan}>
                                        {this.state.nishab}</Text>
                                    </View>
                                    <View style={styles.boxtengah}>
                                        <TextInput style={styles.inputan} 
                                            placeholder = '0'
                                            keyboardType = 'numeric'
                                            multiline={false}
                                            onChangeText={(aset)=>this.setState({aset})}/>
                                    </View>  
                                    <View style={styles.boxtengah}>
                                        <TextInput style={styles.inputan} 
                                            placeholder='0'
                                            keyboardType = 'numeric'
                                            multiline={false}
                                            onChangeText={(utang)=>this.setState({utang})}/>
                                    </View> 
                                    <View style={styles.boxtengah}>
                                        <Text style={styles.inputan}>
                                        {this.state.totalaset}</Text>
                                    </View>
                                    <View style={styles.boxtengah1}>
                                        <Text style={styles.inputan}>
                                        {this.state.kadarperdagangan}</Text>
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
                                    <View style={styles.boxkanan}>
                                        <Text style={styles.abu}>Rupiah</Text>
                                    </View>
                                    <View style={styles.boxkanan}>
                                        <Text style={styles.abu}>Rupiah</Text>
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