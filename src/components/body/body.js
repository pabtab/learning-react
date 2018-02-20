import React, { Component} from "react";

import BookList from './book-list';

class Body extends Component {
    render() {
        return (
            <div>
                <p>Contendedor body</p>
                <BookList />
            </div>
        );
    }
}

export default Body;