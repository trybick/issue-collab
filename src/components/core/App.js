import React from "react";
import Title from "./Title";
import SearchResults from "../search/SearchResults";
import "../../style.scss";
import GroupedToggles from "../search/GroupedToggles.js";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      enabledLanguages: [],
      enabledLabels: [],
      providedText: "",
      issueState: "open",
      results: {},
      totalResults: ""
    };
  }

  handleTextChange = event => {
    this.setState({ providedText: event.target.value });
  };

  onToggle = event => {
    const { enabledLabels } = this.state;
    const stateArray = [...enabledLabels];
    const index = stateArray.indexOf(event.target.name);

    // Removes or adds item depending on index value
    if (index !== -1) {
      stateArray.splice(index, 1);
      this.setState({ enabledLabels: stateArray }, () =>
        console.log("labels", enabledLabels)
      );
    } else {
      this.setState(
        {
          enabledLabels: [...enabledLabels, event.target.name]
        },
        () => console.log("labels", enabledLabels)
      );
    }
  };

  formatUrl = () => {
    const { issueState, enabledLabels, providedText } = this.state;
    const baseUrl = "https://api.github.com/search/issues?q=type:issue";
    const sortOptions = "&sort=created&order=desc&per_page=30";
    let finalLabels = "";
    let finalText = "";

    finalLabels = enabledLabels.map(label => "+label:" + label).join("");

    if (providedText !== "") {
      finalText = "+" + providedText;
    }

    const completeUrl =
      baseUrl + finalLabels + finalText + `+state:${issueState}` + sortOptions;

    return completeUrl;
  };

  getIssues = async () => {
    const urlToSend = this.formatUrl();

    const response = await fetch(urlToSend);
    const json = await response.json();

    this.setState({ results: json, urlToSend: urlToSend }, () =>
      console.log("results", this.state.results)
    );

    console.log("url", urlToSend);
  };

  render() {
    const { results, providedText } = this.state;

    return (
      <div className="wrapper">
        <Title />

        <div className="searchbar">
          <h3>Enter Your Search</h3>
          <input
            type="text"
            name="search-text"
            value={providedText}
            onChange={this.handleTextChange}
          />
          <button onClick={this.getIssues}>Get Results</button>
        </div>

        <GroupedToggles onToggle={this.onToggle} />

        <h3>{this.state.urlToSend}</h3>

        {results.items && <SearchResults results={results} />}
      </div>
    );
  }
}

export default SearchBar;
