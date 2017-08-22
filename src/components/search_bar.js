import React, {Component} from "react";

class SearchBar extends Component {

    constructor(props){
        super(props);

        this.state = {
            term: ""
        };
    }


    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }

    render() {
        return(
            <div>
                <div className="search-bar col-md-8">
                    <input
                        value={this.state.term}
                        onChange={e => this.onInputChange(e.target.value)}/>
                </div>
                <div className="col-md-4">
                </div>
            </div>
        );
    }
}

export default SearchBar;

