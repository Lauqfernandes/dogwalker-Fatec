import { Appearance } from 'react-native';
import React from 'react'
import AppLoading from 'expo-app-loading';
import {useFonts, Montserrat_400Regular, Montserrat_700Bold} from '@expo-google-fonts/montserrat';
import {Cabin_400Regular, Cabin_700Bold} from '@expo-google-fonts/cabin';
import {ThemeProvider} from 'styled-components'
import themes from './src/themes'
import Home from './src/views/Home'

export default function App(){
  const deviceTheme = Appearance.getColorScheme()
  const theme = themes[deviceTheme] || theme.light
  const [fontsLoaded] = useFonts({
    Montserrat_400Regular, Montserrat_700Bold, Cabin_400Regular, Cabin_700Bold
  })
  if(!fontsLoaded) {return <AppLoading/>}
  else{
    return(
      <ThemeProvider theme = {theme}>
        <Home/>
      </ThemeProvider>
    )
  }
}


