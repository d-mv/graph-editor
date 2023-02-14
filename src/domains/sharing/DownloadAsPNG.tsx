import { useRecoilValue } from 'recoil';
import html2canvas from 'html2canvas';

import { inputState, Button, graphRefState, graphErrorMessageState } from '../../shared';

export function DownloadAsPNG() {
  const graphRef = useRecoilValue(graphRefState);

  const message = useRecoilValue(graphErrorMessageState);

  async function handleClick() {
    if (!graphRef) return;

    const canvas = await html2canvas(graphRef, { removeContainer: true, backgroundColor: null });

    const data = canvas.toDataURL('image/png');

    const link = document.createElement('a');

    if (typeof link.download === 'string') {
      link.href = data;
      link.download = 'diagram.png';

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      window.open(data);
    }
  }

  return (
    <Button
      isDisabled={!graphRef || Boolean(message)}
      onClick={handleClick}
      tooltip='Download diagram as PNG'
      label='PNG'
      icon='download'
    />
  );
}
