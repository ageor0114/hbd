import React from 'react';
import logo from './logo.svg';
import './App.css';
import ScrollAnimation from 'react-animate-on-scroll';
import BottomScrollListener from 'react-bottom-scroll-listener';

function App() {
  let title = "HAPPY BIRTHDAY JOSIAH!";
  let intro = "You're officially 18 lmao!!!! 🔞🍻🔞🤑 How does it feel?!";
  let eighteen = "18 years is like a lot ...";
  let comparison = "That's fucking od lol";
  let message = "I literally cannot wait for the next 4 amazing years at Cal! Even if we don't get to see each other b/c of rona in the fall🤮, it's gonna be hype as fuck when we finally move in (fingers crossed Blackwell 🤞🏾) & start blasting";
  let spotify = "https://open.spotify.com/playlist/4uzV02yQNMVZ9NIZT3Ygzv?si=hcUFS9okQ1-V7AgExPCo1Q";
  let audio = new Audio("/do-it.mp3");

  const start = () => {
    audio.play();
  }
  return (
    <center>
    <div className="App">
      <header className="App-header">

        <p className="title">{title}</p>

        <div className="content">

        <ScrollAnimation duration={2} animateIn='fadeIn'>
        <p>{intro}</p>
        </ScrollAnimation>

        <ScrollAnimation duration={2} animateIn='fadeIn'>
        <p>{eighteen}</p>
        </ScrollAnimation>

        <ScrollAnimation duration={2} animateIn='fadeIn'>
        <h1 class="shake-little shake-constant">216 months</h1>
        </ScrollAnimation>

        <ScrollAnimation duration={2} animateIn='fadeIn'>
        <h1 class="shake-little shake-constant">6,570 days</h1>
        </ScrollAnimation>

        <ScrollAnimation duration={2} animateIn='fadeIn'>
        <h1 class="shake shake-constant">157,680 hours</h1>
        </ScrollAnimation>

        <ScrollAnimation duration={2} animateIn='fadeIn'>
        <h1 class="shake-hard shake-constant">9,460,800 minutes</h1>
        </ScrollAnimation>

        <ScrollAnimation duration={2} animateIn='fadeIn'>
        <h1 class="shake-crazy shake-constant">567,648,000 seconds</h1>
        </ScrollAnimation>

        <ScrollAnimation duration={2} animateIn='fadeIn'>
        <p>{comparison}</p>
        </ScrollAnimation>

        <ScrollAnimation duration={2} animateIn='fadeIn'>
        <p>{message} <a className="link" href={spotify}>Cal Groovy</a>🔥🔥</p>
        </ScrollAnimation>

        <ScrollAnimation duration={2} animateIn='fadeIn'>
        <p>So enjoy the rest of your day & see ya soon, brother!🙌🏾🎉🎂</p>
        </ScrollAnimation>

        <ScrollAnimation duration={2} animateIn='fadeIn'>
        <p>oh yeah ... and obligatory</p>
        </ScrollAnimation>

        <ScrollAnimation duration={2} animateIn='tada'>
        <h1>🐻 GO BEARS 🐻</h1>
        </ScrollAnimation>

        <ScrollAnimation duration={2} animateIn='fadeIn'>
        <p>And now I'll end off w some Cal Groovy to satisfy ur ears ...</p>
        </ScrollAnimation>

        <ScrollAnimation duration={2} animateIn='fadeIn'>
        <p className="music"><i>🎵 Currently Playing: Do It - Tuxedo</i></p>
        </ScrollAnimation>

        <BottomScrollListener onBottom={start}/>
        </div>
        <div className="footer"/>
      </header>
    </div>
    </center>
  );
}

export default App;
