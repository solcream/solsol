import React, { Component } from 'react';
// jag tar bort import av WithFirebaseAuth //
import "./App.css";
import Nyhetslista from './component/Nyhetslista'
class App extends Component {
  /* Ställ in komponentens startläge
Peka på det globala sammanhanget för det här sökordet.*/
  constructor(props) {
    super(props);
    this.state = {
      articles: [
      {

    }]};
  }

  componentDidMount() {
    /* lägger in koden för nyhetsartiklar */
    fetch("https://newsapi.org/v2/top-headlines?country=se&apiKey=ae24bb6763034855bf26908e36dcd782")
      .then(function (response) {
        if (response.status !== 200) {
          throw Error( `status:${response.status}`);
        }
        // gör något med det som kom tillbaka
        return response.json()
      } ).then( jsondata => {
        /* gör något med json-objektet*/
        this.setState( { articles: jsondata.articles })
      }).catch( error =>{
        {/*setState är en funktion som i dess enklaste form tar ett argument, ett objekt.*/ }
        this.setState({
          articles: [{
            urlToImage: "fejk.jpg ",
            description: "Något gick fel, ${error.message}",
          }]
        });
      })
  }

  render() {
    return (


      <div className="App">
        <header className="App-header">
   <h1>Dagens nyheter</h1>
      <p className="underrubrik">Här kan du läsa dagens nyheter</p>

</header>

      <Nyhetslista
        /* rubrikomponent */
        minaArtiklar={this.state.articles} />

        </div>
    
    );
      }
    }
 
  export default App; 