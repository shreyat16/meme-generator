import React, {Component} from 'react';
import {Button,ButtonGroup} from 'reactstrap';

class Meme extends Component {
    handleClick = () => {
        this.props.remove(this.props.id);
    }
    render(){
        return(
            <div className = "Meme">
                <div className="Memebg">
                    <img src={this.props.bgimage} alt = {this.props.text}/>
                </div>
                <div>
                    <p id>{this.props.text}</p>
                </div>
                <ButtonGroup>
                    <Button color="success" onClick={this.handleClick}>x</Button>
                </ButtonGroup>
            </div>
        )
    }
}

export default Meme;