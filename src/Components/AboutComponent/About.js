import React, { Component } from 'react';
import {
  Grid,
  Header,
  Segment,
  Table,
  Label,
  Progress,
} from 'semantic-ui-react';

const style = {
  h1: {
    marginTop: '3em',
    marginBottom: '3em',
    fontSize: '2.5rem'
  },
  h4: {
    fontSize: '1.75rem',
    fontWeight: '200'
  },
  alignRight: {
    textAlign: 'right'
  }
};

const skillList = [
  {
    label: "HTML5",
    progress: "90",
    color: "red"
  },
  {
    label: "CSS3",
    progress: "90",
    color: "blue"
  },
  {
    label: "BOOTSTRAP 3",
    progress: "68",
    color: "green"
  },
  {
    label: "BOOTSTRAP 4",
    progress: "68",
    color: "orange"
  },
  {
    label: "JAVASCRIPT",
    progress: "58",
    color: "purple"
  },
  {
    label: "JAVA",
    progress: "50",
    color: "black"
  },
  {
    label: "JSP",
    progress: "50",
    color: "grey"
  },
  {
    label: "SQL",
    progress: "40",
    color: "pink"
  },
  {
    label: "NODE",
    progress: "23",
    color: "yellow"
  },
  {
    label: "GULP",
    progress: "23",
    color: "olive"
  },
  {
    label: "BEM",
    progress: "23",
    color: "brown"
  },
  {
    label: "REACT",
    progress: "23",
    color: "teal"
  }
];

const SkillsList = props => {
  const skills = props.showSkills.map((skill, index) => {
    return (
      <Table.Row key={index}>
        <Table.Cell>
          <Label color={skill.color}>{skill.label}</Label>
        </Table.Cell>
        <Table.Cell colSpan='3'>
          <Progress percent={skill.progress}color={skill.color} />
        </Table.Cell>
      </Table.Row>
    )
  });
  return <React.Fragment>{skills}</React.Fragment>
};

class About extends Component {
  renderHeading (){
    return (
      <Header as='h1'
        content="I've handwritten this portfolio using React to teach myself the language."
        style={style.h1} textAlign='center' />
    );
  }

  render (){
    return (
      <section className="ui container about-block">
        {this.renderHeading()}
        <Grid stackable columns={2}>
          <Grid.Column floated='left' width={6}>
            <Segment>
              <h4 style={style.h4}>Profile</h4>
            </Segment>
          </Grid.Column>
          <Grid.Column floated='right' width={10}>
            <Segment>
              <p>I am a Web Developer who currently resides in Illinois.</p>
              <p>My skills include front-end developer work involving HTML5, CSS3,
                Javascript, JSP, Java, SQL, Bootstrap 3/4 and more...
              </p>
              <p>I've been exposed to React, Node, BEM, Object Oriented Javascript.</p>
              <p>In my free time I enjoy playing fantasy football, traveling and just relaxing. 
                Most of my travels have consisted of cruises, but I plan
                 on expanding on those experiences with trips to various countries in the near future.</p>
            </Segment>
          </Grid.Column>
        </Grid>

        <Grid stackable columns={2}>
          <Grid.Column floated='left' width={6}>
            <h4 style={style.h4}>Experience</h4>
          </Grid.Column>
          <Grid.Column floated='right' width={10}>
            <Segment>
              <Grid stackable>
                <Grid.Row columns={2}>
                  <Grid.Column>
                    <h3>CompuSystems Inc</h3>
                  </Grid.Column>
                  <Grid.Column>
                    <p>2013 - 2019</p>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row columns={1}>
                  <Grid.Column>
                    <p>Web Developer</p>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Segment>
          </Grid.Column>
        </Grid>

        <Grid stackable columns={2}>
          <Grid.Column floated='left' width={6}>
            <Segment>
             <h4 style={style.h4}>Skills</h4>
            </Segment>
          </Grid.Column>
          <Grid.Column floated='right' width={10}>
            <Segment>
              <Table size='small' stackable>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell width='4'></Table.HeaderCell>
                    <Table.HeaderCell width='4'>Beginner</Table.HeaderCell>
                    <Table.HeaderCell width='4'>Intermediate</Table.HeaderCell>
                    <Table.HeaderCell width='4'>Expert</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  <SkillsList showSkills={skillList} />
                </Table.Body>
              </Table>
            </Segment>
          </Grid.Column>
        </Grid>
      </section>
    );
  }
}

export default About;