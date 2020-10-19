import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { Icon } from 'native-base';
import { StyleSheet, ScrollView, Text, View, SafeAreaView, TouchableOpacity, Image, Dimensions, Linking } from 'react-native';

export default class faqZakat extends Component{
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
                <TouchableOpacity style={{
                width: 80}}
                onPress={() => this.props.navigation.goBack()}> 
                <Icon type="FontAwesome" name='arrow-left' style={{
                    color: 'white',
                    top: 45, 
                    left: 30
                }}/> 
                </TouchableOpacity>
                <Text style={{
                fontWeight: 'bold',
                fontSize: 20,
                color: 'white',  
                top:45,
                marginLeft : 10}}>Frequently Asked Questions</Text>          
            </View>
            
            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={true}
                pagingEnabled={true}>
                    <View style={{
                    alignItems : 'center',
                    justifyContent: 'center',
                    width: Dimensions.get('window').width,
                     }}>
                        <SafeAreaView style={styles.pagingsafearea}>  
                            <ScrollView showsVerticalScrollIndicator={false}>      
                                <Text style={styles.fonttebal}>Apa itu Nishab ? </Text>
                                <Text style={styles.tulisan}>Nisab, di dalam Syariah adalah jumlah batasan kepemilikan seorang Muslim selama satu tahun untuk wajib mengeluarkan zakat.</Text>
                                <Text style={styles.fonttebal}>Apa itu Kadar ? </Text>
                                <Text style={styles.tulisan}>ukuran atau satuan unsur tertentu dalam sebuah materi.</Text>
                                <Text style={styles.fonttebal}>Apa itu Penghasilan ? </Text>
                                <Text style={styles.tulisan}>Penghasilan adalah jumlah uang yang didapat dalam jangka waktu tertentu yang telah dikurangi dengan biaya-biaya lainnya, atau bisa juga disebut dengan pendapatan bersih.</Text>
                                <Text style={styles.tulisan}>Penghasilan dibawah UMR tidak termasuk golongan wajib zakat profesi</Text>
                                <Text style={styles.fonttebal}>Apa itu Aset Usaha Lancar ? </Text>
                                <Text style={styles.tulisan}>kekayaan perusahaan yang mudah untuk diubah menjadi uang tunai. Contohnya : uang tunai, surat berharga, piutang dan persediaan barang.</Text>
                                <Text style={styles.fonttebal}>Apa itu Hutang Jangka Pendek? </Text>
                                <Text style={styles.tulisan}>Hutang Jangka Pendek adalah peminjaman dana atau kewajiban (hutang) yang sifatnya darurat namun tetap bisa dikembalikan dalam kurun waktu kurang dari 1 tahun.</Text>
                                <Text style={styles.tulisan}>Benda / alat yang dibeli secara kredit tidak termasuk hutang jangka pendek apabila dalam kurun waktu diatas 1 tahun.</Text>
                                <Text style={styles.fonttebal}>Cara Penggunaan Kalkulator</Text>
                                <Image source={require('../src/Faq/number1.jpg')} style={{height : 70, width : 70, marginLeft : 15}}/>  
                                <Text style={styles.tulisan}>1. Pilih Kalkutor zakat yang ingin dihitung.</Text>
                                <Image source={require('../src/Faq/number2.jpg')} style={{height : 40, width : 300, marginLeft : 15}}/> 
                                <Text style={styles.tulisan}>2. Masukan input pada kolom yang disediakan.</Text>
                                <Image source={require('../src/Faq/number3.jpg')} style={{height : 40, width : 150, marginLeft : 11}}/> 
                                <Text style={styles.tulisan}>3. tekan tombol proses untuk memperlihatkan hasil.</Text>
                                <Image source={require('../src/Faq/number4.jpg')} style={{height : 70, width : 400, marginLeft : 17}}/> 
                                <Text style={styles.tulisan}>4. Akan muncul tampilan informasi, apakah anda wajib atau tidak untuk berzakat.</Text>
                            </ScrollView>
                        </SafeAreaView>
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
    justifyContent: 'flex-start'
  },
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
    paddingVertical: 30,
  },
  gambarpaging:{
    height:200,
    width: 330,
    alignSelf: 'center',
    marginVertical: 5,
},
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
    textAlign:'justify'
  },
  tulisanA: {
    fontWeight : 'bold',
    left: 15,
    fontSize: 14,
    fontStyle: 'normal',
    textAlign:'justify' 
  },
  fontmiring:{
    fontSize: 14,
    fontStyle: 'italic',
    textAlign: 'justify'
  },
});