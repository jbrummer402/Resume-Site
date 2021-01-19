import React, { Component } from 'react'
import marked from 'marked'

class DescriptionComponent extends React.Component{
    constructor(props) {
        super(props);
        this.state={markdown: "projectDescriptions/minesweeper.md"}
    }
    componentDidMount() {
        const path = require(this.props.filePath)

        fetch(path)
            .then(response =>{
                return response.text()
            })
            .then(text => {
                this.setState({
                    markdown: marked(text)
                })
            })
    }
    render(){
        const { markdown } = this.state;

        return (
                <article> </article>
        )
    }

}

export default DescriptionComponent;
