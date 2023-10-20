import { config } from '@gluestack-ui/config';
import { Box, Button, ButtonText, FormControl, FormControlLabel, FormControlLabelText, GluestackUIProvider, Heading, Input, InputField, Text } from '@gluestack-ui/themed';
import { useState } from 'react';

export default function App() {
  const [idade, setIdade] = useState("18")
  return (
    <GluestackUIProvider config={config}>

      <Box bg="$amber500" h={"$full"} justifyContent="center" alignItems="center">

      <Heading>ETEC</Heading>

      <FormControl w={"$full"} px={"$5"}>
        <FormControlLabel>
          <FormControlLabelText>Idade</FormControlLabelText>
          </FormControlLabel>
          <Input>
          <InputField placeholder="Exemplo: 18"></InputField>
          </Input>
          <Button mt={"$2"}>
            <ButtonText>Calcular</ButtonText>
          </Button>
       </FormControl>

         <Text>ETEC - Sophia</Text>
      </Box>
      
    </GluestackUIProvider>
  );
}

 