import { Button, Dropdown, Title } from '@/common';

export const Sandbox = () => {
  return (
    <div className="sandbox">
      <div className="sandbox-content">
        <Title>Sandbox</Title>
        <section className="sandbox-demo sandbox-demo-dropdown">
          <Dropdown>
            <Dropdown.Target>
              <Button>Dropdown Target</Button>
            </Dropdown.Target>
            <Dropdown.Box className="sandbox-demo-dropdown-box">
              <div>
                <p>Example Item 1</p>
                <p>Example Item 2</p>
                <p>Example Item 3</p>
                <p>Example Item 4</p>
                <p>Example Item 5</p>
              </div>
            </Dropdown.Box>
          </Dropdown>
        </section>
      </div>
    </div>
  );
};
