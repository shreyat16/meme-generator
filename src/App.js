import React from 'react';
import './App.css';
import MemeGen from './MemeGen';
import Collection from './Collection';
import { v4 as uuidv4 } from 'uuid';

class App extends React.Component {
  state = {
      collection: [
        {
          id: uuidv4(), 
          bgimage: "https://i.insider.com/5abb9e6a3216741c008b462d?width=1100&format=jpeg&auto=webp", 
          text: "me after walking up one flight of stairs"
        },
        {
          id: uuidv4(), 
          bgimage: "https://i.redd.it/pneu6tfbrwj41.png", 
          text: "when you send a text but all you get back is 'k'"
        },
        {
          id: uuidv4(), 
          bgimage: "https://pbs.twimg.com/media/Dc1U_DiU8AIBR8U.jpg", 
          text: "me sneaking downstairs to get my 3rd midnight snack"
        },
        {
          id: uuidv4(), 
          bgimage: "https://media.tenor.com/images/c77cf1a516046791c85df61a148de326/raw", 
          text: "me trying to remember what I walked into the room for"
        },
        {
          id: uuidv4(), 
          bgimage: "https://46.media.tumblr.com/tumblr_l5qd6kO7lD1qbaxlqo1_400.gif", 
          text: "meeting someone for the first time be like"
        },
        {
          id: uuidv4(), 
          bgimage: "https://www.shitpostbot.com/img/sourceimages/tired-spongebob-5805d0d13b8b6.jpeg", 
          text: "me studying for finals"
        },
        {
          id: uuidv4(), 
          bgimage: "https://vignette.wikia.nocookie.net/spongebob/images/a/a3/The_Slumber_Party_086.png/revision/latest?cb=20191219050917", 
          text: "me trying to get my 4th free sample at costco"
        }
        
      ]
    }

  savePic = (meme) => {
    this.setState({
      collection: [
        // we want collection to be old 
        //collection with new meme picture
        ...this.state.collection,
        {
          id: uuidv4(),
          bgimage: meme.bgimage,
          text: meme.text
        }
      ]
    })
  }
  remove = (id) => {
    this.setState({
      collection: this.state.collection.filter(meme =>
          meme.id !== id
        )
    })
  }
  render(){
    return (
      <div className="App">
        <div className="Header">
          <h1>mEmE gENerAtoR!</h1>
        </div>
          <MemeGen savePic={this.savePic} />
          <Collection 
            collection={this.state.collection} 
            remove={this.remove}
          />
      </div>
    );
  }
}

export default App;
