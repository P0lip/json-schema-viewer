import { safeStringify } from '@stoplight/json';
import { Box, Flex, Popup, Tooltip } from '@stoplight/ui-kit';
import * as React from 'react';
import { IBaseNode } from '../types';
import { MutedText } from './common/MutedText';

export const Validations: React.FunctionComponent<Pick<IBaseNode, 'validations'>> = ({ validations }) => {
  const content = React.useMemo(
    () =>
      Object.entries(validations).map(([name, value]) => {
        if (typeof value === 'object') {
          value = safeStringify(value, undefined, 2);
        }

        return (
          <Box as="span" py={2} key={name}>
            <MutedText as="b">{name}:</MutedText> {String(value)}
          </Box>
        );
      }),
    [validations]
  );

  if (content.length === 0) return null;

  return (
    <Popup
      posX="left"
      posY="center"
      padding={2}
      renderTrigger={() => (
        <Box fontSize="0.75rem" ml={6}>
          {content.length} validations
        </Box>
      )}
      renderContent={() => (
        <Tooltip posX="left" posY="center" fontSize="0.75rem">
          <Flex flexFlow="column nowrap">{content}</Flex>
        </Tooltip>
      )}
    />
  );
};
