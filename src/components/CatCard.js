import React from 'react'
import { Card, Icon, Image, Button, Rating, Grid } from 'semantic-ui-react'

const CatCard = (props) => (

    <Grid container columns={3}>
    <Grid.Column>
      <Card>
        <Image src={props.cat.image} wrapped ui={false} />
        <Card.Content>
          <Card.Header>{props.cat.name} <Icon name='paw' /></Card.Header>
          <Rating vertical icon='heart' defaultRating={1} maxRating={3} />
          <Card.Description>
            {props.cat.description}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
            <Button>
              Play-date Time!
            </Button>
        </Card.Content>
      </Card>
    </Grid.Column>
  </Grid>
   
)

export default CatCard