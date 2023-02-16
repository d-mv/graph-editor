import './App.css';
import { Header, Aside, Main, Sharing } from '../domains';
import { Divider } from '../shared';

export function App() {
  return (
    <div className='App__container'>
      <Header />
      <div className='App__row'>
        <Aside />
        <Divider />
        <Main />
      </div>
      <Sharing />
    </div>
  );
}
