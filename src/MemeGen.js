import React, {Component} from 'react';
import Meme from './Meme'
import {Form,FormGroup,Label,Input} from 'reactstrap';
import { Button } from 'reactstrap';

class MemeGen extends Component {
    state = {
        text:"mEme tExT HeRe:",
        bgimage:"https://pyxis.nymag.com/v1/imgs/09c/923/65324bb3906b6865f904a72f8f8a908541-16-spongebob-explainer.rsquare.w700.jpg",
        selectingImage: false
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }
    handleClick = () => {
        this.setState({selectingImage: !this.state.selectingImage})
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.savePic({
            bgimage: this.state.bgimage,
            text: this.state.text
        })
    }

    render(){
        let quoteform = 
        <FormGroup>
            <Meme bgimage = {this.state.bgimage} text = {this.state.text}/>
            <div>
                <Label for="Text">Customize Meme Text: </Label>
            </div>
            <div>
                <Input onChange = {this.handleChange} type = "textarea" name = "text" />
            </div>
            <Button onClick = {this.handleClick}>CHANGE IMAGE!</Button> <br/>
            <Button>SAVE PICTURE!</Button> <br/>
        </FormGroup>

        let imageform = 
        <FormGroup>
            <Meme bgimage = {this.state.bgimage} text = {this.state.text}/>
            <div>
                <Label for="Bgimage">Background Image URL: </Label>
            </div>
            <div>
                <Input onChange = {this.handleChange} type = "text" name = "bgimage"/>
            </div>
            <div>
                <Button onClick = {this.handleClick}>USE THIS IMAGE!</Button> <br/>
            </div>
        </FormGroup>
        return(
            <div className = "MemeGen">
                <Form onSubmit = {this.handleSubmit}>
                    {this.state.selectingImage ? imageform : quoteform}                    
                </Form>
            
            </div>
        )
    }
}

export default MemeGen;