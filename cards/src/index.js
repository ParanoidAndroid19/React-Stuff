import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import movie1 from './movie1.jpg';
import movie2 from './movie2.jpg';
import movie3 from './movie3.jpg';
import movie4 from './movie4.jpg';
import movie5 from './movie5.jpg';
import movie6 from './movie6.jpg';

const summ = ['When disillusioned Swedish knight Antonius Block (Max von Sydow) returns home from the Crusades to find his country in the grips of the Black Death, he challenges Death (Bengt Ekerot) to a chess match for his life. Tormented by the belief that God does not exist, Block sets off on a journey, meeting up with traveling players Jof (Nils Poppe) and his wife, Mia (Bibi Andersson), and becoming determined to evade Death long enough to commit one redemptive act while he still lives.', 'In 1947, four German judges who served on the bench during the Nazi regime face a military tribunal to answer charges of crimes against humanity. Chief Justice Haywood (Spencer Tracy) hears evidence and testimony not only from lead defendant Ernst Janning (Burt Lancaster) and his defense attorney Hans Rolfe (Maximilian Schell), but also from the widow of a Nazi general (Marlene Dietrich), an idealistic U.S. Army captain (William Shatner) and reluctant witness Irene Wallner (Judy Garland).', "An imposing black structure provides a connection between the past and the future in this enigmatic adaptation of a short story by revered sci-fi author Arthur C. Clarke. When Dr. Dave Bowman (Keir Dullea) and other astronauts are sent on a mysterious mission, their ship's computer system, HAL, begins to display increasingly strange behavior, leading up to a tense showdown between man and machine that results in a mind-bending trek through space and time.", "Following the closing arguments in a murder trial, the 12 members of the jury must deliberate, with a guilty verdict meaning death for the accused, an inner-city teen. As the dozen men try to reach a unanimous decision while sequestered in a room, one juror (Henry Fonda) casts considerable doubt on elements of the case. Personal issues soon rise to the surface, and conflict threatens to derail the delicate process that will decide one boy's fate.", "Vijay (Guru Dutt) writes unpopular poems about the destitute and poor. Ridiculed by his brothers and scorned by publishers, Vijay finds encouragement in a sweet prostitute, Gulabo (Waheeda Rehman). When a homeless man wearing a coat Vijay gave him is killed, Gulabo convinces a publisher to print his poems, believing Vijay to be dead. The poems are wildly popular, thanks to the myth conjured around Vijay's supposed death. When he reappears, he finds that few friends can be trusted.", "Widely regarded as one of the greatest films of all time, this mob drama, based on Mario Puzo's novel of the same name, focuses on the powerful Italian-American crime family of Don Vito Corleone (Marlon Brando). When the don's youngest son, Michael (Al Pacino), reluctantly joins the Mafia, he becomes involved in the inevitable cycle of violence and betrayal. Although Michael tries to maintain a normal relationship with his wife, Kay (Diane Keaton), he is drawn deeper into the family business."]


const links = ["https://www.imdb.com/title/tt0050976/?ref_=ttpl_pl_tt", "https://www.imdb.com/title/tt0055031/", "https://www.imdb.com/title/tt0062622/", "https://www.imdb.com/title/tt0050083/", "https://www.imdb.com/title/tt0050870/", "https://www.imdb.com/title/tt0068646/"]

const imgs = [movie1, movie2, movie3, movie4, movie5, movie6]

const names = ["1. The Seventh Seal", "2. Judgement at Nuremberg", "3. 2001: A Space Odyssey", "4. 12 Angry Men", "5. Pyaasa", "6. The Godfather"]

class SocialCard extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      side: "front"
    }

    this.clickHandler = this.clickHandler.bind(this)
    this.linkHandler = this.linkHandler.bind(this)
  }

  clickHandler(){
    // alert("You clicked?")
    if(this.state.side === "front"){
      this.setState({
        side: "back"
      })
    }
    else{
      this.setState({
        side: "front"
      })
    }
  }

  linkHandler(){
    window.open(this.props.link);
  }

  render(){
    // if(this.state.side === "front"){
    //   return(
    //     <div className='cardfront' onClick={this.clickHandler}>
    //       <img src={this.props.srcc} alt="None" className="img1"/>
    //       <h3 className="title">{this.props.name}</h3>
    //     </div>
    //   )
    // }
    // else {
    //   return(
    //     <div className='cardback' onClick={this.clickHandler}>
    //       <p className='summary'>{this.props.synopsis}</p>
    //       <button onClick={this.linkHandler}>IMDB</button>
    //     </div>
    //   )
    // }
    return (
      <div className='maincontainer'>
        <div className='thecard'>

          <div className='front'>
            <img src={this.props.srcc} alt="None" className="img1"/>
            <p className="title">{this.props.name}</p>
          </div>

          <div className='back'>
            <p className='summary'>{this.props.synopsis}</p>
            <button onClick={this.linkHandler}>IMDB</button>
          </div>
        </div>
      </div>
    )
  }
}

class App extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    var cards = [];
    for (var i = 0; i < 6; i++) {
      cards.push(<SocialCard srcc={imgs[i]} name={names[i]} synopsis={summ[i]} link={links[i]}/>);
      cards.push(<br />)
    }

    return(
      <div>
        <h1 className='main'>My Favourite Movies</h1>
        {cards}
        <h2 style={{textAlign: "center", fontSize: "30px", marginTop: "70px"}}>-Fin-</h2>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

// <h2 style={{textAlign: "center", fontSize: "30px", marginTop: "70px"}}>-Fin-</h2>

// <SocialCard srcc={movie1} name="1. The Seventh Seal" synopsis={summ[0]} link={links[0]}/>
// <SocialCard srcc={movie2} name="2. Judgement at Nuremberg" synopsis={summ[1]} link={links[1]}/>
// <SocialCard srcc={movie3} name="3. 2001: A Space Odyssey" synopsis={summ[2]} link={links[2]}/>
// <SocialCard srcc={movie4} name="4. 12 Angry Men" synopsis={summ[3]} link={links[3]}/>
// <SocialCard srcc={movie5} name="5. Pyaasa" synopsis={summ[4]} link={links[4]}/>
// <SocialCard srcc={movie6} name="6. The Godfather" synopsis={summ[5]} link={links[5]}/>
