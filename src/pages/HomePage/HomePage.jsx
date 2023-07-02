import { Helmet } from 'react-helmet';
import { Title } from './HomePage.styled';

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>HomePage</title>
      </Helmet>
      <Title>Welcome to the Phonebook!</Title>
    </>
  );
};

export default HomePage;
