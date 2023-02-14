import { Icon, WithTooltip } from '../../../shared';
import './Header.css';

export function Header() {
  return (
    <header className='Header__container'>
      <div className='Header__row'>
        <h1 className='Header__graph'>graph</h1>
        <h1 className='Header__editor'>EDITOR</h1>
        <WithTooltip tooltip='Inspired by Mermaid Live Editor'>
          <Icon icon='info' className='Header__info' />
        </WithTooltip>
      </div>
      <WithTooltip tooltip='GitHub repository'>
        <a
          href='https://github.com/d-mv/graph-editor'
          target='_blank'
          referrerPolicy='no-referrer'
          className='Header__github_button'
          rel='noreferrer'
        >
          <Icon icon='github' className='Header__github_icon' />
        </a>
      </WithTooltip>
    </header>
  );
}
