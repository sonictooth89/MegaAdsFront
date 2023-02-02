import React from "react";
import { Btn } from "../common/Btn";
import './Header.css';

export const Header = () => {
    return (<header>
        <h1>
          <p><strong>Mega</strong> Ogloszenia</p>
        </h1>
        <Btn text='Dodaj Ogloszenie'/>
        <div className="search">
          <input type="text" /><Btn text='Szukaj'/>
        </div>
      </header>)
}