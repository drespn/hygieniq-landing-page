import {Button, Divider, Text} from '@nextui-org/react';
import React from 'react';
import {Box} from '../styles/box';
import {Flex} from '../styles/flex';

export const Statistics = () => {
   return (
      <>
         <Box
            css={{
               pt: '$20',
               pb: '$16',
               px: '$6',
            }}
         >
            <Flex direction={'column'} align={'center'}>
               <Text
                  h3
                  css={{
                     textAlign: 'center',
                  }}
               >
                  Learning to trust your Salesfoce is hard, we know. 
               </Text>
               <Text
                  span
                  css={{
                     maxWidth: '400px',
                     textAlign: 'center',
                  }}
               >
                  Automatically scale to keep up with CRM decay and enable
                  your other sales tools to work with more accurate lead data.
               </Text>
            </Flex>
            <Flex
               direction={'row'}
               wrap={'wrap'}
               justify={'center'}
               css={{
                  'gap': '4rem',
                  'pt': '$16',
                  '@sm': {
                     gap: '10rem',
                  },
               }}
            >
               <Flex direction={'column'}>
                  <Text h2 css={{color: '$blue600',textAlign: 'center'}}>
                     $100K+/month
                  </Text>
                  <Text span css={{textAlign: 'center'}} weight={'medium'}>
                     Saved in payroll costs saved in larger sales teams
                  </Text>
               </Flex>
               <Flex direction={'column'}>
                  <Text h2 css={{color: '$blue600'}}>
                     10+ hours saved
                  </Text>
                  <Text span css={{textAlign: 'center'}} weight={'medium'}>
                     Per sales rep/week
                  </Text>
               </Flex>
               
            </Flex>
         </Box>

         <Divider
            css={{position: 'absolute', inset: '0p', left: '0', mt: '$5'}}
         />
      </>
   );
};
