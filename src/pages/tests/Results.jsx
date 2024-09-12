// import React from 'react';
// import { useLocation } from 'react-router-dom';
// import './ResultsPage.css';

// const ResultsPage = () => {
//   const location = useLocation();
//   const { score, analysis } = location.state;

//   return (
//     <div className="results-container">
//       <h1>Your Test Results</h1>
//       <p className="result-score">
//         Your Score: <span className="score-value">{score}</span>
//       </p>
//       <p className="analysis-text">{analysis}</p>
//     </div>
//   );
// };

// export default ResultsPage;



//  -------- aboce is simply working great , cangeing bloew to show it on smae page, and cahanging tthe locaiton stuf

// import React from 'react';
// import './ResultsPage.css';

// const ResultsPage = ({ score, analysis, location }) => {
//   // Fallback to location.state if props aren't directly provided
//   const resultScore = score ?? location?.state?.score;
//   const resultAnalysis = analysis ?? location?.state?.analysis;

//   return (
//     <div className="results-container">
//       <h1>Your Test Results</h1>
//       <p className="result-score">
//         Your Score: <span className="score-value">{resultScore}</span>
//       </p>
//       <p className="analysis-text">{resultAnalysis}</p>
//     </div>
//   );
// };

// export default ResultsPage;



// ----------above is working , ---- belwo is test for showing more p9oint other the results 

// import React from 'react';
// import './ResultsPage.css';

// const ResultsPage = ({ score, analysis, mentalStability, anxietyAttackRisk, recommendedActions, location }) => {
//   // Fallback to location.state if props aren't directly provided
//   const resultScore = score ?? location?.state?.score;
//   const resultAnalysis = analysis ?? location?.state?.analysis;
//   const resultMentalStability = mentalStability ?? location?.state?.mentalStability;
//   const resultAnxietyAttackRisk = anxietyAttackRisk ?? location?.state?.anxietyAttackRisk;
//   const resultRecommendedActions = recommendedActions ?? location?.state?.recommendedActions;

//   return (
//     <div className="results-container">
//       <h1>Your Test Results</h1>
      
//       <p className="result-score">
//         Your Score: <span className="score-value">{resultScore}/30</span>
//       </p>
//       {/* <hr /> */}
//       <p className="analysis-text">{resultAnalysis}</p>
      
//       <hr />
      
//       <h2>Mental Stability : {resultMentalStability}</h2>
      
      
//       {/* <hr /> */}
      
//       <h2>Chances of Anxiety Attack : {resultAnxietyAttackRisk}</h2>

      
//       {/* <hr /> */}
      
//       <h2>What Should You Follow : 

// {recommendedActions.length > 0 ? (
//         <ul className="recommended-actions-list">
//           {recommendedActions.map((action, index) => (
//             <li key={index}>{action}</li>
//           ))}
//         </ul>
//       ) : (
//         <p className="analysis-text">No recommended actions available.</p>
//       )}

//       </h2>
//    </div>
//   );
// };

// export default ResultsPage;


//  above is working --------- belwo is test to show ianswers and qsns at reuslt page ---------

// import React, { useState } from 'react';
// import './ResultsPage.css';

// const ResultsPage = ({
//   score,
//   analysis,
//   mentalStability,
//   anxietyAttackRisk,
//   recommendedActions,
//   questions, // Receiving questions array
//   answers, // Receiving answers array
//   optionsList, // Receiving optionsList array
//   location
// }) => {
//   const [showAnswers, setShowAnswers] = useState(false);

//   // Fallback to location.state if props aren't directly provided
//   const resultScore = score ?? location?.state?.score;
//   const resultAnalysis = analysis ?? location?.state?.analysis;
//   const resultMentalStability = mentalStability ?? location?.state?.mentalStability;
//   const resultAnxietyAttackRisk = anxietyAttackRisk ?? location?.state?.anxietyAttackRisk;
//   const resultRecommendedActions = recommendedActions ?? location?.state?.recommendedActions;
//   const userAnswers = answers ?? location?.state?.answers; // Fallback for answers
//   const userQuestions = questions ?? location?.state?.questions; // Fallback for questions
//   const userOptionsList = optionsList ?? location?.state?.optionsList; // Fallback for optionsList

//   return (
//     <div className="results-container">
//       <h1>Your Test Results</h1>

//       <p className="result-score">
//         Your Score: <span className="score-value">{resultScore}/30</span>
//       </p>
//       <p className="analysis-text">{resultAnalysis}</p>

//       <hr />

//       <h2>Mental Stability: {resultMentalStability}</h2>
//       <h2>Chances of Anxiety Attack: {resultAnxietyAttackRisk}</h2>

//       <h2>What Should You Follow:</h2>
//       {resultRecommendedActions.length > 0 ? (
//         <ul className="recommended-actions-list">
//           {resultRecommendedActions.map((action, index) => (
//             <li key={index}>{action}</li>
//           ))}
//         </ul>
//       ) : (
//         <p className="analysis-text">No recommended actions available.</p>
//       )}

//       {/* Button to toggle the dropdown */}
//       <button
//         className="toggle-answers-btn"
//         onClick={() => setShowAnswers(!showAnswers)}
//       >
//         {showAnswers ? 'Hide Selected Answers' : 'Show Selected Answers'}
//       </button>

//       {/* Conditionally render the dropdown list of selected answers */}
//       {showAnswers && userAnswers && userQuestions && userOptionsList && (
//         <div className="selected-answers-dropdown">
//           <h3>Your Selected Answers</h3>
//           <ul>
//             {userAnswers.map((answerIndex, questionIndex) => (
//               <li key={questionIndex}>
//                 <strong>{userQuestions[questionIndex]}</strong>: {userOptionsList[questionIndex].options[answerIndex]}
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ResultsPage;


//  ------ above test is owrking but layout, and desing is not good - belwo is teh test to good, desgin and layout

// import React, { useState } from 'react';
// import './ResultsPage.css';

// const ResultsPage = ({
//   score,
//   analysis,
//   mentalStability,
//   anxietyAttackRisk,
//   recommendedActions,
//   questions,
//   answers,
//   optionsList,
//   location
// }) => {
//   const [showAnswers, setShowAnswers] = useState(false);

//   // Fallback to location.state if props aren't directly provided
//   const resultScore = score ?? location?.state?.score;
//   const resultAnalysis = analysis ?? location?.state?.analysis;
//   const resultMentalStability = mentalStability ?? location?.state?.mentalStability;
//   const resultAnxietyAttackRisk = anxietyAttackRisk ?? location?.state?.anxietyAttackRisk;
//   const resultRecommendedActions = recommendedActions ?? location?.state?.recommendedActions;
//   const userAnswers = answers ?? location?.state?.answers;
//   const userQuestions = questions ?? location?.state?.questions;
//   const userOptionsList = optionsList ?? location?.state?.optionsList;

//   return (
//     <div className={`results-container ${showAnswers ? 'show-answers' : ''}`}>
//       <h1>Your Test Results</h1>

//       <p className="result-score">
//         Your Score: <span className="score-value">{resultScore}/30</span>
//       </p>
//       <p className="analysis-text">{resultAnalysis}</p>

//       <hr />

//       <h2>Mental Stability: {resultMentalStability}</h2>
//       <h2>Chances of Anxiety Attack: {resultAnxietyAttackRisk}</h2>

//       <h2>What Should You Follow:</h2>
//       {resultRecommendedActions.length > 0 ? (
//         <ul className="recommended-actions-list">
//           {resultRecommendedActions.map((action, index) => (
//             <li key={index}>{action}</li>
//           ))}
//         </ul>
//       ) : (
//         <p className="analysis-text">No recommended actions available.</p>
//       )}

//       <button
//         className="toggle-answers-btn"
//         onClick={() => setShowAnswers(!showAnswers)}
//       >
//         {showAnswers ? 'Hide Selected Answers' : 'Show Selected Answers'}
//       </button>

//       {showAnswers && userAnswers && userQuestions && userOptionsList && (
//         <div className="selected-answers-dropdown">
//           <h3>Your Selected Answers</h3>
//           <ul>
//             {userAnswers.map((answerIndex, questionIndex) => (
//               <li key={questionIndex}>
//                 <strong>{userQuestions[questionIndex]}</strong>: {userOptionsList[questionIndex].options[answerIndex]}
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ResultsPage;



// --------------------
// belwo is  test to show selcted ans as qsn ans  opotins int form -------

// import React, { useState } from 'react';
// import './ResultsPage.css';

// const ResultsPage = ({
//   score,
//   analysis,
//   mentalStability,
//   anxietyAttackRisk,
//   recommendedActions,
//   questions,
//   answers,
//   optionsList,
//   location
// }) => {
//   const [showAnswers, setShowAnswers] = useState(false);

//   // Fallback to location.state if props aren't directly provided
//   const resultScore = score ?? location?.state?.score;
//   const resultAnalysis = analysis ?? location?.state?.analysis;
//   const resultMentalStability = mentalStability ?? location?.state?.mentalStability;
//   const resultAnxietyAttackRisk = anxietyAttackRisk ?? location?.state?.anxietyAttackRisk;
//   const resultRecommendedActions = recommendedActions ?? location?.state?.recommendedActions;
//   const userAnswers = answers ?? location?.state?.answers;
//   const userQuestions = questions ?? location?.state?.questions;
//   const userOptionsList = optionsList ?? location?.state?.optionsList;

//   // Toggle function for showing/hiding answers
//   const toggleAnswers = () => {
//     setShowAnswers(!showAnswers);
//   };

//   return (
//     <div className="results-container">
//       <h1>Your Test Results</h1>

//       <p className="result-score">
//         Your Score: <span className="score-value">{resultScore}/30</span>
//       </p>
//       <p className="analysis-text">{resultAnalysis}</p>

//       <hr />

//       <h2>Mental Stability: {resultMentalStability}</h2>
//       <h2>Chances of Anxiety Attack: {resultAnxietyAttackRisk}</h2>

//       <h2>Recommended Actions:</h2>
//       {resultRecommendedActions.length > 0 ? (
//         <ul className="recommended-actions-list">
//           {resultRecommendedActions.map((action, index) => (
//             <li key={index}>{action}</li>
//           ))}
//         </ul>
//       ) : (
//         <p className="analysis-text">No recommended actions available.</p>
//       )}

//       {/* Toggle Button for Showing/Hiding Selected Answers */}
//       <button className="toggle-answers-btn" onClick={toggleAnswers}>
//         {showAnswers ? 'Hide Selected Answers' : 'Show Selected Answers'}
//       </button>

//       {/* Conditionally render selected answers */}
//       {showAnswers && userAnswers && userQuestions && userOptionsList && (
//         <div className="selected-answers-section">
//           <h2>Selected Answers:</h2>
//           {userAnswers.map((answerIndex, questionIndex) => (
//             <div className="question-answer-card" key={questionIndex}>
//               <div className="question">{userQuestions[questionIndex]}</div>
//               <div className="selected-answer">
//                 {userOptionsList[questionIndex].options[answerIndex]}
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default ResultsPage;


// ---------- above is working, as showing well designed , qsn and seelcted answers, 
//  ------- below is the test to donwalod the report, of the selected answers-------

// import React, { useState } from 'react';
// import jsPDF from 'jspdf';
// import html2canvas from 'html2canvas';
// import './ResultsPage.css';

// const ResultsPage = ({
//   score,
//   analysis,
//   mentalStability,
//   anxietyAttackRisk,
//   recommendedActions,
//   questions,
//   answers,
//   optionsList,
//   location
// }) => {
//   const [showAnswers, setShowAnswers] = useState(false);

//   const resultScore = score ?? location?.state?.score;
//   const resultAnalysis = analysis ?? location?.state?.analysis;
//   const resultMentalStability = mentalStability ?? location?.state?.mentalStability;
//   const resultAnxietyAttackRisk = anxietyAttackRisk ?? location?.state?.anxietyAttackRisk;
//   const resultRecommendedActions = recommendedActions ?? location?.state?.recommendedActions;
//   const userAnswers = answers ?? location?.state?.answers;
//   const userQuestions = questions ?? location?.state?.questions;
//   const userOptionsList = optionsList ?? location?.state?.optionsList;

//   // Toggle function for showing/hiding answers
//   const toggleAnswers = () => {
//     setShowAnswers(!showAnswers);
//   };

//   // Function to generate PDF
//   const generatePDF = () => {
//     const input = document.getElementById('pdf-content');

//     html2canvas(input).then((canvas) => {
//       const imgData = canvas.toDataURL('image/png');
//       const pdf = new jsPDF();
//       pdf.addImage(imgData, 'PNG', 10, 10);
//       pdf.save('report.pdf');
//     });
//   };

//   return (
//     <div className="results-container">
//       <h1>Your Test Results</h1>

//       <p className="result-score">
//         Your Score: <span className="score-value">{resultScore}/30</span>
//       </p>
//       <p className="analysis-text">{resultAnalysis}</p>

//       <hr />

//       <h2>Mental Stability: {resultMentalStability}</h2>
//       <h2>Chances of Anxiety Attack: {resultAnxietyAttackRisk}</h2>

//       <h2>Recommended Actions:</h2>
//       {resultRecommendedActions.length > 0 ? (
//         <ul className="recommended-actions-list">
//           {resultRecommendedActions.map((action, index) => (
//             <li key={index}>{action}</li>
//           ))}
//         </ul>
//       ) : (
//         <p className="analysis-text">No recommended actions available.</p>
//       )}

//       {/* Toggle Button for Showing/Hiding Selected Answers */}
//       <button className="toggle-answers-btn" onClick={toggleAnswers}>
//         {showAnswers ? 'Hide Selected Answers' : 'Show Selected Answers'}
//       </button>

//       {/* Conditionally render selected answers */}
//       {showAnswers && (
//         <div className="selected-answers-section" id="pdf-content">
//           <h2>Selected Answers:</h2>
//           {userAnswers.map((answerIndex, questionIndex) => (
//             <div className="question-answer-card" key={questionIndex}>
//               <div className="question">{userQuestions[questionIndex]}</div>
//               <div className="selected-answer">
//                 {userOptionsList[questionIndex].options[answerIndex]}
//               </div>
//             </div>
//           ))}
//         </div>
//       )}

//       {/* Button to Download PDF */}
//       <button className="toggle-answers-btn" onClick={generatePDF}>
//         Download Report
//       </button>
//     </div>
//   );
// };

// export default ResultsPage;



// ----- above is working great , but two issue, in above code, like first - onlyy donalodable when slected anserrs are toggled on, and also the report pdf have only one page, which showoing hald data, and cuts other data, 


// ====-------- belos is test to downalod the report even when show selcted answers or not, and also , handle multiple pages gen in pdf 

import React, { useState } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import './ResultsPage.css';

const ResultsPage = ({
  score,
  analysis,
  mentalStability,
  anxietyAttackRisk,
  recommendedActions,
  questions,
  answers,
  optionsList,
  location
}) => {
  const [showAnswers, setShowAnswers] = useState(false);

  const resultScore = score ?? location?.state?.score;
  const resultAnalysis = analysis ?? location?.state?.analysis;
  const resultMentalStability = mentalStability ?? location?.state?.mentalStability;
  const resultAnxietyAttackRisk = anxietyAttackRisk ?? location?.state?.anxietyAttackRisk;
  const resultRecommendedActions = recommendedActions ?? location?.state?.recommendedActions;
  const userAnswers = answers ?? location?.state?.answers;
  const userQuestions = questions ?? location?.state?.questions;
  const userOptionsList = optionsList ?? location?.state?.optionsList;

  const options_length = optionsList.length;

  // Toggle function for showing/hiding answers
  const toggleAnswers = () => {
    setShowAnswers(!showAnswers);
  };

  // Function to generate PDF
  const generatePDF = () => {
    // Temporarily show the answers if they are hidden
    if (!showAnswers) {
      setShowAnswers(true);
      setTimeout(() => {
        createPDF();
        setShowAnswers(false);
      }, 500); // Delay to allow rendering
    } else {
      createPDF();
    }
  };

  const createPDF = () => {
    const input = document.getElementById('pdf-content');

    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();

      const imgWidth = 210; // A4 width in mm
      const pageHeight = 295; // A4 height in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
      let position = 0;

      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft > 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save('report.pdf');
    });
  };

  return (
    <div className="results-container">
      <h1>Your Test Results</h1>

      <p className="result-score">
        Your Score: <span className="score-value">{resultScore}/{4*options_length}</span>
      </p>
      <p className="analysis-text">{resultAnalysis}</p>

      <hr />

      <h2>Mental Stability: {resultMentalStability}</h2>
      <h2>Chances of Anxiety Attack: {resultAnxietyAttackRisk}</h2>

      <h2>Recommended Actions:</h2>
      {resultRecommendedActions.length > 0 ? (
        <ul className="recommended-actions-list">
          {resultRecommendedActions.map((action, index) => (
            <li key={index}>{action}</li>
          ))}
        </ul>
      ) : (
        <p className="analysis-text">No recommended actions available.</p>
      )}


      {/* Button to Download PDF */}
      <button className="toggle-answers-btn" onClick={generatePDF}>
        Download Report
      </button>

      {/* Toggle Button for Showing/Hiding Selected Answers */}
      <button className="toggle-answers-btn" onClick={toggleAnswers}>
        {showAnswers ? 'Hide Selected Answers' : 'Show Selected Answers'}
      </button>

      {/* Conditionally render selected answers */}
      <div className="selected-answers-section" id="pdf-content" style={{ display: showAnswers ? 'block' : 'none' }}>
        <h2>Selected Answers:</h2>
        {userAnswers.map((answerIndex, questionIndex) => (
          <div className="question-answer-card" key={questionIndex}>
            <div className="question">{userQuestions[questionIndex]}</div>
            <div className="selected-answer">
              {userOptionsList[questionIndex].options[answerIndex]}
            </div>
          </div>
        ))}
      </div>


    </div>
  );
};

export default ResultsPage;


// --------- aove is best till 20-08-2024- , 12:56 ------------
//  ------- belwo is test to genreate pdff with margin and other stuff, ----------- baki above is wrokginn fine, 


// import React, { useState } from 'react';
// import './ResultsPage.css';

// const ResultsPage = ({ 
//   score, 
//   analysis, 
//   mentalStability, 
//   anxietyAttackRisk, 
//   recommendedActions, 
//   selectedAnswers, 
//   location 
// }) => {
//   const [showAnswers, setShowAnswers] = useState(false);

//   // Fallback to location.state if props aren't directly provided
//   const resultScore = score ?? location?.state?.score;
//   const resultAnalysis = analysis ?? location?.state?.analysis;
//   const resultMentalStability = mentalStability ?? location?.state?.mentalStability;
//   const resultAnxietyAttackRisk = anxietyAttackRisk ?? location?.state?.anxietyAttackRisk;
//   const resultRecommendedActions = recommendedActions ?? location?.state?.recommendedActions;
//   const userAnswers = selectedAnswers ?? location?.state?.selectedAnswers;

//   const downloadReport = async () => {
//     const response = await fetch('http://localhost:3000/generate-report', { // Ensure you are using the correct backend URL
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         score: resultScore,
//         analysis: resultAnalysis,
//         mentalStability: resultMentalStability,
//         anxietyAttackRisk: resultAnxietyAttackRisk,
//         recommendedActions: resultRecommendedActions,
//         selectedAnswers: userAnswers,
//       }),
//     });
//     const blob = await response.blob();
//     const url = window.URL.createObjectURL(blob);
//     const a = document.createElement('a');
//     a.href = url;
//     a.download = 'report.pdf';
//     a.click();
//   };

//   return (
//     <div className="results-container">
//       <h1>Your Test Results</h1>
      
//       <p className="result-score">
//         Your Score: <span className="score-value">{resultScore}/30</span>
//       </p>
//       <p className="analysis-text">{resultAnalysis}</p>
      
//       <hr />
      
//       <h2>Mental Stability: {resultMentalStability}</h2>
//       <h2>Chances of Anxiety Attack: {resultAnxietyAttackRisk}</h2>
      
//       <h2>What Should You Follow:</h2>
//       {resultRecommendedActions.length > 0 ? (
//         <ul className="recommended-actions-list">
//           {resultRecommendedActions.map((action, index) => (
//             <li key={index}>{action}</li>
//           ))}
//         </ul>
//       ) : (
//         <p className="analysis-text">No recommended actions available.</p>
//       )}

//       {/* Button to toggle the dropdown */}
//       <button 
//         className="toggle-answers-btn" 
//         onClick={() => setShowAnswers(!showAnswers)}
//       >
//         {showAnswers ? 'Hide Selected Answers' : 'Show Selected Answers'}
//       </button>
      
//       {/* Conditionally render the dropdown list of selected answers */}
//       {showAnswers && userAnswers && (
//         <div className="selected-answers-dropdown">
//           <h3>Your Selected Answers</h3>
//           <ul>
//             {userAnswers.map((item, index) => (
//               <li key={index}>
//                 <strong>{item.question}</strong>: {item.answer}
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}

//       {/* Button to download the PDF report */}
//       <button className="download-report-btn" onClick={downloadReport}>
//         Download Report
//       </button>
//     </div>
//   );
// };

// export default ResultsPage;








// ------------ below is the test after appliying reply comment concvept ---------

// import React, { useState } from 'react';
// import jsPDF from 'jspdf';
// import html2canvas from 'html2canvas';
// import './ResultsPage.css';

// const ResultsPage = ({
//   score,
//   analysis,
//   mentalStability,
//   anxietyAttackRisk,
//   recommendedActions,
//   questions,
//   answers,
//   optionsList,
//   location
// }) => {
//   const [showAnswers, setShowAnswers] = useState(false);

//   // Destructure the passed data, or fallback to location.state (for direct navigation)
//   const resultScore = score ?? location?.state?.score;
//   const resultAnalysis = analysis ?? location?.state?.analysis;
//   const resultMentalStability = mentalStability ?? location?.state?.mentalStability;
//   const resultAnxietyAttackRisk = anxietyAttackRisk ?? location?.state?.anxietyAttackRisk;
//   const resultRecommendedActions = recommendedActions ?? location?.state?.recommendedActions;
//   const userAnswers = answers ?? location?.state?.answers;
//   const userQuestions = questions ?? location?.state?.questions;
//   const userOptionsList = optionsList ?? location?.state?.optionsList;

//   // Set a starting number for question numbering
//   const startingQuestionNumber = 50; // Adjust this number as needed

//   // Toggle function for showing/hiding answers
//   const toggleAnswers = () => {
//     setShowAnswers(!showAnswers);
//   };

//   // Function to generate PDF
//   const generatePDF = () => {
//     // Temporarily show the answers if they are hidden
//     if (!showAnswers) {
//       setShowAnswers(true);
//       setTimeout(() => {
//         createPDF();
//         setShowAnswers(false);
//       }, 500); // Delay to allow rendering
//     } else {
//       createPDF();
//     }
//   };

//   const createPDF = () => {
//     const input = document.getElementById('pdf-content');

//     html2canvas(input).then((canvas) => {
//       const imgData = canvas.toDataURL('image/png');
//       const pdf = new jsPDF();

//       const imgWidth = 210; // A4 width in mm
//       const pageHeight = 295; // A4 height in mm
//       const imgHeight = (canvas.height * imgWidth) / canvas.width;
//       let heightLeft = imgHeight;
//       let position = 0;

//       pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
//       heightLeft -= pageHeight;

//       while (heightLeft > 0) {
//         position = heightLeft - imgHeight;
//         pdf.addPage();
//         pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
//         heightLeft -= pageHeight;
//       }

//       pdf.save('report.pdf');
//     });
//   };

//   return (
//     <div className="results-container">
//       <h1>Your Test Results</h1>

//       <p className="result-score">
//         Your Score: <span className="score-value">{resultScore}/30</span>
//       </p>
//       <p className="analysis-text">{resultAnalysis}</p>

//       <hr />

//       <h2>Mental Stability: {resultMentalStability}</h2>
//       <h2>Chances of Anxiety Attack: {resultAnxietyAttackRisk}</h2>

//       <h2>Recommended Actions:</h2>
//       {resultRecommendedActions.length > 0 ? (
//         <ul className="recommended-actions-list">
//           {resultRecommendedActions.map((action, index) => (
//             <li key={index}>{action}</li>
//           ))}
//         </ul>
//       ) : (
//         <p className="analysis-text">No recommended actions available.</p>
//       )}

//       {/* Button to Download PDF */}
//       <button className="toggle-answers-btn" onClick={generatePDF}>
//         Download Report
//       </button>

//       {/* Toggle Button for Showing/Hiding Selected Answers */}
//       <button className="toggle-answers-btn" onClick={toggleAnswers}>
//         {showAnswers ? 'Hide Selected Answers' : 'Show Selected Answers'}
//       </button>

//       {/* Conditionally render selected answers */}
//       <div className="selected-answers-section" id="pdf-content" style={{ display: showAnswers ? 'block' : 'none' }}>
//         <h2>Selected Answers:</h2>
//         {userAnswers.map((answerIndex, questionIndex) => (
//           <div className="question-answer-card" key={questionIndex}>
//             <div className="question">{`${startingQuestionNumber + questionIndex}. ${userQuestions[questionIndex]}`}</div>
//             <div className="selected-answer">
//               {userOptionsList[questionIndex].options[answerIndex]}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ResultsPage;
