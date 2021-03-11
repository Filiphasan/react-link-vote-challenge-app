import React, { useState, useEffect } from 'react'
import './App.css';
import Alert from './components/Alert/Alert';
import List from './components/List/List';
import Navbar from './components/Navbar/Navbar';
import Popup from './components/Popup/Popup';
import Submit from './components/Submit/Submit';
import getDataToLS, { setDataToLS } from './components/Helper';

const App = () => {
  const [links, setLinks] = useState([]);
  const [alert, setAlert] = useState({ msg: '', visible: false });
  const [link, setLink] = useState({ name: '', url: '', points: 0 });
  const [popup, setPopup] = useState({ msg: '', visible: false });

  useEffect(() => {
    const datas = getDataToLS("links");
    setLinks(datas);
  }, [])

  const sortAtoZ = () => {
    let data1 = links.sort((a, b) => (a.points > b.points) ? 1 : -1);
    setLinks(data1);
    console.log("a to z");
    console.log(links);
  }
  const sortZtoA = () => {
    let data2 = links.sort((a, b) => (b.points > a.points) ? 1 : -1);
    setLinks(data2);
    console.log("z to a");
    console.log(links);
  }
  return (
    <>
      <Alert visible={alert.visible} />
      <Popup visible={popup.visible} />
      <Navbar />
      <Submit />
      <List links={links} sortAtoZ={sortAtoZ} sortZtoA={sortZtoA} />
    </>
  );
}

export default App;
