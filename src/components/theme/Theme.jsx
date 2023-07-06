
// Supports weights 300-900
import '@fontsource-variable/rubik';
import { extendTheme } from '@chakra-ui/react';
// Supports weights 200-900
import '@fontsource-variable/nunito';

// example theme
const Theme = extendTheme({
  colors:{
    white:{
        900:"#fff",
    },
    black:{
      700:"rgba(0, 0, 0, 0.64)",
      800:"RGBA(0, 0, 0, 0.80)"
    },
    btnBg:{
      700:"#DD6B20",
    }
  },
  fonts:{
    heading:`'Nunito Variable', sans-serif`,
    body: `'Rubik Variable', sans-serif`,
  },

  
});

export default Theme