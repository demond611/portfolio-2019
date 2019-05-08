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

const showInfo = [
  {
    img: ena_header,
    itemHeader: "ENA Fall Regional Symposium",
    avail: "This website will only be available until October 1, 2020",
    siteLink: "https://www.compusystems.com/servlet/ar?evt_uid=311",
    tech: [
      "HTML5", "CSS3", "BOOTSTRAP 3", "JAVASCRIPT", "JAVA", "JSP", "SQL"
    ],
    id: "ena19"
  },
  {
    img: travel_header,
    itemHeader: "Travel Site",
    avail: null,
    siteLink: "https://demond611.github.io/travel-site/",
    tech: [
      "OBJECT ORIENTED JAVASCRIPT", "BEM CSS", "NODE", "GULP", "CSS3", "HTML5"
    ],
    id: "travel"
  },
  {
    img: tide_header,
    itemHeader: "InfoComm 2019 TIDE",
    avail: "This website will only be available until May 8, 2020",
    siteLink: "https://www.compusystems.com/servlet/ar?evt_uid=208&site=TIDE",
    tech: [
      "HTML5", "CSS3", "BOOTSTRAP 4", "JAVASCRIPT", "JAVA", "JSP", "SQL"
    ],
    id: "infoc19"
  },
  {
    img: apic_header,
    itemHeader: "APIC Annual Conference 2019",
    avail: "This website will only be available until May 12, 2020",
    siteLink: "https://www.compusystems.com/servlet/ar?evt_uid=865",
    tech: [
      "HTML5", "CSS3", "BOOTSTRAP 3", "JAVASCRIPT", "JAVA", "JSP", "SQL"
    ],
    id: "apic19"
  },
  {
    img: ufpa_header,
    itemHeader: "United Fresh 2019 Convention & Expo",
    avail: "This website will only be available until May 9, 2020",
    siteLink: "https://www.compusystems.com/servlet/ar?evt_uid=457",
    tech: [
      "HTML5", "CSS3", "BOOTSTRAP 3", "JAVASCRIPT", "JAVA", "JSP", "SQL"
    ],
    id: "ufpa19"
  }
];

const ItemLayout = (props) => {
  const items = props.showItems.map((item, index) => {
    return (
      <Item key={index}>
        <Item.Image src={item.img} />
        <Item.Content>
          <Item.Header as='h3'>{item.itemHeader}</Item.Header>
          <Item.Meta>
            <span>{item.avail}</span>
          </Item.Meta>
          <Item.Description></Item.Description>
          <Item.Extra>
            <Route path="/sites">
              <Link key={item.id} to={`/sites/${item.id}`}>
                <Button floated='right' primary>
                  More Info <Icon name='chevron right' />
                </Button>
              </Link>
            </Route>
            {item.tech.map((techItem, a) => {
              let labelColor = "";
              switch (techItem){
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
                default:
                  labelColor = null;
              }
              return <Label key={a} color={labelColor}>{techItem}</Label>
              }
            )}
          </Item.Extra>
          <Item.Extra>
            <div className='extraLink'> Website:
                <a href={item.siteLink}
                  target='_blank'
                  rel='noopener noreferrer'> {item.siteLink}
                </a>
            </div>
          </Item.Extra>
        </Item.Content>
      </Item>
    )
  });
      
  return <React.Fragment>{items}</React.Fragment>
};

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
            <ItemLayout showItems={showInfo} />
          </Item.Group>
        </Container>
      </section>
    );
  }
}

export default HomePage;