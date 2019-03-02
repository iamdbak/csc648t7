import React, { Component } from 'react';
import {Button,Layout, Header, Navigation, Drawer, Content, Card, CardTitle, CardActions} from 'react-mdl';
import './App.css';

class App extends Component {

  state = {
            data: null
	  };

  componentDidMount(){
	// Call our fetch function below once the component mounts
	this.callBackendAPI()
	.then(res => this.setState({ data: res.express }))
	.catch(error => {console.log(error)
			});
  }

  // Fetches our GET route from the Express server.
  // Note: the route we are fetching matches the GET route from server (app.js in csc648t7)
  callBackendAPI = async () => {
  	const response = await fetch('/');
	const body = await response.json();
	if (response.status !== 200) {
      		throw Error(body.message)
    	}
    	return body;
  }




  render() {
    return (
  <div className="demo-big-content">
    <Layout className="page-layouter">
        <Header className="header-color" title="SF Affordable Again" scroll>
            <Navigation>
                <a href="#">About</a>
            </Navigation>
        </Header>
        <Drawer title="">
            <Navigation>
                <a href="#">About</a>
            </Navigation>
        </Drawer>
        <Content>
            <div style={{display: 'flex', justifyContent: 'center'}} className="page-content">
	<Button>Raj</Button>
	<Button>Noureddine</Button>
	<Button>Akash</Button>
	<Button>Preyansh</Button>
	<Button>Henok</Button>
	<Button>Bing</Button>
      </div>
    </Content>
  </Layout>  
 </div>
  );
  }
}

export default App;
