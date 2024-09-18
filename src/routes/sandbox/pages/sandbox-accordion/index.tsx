import * as React from 'react';
import { Accordion, Text } from '@/core';
import { SandboxLayout } from '../sandbox-layout';

export const SandboxAccordion: React.FC<{}> = ({}) => {
  const [value, setValue] = React.useState<string | null>(null);

  // [NOTE]: NEED A WAY TO RENDER DYNAMIC STATE PROPS
  // const [values, setValues] = React.useState<string[]>([]);

  return (
    <SandboxLayout
      name="Accordion"
      controls={[
        // {
        //   type: 'checkbox',
        //   prop: 'multiple',
        //   initialValue: false,
        // },
        {
          type: 'switch',
          prop: 'isReadonly',
          initialValue: false,
        },
        {
          type: 'switch',
          prop: 'isLoading',
          initialValue: false,
        },
        {
          type: 'switch',
          prop: 'isDisabled',
          initialValue: false,
        },
        {
          type: 'select',
          prop: 'size',
          data: ['xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
          initialValue: 'sm',
        },
        {
          type: 'select',
          prop: 'variant',
          data: ['default', 'accent'],
          initialValue: 'default',
        },
      ]}
    >
      <Accordion value={value} onChange={setValue} className="v2-sandbox-accordion">
        <Accordion.Item value="item-1">
          <Accordion.Target>Item 1</Accordion.Target>
          <Accordion.Panel>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi minus libero
              recusandae, incidunt quia quas illo non ullam atque, praesentium nostrum. Accusantium
              assumenda animi unde deleniti, officia modi recusandae in!
            </Text>
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item value="item-2">
          <Accordion.Target>Item 2</Accordion.Target>
          <Accordion.Panel>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi minus libero
              recusandae, incidunt quia quas illo non ullam atque, praesentium nostrum. Accusantium
              assumenda animi unde deleniti, officia modi recusandae in!
            </Text>
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item value="item-3">
          <Accordion.Target>Item 3</Accordion.Target>
          <Accordion.Panel>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi minus libero
              recusandae, incidunt quia quas illo non ullam atque, praesentium nostrum. Accusantium
              assumenda animi unde deleniti, officia modi recusandae in!
            </Text>
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item value="item-4">
          <Accordion.Target>Item 4</Accordion.Target>
          <Accordion.Panel>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi minus libero
              recusandae, incidunt quia quas illo non ullam atque, praesentium nostrum. Accusantium
              assumenda animi unde deleniti, officia modi recusandae in!
            </Text>
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item value="item-5">
          <Accordion.Target>Item 5</Accordion.Target>
          <Accordion.Panel>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi minus libero
              recusandae, incidunt quia quas illo non ullam atque, praesentium nostrum. Accusantium
              assumenda animi unde deleniti, officia modi recusandae in!
            </Text>
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </SandboxLayout>
  );
};

SandboxAccordion.displayName = '@v2/Route.Sandbox.Accordion';
