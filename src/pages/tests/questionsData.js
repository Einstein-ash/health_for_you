// questionsData.js
const questionsTree = {
    question: "Little interest or pleasure in doing things",
    options: [
      {
        text: "Not at all",
        next: {
          question: "Do you feel this way occasionally?",
          options: [
            {
              text: "Yes",
              next: {
                question: "Does it affect your daily routine?",
                options: [
                  {
                    text: "Not at all",
                    next: {
                      question: "How often do you engage in social activities?",
                      options: [
                        { text: "Regularly", score: 1 },
                        { text: "Occasionally", score: 0 },
                        { text: "Rarely", score: -1 },
                        { text: "Never", score: -2 }
                      ]
                    }
                  },
                  {
                    text: "Sometimes",
                    next: {
                      question: "Do you find it hard to stay motivated?",
                      options: [
                        { text: "No", score: 1 },
                        { text: "Sometimes", score: 0 },
                        { text: "Often", score: -1 },
                        { text: "Nearly every day", score: -2 }
                      ]
                    }
                  },
                  {
                    text: "Often",
                    next: {
                      question: "Does it affect your sleep patterns?",
                      options: [
                        { text: "No", score: 1 },
                        { text: "Sometimes", score: 0 },
                        { text: "Often", score: -1 },
                        { text: "Nearly every day", score: -2 }
                      ]
                    }
                  }
                ]
              }
            },
            {
              text: "No",
              next: {
                question: "Does it affect your work or personal life?",
                options: [
                  {
                    text: "Not at all",
                    next: {
                      question: "How would you rate your overall satisfaction with life?",
                      options: [
                        { text: "Very satisfied", score: 1 },
                        { text: "Moderately satisfied", score: 0 },
                        { text: "Slightly satisfied", score: -1 },
                        { text: "Not satisfied", score: -2 }
                      ]
                    }
                  },
                  {
                    text: "A little",
                    next: {
                      question: "Do you find yourself procrastinating more often?",
                      options: [
                        { text: "Not at all", score: 1 },
                        { text: "Sometimes", score: 0 },
                        { text: "Often", score: -1 },
                        { text: "Nearly every day", score: -2 }
                      ]
                    }
                  },
                  {
                    text: "A lot",
                    next: {
                      question: "Do you feel overwhelmed by small tasks?",
                      options: [
                        { text: "Not at all", score: 1 },
                        { text: "Sometimes", score: 0 },
                        { text: "Often", score: -1 },
                        { text: "Nearly every day", score: -2 }
                      ]
                    }
                  },
                  {
                    text: "Significantly",
                    next: {
                      question: "How frequently do you feel exhausted?",
                      options: [
                        { text: "Rarely", score: 1 },
                        { text: "Occasionally", score: 0 },
                        { text: "Frequently", score: -1 },
                        { text: "Always", score: -2 }
                      ]
                    }
                  }
                ]
              }
            }
          ]
        }
      },
      {
        text: "Several days",
        next: {
          question: "Is it difficult to enjoy activities you used to like?",
          options: [
            {
              text: "Yes",
              next: {
                question: "Do you find it hard to motivate yourself?",
                options: [
                  {
                    text: "Not at all",
                    next: {
                      question: "Do you still have the energy to complete daily tasks?",
                      options: [
                        { text: "Yes", score: 1 },
                        { text: "Sometimes", score: 0 },
                        { text: "Rarely", score: -1 },
                        { text: "Never", score: -2 }
                      ]
                    }
                  },
                  {
                    text: "Sometimes",
                    next: {
                      question: "Do you feel a sense of hopelessness?",
                      options: [
                        { text: "Not at all", score: 1 },
                        { text: "Occasionally", score: 0 },
                        { text: "Often", score: -1 },
                        { text: "Nearly every day", score: -2 }
                      ]
                    }
                  }
                ]
              }
            },
            {
              text: "No",
              next: {
                question: "Do you still participate in social activities?",
                options: [
                  { text: "Yes", score: 1 },
                  { text: "No", score: -1 },
                  { text: "Rarely", score: -2 }
                ]
              }
            }
          ]
        }
      },
      {
        text: "More than half the days",
        next: {
          question: "Do you struggle to get out of bed?",
          options: [
            {
              text: "Yes",
              next: {
                question: "Do you feel fatigued most of the day?",
                options: [
                  { text: "Not at all", score: 1 },
                  { text: "Sometimes", score: 0 },
                  { text: "Often", score: -1 },
                  { text: "Nearly every day", score: -2 }
                ]
              }
            },
            {
              text: "No",
              next: {
                question: "Do you still maintain a healthy diet?",
                options: [
                  { text: "Yes", score: 1 },
                  { text: "Sometimes", score: 0 },
                  { text: "Rarely", score: -1 },
                  { text: "Never", score: -2 }
                ]
              }
            }
          ]
        }
      },
      {
        text: "Nearly every day",
        next: {
          question: "Do you have thoughts of self-harm?",
          options: [
            {
              text: "Yes",
              next: {
                question: "Have you sought help from a professional?",
                options: [
                  { text: "Yes", score: 1 },
                  { text: "No", score: -1 }
                ]
              }
            },
            {
              text: "No",
              next: {
                question: "Do you find it difficult to stay positive?",
                options: [
                  { text: "Not at all", score: 1 },
                  { text: "Sometimes", score: 0 },
                  { text: "Often", score: -1 },
                  { text: "Nearly every day", score: -2 }
                ]
              }
            }
          ]
        }
      }
    ]
  };
  
  export default questionsTree;
  