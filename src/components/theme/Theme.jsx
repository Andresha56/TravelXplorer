
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