import { Text, Title } from '@/common';
import { Section } from '@/app/layouts';
import { NumberedCard } from '@/app/components';

export const HomeExperience = () => {
  return (
    <Section scheme="secondary" className="sec-home-experience">
      <Section.Header className="sec-home-experience-header">
        <Title scheme="accent" size="xxs" h2>
          Experience
        </Title>
      </Section.Header>
      <Section.Content className="sec-home-experience-content">
        <NumberedCard integer="01" title="Expertise">
          <Text>
            In crafting beautiful, repsonsive, and intuitive user interfaces across various global
            financial platforms. Most recently as part of an engineering team delivering a full
            featured UI component library for a multi-billion dollar financial institution based in
            the United States.
          </Text>
        </NumberedCard>
        <NumberedCard integer="02" title="Technologies">
          <Text>
            My expertise in modern front-end technologies such as TypeScript, React.js, CSS, and
            more.
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
