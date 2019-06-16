import React from     'react';
import {
  Grid,
  Header,
  Label,
  Image
} from                'semantic-ui-react';
import { Link } from  'react-router-dom';

import ena_1 from       './ena_1.png';
import ena_2 from       './ena_2.png';
import ena_3 from       './ena_3.png';
import apic_1 from      './apic_1.png';
import apic_2 from      './apic_2.png';
import apic_3 from      './apic_3.png';
import apic_4 from      './apic_4.png';
import apic_5 from      './apic_5.png';
import ufpa_1 from      './ufpa_1.png';
import ufpa_2 from      './ufpa_2.png';
import ufpa_3 from      './ufpa_3.png';
import ufpa_4 from      './ufpa_4.png';
import travel_1 from    './travel_1.png';
import travel_2 from    './travel_2.png';
import travel_3 from    './travel_3.png';
import infoc_1 from     './infoc_1.png';
import infoc_2 from     './infoc_2.png';
import infoc_3 from     './infoc_3.png';
import infoc_4 from     './infoc_4.png';
import metronome_1 from './metronome_1.png'

const style = {
  h2: {
    margin: '4em 0 0'
  },
  backButton: {
    fontSize: '.85em',
    fontWeight: '600',
    textAlign: 'center'
  },
  marginBottom: {
    marginBottom: '5em'
  },
  centerImage: {
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  textSpace: {
    marginTop: '2em',
    marginBottom: '2em',
    fontSize: '1.15em'
  }
};

const Back = () => {
  return (
    <aside style={style.backButton}>
      <Link to="/">&middot; Back &middot;</Link>
    </aside>
  );
}

const Metronome = () => {

  const setType = [
    "REACT", "JAVASCRIPT", "ES6"
  ];
  const setColor = [
    "teal", "purple", null
  ];

  return (
    <section className="ui container">
      <Grid>
        <Grid.Column width={16}>
          <Header as='h2'
            content='Metronome'
            style={style.h2}
            textAlign='center'
          />
        </Grid.Column>
        <Grid.Column
          width={16}
          style={style.marginBottom}
          textAlign='center'
        >
          {setColor.map((color, index) =>
            (<Label key={index} color={color}>{setType[index]}</Label>))
          }
        </Grid.Column>
        <Grid.Column width={16}>
          <Image style={style.centerImage} src={metronome_1} />
        </Grid.Column>
        <Grid.Column
          width={16}
          style={style.textSpace}
          textAlign='justified'
        >
          <p>This was a little app I worked on to get some more experience working with React.
            With this project I learned about loading sounds into the app, working with initializing
            state and manipulating setState, how to trigger actions after state is set and input
            components and handling changes in React.
          </p>
        </Grid.Column>
      </Grid>
      <Back />
    </section>
  );
}

const SiteENA = () => {

  const setType = [
    "HTML5", "CSS3", "BOOTSTRAP 3", "JAVASCRIPT", "JAVA", "JSP", "SQL"
  ];
  const setColor = [
    "red", "blue", "green", "purple", "black", "grey", "pink"
  ];

  return (
    <section className="ui container">
      <Grid>
        <Grid.Column width={16}>
          <Header as='h2'
            content='ENA Fall Regional Symposium'
            style={style.h2} textAlign='center' />
        </Grid.Column>
        <Grid.Column width={16} textAlign='center'>
          <p>Experience focused education, connection with peers, 
          and sharing of best practices and strategies to advance emergency nursing...</p>
        </Grid.Column>
        <Grid.Column width={16} style={style.marginBottom} textAlign='center'>
          {setColor.map((color, index) =>
            (<Label key={index} color={color}>{setType[index]}</Label>))
          }
        </Grid.Column>
        <Grid.Column width={16}>
          <Image style={style.centerImage} src={ena_1} />
        </Grid.Column>
        <Grid.Column width={16} style={style.textSpace} textAlign='justified'>
          <p>This site used member lookups in the database to find members for this show
            already. If found members could get registration/option discounts during their
            registration. This was a common functionality I added to many shows.
          </p>
        </Grid.Column>
        <Grid.Column width={16}>
          <Image style={style.centerImage} src={ena_2} />
        </Grid.Column>
        <Grid.Column width={16} style={style.textSpace} textAlign='justified'>
          <p>This site only had a 5 registrations that could be selected, but normally
            you could have as few as 1 registration with 5-10 being a small to modest amount and
            15 or more being a high amount of registrations that you could register.
          </p>
        </Grid.Column>
        <Grid.Column width={16}>
          <Image style={style.centerImage} src={ena_3} />
        </Grid.Column>
        <Grid.Column width={16} style={style.textSpace} textAlign='justified'>
          <p>This is the final page before you are taken to a payment page. Here you could see
            all your information that was put in so far and given the chance to make any changes
            before you paid and submitted the registration into the database.
          </p>
        </Grid.Column>
      </Grid>
      <Back />
    </section>
  );
};

const SiteUFPA = () => {

  const setType = [
    "HTML5", "CSS3", "BOOTSTRAP 3", "JAVASCRIPT", "JAVA", "JSP", "SQL"
  ];
  const setColor = [
    "red", "blue", "green", "purple", "black", "grey", "pink"
  ];

  return (
    <section className="ui container">
      <Grid>
        <Grid.Column width={16}>
          <Header as='h2'
            content='United Fresh 2019 Convention &amp; Expo'
            style={style.h2} textAlign='center' />
        </Grid.Column>
        <Grid.Column width={16} textAlign='center'>
          <p>Immerse yourself in the newest fresh produce, better-for-you products 
          and the tech innovations that support growth, development, promotion, 
          transportation and expansion across the supply chain...</p>
        </Grid.Column>
        <Grid.Column width={16} style={style.marginBottom} textAlign='center'>
          {setColor.map((color, index) =>
            (<Label key={index} color={color}>{setType[index]}</Label>))
          }
        </Grid.Column>
        <Grid.Column width={16}>
          <Image style={style.centerImage} src={ufpa_1} />
        </Grid.Column>
        <Grid.Column width={16} style={style.textSpace} textAlign='justified'>
          <p>This site required I setup a membership lookup for registrants that met
            certain criteria. If that person was found in the database lookup from the SQL
            then they could select that person and have the information we had for them in
            our database pre-populate on the personal information page.
          </p>
        </Grid.Column>
        <Grid.Column width={16}>
          <Image style={style.centerImage} src={ufpa_2} />
        </Grid.Column>
        <Grid.Column width={16} style={style.textSpace} textAlign='justified'>
          <p>This site also required a lookup for various companies setup in the database.
            I wrote SQLs that first checked if they were in our database individually, if not
            then one that checked if the company name was in our database. If found the company
            information we had setup in the database would pre-populate on the personal information
            page.
          </p>
        </Grid.Column>
        <Grid.Column width={16}>
          <Image style={style.centerImage} src={ufpa_3} />
        </Grid.Column>
        <Grid.Column width={16} style={style.textSpace} textAlign='justified'>
          <p>We collected demographic information on the majority of the shows we serviced.
            This show I had to customize the 'Badge Type' demographic question to display as a select
            input where the parent value contained children values also in select inputs. This was
            a very tricky setup I managed to complete, while including the other business rules for
            this same demographic question.
          </p>
        </Grid.Column>
        <Grid.Column width={16}>
          <Image style={style.centerImage} src={ufpa_4} />
        </Grid.Column>
        <Grid.Column width={16} style={style.textSpace} textAlign='justified'>
          <p>I setup the registration category for this site based on being a 
            member or non-member of UFPA and having variable regtype rates based on
            business rules for the show. There were multiple regtypes that could be chosen having
            multiple rates based on varying criteria of the shows business rules.
          </p>
        </Grid.Column>
      </Grid>
      <Back />
    </section>
  );

};

const SiteAPIC = () => {

  const setType = [
    "HTML5", "CSS3", "BOOTSTRAP 3", "JAVASCRIPT", "JAVA", "JSP", "SQL"
  ];
  const setColor = [
    "red", "blue", "green", "purple", "black", "grey", "pink"
  ];

  return (
    <section className="ui container">
      <Grid>
        <Grid.Column width={16}>
          <Header as='h2'
            content='APIC Annual Conference 2019'
            style={style.h2} textAlign='center' />
        </Grid.Column>
        <Grid.Column width={16} textAlign='center'>
          <p>APIC 2019 is the must-attend event for IPs from around the globe...</p>
        </Grid.Column>
        <Grid.Column
          width={16} style={style.marginBottom} textAlign='center'>
          {setColor.map((color, index) =>
            (<Label key={index} color={color}>{setType[index]}</Label>))
          }
        </Grid.Column>
        <Grid.Column width={16}>
          <Image style={style.centerImage} src={apic_1} />
        </Grid.Column>
        <Grid.Column width={16} style={style.textSpace} textAlign='justified'>
          <p>I setup this show to have a designation if the person registering wanted to
            have the registration be a group registration. Business rules determined what
            defined a group and how they would go about registering.
          </p>
        </Grid.Column>
        <Grid.Column width={16}>
          <Image style={style.centerImage} src={apic_2} />
        </Grid.Column>
        <Grid.Column width={16} style={style.textSpace} textAlign='justified'>
          <p>This show used a common personal information page mostly. Which gathers common
            personal information of the person that's registering.
          </p>
        </Grid.Column>
        <Grid.Column width={16}>
          <Image style={style.centerImage} src={apic_3} />
        </Grid.Column>
        <Grid.Column width={16} style={style.textSpace} textAlign='justified'>
          <p>Per business rules though we can add and I added various other aspects of the
            registration site. For this show the client wanted demographic answers to be answered
            on this page as well.
          </p>
        </Grid.Column>
        <Grid.Column width={16}>
          <Image style={style.centerImage} src={apic_4} />
        </Grid.Column>
        <Grid.Column width={16} style={style.textSpace} textAlign='justified'>
          <p>This registration category page was a little difficult as the client requested a
            completely different layout for the show while the show was live and people could register.
            I tackled the issue head on came up with the display here. The layout was changed for group
            registrations as well, which saw a different set of regtypes if they were flagged as being
            a group registration.
          </p>
        </Grid.Column>
        <Grid.Column width={16}>
          <Image style={style.centerImage} src={apic_5} />
        </Grid.Column>
        <Grid.Column width={16} style={style.textSpace} textAlign='justified'>
           <p>Some sites allow registrants to buy extra options for certain events, workshops, etc...
             I setup this page to display, per business rules, certain options depending on the regtype
             category the registrant selected beforehand.
           </p>
        </Grid.Column>
      </Grid>
      <Back />
    </section>
  );

};

const SiteINFOC = () => {

  const setType = [
    "HTML5", "CSS3", "BOOTSTRAP 4", "JAVASCRIPT", "JAVA", "JSP", "SQL"
  ];
  const setColor = [
    "red", "blue", "orange", "purple", "black", "grey", "pink"
  ];

  return (
    <section className="ui container">
      <Grid>
        <Grid.Column width={16}>
          <Header as='h2'
            content='InfoComm 2019 TIDE'
            style={style.h2} textAlign='center' />
        </Grid.Column>
        <Grid.Column width={16} textAlign='center'>
          TIDE is a conference for creators -- innovators from design, integration, live events, 
          architecture, and brand experience -- who are shaping the future of integrated experiences...
        </Grid.Column>
        <Grid.Column
          width={16}
          style={style.marginBottom}
          textAlign='center'>
          {setColor.map((color, index) =>
            (<Label key={index} color={color}>{setType[index]}</Label>))
          }
        </Grid.Column>
        <Grid.Column width={16}>
          <Image style={style.centerImage} src={infoc_1} />
        </Grid.Column>
        <Grid.Column width={16}
          style={style.textSpace}
          textAlign='justified'>
            <p>This was a very custom site that involved a lot of updates being made throughout
          the life of the show. This show incorporated a web service to store the completed
          registration information from this site to AVIXA's database. I learned a lot about
          the front-end setup aspect and insights into the Java framework used to setup this
          functionality.</p>
        </Grid.Column>
        <Grid.Column width={16}>
          <Image style={style.centerImage} src={infoc_2} />
        </Grid.Column>
        <Grid.Column width={16}
          style={style.textSpace}
          textAlign='justified'>
            <p>This site used a bootstrap 4 card layout. When registering if you were found in AVIXA's
          database then the site would pre-pppulate the matched fields of information being sent
          between our and their databases. This lookup was based on the email address used.
          There were complicated business rules I setup on which registrants needed or didn't need
          to supply their email addresses on this personal information page.</p>
        </Grid.Column>
        <Grid.Column width={16}>
          <Image style={style.centerImage} src={infoc_3} />
        </Grid.Column>
        <Grid.Column width={16}
          style={style.textSpace}
          textAlign='justified'>
            <p>This custom options page was setup to display different sets of options based on varying
              criteria such as, specific demographics selected or specific regtypes selected earlier in
              the registration process. The framework is setup for us in an intranet tool but the
              programmer sets up the data to be used/displayed, the overall layout/display, what options
              are displayed for certain criteria, etc... 
            </p>
        </Grid.Column>
        <Grid.Column width={16}>
          <Image style={style.centerImage} src={infoc_4} />
        </Grid.Column>
        <Grid.Column width={16}
          style={style.textSpace}
          textAlign='justified'>
            <p>Myself and another programmer developed a modal to display the amount of money that
              could be saved if the registrant was already a member of AVIXA or chose to become a member
              from purchasing an option to do so. This was a custom component the client requested.
            </p>
        </Grid.Column>
      </Grid>
      <Back />
    </section>
  );

};

const SiteTRAVEL = () => {

  const setType = [
    "HTML5", "CSS3", "GULP", "NODE", "BEM CSS", "OBJECT ORIENTED JAVASCRIPT"
  ];
  const setColor = [
    "red", "blue", "olive", "yellow", null, null
  ];

  return (
    <section className="ui container">
      <Grid>
        <Grid.Column width={16}>
          <Header as='h2'
            content='Travel Site'
            style={style.h2} textAlign='center' />
        </Grid.Column>
        <Grid.Column
          width={16}
          style={style.marginBottom}
          textAlign='center'>
          {setColor.map((color, index) =>
            (<Label key={index} color={color}>{setType[index]}</Label>))
          }
        </Grid.Column>
        <Grid.Column width={16}>
          <Image style={style.centerImage} src={travel_1} />
        </Grid.Column>
        <Grid.Column width={16}
          style={style.textSpace}
          textAlign='justified'>
            <p>This was a personal project I worked on to use more updated programming practices
              I was trying to learn. I learned and worked with Node, Gulp, NPM and more tools. While
              learning and using object oriented javascript, lazy loading images and more current
              practices.
            </p>
        </Grid.Column>
        <Grid.Column width={16}>
          <Image style={style.centerImage} src={travel_2} />
        </Grid.Column>
        <Grid.Column width={16}
          style={style.textSpace}
          textAlign='justified'>
            <p>I used BEM css practices working on this project. They really helped to
              organize and structure the css I was using into a logical and reusable css
              code base.
            </p>
        </Grid.Column>
        <Grid.Column width={16}>
          <Image style={style.centerImage} src={travel_3} />
        </Grid.Column>
        <Grid.Column width={16}
          style={style.textSpace}
          textAlign='center'>
            <p>This was a fullscreen custom modal I created for this project.</p>
        </Grid.Column>
      </Grid>
      <Back />
    </section>
  );

};

const Site = (props) => {
  const page_id = props.match.params.pageId;

  if (page_id === "metronome"){
    return <Metronome />
  } else if (page_id === "ena19") {
    return <SiteENA />
  } else if (page_id === "travel") {
    return <SiteTRAVEL />
  } else if (page_id === "infoc19"){
    return <SiteINFOC />
  } else if (page_id === "apic19"){
    return <SiteAPIC />
  } else if (page_id === "ufpa19"){
    return <SiteUFPA />
  } else {
    return (
      <section
        className="ui container">No site found with this id.
      </section>
    );
  }
}

export default Site;