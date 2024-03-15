import React from 'react';
import InvestorProfile from './Investorprofile';
import LineChart from './Linechart';

const investor = {
  name: 'John Doe',
  profilePicture: 'https://example.com/john-doe.jpg',
  description: 'John is a seasoned investor with over 10 years of experience in the stock market.',
  investmentData: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    data: [1200, 1300, 1100, 1400, 1500, 1600, 1700, 1600, 1500, 1400, 1300, 1200],
  },
};

const Investorcard = () => {
  return (
    <div id='investorprofile' className="app">
      <InvestorProfile investor={investor} />
      <LineChart investmentData={investor.investmentData} />
    </div>
  );
};

export default Investorcard;