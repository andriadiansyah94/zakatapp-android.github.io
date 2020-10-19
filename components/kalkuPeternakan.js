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

export default class kalkuPeternakan extends Component{
  constructor(props){
    super(props)
    this.state = {
      sapi : 0,
      kambing : 0,
      zakatkambing : 0,
      zakatsapi : 0,
      hitungkambing : 0,
    };
  }
  kondisi=()=>{
    var sapi = parseInt(this.state.sapi);
    var kambing  = parseInt(this.state.kambing);
    var zakatsapi = parseInt(this.state.zakatsapi);
    var zakatkambing = parseInt(this.state.zakatkambing);
    var hitungkambing = parseInt(this.state.hitungkambing);

    if (sapi >= 30 ) {
      zakatsapi = sapi / 30
      this.setState({zakatsapi});  
      Alert.alert(
        "Anda Wajib Zakat !!!",
        "Jumlah Sapi Yang Wajib Dizakatkan :        "+zakatsapi+" Ekor",)
        
    } else if(sapi < 30 && sapi > 0){
      Alert.alert(
        "Tidak Wajib Zakat !!!",
        "Jumlah Sapi kurang dari Nishab yang ditentukan.",)
    }

    if (kambing >= 40 && kambing < 100) {
      Alert.alert(
        "Anda Wajib Zakat !!!",
        "Jumlah Kambing melebihi dari Nishab yang ditentukan.",)
        zakatkambing = 1
        this.setState({zakatkambing});  
    } else if (kambing >= 100) {
      Alert.alert(
        "Anda Wajib Zakat !!!",
        "Jumlah Kambing melebihi dari Nishab yang ditentukan.",)
        hitungkambing = kambing / 100
        zakatkambing = hitungkambing + 1
        this.setState({zakatkambing});  
    } else if(kambing < 40 && kambing > 0){
      Alert.alert(
        "Tidak Wajib Zakat !!!",
        "Jumlah kambing kurang dari Nishab yang ditentukan.",)
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
              <Image source={require('../src/Content/sapi.png')} style={{
                alignSelf: 'center',
                height : 70,
                width : 70,
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
              }}>Zakat Peternakan</Text>      
          </SafeAreaView>
            
            <View style={{// ISI CONTENT
            alignItems : 'center',
            justifyContent: 'center',
            height: Dimensions.get('window').height,
            width: Dimensions.get('window').width,
              }}>
                <SafeAreaView style={styles.pagingsafearea}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <Text style={styles.judul}>Zakat Peternakan</Text>
                        <Text style={styles.tulisan}>   Zakat hasil ternak (salah satu jenis zakat maal) meliputi hasil dari peternakan hewan baik besar (sapi, unta) sedang (kambing, domba) dan kecil (unggas).</Text>
                        <Text style={styles.tulisan}><Text style={styles.fonttebal}>Kambing dan Domba</Text> baru wajib dizakatkan apabila pemilik memiliki sedikitnya 40 ekor kambing.</Text>      
                        <Text style={styles.tulisan}><Text style={styles.fonttebal}>Sapi dan kerbau</Text>  baru wajib dizakatkan apabila pemilik memiliki sedikitnya 30 ekor sapi.</Text>

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
                                    <Text style={styles.fonttebal}>Zakat Sapi</Text>

                                    <View style={styles.boxkiri}>
                                        <Text style={styles.white}>Jumlah Sapi</Text>
                                    </View>
                                    <View style={styles.boxkiri1}>
                                        <Text style={styles.white}>Sapi yang wajib dizakatkan</Text>
                                    </View>
                                    <Text style={styles.fonttebal}>Zakat Kambing</Text>
                                    <View style={styles.boxkiri}>
                                        <Text style={styles.white}>Jumlah Kambing</Text>
                                    </View>
                                    <View style={styles.boxkiri1}>
                                        <Text style={styles.white}>Kambing yang wajib dizakatkan</Text>
                                    </View> 
                                    
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
                                          onChangeText={(sapi)=>this.setState({sapi})}/>
                                    </View>
                                    <View style={styles.boxtengah1}>
                                        <Text style={styles.inputan}>
                                        {this.state.zakatsapi}</Text>
                                    </View>
                                    <View style={{//spasi
                                      height :26,}}></View>
                                    <View style={styles.boxtengah}>
                                        <TextInput style={styles.inputan} 
                                            placeholder='0'
                                            keyboardType = 'numeric'
                                            multiline={false}
                                            onChangeText={(kambing)=>this.setState({kambing})}/>
                                    </View>
                                    <View style={styles.boxtengah1}>
                                        <Text style={styles.inputan}>
                                        {this.state.zakatkambing}</Text>
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
                                        <Text style={styles.abu}>Ekor</Text>
                                    </View>
                                    <View style={styles.boxkanan1}>
                                        <Text style={styles.abu}>Ekor</Text>
                                    </View>
                                    <View style={{//spasi
                                      height :26,}}></View>
                                    <View style={styles.boxkanan}>
                                        <Text style={styles.abu}>Ekor</Text>
                                    </View>
                                    <View style={styles.boxkanan1}>
                                        <Text style={styles.abu}>Ekor</Text>
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