import React, { useState, useEffect } from 'react'
import './App.css';
import Alert from './components/Alert/Alert';
import List from './components/List/List';
import Navbar from './components/Navbar/Navbar';
import Popup from './components/Popup/Popup';
import Submit from './components/Submit/Submit';
import getDataToLS, { setDataToLS } from './components/Helper';

const App = () => {
  const [links, setLinks] = useState(getDataToLS("links"));
  const [alert, setAlert] = useState({ msg: '', visible: false });
  const [link, setLink] = useState({ name: '', url: '', points: 0 });
  const [popup, setPopup] = useState(false);
  useEffect(() => {
    console.log(links);
  }, [])

  const sortAtoZ = () => {
    let data1 = links.sort((a, b) => (a.points > b.points) ? 1 : -1);
    setLinks([]);
    setLinks(data1);
  }
  const sortZtoA = () => {
    let data2 = links.sort((a, b) => (b.points > a.points) ? 1 : -1);
    setLinks([]);
    setLinks(data2);
  }
  return (
    <>
      <Alert visible={alert.visible} />
      <Popup visible={popup} />
      <Navbar />
      <Submit />
      <List links={links} sortAtoZ={sortAtoZ} sortZtoA={sortZtoA} />
    </>
  );
}

export default App;
