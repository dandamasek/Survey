import React, { useState } from "react"; // Import React a useState hook
// import "./App.css";
import data from "./mock-data.json"; // Importovat mock data z JSON souboru

function Table(){
    const [contacts] = useState(data); // Inicializujte stav contacts daty z JSON souboru pomocí hooku useState

    return (
      // vytvoření sloupcu tabulky
      <div className="app-container">  
        <table> 
          <thead>
            <tr>
              <th>Jmeno</th>
              <th>Bydliste</th> 
              <th>Tel cislo</th> 
              <th>Emailova Adresa</th> 
              <th>Pohlavi(M, Z)</th>
            </tr>
          </thead>
          <tbody> 
  
          {/* // Pro každý kontakt v poli contacts vykreslete řádek tabulky */}
  
            {contacts.map((contact) => ( 
              <tr className={contact.gender === 'Z' ? 'female' : 'male'}> 
                <td>{contact.fullName}</td> 
                <td>{contact.address}</td> 
                <td>{contact.phoneNumber}</td> 
                <td>{contact.email}</td> 
                <td>{contact.gender}</td> 
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
}

export default Table;