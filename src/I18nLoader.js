import React, { Component } from "react";
import { I18nProvider } from "@lingui/react";
import logo from "./logo.svg";
import "./App.css";

class I18nLoader extends Component {
  state = {
    language: 'en',
    catalogs: undefined
  };

  loadLanguage = async language => {
    console.log(language)
    const catalog = await import(`@lingui/loader!../locale/${language}/messages.json`);
    this.setState(state => ({
      catalogs: {
        ...state.catalogs,
        [language]: catalog
      }
    }));
  }

  componentDidMount() {
    this.loadLanguage(this.state.language);
  }

  shouldComponentUpdate(nextProps, nextState) {
    const { catalogs, language } = nextState;
    if (language !== this.state.language && !catalogs[language]) {
      this.loadLanguage(language);
      return false;
    }
    return true;
  }
  
  handleSetLanguage = (e) => {
    this.setState({
      language: e.target.value
    })
  };

  render() {
    const { catalogs, language, languageData } = this.state;
    const currentDate = new Date();
    console.log(language, catalogs, 999)

    return (
      <I18nProvider language={language} catalogs={catalogs} languageData={languageData}>
        {this.props.children}
          <select onChange={this.handleSetLanguage} defaultValue={language}>
            <option value="en">English</option>
            <option value="fr">French</option>
            <option value="zh">chinese</option>
          </select>
      </I18nProvider>
    );
  }
}


export default I18nLoader;