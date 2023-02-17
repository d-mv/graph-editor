import { useRecoilValue } from 'recoil';

import { Button, graphRefState, graphErrorMessageState } from '../../shared';

export function DownloadAsSVG() {
  const graphRef = useRecoilValue(graphRefState);

  const message = useRecoilValue(graphErrorMessageState);

  async function handleClick() {
    if (!graphRef) return;

    const svg = graphRef.getElementsByTagName('svg')[0];

    const link = document.createElement('a');

    const serializer = new XMLSerializer();

    const file = new Blob([serializer.serializeToString(svg)], { type: 'text/plain' });

    if (typeof link.download === 'string') {
      link.href = URL.createObjectURL(file);
      link.download = 'diagram.svg';

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      window.open(String(svg));
    }
  }

  return (
    <Button
      iconFill
      isDisabled={!graphRef || Boolean(message)}
      onClick={handleClick}
      // tooltip='Download diagram as SVG'
      label='SVG'
      icon='svg'
    />
  );
}
