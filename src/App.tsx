import React, { useState } from 'react';
//import { Header } from './components/layout/Header';
import { Map } from './components/Map/Map';
import { HeaderBootstrap } from './components/layout/HeaderBootstrap';
import { SearchContext } from './contexts/search.context';
import { Route, Routes } from 'react-router-dom';
import { AddForm } from './components/AddForm/AddForm';

export const App = () => {
  const [search, setSearch] = useState('');
 
  return (
    <SearchContext.Provider value={{search, setSearch}}>
      <HeaderBootstrap/>
      <Routes>
        <Route path='/' element={<Map/>} />
        <Route path='/add' element={<AddForm/>} />
      </Routes>
    </SearchContext.Provider>
  )
}
