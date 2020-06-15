import React, {Component} from 'react';
import Meme from './Meme';
import './Collection.css'

class Collection extends Component {
    render(){
        let collection = this.props.collection.map(meme => 
            <Meme 
                id={meme.id} 
                key={meme.id} 
                remove={this.props.remove} 
                bgimage={meme.bgimage} 
                text={meme.text}
            />
        );
        return(
            <div>
                <div className = "collection">
                    <h1>yOUr CoLLecTiOn:</h1>
                </div>
                <div className="CollectionContainer">
                    {collection}
                </div>
            </div>
        )
    }
}

export default Collection;