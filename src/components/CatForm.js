import React from 'react'
import { Button, Form, Grid } from 'semantic-ui-react'
import CatCard from '../components/CatCard';

class CatForm extends React.Component  {

  state = {
      image: "",
      name: "",
      address: "",
      description:""
  }

  handleSubmit = () => {
    this.props.createCat(this.state)
    this.setState({
      image: "",
      name: "",
      address: "",
      description:""})
  }

  handleChange = (key, value) => {
    this.setState({
        [key]: value
    })
}
//   const [image, setImage] = useState('')
//   const [name, setName] = useState('')
//   const [address, setAddress] = useState('')
//   const [description, setDescription] = useState('')
render (){
  return (
    <>
       <Grid centered columns={2}>
          <Grid.Column>
            <Form>
                <Form.Field>
                <label>Image</label>
                <input 
                placeholder='Image' 
                value={this.state.image}
                onChange={e => this.handleChange(e.target.value)}
                />
                </Form.Field>
                <Form.Field>
                <label>Name</label>
                <input 
                placeholder='Name'
                value={this.state.name}
                onChange={e => this.handleChange(e.target.value)} />
                </Form.Field>
                <Form.Field>
                <label>Area</label>
                <input 
                placeholder='Area'
                value={this.state.address}
                onChange={e => this.handleChange(e.target.value)} />
                </Form.Field>
                <Form.Field>
                <label>Description</label>
                <input 
                placeholder='Description' 
                value={this.state.description}
                onChange={e => this.handleChange(e.target.value)}/>
                </Form.Field>
                <Button onClick={this.handleSubmit} type='submit'>Submit</Button>
            </Form>
          </Grid.Column>
        </Grid>
    </>
  )
} 
}

export default CatForm

