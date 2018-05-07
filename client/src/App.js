import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Search from "./components/Search"
import Results from "./components/Results"
import Saved from "./components/Saved"
import NavBar from "./components/NavBar"
import API from "./utils/API";

class App extends Component {
  // Setting the component's initial state
  state = {
    topic: "",
    startDate: "",
    endDate: "",
    articles: [],
    savedArticles:[]
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const name = event.target.name;

    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  clickSearch = event => {
    console.log(this.state.topic)
    
    API.search(this.state.topic, this.state.startDate, this.state.endDate)
      .then(res => {
        console.log("call back")
        console.log(res)
        console.log(res.data.response.docs[0])
        this.setState({
          articles: res.data.response.docs
        }, function () {
          console.log(this.state.articles)
        })
      })
  }
  clickSave=key=>{
    console.log(key)
    console.log(this.state.articles[key])
    API.saveArticle(this.state.articles[key])
  }
  //Call saved articles
  populateSaved=()=>{
    
    console.log("POPULATE SAVE RAN2")
    API.getArticles()
    .then(res=>{
      console.log(res)

      console.log(res.data)
      let allArticles=[]
      res.data.forEach(function(element) {
        const currentArticle={
          id:element._id,
          title:element.title,
          url:element.url,
          date:element.date
        }
        console.log(currentArticle)
        allArticles.push(currentArticle)
      });
      
      this.setState({
        savedArticles:allArticles
      })
      console.log(this.state.savedArticles)
    })
  }
  //Call saved Articles on load
  componentWillMount = () => {
    this.populateSaved();
  }
  //Delete function
  clickDelete=(id)=>{
    console.log(id)
   API.deleteArticle(id)
   this.populateSaved();
  }
  render() {
    return (
      <Router>
        <div className="App"
        >
          <NavBar 
          populateSaved={this.populateSaved}
       />

          <Route exact path="/" render={(props) => <Search
            handleInputChange={this.handleInputChange}
            clickSearch={this.clickSearch}
            {...props} />} />

          <Route exact path="/" render=
            {()=> this.state.articles.map((article,index) => ( <Results 
              key={index}
              id={index}
              title={article.headline.main}
              url={article.web_url}
              date={article.pub_date}
              clickSave={this.clickSave}
             />))}
          />

          <Route exact path="/saved" render=
          {()=>this.state.savedArticles.map((art,index)=>(<Saved
            key={index}
            id={art.id}
            title={art.title}
            url={art.url}
            date={art.date}
            clickDelete={this.clickDelete}
          />))} />
        </div>
      </Router>
    );
  }
}

export default App;
