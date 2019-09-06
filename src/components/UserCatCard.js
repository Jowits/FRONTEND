import React from "react";
import { Card, Icon, Button, Image } from "semantic-ui-react";

const UserCatCard = props => {
  const cat = props.cat;
  return (
    <Card>
      <Image wrapped ui={false} src={cat.image} size="small" />
      <Card.Content>
        <Card.Header>
          {cat.name} <Icon name="paw" />
        </Card.Header>
      </Card.Content>
      <Card.Content>
        <Card.Description>{cat.description}</Card.Description>
      </Card.Content>
      <Card.Content>
        <Button onClick={() => props.deleteCat(cat.id)}>Delete Cat</Button>
      </Card.Content>
    </Card>
  );
};

export default UserCatCard;
