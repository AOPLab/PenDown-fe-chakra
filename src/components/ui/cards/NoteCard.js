import {
  Box, useColorModeValue, Image, Icon, HStack, VStack, Avatar, Spacer,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import {
  FiCalendar, FiEye, FiBookmark,
} from 'react-icons/fi';
// FiEye, FiHeart, FiBookmark
import { pdfjs } from 'react-pdf';
import { avatarSrc } from '../../util/Helper';
import Card from '../Card';
import CardBadge from './CardBadge';

export default function NoteCard(props) {
  const property = {
    pdfUrl: 'http://www.africau.edu/images/default/sample.pdf',
    imageUrl: 'https://bit.ly/2Z4KKcF',
    imageAlt: 'Alt',
    dateCreated: 'Mar. 12, 2022',
    title: 'IM 3007 Midterm Note',
    formattedPrice: '$1,900.00',
    reviewCount: 34,
    viewCount: '3.2k',
    savedCount: '32',
    notability: true,
    username: 'cutey',
  };

  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = ({ p }) => {
    setNumPages(p);
    setPageNumber(1);
  };

  return (
    <Card variant="pendown" maxW="full">
      <Box
        bg={useColorModeValue('white', 'gray.800')}
        maxW="full"
        borderRadius="pendown"
        position="relative"
      >
        <Box css={{ display: 'block', position: 'relative' }} align="center" alignItems="center" borderBottom="2px solid black">
          {property.notability && (
          <>
            <CardBadge
              content="Notability"
              style={{ bottom: '1rem', right: '0.75rem', position: 'absolute' }}
            />
            {/* <Badge
              rounded="tag"
              px="4"
              py="2"
              colorScheme="gray"
              bottom={4}
              right={3}
              position="absolute"
              border="2px black solid"
              fontWeight={800}
            >
              Notability
            </Badge> */}
          </>
          )}
          {/* FIXME: PDF RENDERING
          <Document
          file={property.pdfUrl}
          onLoadSuccess={onDocumentLoadSuccess}
        >
          <Page pageNumber={pageNumber} />
        </Document> */}
          <Image
            src={props.imageUrl}
            alt={property.imageAlt}
            height="376px"
            width="275px"
            roundedTop="pendown"
          />

        </Box>

        <VStack p="4" align="left">
          <Box
            // mt="0px"
            fontWeight="bold"
            fontSize="2xl"
            as="h1"
            lineHeight="tight"
            isTruncated
          >
            {property.title}
          </Box>

          <Box display="flex" alignItems="center">
            <HStack>
              <Icon as={FiCalendar} w="18px" h="18px" css={{ strokeWidth: '3' }} />
              <Box as="span" color="black" fontSize="sm">
                {property.dateCreated}
              </Box>
            </HStack>
          </Box>

          <Box d="flex" alignItems="center" w="100%">
            <HStack>
              <Avatar
                border="2px solid black"
                size="sm"
                src={avatarSrc(property.username)}
              />
              <Box as="span" color="black" fontSize="sm" fontWeight={800}>{property.username}</Box>
            </HStack>
            <Spacer />
            <HStack
              color="gray.500"
              fontWeight="semibold"
              fontSize="xs"
              textTransform="uppercase"
            >
              <Icon as={FiEye} w="18px" h="18px" color="black" css={{ strokeWidth: '3' }} />
              <Box as="span" color="black" fontSize="sm" fontWeight={800}>
                {property.viewCount}
              </Box>
              <Icon as={FiBookmark} w="18px" h="18px" color="black" css={{ strokeWidth: '3' }} />
              <Box as="span" color="black" fontSize="sm" fontWeight={800}>
                {property.savedCount}
              </Box>
            </HStack>
          </Box>
        </VStack>
      </Box>
    </Card>
  );
}
