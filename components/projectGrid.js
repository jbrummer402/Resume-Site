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
                <Grid item>
                    <div style={{fontSize: "2.3rem", lineHeight: "1.3"}} className={styles.gridContainer}>
                        {project[0]}

                        <div style={{textAlign: "left", fontSize: "1.5rem",lineHeight: "1.6", fontWeight:"300"}}>{project[1]}</div>
                    </div>
                </Grid>
            ))
        );
    }



}

export default ProjectGrid;
