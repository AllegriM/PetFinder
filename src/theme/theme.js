import { extendTheme } from '@chakra-ui/react'


const theme = extendTheme({
    components:{
        Text: {
            defaultProps:{
                marginTop: "0em"
            }
        }
    },
    color: {
        choco: {
            500: "#8B521C"  
        }
    },
    config: {
        initialColorMode: 'light',
        useSystemColorMode: false,
    },
    breakpoints: {
        sm: '30em',
        md: '48em',
        lg: '62em',
        xl: '80em',
        '2xl': '96em',
    }
})

export default theme