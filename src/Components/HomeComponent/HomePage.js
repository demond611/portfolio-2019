import React, { Component } from 'react';
import {
  Link,
  Route
} from                           'react-router-dom';
import {
  Button,
  Container,
  Header,
  Icon,
  Item,
  Label
} from                           'semantic-ui-react';

import ena_header from           './ena_header.png';
import apic_header from          './apic_header.png';
import ufpa_header from          './ufpa_header.png';
import tide_header from          './tide_header.png';
import travel_header from        './travel_header.png';
import metronome from            './metronome.png';
import youtube_header from       './youtube_header.png';

const style = {
  h1: {
    marginTop: '3em',
    fontSize: '2.5rem'
  },
  h2: {
    margin: '4em 0em',
  },
  h3: {
    marginTop: '2em',
    padding: '2em 0em',
  },
  last: {
    marginBottom: '3em',
  }
};

const ProjectItem = props => {
  const { headerSrc, metaData, siteId, header, link } = props;
  return (
    <Item>
      <Item.Image src={headerSrc} />
      <Item.Content>
        <Item.Header as='h3'>{header}</Item.Header>
        <Item.Meta>
          <span>{metaData}</span>
        </Item.Meta>
        <Item.Extra>
          <Route path="/sites">
            <Link to={`/sites/${siteId}`}>
              <Button
                floated='right'
                primary
              >
                More Info <Icon name='chevron right' />
              </Button>
            </Link>
          </Route>
          {
            (props.label).map((tech, index) => {
              let labelColor = "";
              switch (tech){
                case 'HTML5':
                  labelColor = "red";
                  break;
                case 'CSS3':
                  labelColor = "blue";
                  break;
                case 'BOOTSTRAP 3':
                  labelColor = "green";
                  break;
                case 'BOOTSTRAP 4':
                  labelColor = "orange";
                  break;
                case 'JAVASCRIPT':
                  labelColor = "purple";
                  break;
                case 'JAVA':
                  labelColor = "black";
                  break;
                case 'JSP':
                  labelColor = "grey";
                  break;
                case 'SQL':
                  labelColor = "pink";
                  break;
                case 'NODE':
                  labelColor = "yellow";
                  break;
                case 'GULP':
                  labelColor = "olive";
                  break;
                case 'REACT':
                  labelColor = "teal";
                  break;
                case 'ES6':
                  labelColor = "violet";
                  break;
                default:
                  labelColor = null;
              }
              return <Label key={index} color={labelColor}>{tech}</Label>;
            })
          }
        </Item.Extra>
        <Item.Extra>
          <div className='extraLink'> Website:
            <a
              href={link}
              target='_blank'
              rel='noopener noreferrer'> {link}
            </a>
          </div>
        </Item.Extra>
      </Item.Content>
    </Item>
  );
};

// Main portfolio link
// https://robert-walker-portfolio-2019.herokuapp.com/
// https://radiant-badlands-30797.herokuapp.com/

class HomePage extends Component {
  renderHomeHeading (){
    return (
      <Header as='h1'
        content="I'm a Web developer with a passion for coding"
        style={style.h1} textAlign='center' />
    );
  }
  renderWebHeading (){
    return (
      <Header as='h2' content='Web Sites / Projects'
        style={style.h2} textAlign='center' />
    );
  }
  render (){
    return (
      <section>
        {this.renderHomeHeading()}
        {this.renderWebHeading()}
        <Container>
          <Item.Group divided>
            <ProjectItem
              siteId="youtube"
              header="Youtube API"
              headerSrc={youtube_header}
              metaData=""
              label={['REACT', 'JAVASCRIPT', 'ES6', 'API', 'CSS3']}
              link="https://react-youtube-api-project.herokuapp.com/"
            />
            <ProjectItem
              siteId="metronome"
              header="Metronome"
              headerSrc={metronome}
              metaData=""
              label={['REACT', 'JAVASCRIPT', 'ES6']}
              //link="https://agile-wave-53277.herokuapp.com/"
              link="https://react-metronome-project.herokuapp.com/"
            />
            <ProjectItem
              siteId="ena19"
              header="ENA Fall Regional Symposium"
              headerSrc={ena_header}
              metaData="This website will only be available until October 1, 2020"
              label={['HTML5', 'CSS3', 'BOOTSTRAP 3', 'JAVASCRIPT', 'JAVA', 'JSP', 'SQL']}
              link="https://www.compusystems.com/servlet/ar?evt_uid=311"
            />
            <ProjectItem
              siteId="travel"
              header="Travel Site"
              headerSrc={travel_header}
              metaData=""
              label={['OBJECT ORIENTED JAVASCRIPT', 'BEM CSS', 'NODE', 'GULP', 'CSS3', 'HTML5']}
              link="https://demond611.github.io/travel-site/"
            />
            <ProjectItem
              siteId="infoc19"
              header="InfoComm 2019 TIDE"
              headerSrc={tide_header}
              metaData="This website will only be available until May 8, 2020"
              label={['HTML5', 'CSS3', 'BOOTSTRAP 4', 'JAVASCRIPT', 'JAVA', 'JSP', 'SQL']}
              link="https://www.compusystems.com/servlet/ar?evt_uid=208&site=TIDE"
            />
            <ProjectItem
              siteId="apic19"
              header="APIC Annual Conference 2019"
              headerSrc={apic_header}
              metaData="This website will only be available until May 12, 2020"
              label={['HTML5', 'CSS3', 'BOOTSTRAP 3', 'JAVASCRIPT', 'JAVA', 'JSP', 'SQL']}
              link="https://www.compusystems.com/servlet/ar?evt_uid=865"
            />
            <ProjectItem
              siteId="ufpa19"
              header="United Fresh 2019 Convention & Expo"
              headerSrc={ufpa_header}
              metaData="This website will only be available until May 9, 2020"
              label={['HTML5', 'CSS3', 'BOOTSTRAP 3', 'JAVASCRIPT', 'JAVA', 'JSP', 'SQL']}
              link="https://www.compusystems.com/servlet/ar?evt_uid=457"
            />
          </Item.Group>
        </Container>
      </section>
    );
  }
}

export default HomePage;