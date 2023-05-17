import { Box, Flex, Pressable, ScrollView, Text } from 'native-base';
import React from 'react';

interface IChipListProps {
  options: string[];
  value: string | undefined;
  onChange: (value: string) => void;
}

export default function ChipList(props: IChipListProps) {
  const { options, value, onChange } = props;
  return (
    <ScrollView
      horizontal
      mx={-4}
      flexGrow={0}
      showsHorizontalScrollIndicator={false}
    >
      <Flex direction="row" px={4}>
        {options.map((option, index) => {
          const isActive = option === value;
          const bgColor = isActive ? 'uhcBrightBlue.200' : 'uhcGray.200';
          const color = isActive ? 'uhcBlue.900' : 'uhcGray.700';

          return (
            <Pressable
              onPress={(_) => {
                onChange(option);
              }}
              key={option}
            >
              <Box mr={3} bgColor={bgColor} rounded="2xl" py={2} px={5}>
                <Text color={color} fontSize="md">
                  {option}
                </Text>
              </Box>
            </Pressable>
          );
        })}
      </Flex>
    </ScrollView>
  );
}
