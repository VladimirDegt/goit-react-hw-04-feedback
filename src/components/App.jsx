import { useState } from "react";
import { Section } from "./Section/Section";
import { Container } from "./App.styled";
import FeedbackOptions from "./FeedbackOptions";
import Statistics from "./Statistics";

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);


  function onLeaveFeedBack(item) {
    switch(item) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;  
      case 'bad':
        setBad(bad + 1);
        break;
      default:
        return  
    }
  };

  return (
    <Container>
      <Section title='Please leave feedback'>
        <FeedbackOptions 
          options = {['good', 'neutral', 'bad']} 
          onLeaveFeedBack = {onLeaveFeedBack} 
        /> 
      </Section>    
      <Section title='Statistics'>
        <Statistics 
          options = {{
            good: good,
            neutral: neutral,
            bad: bad,
          }}
        />
      </Section>
    </Container>
  )
}

