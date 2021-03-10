import React, { useState, useEffect } from 'react'
import './App.css';
import Alert from './components/Alert/Alert';
import List from './components/List/List';
import Navbar from './components/Navbar/Navbar';
import Popup from './components/Popup/Popup';
import Submit from './components/Submit/Submit';

const App = () => {
  const [links, setLinks] = useState([]);
  const [alert, setAlert] = useState({ msg: '', visible: false });
  const [link, setLink] = useState({ name: '', url: '', points: 0 });
  const [popup, setPopup] = useState(false);
  return (
    <>
      <Alert visible={alert.visible} />
      <Popup visible={popup} />
      <Navbar />
      <Submit />
      <List />
    </>
  );
}

export default App;
