import React from 'react';
require("dotenv").config();
class JustComments extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className="just-comments" data-allowguests="true" data-apikey={process.env.JUSTCOMMENTS_KEY} />;
    }
}

export default JustComments;