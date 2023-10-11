import { Route, Switch } from "react-router-dom";
import { useState } from "react";


//common
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";



//main
import Figure from "./components/main/Figure";
import Slider from "./components/main/Slider";
import News from "./components/main/News";
import Metro from "./components/main/Metro";
import Contain from "./components/main/Contain";
import Banner from "./components/main/Banner";

//sub
import Main from "./components/sub/Main";
import Information from "./components/sub/Information";
import Youtube from "./components/sub/Youtube";
import Service from "./components/sub/Service";
import Join from "./components/sub/Join";


import "./scss/style.scss";





function App() {
	return (
	<>
		<Switch>
			<Route exact path="/">
				<Header type={'common'}/>
				<Figure type={'main'}/>
				<Slider type={'main'}/>
				<News type={'main'}/>
				<Metro type={'main'}/>
				<Contain type={'main'}/>
				<Banner type={'main'}/>
			</Route>

			<Route path="/">
					<Header type={'sub'} />
			</Route>
			
		</Switch>

	
		
		<Route path="/Main" component={Main} />
		<Route path="/Information" component={Information} />
		<Route path="/Service" component={Service} />
		<Route path="/Youtube" component={Youtube} />
		<Route path="/Join" component={Join} />
		
		<Footer />
	</>	
		
	


		
	);
}

export default App;
