import { ControlButton } from './ControlButton';

import './Controls.css';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function Controls({ zoomIn, zoomOut, resetTransform }: any) {
  return (
    <div className='Controls__container'>
      <ControlButton onClick={zoomIn} icon={{ icon: 'zoomIn' }} />
      <ControlButton onClick={resetTransform} icon={{ icon: 'zoomCenter' }} />
      <ControlButton onClick={zoomOut} icon={{ icon: 'zoomOut' }} />
    </div>
  );
}
