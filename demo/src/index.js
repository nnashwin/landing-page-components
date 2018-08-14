import React, {Component} from 'react'
import {render} from 'react-dom'
import sizes from 'point-breaks';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons'
import { StyledNav, StyledHeader, StyledIconSection, SplitSection, SplitPicDiv, SplitTextDiv, SplitTextTitle, SplitTextBody,
	CenteredSection, CenteredTitle,
	StyledEmailSection,
	StyledEmailInput, StyledSubmitButton,
	FooterSection, FooterLinksDiv,
	StyledListOfLinks,
	CopyrightText, StyledListLink
} from '../../src';
import './App.css';

library.add(fab);

class App extends Component {
  constructor(props) {
    super(props);
	this.state = {width: 0};
  }

  updateWidth() {
	this.setState({ width: window.innerWidth });
  }

  componentDidMount() {
	this.updateWidth();
	window.addEventListener("resize", this.updateWidth.bind(this));
  }

  componentWillUnmount() {
	window.removeEventListener("resize", this.updateWidth.bind(this));
  }

  render() {
	const smallTabletWidth = Number(sizes.smallTablet.width.slice(0, -2));
	const secondDivText = "Lorem ipsum dolor amet adaptogen thundercats keffiyeh pop-up lomo ramps. Butcher hella marfa, narwhal yr microdosing ramps."
	const determineSecondSplitDiv = (orderInput) => {
		return (
			<SplitTextDiv order={orderInput}>
				<SplitTextTitle>
					Totally Furry Kitties
				</SplitTextTitle>
				<SplitTextBody>{secondDivText}</SplitTextBody>	
			</SplitTextDiv>
		);
	}

    return (
      <div className="App">
		<StyledNav links={[{href: "google.com", text: "Home"}, {href: "amazon.com", text: 'Sign Up', isButton: true}]}></StyledNav>
		<StyledHeader imageUrl={"https://placekitten.com/1200/945"} backgroundPositionY="50%">
			Discover Kittens
		</StyledHeader>
        
		<StyledIconSection>
			<p className="App-intro">
			  To get started, edit <code>src/App.js</code> and save to reload.
			</p>
		</StyledIconSection>
		<SplitSection>
			<SplitTextDiv order={'left'} >
				<SplitTextTitle>
					Totally Kitties
				</SplitTextTitle>
				<SplitTextBody>
					Pee in the shoe lick the curtain just to be annoying but the dog smells bad show belly.
				</SplitTextBody>
			</SplitTextDiv>
			<SplitPicDiv order={'right'} imageUrl={'https://placekitten.com/1200/480'} />
		</SplitSection>
		<SplitSection>
			{ this.state.width < smallTabletWidth? determineSecondSplitDiv('left') : determineSecondSplitDiv('right')}
			{ this.state.width < smallTabletWidth ? <SplitPicDiv order={'right'} imageUrl={'https://placekitten.com/1200/480'} /> : <SplitPicDiv order={'left'} imageUrl={'https://placekitten.com/1200/480'} />}
		</SplitSection>
		<SplitSection>
			<SplitTextDiv order={'left'} >
				<SplitTextTitle>
					Totally Cats
				</SplitTextTitle>
				<SplitTextBody>
					These cats are the best cats I have ever seen!  Never before have cats been so interesting to me and taught me sooooo much!
				</SplitTextBody>
			</SplitTextDiv>
			<SplitPicDiv order={'right'} imageUrl={'https://placekitten.com/1200/480'} />
		</SplitSection>
		<CenteredSection>
			<CenteredTitle>
				Call toAction Section!!	
			</CenteredTitle>
			<StyledEmailSection>
				<StyledEmailInput />
				<StyledSubmitButton>Sign Up!</StyledSubmitButton>
			</StyledEmailSection>
		</CenteredSection>
		<FooterSection>
			<FooterLinksDiv>
				<StyledListOfLinks style={{'display': 'flex'}}>
					<StyledListLink first={true} linkUrl="https://www.google.com" linkText="Google" />
					<StyledListLink linkUrl="https://www.xkcd.com" linkText="Xkcd" />
					<StyledListLink last={true} linkUrl="https://www.youtube.com" linkText="Youtube" />
				</StyledListOfLinks>		
				<CopyrightText>© Ru-Lai Development 2018. All Rights Reserved.</CopyrightText>
			</FooterLinksDiv>			
		</FooterSection>
      </div>
    );
  }
}

class Demo extends Component {
  render() {
    return <div>
      <App />
    </div>
  }
}

render(<App/>, document.querySelector('#demo'))
