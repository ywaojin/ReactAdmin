import React, { Component } from 'react';
class List extends Component {
    constructor(props) {
        super(props);
        this.state = {}
        
    }
    componentDidMount() {
        // console.log(this.props.match.params.id)
        this.setState({
            id:this.props.match.params.id
        })
    }
    render() { 
        return ( <h2>List Page --> {this.state.id}</h2> );
    }
}
 
export default List;