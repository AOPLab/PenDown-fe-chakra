import React from 'react';
import {
  Flex, SimpleGrid, Container,
} from '@chakra-ui/react';
import NoteCard from './cards/NoteCard';

export default function NoteCardContainer(property) {
  return (
    <Container maxW="6xl">
      <Flex
        w="full"
        justifyContent="center"
        alignItems="center"
      >
        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 3 }}
          spacing={10}
          px={{ base: 4, lg: 8, xl: 12 }}
          py={20}
          mx="auto"
        >
          <NoteCard imageUrl="https://p.calameoassets.com/180515111509-087734d3ab9181b3dbabd2c3eab490b6/p1.jpg" />
          <NoteCard imageUrl="https://www.myperfectresume.com/wp-content/uploads/2021/07/accentuate_intern.svg" />
          <NoteCard imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/I-20-sample.pdf/page1-463px-I-20-sample.pdf.jpg" />
          <NoteCard imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGUp_6A6lTrhauVsYhgjXQl0hrbr2nkjveomha7GkGPksnRdWCKJwbAbToS_3ku3giebw&usqp=CAU" />
          <NoteCard imageUrl="https://imgv2-2-f.scribdassets.com/img/document/262443256/original/acb42c6feb/1613379183?v\u003d1" />
          <NoteCard imageUrl="https://img.yumpu.com/21400799/1/500x640/download-pdf-file-of-sample-newsletter-articles-get-involved.jpg" />
        </SimpleGrid>
      </Flex>
    </Container>
  );
}
