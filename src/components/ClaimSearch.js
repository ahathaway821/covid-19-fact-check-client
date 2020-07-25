import React from "react";
import { AsyncTypeahead } from 'react-bootstrap-typeahead';
import searchClaims from '../shared/searchClaims';

import 'react-bootstrap-typeahead/css/Typeahead.css';

class ClaimSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            options: []
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.keyPress = this.keyPress.bind(this);
        this.pdiv = React.createRef();
    }

    handleInputChange(val) {
        this.props.onChangeValue(val);    
    }

    handleChange(selected) {
        this.props.onSelectedValue(selected);
    }

    keyPress(e) {
        // On enter key
        if(e.keyCode === 13){
            this.pdiv.current.click(); // hide search results right after search
            this.props.onEnter();
        }
     }

    handleSearch = (query) => {
        this.setState({isLoading: true});
        searchClaims(query)
            .then(res => {
                this.setState({options: res, isLoading: false})
            })
            .catch({isLoading: false});
    }

    render() {
        return (
                <div ref={this.pdiv} style={{fontSize:'1.5em', padding:'10px'}}>
                    <AsyncTypeahead
                        style={{ background: "white", borderRadius: "20px"}}
                        id="aync-claim-search"
                        isLoading={this.state.isLoading}
                        minLength={3}
                        labelKey={option => `${option.claim}`}
                        onSearch={this.handleSearch}
                        onInputChange={this.handleInputChange}
                        onChange={this.handleChange}
                        onKeyDown={this.keyPress}
                        options={this.state.options}
                        placeholder={this.props.placeHolder}
                        filterBy={(option, props) => option}
                        
                        renderMenuItemChildren={(option, props) => (
                            <span>{option.claim}</span>
                        )}
                    />
                </div>


        );
    }
}

export default ClaimSearch;