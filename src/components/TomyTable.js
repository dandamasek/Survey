import React from 'react';

function Zaloha() {
  const data = [
    {
      option: 'Odpověď 1',
      stillValid: true,
      pastValid: true,
    },
    {
      option: 'Odpověď 2',
      stillValid: true,
      pastValid: false,
    },
    {
      option: 'Odpověď 3',
      stillValid: false,
      pastValid: true,
    },
  ];

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <form style={{ width: '100%', maxWidth: '700px' }}>
        <h1 style={{ textAlign: 'center' }}>Název průzkumu</h1>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <label className="label" style={{ marginBottom: '16px' }}>Otázka 1</label>

          <table style={{ borderCollapse: 'collapse', width: '100%', maxWidth: '500px' }}>
            <thead>
              <tr>
                <th style={{ border: '1px solid black', padding: '8px', background: '#f2f2f2' }}>Možnosti odpovědí</th>
                <th style={{ border: '1px solid black', padding: '8px', background: '#f2f2f2' }}>Stále platné</th>
                <th style={{ border: '1px solid black', padding: '8px', background: '#f2f2f2' }}>Platné v minulosti</th>
              </tr>
            </thead>
            <tbody>
              {data.map((option, index) => (
                <tr key={index}>
                  <td style={{ border: '1px solid black', padding: '8px' }}>{option.option}</td>
                  <td style={{ border: '1px solid black', padding: '8px' }}>{option.stillValid ? '✔' : '❌'}</td>
                  <td style={{ border: '1px solid black', padding: '8px' }}>{option.pastValid ? '✔' : '❌'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </form>
    </div>
  );
}

export default Zaloha;