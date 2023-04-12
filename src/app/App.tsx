import './App.css';
import { Header, Aside, Sharing, Diagram } from '../domains';
import { Divider } from '../shared';

export function App() {
  return (
    <div className='App__container'>
      <Header />
      <div className='App__row'>
        <Aside />
        <Divider />
        <Diagram />
      </div>
      <Sharing />
    </div>
  );
}
