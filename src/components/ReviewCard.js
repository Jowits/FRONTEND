import React from 'react'
import { Card, Grid } from 'semantic-ui-react'

const ReviewCard = (props) => (

  <Grid container columns={1}>
    <Grid.Column>
      <Card>
        <Card.Content>
          <Card.Header>{props.review.cat_id}</Card.Header>
          <Card.Description>
            {props.review.text}
          </Card.Description>
        </Card.Content>
      </Card>
    </Grid.Column>
  </Grid>
   
)

export default ReviewCard