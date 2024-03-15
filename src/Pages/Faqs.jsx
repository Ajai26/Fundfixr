import React, { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const Faq = () => {
  const faqData = [
    // ...
  ];

  const [answersVisible, setAnswersVisible] = useState(Array(faqData.length).fill(false));

  const toggleAnswer = (index) => {
    const newAnswersVisible = [...answersVisible];
    newAnswersVisible[index] = !newAnswersVisible[index];
    setAnswersVisible(newAnswersVisible);
  };

  const renderFaqs = () => {
    return faqData.map((faq, index) => (
      <Card key={faq.id}>
        <Card.Header>
          <Button
            variant="link"
            className="text-left m-0 p-0"
            onClick={() => toggleAnswer(index)}
          >
            <h3>{faq.question}</h3>
          </Button>
        </Card.Header>
        {answersVisible[index] && (
          <Card.Body className="answer">
            <p>{faq.answer}</p>
          </Card.Body>
        )}
      </Card>
    ));
  };

  // ...
};