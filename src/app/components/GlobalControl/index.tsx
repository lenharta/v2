import * as React from 'react';
import { Button } from '@/common';
import { useThemeCTX } from '@/store';

export const GlobalControlPanelMode = () => {
  const { setMode } = useThemeCTX();
  return (
    <div className="GlobalControl-panel">
      <Button onClick={() => setMode('light')}>Light</Button>
      <Button onClick={() => setMode('dark')}>Dark</Button>
      <Button onClick={() => setMode('dim')}>Dim</Button>
    </div>
  );
};

export const GlobalControlPanelDir = () => {
  const { setDir } = useThemeCTX();
  return (
    <div className="GlobalControl-panel">
      <Button onClick={() => setDir('ltr')}>Left-to-Right</Button>
      <Button onClick={() => setDir('rtl')}>Right-to-Left</Button>
    </div>
  );
};

export const GlobalControlPanelAccent = () => {
  const { setAccent } = useThemeCTX();
  return (
    <div className="GlobalControl-panel">
      <Button onClick={() => setAccent('orange')}>Orange</Button>
      <Button onClick={() => setAccent('yellow')}>Yellow</Button>
      <Button onClick={() => setAccent('green')}>Green</Button>
      <Button onClick={() => setAccent('mint')}>Mint</Button>
      <Button onClick={() => setAccent('teal')}>Teal</Button>
      <Button onClick={() => setAccent('cyan')}>Cyan</Button>
      <Button onClick={() => setAccent('blue')}>Blue</Button>
      <Button onClick={() => setAccent('indigo')}>Indigo</Button>
      <Button onClick={() => setAccent('purple')}>Purple</Button>
      <Button onClick={() => setAccent('pink')}>Pink</Button>
      <Button onClick={() => setAccent('brown')}>Brown</Button>
      <Button onClick={() => setAccent('red')}>Red</Button>
    </div>
  );
};

export const GlobalControlPanelAvatar = () => {
  const { setAvatar } = useThemeCTX();
  return (
    <div className="GlobalControl-panel">
      <Button onClick={() => setAvatar('baseball')}>Baseball</Button>
      <Button onClick={() => setAvatar('basketball')}>Basketball</Button>
      <Button onClick={() => setAvatar('beer')}>Beer</Button>
      <Button onClick={() => setAvatar('bolt')}>Bolt</Button>
      <Button onClick={() => setAvatar('code')}>Code</Button>
      <Button onClick={() => setAvatar('coffee')}>Coffee</Button>
      <Button onClick={() => setAvatar('dog')}>Dog</Button>
      <Button onClick={() => setAvatar('film')}>Film</Button>
      <Button onClick={() => setAvatar('football')}>Football</Button>
      <Button onClick={() => setAvatar('heart')}>Heart</Button>
      <Button onClick={() => setAvatar('music')}>Music</Button>
      <Button onClick={() => setAvatar('palette')}>Palette</Button>
      <Button onClick={() => setAvatar('person')}>Person</Button>
      <Button onClick={() => setAvatar('pizza')}>Pizza</Button>
      <Button onClick={() => setAvatar('puzzle')}>Puzzle</Button>
      <Button onClick={() => setAvatar('robot')}>Robot</Button>
      <Button onClick={() => setAvatar('shield')}>Shield</Button>
      <Button onClick={() => setAvatar('smiley')}>Smiley</Button>
      <Button onClick={() => setAvatar('soccer')}>Soccer</Button>
      <Button onClick={() => setAvatar('star')}>Star</Button>
      <Button onClick={() => setAvatar('trophy')}>Trophy</Button>
    </div>
  );
};

export const GlobalControl = () => {
  const [activePanel, setActivePanel] = React.useState('mode');
  return (
    <div className="GlobalControl">
      <div className="GlobalControl-display">
        <Button scheme="primary" onClick={() => setActivePanel('mode')}>
          Mode
        </Button>
        <Button scheme="primary" onClick={() => setActivePanel('accent')}>
          Accent
        </Button>
        <Button scheme="primary" onClick={() => setActivePanel('avatar')}>
          Avatar
        </Button>
      </div>
      {activePanel === 'mode' ? <GlobalControlPanelMode /> : null}
      {activePanel === 'accent' ? <GlobalControlPanelAccent /> : null}
      {activePanel === 'avatar' ? <GlobalControlPanelAvatar /> : null}
    </div>
  );
};
