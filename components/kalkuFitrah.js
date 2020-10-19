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
      Num1:0,
      Num2:0,
      Hasil:0,
      beras:0,
      makan:0,
      hari:0,
      kadarfidyah:0,
      kadarfitrah:0,
    };
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
                <Image source={require('../src/Content/gandum.png')} style={{
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
                }}>Zakat Fitrah dan Fidyah</Text>      
            </SafeAreaView>
            
            <View style={{// ISI CONTENT
            alignItems : 'center',
            justifyContent: 'center',
            height: Dimensions.get('window').height,
            width: Dimensions.get('window').width,
              }}>
                <SafeAreaView style={styles.pagingsafearea}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <Text style={styles.judul}>Zakat Fitrah</Text>
                        <Text style={styles.tulisan}>   Zakat fitrah (zakat al-fitr) adalah zakat yang diwajibkan atas setiap jiwa baik lelaki dan perempuan muslim yang dilakukan pada bulan Ramadhan pada Idul Fitri. Besarannya adalah beras atau makanan pokok seberat 2,5 kg atau 3,5 liter per jiwa.</Text>
                        <Text style={styles.judul}>Fidyah</Text>
                        <Text style={styles.tulisan}>       Fidyah diambil dari kata <Text style={styles.fontmiring}>“fadaa”</Text> artinya mengganti atau menebus. Bagi beberapa orang yang tidak mampu menjalankan ibadah puasa dengan kriteria tertentu, diperbolehkan tidak berpuasa serta tidak harus menggantinya di lain waktu. Namun, sebagai gantinya diwajibkan untuk membayar fidyah.</Text>      
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
                                    <Text style={styles.fonttebal}>Zakat Fitrah</Text>

                                    <View style={styles.boxkiri}>
                                        <Text style={styles.white}>Harga beras saat ini</Text>
                                    </View>
                                    <View style={styles.boxkiri}>
                                        <Text style={styles.white}>Jumlah Jiwa</Text>
                                    </View>
                                    <View style={styles.boxkiri}>
                                        <Text style={styles.white}>Zakat Fitrah Perjiwa</Text>
                                    </View>
                                    <View style={styles.bigbox}>
                                        <Text style={styles.white}>Jumlah Kadar Zakat yang harus dibayar</Text>
                                    </View>
                                    <Text style={styles.fonttebal}>Fidyah</Text>
                                    <View style={styles.boxkiri1}>
                                      <Text style={styles.white}>Harga Makan Minimal Perhari</Text>
                                    </View>
                                    <View style={styles.boxkiri1}>
                                      <Text style={styles.white}>Jumlah Hari Pengganti</Text>
                                    </View>
                                    <View style={styles.boxkiri1}>
                                      <Text style={styles.white}>Jumlah Kadar Zakat yang harus dibayar</Text>
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
                                          onChangeText={(Num1)=>this.setState({Num1})}/>
                                    </View>
                                    <View style={styles.boxtengah}>
                                        <TextInput style={styles.inputan} 
                                            placeholder='0'
                                            keyboardType = 'numeric'
                                            multiline={false}
                                            onChangeText={(Num2)=>this.setState({Num2})}/>
                                    </View>  
                                    <View style={styles.boxtengah}>
                                        <Text style={styles.inputan}>
                                        {this.state.Hasil}</Text>
                                    </View>
                                    <View style={styles.boxtengah}>
                                        <Text style={styles.inputan}>
                                        {this.state.kadarfitrah}</Text>
                                    </View>
                                    <View style={styles.boxtengah}>
                                        <Text style={styles.inputan}>
                                        {this.state.beras}</Text>
                                    </View>
                                    <View style={{//spasi
                                      height :27,}}></View>
                                    <View style={styles.boxtengah1}>
                                      <TextInput style={styles.inputan}
                                        placeholder='0'
                                        keyboardType = 'numeric'
                                        multiline={false}
                                        onChangeText={(makan)=>this.setState({makan})}/>
                                    </View>
                                    <View style={styles.boxtengah1}>
                                        <TextInput style={styles.inputan} 
                                        placeholder='0'
                                        keyboardType = 'numeric'
                                        multiline={false}
                                        onChangeText={(hari)=>this.setState({hari})}/>
                                    </View>
                                    <View style={styles.boxtengah1}>
                                        <Text style={styles.inputan}>
                                        {this.state.kadarfidyah}</Text>
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
                                      onPress={()=>this.setState({
                                      kadarfitrah: (this.state.Num1*3.5*this.state.Num2),
                                      kadarfidyah: (this.state.makan*this.state.hari),
                                      Hasil: (this.state.Num1*3.5),       
                                      beras: (this.state.Num2*3.5),})}>
                                      <Text style={styles.white}>PROSES</Text>
                                    </TouchableOpacity>

                                </View>

                                <View style={{//kolom bagian kanan
                                    height: Dimensions.get('window').height,
                                    width: Dimensions.get('window').width,}}>
                                    <View style={{//spasi
                                      height :26,}}></View>
                                    <View style={styles.boxkanan}>
                                        <Text style={styles.abu}>Rupiah/Liter</Text>
                                    </View>
                                    <View style={styles.boxkanan}>
                                        <Text style={styles.abu}>Jiwa</Text>
                                    </View>
                                    <View style={styles.boxkanan}>
                                        <Text style={styles.abu}>Rupiah</Text>
                                    </View>
                                    <View style={styles.boxkanan}>
                                        <Text style={styles.abu}>Rupiah</Text>
                                    </View>
                                    <View style={styles.boxkanan}>
                                        <Text style={styles.abu}>Liter/Jiwa</Text>
                                    </View>
                                    <View style={{//spasi
                                      height :27,}}></View>
                                    <View style={styles.boxkanan1}>
                                        <Text style={styles.abu}>Rupiah</Text>
                                    </View>
                                    <View style={styles.boxkanan1}>
                                        <Text style={styles.abu}>Hari</Text>
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