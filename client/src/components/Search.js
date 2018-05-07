import React, { Component } from "react";
import API from "../utils/API";




  export const Search = props => (
      <form>
        Topic<br />
        <input
          type="text"
          name="topic"
          // value={this.state.topic}
          onChange={props.handleInputChange}
        />
        <br />
        Start Year<br />
        <input 
        type="text" 
        name="startDate" 
        // value={this.state.startDate}
        onChange={props.handleInputChange}
        />
        <br />
        End Year<br />
        <input 
        type="text" 
        name="endDate"
        // value={this.state.endDate}
        onChange={props.handleInputChange}
        />
        <br /><br />
        <input type="button" value="Search" id="searchButton"onClick={() => props.clickSearch(props.id)} />
      </form>
    )
  

export default Search;