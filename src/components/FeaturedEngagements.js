import data from '../data/brands.json';
import Card from '../components/Card';
import { FlexTest } from '../styles';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';

// console.log(data);

const FeaturedEngagements = (props) => {
  console.log(props);
  return (
    <>
      <Featured>
        <div className="description">
          <h2>FEATURED ENGAGEMENTS</h2>
        </div>
        <div className="brands-cards">
          <div className="cards">
            {data.map((brand, index) => (
              <Card key={index} brand={brand} theme={props.theme} />
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
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  h2 {
    font-size: 3rem;
    padding-bottom: 3rem;
  }
  .description {
    height: 40vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .brands-cards {
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 2em auto;
    padding: 0 1em;
    overflow-y: hidden;
    scroll-snap-type: x mandatory;
  }
  .cards {
    display: flex;
    width: 100%;
  }

  .card {
    margin: 2rem 10rem 2rem 0rem;
    scroll-snap-align: center;
    &:last-child {
      img {
        width: 35%;
      }
    }
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
