import { Box, Radio, Text } from 'native-base';
import React from 'react';

interface IChipListProps {
  name: string;
  options: string[];
  value: string | undefined;
  setValue: (value: string) => void;
}

export default function RadioList(props: IChipListProps) {
  const { name, options, value, setValue } = props;

  return (
    <Box overflow="hidden">
      <Radio.Group
        name={name}
        accessibilityLabel={name}
        onChange={(nextValue) => {
          setValue(nextValue);
        }}
      >
        {options.map((option, index) => {
          const isActive = option === value;
          const bgColor = isActive ? 'uhcBrightBlue.200' : 'white';
          const borderBottomWidth = options.length - 1 !== index ? 2 : 0;

          return (
            <Box
              bgColor={bgColor}
              key={option}
              pl={2}
              borderColor="uhcGray.200"
              borderBottomWidth={borderBottomWidth}
              width="100%"
            >
              <Radio value={option} ml={4}>
                <Box px={4} py={2}>
                  <Text
                    fontSize="md"
                    lineHeight="sm"
                    py={3}
                    pl={2}
                    mr={8}
                    width="90%"
                  >
                    {option}
                  </Text>
                </Box>
              </Radio>
            </Box>
          );
        })}
      </Radio.Group>
    </Box>
  );
}
