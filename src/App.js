import React, { useState, useEffect } from 'react'
import './App.css';
import Alert from './components/Alert/Alert';
import List from './components/List/List';
import Navbar from './components/Navbar/Navbar';
import Popup from './components/Popup/Popup';
import Submit from './components/Submit/Submit';
import getDataToLS, { setDataToLS } from './components/Helper';

const App = () => {
  const [links, setLinks] = useState([
    { name: 'stackoverflow', url: 'https://stackoverflow.com/', points: 0 },
    { name: 'hackerrank', url: 'https://www.hackerrank.com/', points: 2 },
    { name: 'bionluk', url: 'https://bionluk.com/', points: 0 }
  ]);
  const [alert, setAlert] = useState({ msg: '', visible: false });
  const [link, setLink] = useState({ name: '', url: '', points: 0 });
  const [popup, setPopup] = useState({ msg: '', visible: false });



  const sortAtoZ = () => {
    let datas = [...links];
    let data1 = datas.sort((a, b) => (a.points > b.points) ? 1 : -1);
    setLinks(data1);
  }
  const sortZtoA = () => {
    let datas = [...links];
    let data2 = datas.sort((a, b) => (b.points > a.points) ? 1 : -1);
    setLinks(data2);
  }

  const removeLinkClickHandler = (item) => {
    console.log(item);
  }
  return (
    <>
      <Alert visible={alert.visible} />
      <Popup visible={popup.visible} />
      <Navbar />
      <Submit />
      <List links={links} sortAtoZ={sortAtoZ} removeLinkClickHandler={removeLinkClickHandler} sortZtoA={sortZtoA} />
    </>
  );
}

export default App;
