import '@styles/globals.css'
import Layout from '@components/layout'
import { createMuiTheme,  MuiThemeProvider } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';



const theme = createMuiTheme({
  
  palette : {
      type : 'dark',
      background : {
          default : "#000000",
      },
      primary : {
        main: '#9A6DF8',
        light:'#46ebff'
      },
      secondary : {
          main : '#fe14fd'
      }
  }

})




function Application({ Component, pageProps }) {
  return(
    < MuiThemeProvider theme={theme}>
    <ThemeProvider theme={theme}>
    <Layout>
       <Component {...pageProps} />
    </Layout>
    </ThemeProvider>
        </ MuiThemeProvider>
  )
  
  
  
}


export default Application