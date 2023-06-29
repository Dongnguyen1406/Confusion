import logo from './logo.svg';
import './App.css';
import {React} from 'react';
import { Provider } from 'react-redux';
import store2 from './reducer/store';
import Counter from './Components/Counter';
import Counter_Dispatch from './Components/Counter_Dispatch';
import UncontrollerForm from './Components/UncontrollerForm';
import UserForm from './Components/UserForm';
import ContactPage from './Components/ContactPage';
import ContactForm from './Components/ContactForm';


function App() {
  return (
    <Provider store={store2} >
      <ContactForm />
    </Provider>
  );
}

export default App;
