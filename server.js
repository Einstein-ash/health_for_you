import express from 'express';
import bodyParser from 'body-parser';
import htmlPdf from 'html-pdf';
import cors from 'cors';

const app = express();

// Enable CORS to allow requests from the frontend
app.use(cors());

app.use(bodyParser.json());

app.post('/generate-report', (req, res) => {
  const { score, analysis, mentalStability, anxietyAttackRisk, recommendedActions, selectedAnswers } = req.body;

  // Log incoming data for debugging
  console.log(req.body);

  // Ensure all necessary fields are provided
  if (!score || !analysis || !mentalStability || !anxietyAttackRisk || !recommendedActions || !selectedAnswers) {
    return res.status(400).send('Missing data for report generation');
  }

  const htmlContent = `
    <html>
      <head>
        <style>
          body {
            font-family: Arial, sans-serif;
            margin: 20px;
            padding: 20px;
          }
          .results-container {
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            border: 1px solid #ccc;
            border-radius: 8px;
            background-color: #f9f9f9;
          }
          .result-score {
            font-size: 18px;
            margin-bottom: 10px;
          }
          .score-value {
            font-weight: bold;
          }
          .analysis-text {
            margin-bottom: 20px;
          }
          .recommended-actions-list {
            list-style-type: none;
            padding-left: 0;
          }
          .recommended-actions-list li {
            margin-bottom: 5px;
          }
          .selected-answers-dropdown h3 {
            margin-top: 20px;
          }
          .selected-answers-dropdown ul {
            list-style-type: none;
            padding-left: 0;
          }
          .selected-answers-dropdown li {
            margin-bottom: 10px;
          }
        </style>
      </head>
      <body>
        <div class="results-container">
          <h1>Your Test Results</h1>
          <p class="result-score">Your Score: <span class="score-value">${score}/30</span></p>
          <p class="analysis-text">${analysis}</p>
          <hr />
          <h2>Mental Stability: ${mentalStability}</h2>
          <h2>Chances of Anxiety Attack: ${anxietyAttackRisk}</h2>
          <h2>What Should You Follow:</h2>
          <ul class="recommended-actions-list">
            ${recommendedActions.map(action => `<li>${action}</li>`).join('')}
          </ul>
          <div class="selected-answers-dropdown">
            <h3>Your Selected Answers</h3>
            <ul>
              ${selectedAnswers.map(item => `<li><strong>${item.question}</strong>: ${item.answer}</li>`).join('')}
            </ul>
          </div>
        </div>
      </body>
    </html>
  `;

  const options = { format: 'Letter' };

  htmlPdf.create(htmlContent, options).toBuffer((err, buffer) => {
    if (err) {
      return res.status(500).send('Error generating PDF');
    }
    res.setHeader('Content-Disposition', 'attachment; filename=report.pdf');
    res.setHeader('Content-Type', 'application/pdf');
    res.send(buffer);
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
