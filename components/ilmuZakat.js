import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { Icon } from 'native-base';
import { StyleSheet, ScrollView, Text, View, SafeAreaView, TouchableOpacity, Image, Dimensions, Linking } from 'react-native';

export default class ilmuZakat extends Component{
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
                marginLeft : 10}}>Ilmu Zakat</Text>          
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
                                <Text style={styles.judul}>Tentang Zakat</Text>
                                <Text style={styles.tulisan}>       Zakat adalah harta tertentu yang dikeluarkan apabila telah mencapai syarat yang diatur sesuai aturan agama, dikeluarkan kepada 8 asnaf penerima zakat. Menurut Bahasa kata <Text style={styles.fontmiring}>“zakat”</Text>berarti tumbuh, berkembang, subur atau bertambah.</Text>
                                <Image source={require('../src/ilmu/zakat.jpg')} style={styles.gambarpaging}/>
                                <Text style={styles.tulisan}>     Zakat berasal dari bentuk kata <Text style={styles.fontmiring}>"zaka"</Text> yang berarti suci, baik, berkah, tumbuh, dan berkembang. Dinamakan zakat, karena di dalamnya terkandung harapan untuk beroleh berkah, membersihkan jiwa dan memupuknya dengan berbagai kebaikan.</Text>  
                                <Text style={styles.tulisan}>       Makna tumbuh dalam arti zakat menunjukkan bahwa mengeluarkan zakat sebagai sebab adanya pertumbuhan dan perkembangan harta, pelaksanaan zakat itu mengakibatkan pahala menjadi banyak. Sedangkan makna suci menunjukkan bahwa zakat adalah mensucikan jiwa dari kejelekan, kebatilan dan pensuci dari dosa-dosa.</Text>
                                <Text style={styles.fonttebal}>Dalam Al-Quran disebutkan, </Text>
                                <Text style={styles.fontmiring}>“Ambillah zakat dari sebagian harta mereka, dengan zakat itu kamu membersihkan dan menyucikan mereka” (QS. at-Taubah [9]: 103).</Text>

                            </ScrollView>
                        </SafeAreaView>
                    </View>


                    <View style={{
                    alignItems : 'center',
                    justifyContent: 'center',
                    width: Dimensions.get('window').width,
                    }}>
                        <SafeAreaView style={styles.pagingsafearea}>
                            <ScrollView showsVerticalScrollIndicator={false}>
                                <Text style={styles.judul}>Penerima Zakat</Text>
                                <Image source={require('../src/ilmu/asnaf.jpg')} style={styles.gambarpaging}/>
                                <Text style={styles.tulisan}>Dalam QS. At-Taubah ayat 60, Allah memberikan ketentuan ada delapan golongan orang yang menerima zakat yaitu sebagai berikut:</Text>
                                <Text style={styles.fonttebal}>1. Fakir</Text>
                                <Text style={styles.tulisan}>mereka yang hampir tidak memiliki apa-apa sehingga tidak mampu memenuhi kebutuhan pokok hidup.</Text>
                                <Text style={styles.fonttebal}>2. Miskin</Text>
                                <Text style={styles.tulisan}>mereka yang memiliki harta namun tidak cukup untuk memenuhi kebutuhan dasar kehidupan.</Text>
                                <Text style={styles.fonttebal}>3. Amil</Text>
                                <Text style={styles.tulisan}>mereka yang mengumpulkan dan mendistribusikan zakat.</Text>
                                <Text style={styles.fonttebal}>4. Mualaf</Text>
                                <Text style={styles.tulisan}>mereka yang baru masuk Islam dan membutuhkan bantuan untuk menguatkan dalam tauhid dan syariah.</Text>
                                <Text style={styles.fonttebal}>5. Riqab</Text>
                                <Text style={styles.tulisan}>budak atau hamba sahaya yang ingin memerdekakan dirinya.</Text>
                                <Text style={styles.fonttebal}>6. Gharimin</Text>
                                <Text style={styles.tulisan}>mereka yang berhutang untuk kebutuhan hidup dalam mempertahankan jiwa dan izzahnya</Text>
                                <Text style={styles.fonttebal}>7. Fisabilillah</Text>
                                <Text style={styles.tulisan}>mereka yang berjuang di jalan Allah dalam bentuk kegiatan dakwah, jihad dan sebagainya</Text>
                                <Text style={styles.fonttebal}>8. Ibnu Sabil</Text>
                                <Text style={styles.tulisan}>mereka yang kehabisan biaya di perjalanan dalam ketaatan kepada Allah.</Text>
                            </ScrollView>
                        </SafeAreaView>
                    </View>


                    <View style={{
                    alignItems : 'center',
                    justifyContent: 'center',
                    width: Dimensions.get('window').width,
                    }}>
                        <SafeAreaView style={styles.pagingsafearea}>
                            <ScrollView showsVerticalScrollIndicator={false}>
                                <Text style={styles.judul}>Jenis Zakat</Text>  
                                <Text style={styles.tulisan}>         Secara umum zakat terbagi menjadi dua jenis, yakni zakat fitrah dan zakat mal. </Text>
                                <Text style={styles.fonttebal}>A. Zakat Fitrah</Text>
                                <Text style={styles.tulisan}>     Zakat Fitrah (zakat al-fitr) adalah zakat yang diwajibkan atas setiap jiwa baik lelaki dan perempuan muslim yang dilakukan pada bulan Ramadhan.</Text>
                                <Text style={styles.fonttebal}>B. Zakat Mal</Text>
                                <Text style={styles.tulisan}>     Zakat mal adalah zakat yang dikenakan atas segala jenis harta, yang secara zat maupun substansi perolehannya, tidak bertentangan dengan ketentuan agama. Sebagai contoh, zakat mal terdiri atas uang, emas, surat berharga, penghasilan profesi, dan lain-lain</Text>
                                <Image source={require('../src/ilmu/jenis.jpg')} style={styles.gambarpaging}/>
                                <Text style={styles.tulisan}>Zakat mal sebagaimana dimaksud pada paragraf di atas meliputi:</Text>
                                <Text style={styles.fonttebal}>1. Zakat emas, perak, dan logam mulia lainnya</Text>
                                <Text style={styles.tulisan}>Adalah zakat yang dikenakan atas emas, perak, dan logam lainnya yang telah mencapai nisab dan haul.</Text>
                                <Text style={styles.fonttebal}>2. Zakat atas uang dan surat berharga lainnya</Text>
                                <Text style={styles.tulisan}>Adalah zakat yang dikenakan atas uang, harta yang disetarakan dengan uang, dan surat berharga lainnya yang telah mencapai nisab dan haul.</Text>
                                <Text style={styles.fonttebal}>3. Zakat perniagaan</Text>
                                <Text style={styles.tulisan}>Adalah zakat yang dikenakan atas usaha perniagaan yang telah mencapai nisab dan haul.</Text>
                                <Text style={styles.fonttebal}>4. Zakat pertanian, perkebunan, dan kehutanan</Text>
                                <Text style={styles.tulisan}>Adalah zakat yang dikenakan atas hasil pertanian, perkebunan dan hasil hutan pada saat panen.</Text>
                                <Text style={styles.fonttebal}>5. Zakat peternakan dan perikanan</Text>
                                <Text style={styles.tulisan}>Adalah zakat yang dikenakan atas binatang ternak dan hasil perikanan   yang   telah  mencapai nisab  dan  haul.</Text>
                                <Text style={styles.fonttebal}>6. Zakat pertambangan</Text>
                                <Text style={styles.tulisan}>Adalah zakat yang  dikenakan  atas  hasil  usaha  pertambangan yang telah mencapai nisab dan haul.</Text>
                                <Text style={styles.fonttebal}>7. Zakat perindustrian</Text>
                                <Text style={styles.tulisan}>Adalah zakat atas usaha yang bergerak dalam bidang produksi barang dan jasa.</Text>
                                <Text style={styles.fonttebal}>8. Zakat pendapatan dan jasa</Text>
                                <Text style={styles.tulisan}>Adalah zakat yang dikeluarkan dari penghasilan yang diperoleh dari hasil profesi pada saat menerima pembayaran, zakat ini dikenal juga sebagai zakat profesi atau zakat penghasilan.</Text>
                                <Text style={styles.fonttebal}>9. Zakat rikaz</Text>
                                <Text style={styles.tulisan}>Adalah zakat yang dikenakan atas harta temuan, dimana kadar zakatnya adalah 20%.</Text>
                            </ScrollView>
                        </SafeAreaView>
                    </View>


                    <View style={{
                    alignItems : 'center',
                    justifyContent: 'center',
                    width: Dimensions.get('window').width,
                    }}>
                        <SafeAreaView style={styles.pagingsafearea}>
                            <ScrollView showsVerticalScrollIndicator={false}>
                                <Text style={styles.judul}>Syarat Zakat</Text>
                                <Image source={require('../src/ilmu/syarat.jpg')} style={styles.gambarpaging}/>  
                                <Text style={styles.fonttebal}>A. Zakat Fitrah</Text>
                                <Text style={styles.tulisan}>1. beragama Islam.</Text>
                                <Text style={styles.tulisan}>2. hidup pada saat bulan ramadhan.</Text>
                                <Text style={styles.tulisan}>3. memiliki kelebihan kebutuhan pokok untuk malam dan hari raya idul fitri.</Text>
                                <Text style={styles.fonttebal}>B. Zakat Mal</Text>
                                <Text style={styles.tulisan}>1. Harta yang dikenai zakat harus memenuhi syarat sesuai dengan ketentuan syariat Islam.</Text>
                                <Text style={styles.tulisan}>2. Syarat harta yang dikenakan zakat mal sebagai berikut:</Text>
                                <Text style={styles.tulisanA}>a. milik penuh</Text>
                                <Text style={styles.tulisanA}>b. halal</Text>
                                <Text style={styles.tulisanA}>c. cukup nisab</Text>
                                <Text style={styles.tulisanA}>d. haul</Text> 
                                <Text style={styles.tulisan}>3. Hanya saja, syarat haul tidak berlaku untuk zakat pertanian, perkebunan dan kehutanan, perikanan, pendapatan dan jasa, serta zakat rikaz.</Text> 
                                <View style={{
                                    marginTop:20,
                                    height: 40,
                                    width:150,
                                    borderRadius:30,
                                    justifyContent: 'center',
                                    alignSelf: 'flex-start',
                                    backgroundColor :'#53A8CF' }}>
                                    <TouchableOpacity onPress={ ()=>{ Linking.openURL('https://baznas.go.id/')}}
                                    style={{
                                    width: 150}}>
                                    <Text
                                    style={{
                                        textAlign: 'center',
                                    }}>More Information</Text>
                                    </TouchableOpacity>
                                </View>                              
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