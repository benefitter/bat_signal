import { Box, Flex, Text } from 'native-base';
import CloseButton from '../../closeButton/Index';

interface ILayoutHeaderProps {
  title: string;
  showUser?: boolean;
  showClose?: boolean;
}

export default function LayoutHeader(props: ILayoutHeaderProps) {
  const { title, showUser, showClose } = props;
  
  return (
    <Flex
      my={6}
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      width="100%"
    >
      <Text
        fontFamily="UHCSerifSemiBold"
        fontSize="3xl"
        lineHeight="sm"
        color="uhcBlue.900"
        mr={4}
      >
        {title}
      </Text>
      {showUser && (
        <Box bgColor="uhcBrightBlue.900" p={2} rounded="full">
          <Text color="white" bold>
            HS
          </Text>
        </Box>
      )}
      {showClose && (
        <CloseButton/>
      )}
    </Flex>
  );
}
