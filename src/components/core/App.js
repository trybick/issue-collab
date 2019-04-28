import React from "react";
import Title from "./Title";
import SearchResults from "../search/SearchResults";
import "../../style.scss";
import LabelToggles from "../search/LabelToggles.js";
import LanguageToggles from "../search/LanguageToggles.js";

import Toggle from 'react-toggle'


class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggledLanguages: [],
      toggledLabels: [],
      providedText: "",
      issueState: "open",
      results: {},
    };
  }

  handleTextChange = event => {
    this.setState({ providedText: event.target.value });
  };

  onToggleLabel = event => {
    let labelName = event.target.name;
    const { toggledLabels } = this.state;
    const stateArray = [...toggledLabels];
    const index = stateArray.indexOf(labelName);

    if (labelName === "good+first+issue") {
      labelName = `"good+first+issue"`;
    } else if (labelName === "help+wanted") {
      labelName = `"help+wanted"`;
    }

    if (index === -1) {
      this.setState({
        toggledLabels: [...toggledLabels, labelName]
      });
    } else {
      stateArray.splice(index, 1);
      this.setState({ toggledLabels: stateArray });
    }
  };

  onToggleLanguage = event => {
    const { toggledLanguages } = this.state;
    const stateArray = [...toggledLanguages];
    const index = stateArray.indexOf(event.target.name);

    if (index !== -1) {
      stateArray.splice(index, 1);
      this.setState({ toggledLabels: stateArray });
    } else {
      this.setState({
        toggledLanguages: [...toggledLanguages, event.target.name]
      });
    }
  };

  formatUrl = () => {
    const {
      issueState,
      toggledLabels,
      toggledLanguages,
      providedText
    } = this.state;
    const baseUrl = "https://api.github.com/search/issues?q=type:issue";
    const sortOptions = "&sort=created&order=desc&per_page=30";
    let finalLabels = "";
    let finalLanguages = "";
    let finalText = "";

    finalLabels = toggledLabels.map(label => "+label:" + label).join("");

    finalLanguages = toggledLanguages
      .map(language => "+language:" + language)
      .join("");

    if (providedText !== "") {
      finalText = "+" + providedText;
    }

    const completeUrl =
      baseUrl +
      finalLabels +
      finalLanguages +
      finalText +
      `+state:${issueState}` +
      sortOptions;

    return completeUrl;
  };

  getIssues = async () => {
    const finalUrl = this.formatUrl();
    // remove finalUrl variable when done testing
    const response = await fetch(finalUrl);
    const json = await response.json();

    this.setState({ results: json }, () =>
      console.log("results", this.state.results)
    );
  };

  render() {
    const { results, providedText, toggledLabels } = this.state;

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
        </div>

        <button onClick={this.getIssues}>Get Results</button>

        <label>
          <Toggle
            defaultChecked={this.state.tofuIsReady}
            icons={false}
            onChange={this.handleTofuChange} />
          <span>No icons</span>
        </label>

        <LabelToggles
          onToggle={this.onToggleLabel}
          activeLabels={toggledLabels}
        />
        <LanguageToggles onToggle={this.onToggleLanguage} />

        {results.items && <SearchResults results={results} />}
      </div>
    );
  }
}

export default SearchBar;
