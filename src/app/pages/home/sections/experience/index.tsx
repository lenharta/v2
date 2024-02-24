import { Text } from '@/common';
import { Section } from '@/app/layouts';
import { NumberedCard } from '@/app/components';

export const HomeExperience = () => {
  return (
    <Section scheme="secondary">
      <Section.Content className="sec-home-experience">
        <NumberedCard integer="01" title="Expertise">
          <Text>
            In crafting beautiful, repsonsive, and intuitive user interfaces across various global
            financial platforms. Most recently as part of an engineering team delivering a full
            featured UI component library for a multi-billion dollar financial institution based in
            the United States.
          </Text>
        </NumberedCard>
        <NumberedCard integer="02" title="Design">
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus non commodi adipisci,
            ex ullam soluta officiis dolore, distinctio animi totam nisi necessitatibus deleniti
            eius optio. Voluptas iste reiciendis voluptatibus laudantium.
          </Text>
        </NumberedCard>
        <NumberedCard integer="03" title="Card Title">
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus non commodi adipisci,
            ex ullam soluta officiis dolore, distinctio animi totam nisi necessitatibus deleniti
            eius optio. Voluptas iste reiciendis voluptatibus laudantium.
          </Text>
        </NumberedCard>
      </Section.Content>
    </Section>
  );
};
