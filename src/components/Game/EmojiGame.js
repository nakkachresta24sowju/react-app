import React from 'react'
import Navbar from './Navbar.js'
import HowToPlay from './HowToPlay.js'
import EmojiCard from './EmojiCard.js'
import LooseTheGame from './LooseTheGame.js'
class EmojiGame extends React.Component {
   constructor(props) {
      super(props)
      this.isWon = false
      this.state = {
         score: 0,
         topScore: 0,
         gameState: 'PLAYING',
         isThemeChanged: false,
         emojis: [
            {
               id: 'one',
               isClicked: false,
               name: 'Exploding Head',
               image:
                  'https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-1.png'
            },
            {
               id: 'two',
               isClicked: false,
               name: 'Grinning Face with Sweat',
               image:
                  'https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-2.png'
            },
            {
               id: 'three',
               isClicked: false,
               name: 'Smiling Face With Heart-Eyes',
               image:
                  'https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-3.png'
            },
            {
               id: 'four',
               isClicked: false,
               name: 'Smirking Face',
               image:
                  'https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-4.png'
            },
            {
               id: 'five',
               isClicked: false,
               name: 'Thinking Face',
               image:
                  'https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-5.png'
            },
            {
               id: 'six',
               isClicked: false,
               name: 'Winking Face',
               image:
                  'https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-6.png'
            },
            {
               id: 'seven',
               isClicked: false,
               name: 'Grinning Face',
               image:
                  'https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-7.png'
            },
            {
               id: 'eight',
               isClicked: false,
               name: 'Crying Face',
               image:
                  'https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-8.png'
            },
            {
               id: 'nine',
               isClicked: false,
               name: 'Astonished Face',
               image:
                  'https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-9.png'
            },
            {
               id: 'ten',
               isClicked: false,
               name: 'Face With Tears Of Joy',
               image:
                  'https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-10.png'
            },
            {
               id: 'eleven',
               isClicked: false,
               name: 'Start Struck',
               image:
                  'https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-11.png'
            },
            {
               id: 'tweleve',
               isClicked: false,
               name: 'Winking Face With Tounge',
               image:
                  'https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-12.png'
            }
         ]
      }
   }

   onEmojiClick = obj => {
      console.log(obj)
      if (obj.isClicked === false) {
         obj.isClicked = true
         this.shuffleEmojis()
         this.incrementScore()
      } else {
         const { score } = this.state
         if (score < 12) {
            this.setState({ gameState: 'LOOSE' })
         } else if (score === 12) {
            this.setState({ gameState: 'WON' })
         }
      }
   }

   shuffleEmojis = () => {
      const { emojis } = this.state
      for (let i = emojis.length - 1; i > 0; i--) {
         let j = Math.floor(Math.random() * (i + 1))
         ;[emojis[i], emojis[j]] = [emojis[j], emojis[i]]
      }
      console.log(emojis)
   }
   incrementScore = () => {
      this.setState({ score: this.state.score + 1 })
   }
   onPlayAgainClick = () => {
      this.setTopScore(this.state.score)
      this.resetGame()
   }
   resetGame = () => {
      const { emojis } = this.state
      let emojyies = emojis.map(emoji => (emoji.isClicked = false))
      console.log('reset', this.state.topScore)
      console.log(emojyies)
      this.setState({ gameState: 'PLAYING', score: 0 })
   }

   setTopScore = value => {
      const { topScore } = this.state
      if (topScore < value) this.setState({ topScore: value })
      else this.setState({ topScore: topScore })
   }
   onChangeTheme = () => {
      this.setState(prevState => ({
         isThemeChanged: !prevState.isThemeChanged
      }))
   }
   render() {
      if (this.state.gameState === 'PLAYING') {
         return (
            <div>
               <Navbar
                  score={this.state.score}
                  topScore={this.state.topScore}
                  isThemeChanged={this.state.isThemeChanged}
                  onChangeTheme={this.onChangeTheme}
               />
               <EmojiCard
                  emojis={this.state.emojis}
                  onEmojiClick={this.onEmojiClick}
                  isWon={this.isWon}
                  onPlayAgainClick={this.onPlayAgainClick}
                  isThemeChanged={this.state.isThemeChanged}
                  onChangeTheme={this.onChangeTheme}
               />
               <HowToPlay
                  isThemeChanged={this.state.isThemeChanged}
                  onChangeTheme={this.onChangeTheme}
               />
            </div>
         )
      } else if (this.state.gameState === 'LOOSE') {
         return (
            <div>
               <Navbar
                  score={this.state.score}
                  topScore={this.state.topScore}
                  isThemeChanged={this.state.isThemeChanged}
                  onChangeTheme={this.onChangeTheme}
               />
               <LooseTheGame
                  score={this.state.score}
                  gameState={this.state.gameState}
                  isWon={this.isWon}
                  onPlayAgainClick={this.onPlayAgainClick}
                  isThemeChanged={this.state.isThemeChanged}
                  onChangeTheme={this.onChangeTheme}
               />
               <HowToPlay
                  isThemeChanged={this.state.isThemeChanged}
                  onChangeTheme={this.onChangeTheme}
               />
            </div>
         )
      } else if (this.state.gameState === 'WON') {
         return (
            <div>
               <Navbar
                  score={this.state.score}
                  topScore={this.state.topScore}
                  isThemeChanged={this.state.isThemeChanged}
                  onChangeTheme={this.onChangeTheme}
               />
               <LooseTheGame
                  score={this.state.score}
                  gameState={this.state.gameState}
                  isWon={this.isWon}
                  onPlayAgainClick={this.onPlayAgainClick}
                  isThemeChanged={this.state.isThemeChanged}
                  onChangeTheme={this.onChangeTheme}
               />
               <HowToPlay
                  isThemeChanged={this.state.isThemeChanged}
                  onChangeTheme={this.onChangeTheme}
               />
            </div>
         )
      }
   }
}

export default EmojiGame

/*
this.state.emojis.forEach(element => {
            if (obj.id === element.id && element.isClicked === false) {
                element.isClicked = true;
                this.incrementScore();
                this.shuffleEmojis(this.state.emojis);
            }
            else if (obj.id === element.id && element.clicked === true) {
                this.state.emojis.forEach(element => (element.isClicked = false));
                console.log(this.state.emojis);
                //return (<LooseTheGame />);
            }
        });
        });




        }*/
