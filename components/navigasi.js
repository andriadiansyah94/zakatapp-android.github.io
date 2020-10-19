import { createAppContainer, createDrawerNavigatior} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import beranda from './beranda';
import ilmuZakat from './ilmuZakat';
import faqZakat from './FaqZakat';
import kalkulfitrah from './kalkuFitrah';
import kalkuEmas from './kalkuEmas';
import kalkuProfesi from './kalkuProfesi';
import kalkuPerdagangan from './kalkuPerdagangan';
import kalkuPeternakan from './kalkuPeternakan';



const AppNavigator  = createStackNavigator({
    'Beranda' : { screen : beranda },
    'Ilmuzakat' : { screen : ilmuZakat},
    'Faqzakat' : { screen : faqZakat},
    'Kalku1' : { screen : kalkulfitrah},  
    'Kalku2' : { screen : kalkuEmas},
    'Kalku3' : { screen : kalkuProfesi},
    'Kalku4' : { screen : kalkuPerdagangan},
    'Kalku5' : { screen : kalkuPeternakan}
},
{
        headerMode: 'none',
        navigationOptions: {
        headerVisible: false,
        }
    })
const Main =createAppContainer(AppNavigator);

export default Main;