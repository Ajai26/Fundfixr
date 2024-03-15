import React, { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const Faq = () => {
  const faqData = [
    {
      id: 1,
      question: 'What is the purpose of this platform?',
      answer:
        'FundFixr is Indias largest information and analytics platform for early-stage startups and investors. The platform uses advanced data integration tools, analytical search methods, and powerful filters to screen and search startups, investors, and incubators across hundreds of industries and sectors.',
    },
    {
      id: 2,
      question: 'How do I invest in a startup?',
      answer:
        'To invest in a startup, you need to sign up on the platform, verify your identity, and select a startup to invest in. You can then choose the amount you want to invest and proceed with the investment.',
    },
    {
      id: 3,
      question: 'What are the returns on investment?',
      answer:
        'The returns on investment depend on the performance of the startup you have invested in. If the startup performs well and generates revenue, you will get a share of the revenue as returns on your investment.',
    },
    // Add more FAQs here
  ];
  const [answersVisible, setAnswersVisible] = useState(Array(faqData.length).fill(false));

  const toggleAnswer = (index) => {
    const newAnswersVisible = [...answersVisible];
    newAnswersVisible[index] = !newAnswersVisible[index];
    setAnswersVisible(newAnswersVisible);
  };

  const renderFaqs = () => {
    return faqData.map((faq, index) => (
        <div className="flex items-center justify-center text-blue-500 text-[20px] card9 ">
        <Card  key={faq.id}>
        <Card.Header className="flex items-center justify-center text-blue-500 text-[20px] leading-35">
          <Button
            variant="link"
            className="flex items-center justify-center text-blue-500 text-[20px] "
            onClick={() => toggleAnswer(index)}
          >
           <h3 >{faq.question}</h3>
          </Button>
        </Card.Header >
        {answersVisible[index] && (
          <Card.Body className="answer ">
            <p className="flex items-center justify-center text-orange-400 text-[20px] ">{faq.answer}</p>
          </Card.Body>
        )}
      </Card>
      </div>
    ));
  };
  return (
    <div id='faq' className='container'>
    
      <Row>
        <Col>
          <h1 className="flex items-center justify-center mt-5 text-orange-500 text-[30px]
          font-[500]">Frequently Asked Questions</h1>
          {renderFaqs()}
        </Col>
      </Row>
    
    </div>
  );
};

export default Faq;