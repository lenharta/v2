import { DemoRoot } from '../DemoRoot';
import { useDisclosure } from '@/hooks';
import { Button, Disclosure, Text } from '@/core';

const DemoDisclosure = () => {
  const [isOpen, { toggle }] = useDisclosure(false);
  return (
    <DemoRoot className="v2-demo-box-disclosure">
      <Button onClick={toggle}>Toggle Disclosure</Button>

      <Disclosure isOpen={isOpen}>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione quisquam eaque est
          adipisci, in aliquam enim iusto illo hic, itaque iure! Blanditiis reiciendis nulla ullam
          vero dolorum praesentium ut, atque doloremque. Consectetur facilis natus, similique,
          quisquam tenetur corporis quis tempore molestiae illo, magnam quas nisi ab nemo.
          Doloremque voluptatum aspernatur tempora dicta tempore cumque veniam, perferendis numquam
          soluta expedita odio possimus odit quas consequatur voluptate perspiciatis iure in,
          accusantium eum minima ipsa, quidem quaerat voluptas recusandae. Quod error tempora, quis
          dicta quo quas voluptas? Facilis perferendis culpa enim quae, reiciendis facere explicabo
          a nesciunt alias quaerat nobis ut aut ducimus! Consectetur, quos cum fugiat maxime
          architecto obcaecati. Quisquam totam voluptatibus esse minima, magni debitis! Repellat
          repudiandae deleniti ut voluptatibus consequuntur non commodi veniam. Ab sit quidem
          consectetur pariatur non nulla numquam eum nesciunt esse doloremque ex cupiditate tempore
          ipsum ea magni, deserunt laboriosam totam eveniet harum dolore praesentium magnam. Ratione
          quos repellat a culpa magni porro asperiores ipsam eligendi et placeat enim exercitationem
          sapiente illum ex omnis esse, quidem quia! Enim, aliquid laudantium animi nam totam
          veritatis fuga laboriosam vero maiores, facilis necessitatibus corporis, aliquam sunt
          tenetur mollitia delectus vitae? Reprehenderit saepe at sequi quod nam! Iusto blanditiis
          fuga, alias earum corporis necessitatibus vitae illo doloremque, illum praesentium
          possimus cupiditate voluptas nesciunt? Non iusto fugiat eos libero odio nesciunt est
          repudiandae possimus ea quod, adipisci corrupti, nemo illum eligendi temporibus ex illo a
          placeat accusamus consequuntur. Ipsa, vero nemo. Deleniti qui esse pariatur eos dolor
          obcaecati. Dignissimos voluptas qui, quo omnis itaque animi maxime excepturi, molestiae
          odio pariatur sequi et eum modi, deserunt corrupti dicta voluptates unde sint aliquam
          saepe? Similique maiores est consequatur perferendis eos saepe! Quidem necessitatibus a
          error omnis atque tempore debitis alias eaque vitae officia iure consequatur, dolores
          dolorem quasi, nobis maxime illo maiores doloremque ipsam!
        </Text>
      </Disclosure>
    </DemoRoot>
  );
};

export { DemoDisclosure };
