import Head from 'next/head'
import styles from '../components/layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Layout from "../components/layout"
import Grid from '@material-ui/core/Grid'
import React, {Component} from 'react'

class ProjectGrid extends Component {
    render() {
        return (
            this.props.grid.map((project) => (
                <Grid item xs={12}>
                    <h1>{project}</h1>
                </Grid>
            ))
        );
    }



}

export default ProjectGrid;
