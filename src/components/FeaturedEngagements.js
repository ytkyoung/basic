import data from '../data/brands.json';
import Card from '../components/Card';
import { FlexTest } from '../styles';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';

// console.log(data);

const FeaturedEngagements = () => {
  return (
    <>
      <Featured>
        <div className="description">
          <h2>
            FEATURED <span>ENGAGEMENTS</span>
          </h2>
        </div>
        <div className="brands-cards">
          <div className="cards">
            {data.map((brand, index) => (
              <Card key={index} brand={brand} />
            ))}
          </div>
        </div>
      </Featured>
      <Button>Normal</Button>
      <ThemeProvider theme={theme}>
        <Button>Themed</Button>
      </ThemeProvider>
    </>
  );
};

const Featured = styled(FlexTest)`
  height: 80vh;
  background: lightgray;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  h2 {
    font-size: 3rem;
    padding-bottom: 5rem;
    color: red;
  }
  .description {
    height: 50vh;
    width: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .brands-cards {
    width: 100%;
    height: 800px;
    display: flex;
    justify-content: center;
    background: red;
    margin: 2em auto;
    padding: 0 1em;
    background: #04191b;
    overflow-y: hidden;
    scroll-snap-type: x mandatory;
  }
  .cards {
    display: flex;
    width: 100%;
    background: #001e80;
  }

  .card {
    margin: 2rem 10rem 2rem 0rem;
    scroll-snap-align: center;
    background-color: #00ff15;
  }
`;

// Define our button, but with the use of props.theme this time
const Button = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;

  /* Color the border and text with theme.main */
  color: ${(props) => props.theme.main};
  border: 2px solid ${(props) => props.theme.main};
`;

// We are passing a default theme for Buttons that arent wrapped in the ThemeProvider
Button.defaultProps = {
  theme: {
    main: 'palevioletred',
  },
};

// Define what props.theme will look like
const theme = {
  main: 'mediumseagreen',
};

export default FeaturedEngagements;
