import "./App.css";
import { useEffect, useMemo, useState } from "react";
import Start from "./components/start";
import Timer from "./components/timer";
import Trivia from "./components/trivia";

function App() {
  const [username, setUsername] = useState(null);
  const [timeOut, setTimeOut] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [earned, setEarned] = useState("$ 0");

  const data = [
    {
      id: 1,
      question: "Rolex is a company that specializes in what type of product?",
      answers: [
        {
          text: "Phone",
          correct: false,
        },
        {
          text: "Watches",
          correct: true,
        },
        {
          text: "Food",
          correct: false,
        },
        {
          text: "Cosmetic",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "When did the website `Facebook` launch?",
      answers: [
        {
          text: "2004",
          correct: true,
        },
        {
          text: "2005",
          correct: false,
        },
        {
          text: "2006",
          correct: false,
        },
        {
          text: "2007",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Who played the character of harry potter in movie?",
      answers: [
        {
          text: "Johnny Deep",
          correct: false,
        },
        {
          text: "Leonardo Di Caprio",
          correct: false,
        },
        {
          text: "Denzel Washington",
          correct: false,
        },
        {
          text: "Daniel Red Cliff",
          correct: true,
        },
      ],
    },
        {
          id: 4,
          question: "Who played the character of harry potter in movieBesides Sachin Tendulkar, who is the only other Indian cricketer to have scored over 13,000 runs in test cricket?",
          answers: [
            {
              text: "Virat Kohli",
              correct: false,
            },
            {
              text: "Sunil Gavaskar",
              correct: false,
            },
            {
              text: "VVS Laxman",
              correct: false,
            },
            {
              text: "Rahul Dravid",
              correct: true,
            },
          ],
        },
            {
              id: 5,
              question: "Ranthambore, Sariska and Keoladeo Ghana are all names of what?",
              answers: [
                {
                  text: "National Parks",
                  correct: true,
                },
                {
                  text: "Goosebumps",
                  correct: false,
                },
                {
                  text: "Mountains",
                  correct: false,
                },
                {
                  text: "Rivers",
                  correct: false,
                },
              ],
            },
                {
                  id: 6,
                  question: " India’s official entry to Oscars 2021, ” Jallikattu” is, a film in which language?",
                  answers: [
                    {
                      text: "Hindi",
                      correct: false,
                    },
                    {
                      text: "Punjabi",
                      correct: false,
                    },
                    {
                      text: "Malayalam",
                      correct: true,
                    },
                    {
                      text: "Kannada",
                      correct: false,
                    },
                  ],
                },
                    {
                      id: 7,
                      question: " In terms of production, which of these is the largest train coach manufacturing unit in the world?",
                      answers: [
                        {
                          text: "Integral Coach Factory, Bangalore",
                          correct: false,
                        },
                        {
                          text: "Integral Coach Factory, Mumbai",
                          correct: false,
                        },
                        {
                          text: " Integral Coach Factory, Chennai",
                          correct: true,
                        },
                        {
                          text: " Integral Coach Factory, Kolkata",
                          correct: false,
                        },
                      ],
                    },
                        {
                          id: 8,
                          question: "In 2020, Louise Gluck won the Nobel Prize in which category?",
                          answers: [
                            {
                              text: "Music",
                              correct: false,
                            },
                            {
                              text: "Sports",
                              correct: false,
                            },
                            {
                              text: "Literature",
                              correct: true,
                            },
                            {
                              text: "Dance",
                              correct: false,
                            },
                          ],
                        },
                            {
                              id: 9,
                              question: "Which of the following companies was originally started as a loom manufacturing unit in 1909?",
                              answers: [
                                {
                                  text: "Suzuki",
                                  correct: true,
                                },
                                {
                                  text: "CEAT",
                                  correct: false,
                                },
                                {
                                  text: "Honda",
                                  correct: false,
                                },
                                {
                                  text: "Mercedes",
                                  correct: false,
                                },
                              ],
                            },
                                {
                                  id: 10,
                                  question: "In 1994, who became the winner of the first-ever Filmfare R D Burman Award for New Music Talent?",
                                  answers: [
                                    {
                                      text: "Udit Narayan",
                                      correct: false,
                                    },
                                    {
                                      text: "AR Rahman",
                                      correct: true,
                                    },
                                    {
                                      text: "Lata Mangeshkar",
                                      correct: false,
                                    },
                                    {
                                      text: "Raj Burman",
                                      correct: false,
                                    },
                                  ],
                                },
                                    {
                                      id: 11,
                                      question: " What colour did Lord Shiva’s throat turn into when he drank the deadly poison during Samudra Manthan?",
                                      answers: [
                                        {
                                          text: "Red",
                                          correct: false,
                                        },
                                        {
                                          text: "Yellow",
                                          correct: false,
                                        },
                                        {
                                          text: "Blue",
                                          correct: true,
                                        },
                                        {
                                          text: "Black",
                                          correct: false,
                                        },
                                      ],
                                    },
                                        {
                                          id: 12,
                                          question: "What is the profession of Kabir in the film Kabir Singh?",
                                          answers: [
                                            {
                                              text: "Engineer",
                                              correct: false,
                                            },
                                            {
                                              text: "Cricketer",
                                              correct: false,
                                            },
                                            {
                                              text: "Athlete",
                                              correct: false,
                                            },
                                            {
                                              text: "Doctor",
                                              correct: true,
                                            }
      ],
    },
    {
      id: 13,
      question: "Which of these national parks is named after the river that flows through the park?",
      answers: [
        {
          text: "Pench",
          correct: true,
        },
        {
          text: "Tadoba",
          correct: false,
        },
        {
          text: "Vrindavan",
          correct: false,
        },
        {
          text: "Wildera",
          correct: false,
        }
],
},
{
  id: 14,
  question: "Which state is the largest producer of sugarcane in India?",
  answers: [
    {
      text: "Maharashtra",
      correct: false,
    },
    {
      text: "Karnataka",
      correct: false,
    },
    {
      text: "Madhya Pradesh",
      correct: false,
    },
    {
      text: "Uttar Pradesh",
      correct: true,
    }
],
},
{
  id: 15,
  question: "Who of the following personalities is not married to a sports person?",
  answers: [
    {
      text: "Anushka sharma",
      correct: false,
    },
    {
      text: "Mahesh Bhupati",
      correct: true,
    },
    {
      text: "Sakshi Singh Rawat",
      correct: false,
    },
    {
      text: "Sharmila Tagore",
      correct: false,
    }
],
},
  ];

  const moneyPyramid = useMemo(
    () =>
      [
        { id: 1, amount: "$ 100" },
        { id: 2, amount: "$ 200" },
        { id: 3, amount: "$ 300" },
        { id: 4, amount: "$ 500" },
        { id: 5, amount: "$ 1,000" },
        { id: 6, amount: "$ 2,000" },
        { id: 7, amount: "$ 4,000" },
        { id: 8, amount: "$ 8,000" },
        { id: 9, amount: "$ 16,000" },
        { id: 10, amount: "$ 32,000" },
        { id: 11, amount: "$ 64,000" },
        { id: 12, amount: "$ 125,000" },
        { id: 13, amount: "$ 250,000" },
        { id: 14, amount: "$ 500,000" },
        { id: 15, amount: "$ 1000,000" },
      ].reverse(),
    []
  );

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [questionNumber, moneyPyramid]);

  return (
    <div className="app">
      {!username ? (
        <Start setUsername={setUsername} />
      ) : (
        <>
          <div className="main">
            {timeOut ? (
              <h1 className="endText">You earned: {earned}</h1>
            ) : (
              <>
                <div className="top">
                  <div className="timer">
                    <Timer
                      setTimeOut={setTimeOut}
                      questionNumber={questionNumber}
                    />
                  </div>
                </div>
                <div className="bottom">
                  <Trivia
                    data={data}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                    setTimeOut={setTimeOut}
                  />
                </div>
              </>
            )}
          </div>
          <div className="pyramid">
            <ul className="moneyList">
              {moneyPyramid.map((m) => (
                <li
                  className={
                    questionNumber === m.id
                      ? "moneyListItem active"
                      : "moneyListItem"
                  }
                >
                  <span className="moneyListItemNumber">{m.id}</span>
                  <span className="moneyListItemAmount">{m.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

export default App;