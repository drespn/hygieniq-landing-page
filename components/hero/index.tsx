import {Button, Divider, Input, Text,Link} from '@nextui-org/react';
import React from 'react';
import {CheckIcon} from '../icons/CheckIcon';
import {Box} from '../styles/box';
import {Flex} from '../styles/flex';

export const Hero = () => {
   return (
      <>
         <Flex
            css={{
               'gap': '$3',
               'px': '$6',
               'flexDirection': 'column',
               'alignContent': 'center',
               'justifyContent': 'center',
               'alignItems': 'center',
               'width': '100%',
               '@sm': {
                  flexDirection: 'row',
                  mt: '$20',
               },
            }}
            justify={'center'}
         >
            <Box
               css={{

                  display: 'flex',
                  flexDirection: 'column',
                  gap: '$0',
                  justifyContent: 'center',
                  alignItems: 'center',
               }}
            >
               
                  <Text
                     h1
                     css={{
                        display: 'inline',
                        textAlign: 'center',
                     }}
                  >
                     Learning to trust your Salesforce 
                  </Text> 
                  <Text
                     h1
                     css={{
                        display: 'inline',
                        textAlign: 'center',

                     }}
                     color="primary"
                  >
                     starts today.
                  </Text>
            

               <Text
                  css={{
                     color: '$accents8',
                     maxWidth: '400px',
                     textAlign: 'center',
                  }}
                  size={'$lg'}
                  span
               >
                  Automating updated CRM data from your source of truth is now one step away.
               </Text>

               <Flex
                  css={{
                     gap: '$8',
                     pt: '$4',
                  }}
                  wrap={'wrap'}
               >
                  {/*<Input placeholder="Enter your email address" size="lg" />*/}
                  <Button as={Link} target='_blank' href='https://43e2bd0f.sibforms.com/serve/MUIFAGsWGFtVji_sYzHXoSe_EeXPlnnbL481DOff5rbKpOqW6OArOuLy7aLrne8i16UyUapQpVbxvSx-hazL0y487UvwpfsjvpBUYbRYSwEZVYcLQpCTmvN0Bk69lvHIRCvRzm1kjY0SA-oKDmdRsWBbS2miz0PBNjGHgg2ZDGkinFiqvCkg8x9z7tF8fpSUulYi77UuW0FXI7uO'>
                     Suscribe Now
                  </Button>
               </Flex>
               <Flex
                  wrap={'wrap'}
                  css={{
                     'gap': '$8',
                     'py': '$7',
                     '@sm': {
                        py: '$4',
                     },
                  }}
               >
                  <Flex
                     css={{
                        color: '$accents7',
                        alignItems: 'center',
                     }}
                  >
                     <CheckIcon /> No credit card required.
                  </Flex>
                  <Flex
                     css={{
                        color: '$accents7',
                        alignItems: 'center',
                     }}
                  >
                     <CheckIcon /> 14-day free trial.
                  </Flex>
                  <Flex
                     css={{
                        color: '$accents7',
                        alignItems: 'center',
                     }}
                  >
                     <CheckIcon /> Cancel anytime.
                  </Flex>
               </Flex>
            </Box>
         </Flex>
         <Divider
            css={{position: 'absolute', inset: '0p', left: '0', mt: '$10'}}
         />
      </>
   );
};
