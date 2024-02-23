import {Card, Divider, Grid, Text} from '@nextui-org/react';
import React from 'react';
import {BoxIcon} from '../icons/BoxIcon';
import {FeatureIcon} from '../icons/FeatureIcon';
import {Box} from '../styles/box';
import {Flex} from '../styles/flex';
import { relative } from 'path';

export const Features1 = () => {
   return (
      <>
         <Flex
            direction={'column'}
            css={{
               'gap': '1rem',
               'pt': '$20',
               'justifyContent': 'center',
               'alignItems': 'center',
               'px': '$7',
               '@sm': {
                  justifyContent: 'space-around',
                  px: '$32',
                  flexDirection: 'row',
               },
               '@md': {
                  px: '$64',
               },
            }}
         >
            <Flex direction="column">
               <Text span css={{color: '$blue600'}}>
                  Watch Demo
               </Text>
               <Text h2>Hygieniq in action</Text>
               

               <Flex
                  css={{
                     py: '$10',
                     gap: '$5',
                  }}
               >
                  <BoxIcon />
                  <Flex direction={'column'}>
                     <Text h4 weight={'medium'}>
                        Load in your Salesforce Reports. 
                     </Text>
                     <Text
                        span
                        css={{
                           maxWidth: '400px',
                           color: '$accents8',
                        }}
                     >
                        Connect via our integration to Salesforce and prioritize which reports you want cleaned
                        up for you.
                     </Text>
                  </Flex>
               </Flex>
               <Flex
                  css={{
                     py: '$10',
                     gap: '$5',
                  }}
               >
                  <BoxIcon />
                  <Flex direction={'column'}>
                     <Text h4 weight={'medium'}>
                        Process and scrub reports at scale.
                     </Text>
                     <Text
                        span
                        css={{
                           maxWidth: '400px',
                           color: '$accents8',
                        }}
                     >
                        Update Lead data and trust your Salesforce reports to be up to date every time you call them.
                     </Text>
                  </Flex>
               </Flex>
               <Flex
                  css={{
                     py: '$10',
                     gap: '$5',
                  }}
               >
                  <BoxIcon />
                  <Flex direction={'column'}>
                     <Text h4 weight={'medium'}
                     css={{
                        maxWidth: '450px'
                     }}
                     >
                        Automatically report on Lead and Account misalignments in Salesforce and fix them.
                     </Text>
                     <Text
                        span
                        css={{
                           maxWidth: '400px',
                           color: '$accents8',
                        }}
                     >
                        Trust that you are managing the Leads and Accounts aligned to you, without the usual Salesforce mess.
                     </Text>
                  </Flex>
               </Flex>
            </Flex>
            <Flex align={'center'} css={{
                  width: '100%',  // Takes up 90% of the screen width
                  maxWidth: '1200px',
                  margin: '0 auto', 
                  '@media (min-width: 600px)': {
                     marginLeft: '30%',  // Applies 30% margin on screens larger than 600px
                   }  // Doesn't grow larger than 1200px
                   // Centers the flex container
               }}>
               
               <Card 
               style={{
               width: '100%',  // Takes up full width on small screens
               maxWidth: '600px',// Doesn't grow larger than 700px
               aspectRatio: '7/5',  // Maintains a 7:5 aspect ratio
               padding: '5px',
               marginLeft: '30%'
   
               
               }}>
                  <Card.Body>
                  <iframe src="https://www.loom.com/embed/77c1e22d6d154b79b7eef319c47ed724?sid=8a34db02-4612-4961-ac6b-0ca3ff3ea90b"
                     allowFullScreen  
                     style={{
                     
                     width: '100%',
                     height: '100%'

                        
                  
                     }}
                     
                     >


                     </iframe>
                  
                     
                  </Card.Body>
               </Card>
            </Flex>
         </Flex>
         <Divider
            css={{position: 'absolute', inset: '0p', left: '0', mt: '$5'}}
         />
      </>
   );
};
