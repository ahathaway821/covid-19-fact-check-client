import React from "react";
// import ListGroup from "react-bootstrap/ListGroup";
import { withRouter } from "react-router-dom";
import { ListGroup, ListGroupItem } from 'reactstrap';
import searchClaims from 'shared/searchClaims';

class PopularClaims extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    handleSearch = (query, isValidatedClaim) => {
        if (isValidatedClaim) {
            searchClaims(query)
                .then(res => {
                    this.props.history.push({
                        pathname: '/evaluate',
                        state: { 
                            claim: res[0]['claim'],
                            isValidatedClaim: true,
                            claimIndexResult: res
                        }
                    })
                })
        } else {
            this.props.history.push({
                pathname: '/evaluate',
                state: { 
                    claim: query,
                    isValidatedClaim: false,
                }
            })
        }
    }

    handleClick(val, e) {
        let claim, isValidatedClaim;
        if (val === 1) {
            claim = ' Face masks can be steamed for reuse.'
            isValidatedClaim = true
        } else if (val === 2) {
            claim = '5G mobile networks DO NOT spread COVID-19'
            isValidatedClaim = true
        } else if (val === 3) {
            claim = ' Hydroxychloroquine (HCQ) can prevent COVID-19.'
            isValidatedClaim = true
        } else {
            claim = 'Hypertension is a common comorbidity seen in COVID-19 patients'
            isValidatedClaim = false
        }

        this.handleSearch(claim, isValidatedClaim);
    }

    render() {
        return (
            <div style={{ textAlign: 'left'}}>
                <p><span style={{fontWeight: "bold"}}>Try out these claims!</span></p>
                <ListGroup flush>
                    <ListGroupItem action style={{cursor: "pointer" }} onClick={(e) => this.handleClick(1, e)}>Face masks can be steamed for reuse.</ListGroupItem>
                    <ListGroupItem action style={{cursor: "pointer" }} onClick={(e) => this.handleClick(2, e)}>5G mobile networks do not spread COVID-19</ListGroupItem>
                    <ListGroupItem action style={{cursor: "pointer" }} onClick={(e) => this.handleClick(3, e)}>Hydroxychloroquine (HCQ) can prevent COVID-19</ListGroupItem>
                    <ListGroupItem action style={{cursor: "pointer" }} onClick={(e) => this.handleClick(4, e)}>Hypertension is a common comorbidity seen in COVID-19 patients</ListGroupItem>
                </ListGroup>
            </div>
        );
    }
}

export default withRouter(PopularClaims);
