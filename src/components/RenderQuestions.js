// import React, { useState, useEffect } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const RenderQuestions = () => {
//   const questions = store.getState().survey.questions;

//   const [selectedOptions, setSelectedOptions] = useState({});
//   const [answersArr, setAnswersArr] = useState([]);

//   useEffect(() => {
//     const initialAnswers = [];
//     for (let i = 0; i < questions.length; i++) {
//       const question = questions[i];
//       initialAnswers.push({
//         id: question.order,
//         value: '',
//         answers: false,
//         expired: false,
//       });
//     }
//     setAnswersArr(initialAnswers);
//   }, [questions]);

//   const handleTextChange = (questionId, textValue) => {
//     setAnswersArr((prevAnswersArr) => {
//       const updatedAnswers = [...prevAnswersArr];
//       const answerIndex = updatedAnswers.findIndex((answer) => answer.id === questionId);
//       if (answerIndex !== -1) {
//         updatedAnswers[answerIndex] = {
//           ...updatedAnswers[answerIndex],
//           value: textValue,
//           answers: textValue.trim().length > 0,
//         };
//       }
//       return updatedAnswers;
//     });
//   };


//   const handleCheckboxChange = (questionId, checkedOptions) => {
//     setAnswersArr((prevAnswersArr) => {
//       const updatedAnswers = [...prevAnswersArr];
//       const answerIndex = updatedAnswers.findIndex((answer) => answer.id === questionId);
//       if (answerIndex !== -1) {
//         updatedAnswers[answerIndex] = {
//           ...updatedAnswers[answerIndex],
//           value: checkedOptions,
//           answers: checkedOptions.length > 0,
//         };
//       }
//       return updatedAnswers;
//     });
//   };


//   const handleRadioButtonChange = (questionId, optionValue) => {
//     setSelectedOptions((prevSelectedOptions) => ({
//       ...prevSelectedOptions,
//       [questionId]: optionValue,
//     }));
//     setAnswersArr((prevAnswersArr) => {
//       const updatedAnswers = [...prevAnswersArr];
//       const answerIndex = updatedAnswers.findIndex((answer) => answer.id === questionId);
//       if (answerIndex !== -1) {
//         updatedAnswers[answerIndex] = {
//           ...updatedAnswers[answerIndex],
//           value: optionValue,
//           answers: true,
//         };
//       }
//       return updatedAnswers;
//     });
//   };



//   const tableRows = [];
//   for (let i = 0; i < questions.length; i++) {
//     const question = questions[i];

//     if (question.typeOfAnswer === 'text') {
//       tableRows.push(
//         <table className="table-responsive-sm d-flex justify-content-center" key={i}>
//           <tbody>
//             <tr>
//               <th>{question.name}</th>
//             </tr>
//             <tr>
//               <td>
//                 <input
//                   type="text"
//                   name="value"
//                   onChange={(e) => handleTextChange(question.order, e.target.value)}
//                 />
//               </td>
//             </tr>
//           </tbody>
//         </table>
//       );
//     } else if (question.typeOfAnswer === 'radiobutton') {
//       tableRows.push(
//         <table className="table-responsive-sm d-flex justify-content-center" key={i}>
//           <tbody>
//             <tr>
//               <th>{question.name}</th>
//             </tr>
//             <tr>
//               <td>
//                 <label>
//                   <input
//                     type="radio"
//                     value="option1"
//                     checked={selectedOptions[question.order] === 'option1'}
//                     onChange={() => handleRadioButtonChange(question.order, 'option1')}
//                   />
//                   Option 1
//                 </label>
//               </td>
//             </tr>
//             <tr>
//               <td>
//                 <label>
//                   <input
//                     type="radio"
//                     value="option2"
//                     checked={selectedOptions[question.order] === 'option2'}
//                     onChange={() => handleRadioButtonChange(question.order, 'option2')}
//                   />
//                   Option 2
//                 </label>
//               </td>
//             </tr>
//           </tbody>
//         </table>
//       );
//     } 
//     else if (question.typeOfAnswer === 'select') {
//       tableRows.push(
//         <table className="table-responsive-sm d-flex justify-content-center" key={i}>
//           <tbody>
//             <tr>
//               <th>{question.name}</th>
//             </tr>
//             <tr>
//               <td>
//                 <label>
//                   <input
//                     type="checkbox"
//                     value="option1"
//                     onChange={(e) => handleCheckboxChange(question.order, e.target.value)}
//                   />
//                   Option 1
//                 </label>
//               </td>
//             </tr>
//             <tr>
//               <td>
//                 <label>
//                   <input
//                     type="checkbox"
//                     value="option2"
//                     onChange={(e) => handleCheckboxChange(question.order, e.target.value)}
//                   />
//                   Option 2
//                 </label>
//               </td>
//             </tr>
//             <tr>
//               <td>
//                 <label>
//                   <input
//                     type="checkbox"
//                     value="option3"
//                     onChange={(e) => handleCheckboxChange(question.order, e.target.value)}
//                   />
//                   Option 3
//                 </label>
//               </td>
//             </tr>
//           </tbody>
//         </table>
//       );
//     }
//   }

//   const handleSendAnswers = () => {
//     console.log(answersArr);
//     // Perform actions to send answers
//   };

//   return (
//     <>
//       {tableRows}
//       <div>
//         <button className="btn btn-primary" onClick={handleSendAnswers}>
//           Submit answers
//         </button>
//       </div>
//     </>
//   );
// };

// export default RenderQuestions;
