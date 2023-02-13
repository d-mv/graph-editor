import './App.css';
import { Header, Aside, Main } from '../domains';
import { Divider, useAddress } from '../shared';

export function App() {
  useAddress();
  return (
    <div className='App__container'>
      <Header />
      <div className='row'>
        <Aside />
        <Divider />
        <Main />
      </div>
    </div>
  );
}
