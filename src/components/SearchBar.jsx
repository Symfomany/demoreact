import React, { Component } from 'react';
import ReactDom from 'react-dom';

/**
 * SearchBar Components
 */
export default class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.state = { term: 'Reactjs' };
    }

    onInputChange(event) {
        this.setState({ term: event });
        this.props.onSearchTermChange(event);
    }

    render() {
        return (
            <div className="search-bar">
                <input
                    value={this.state.term}
                    onChange={event => this.onInputChange(event.target.value)}
                    placeholder="Veuillez rechercher une vidéos..."
                />
                Recherche sur: <b>{this.state.term}</b>
            </div>
        );
    }
}