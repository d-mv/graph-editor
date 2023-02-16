import { CopyCodeLink } from '../CopyCodeLink';
import { CopyCode } from '../CopyCode';
import './Sharing.css';
import { CopyMarkdown } from '../CopyMarkdown';
import { DownloadAsJPEG } from '../DownloadAsJPEG';
import { DownloadAsPNG } from '../DownloadAsPNG';
import { Icon } from '../../../shared';

export function Sharing() {
  return (
    <div className='Sharing__container'>
      <p className='Sharing__title'>Sharing</p>
      <Icon icon='chevronUp' className='Sharing__chevron' />
      <div className='Sharing__line'>
        <div id='sharing-group-left' className='Sharing__line_group'>
          <CopyCodeLink />
          <CopyCode />
          <CopyMarkdown />
        </div>
        <div id='sharing-group-right' className='Sharing__line_group'>
          <DownloadAsJPEG />
          <DownloadAsPNG />
        </div>
      </div>
    </div>
  );
}
