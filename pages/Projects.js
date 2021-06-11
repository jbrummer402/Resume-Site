import Head from 'next/head'
import styles from '../components/layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Layout from "../components/layout"
import Grid from '@material-ui/core/Grid'
import ProjectGrid from '../components/projectGrid'

const projectItems = [['Minesweeper',
                        'This is a clone I made of Minesweeper. I completed this in my junior year of high school in AP Computer Science A'],
                        ['Maze',
                        'This is maze. I made this my freshman year at Stevens in my data structures class.'],
                        ['Systems Programming',
                        'Here are some of the projects I did in my systems programming class: CS392. These can only be ran in a linux environment'],
                        ['Data Science',
                        'Here are some of the data science projects I have worked on in my free time. Mostly done in python.'],
                        ['Art tech projects',
                        'Here are some of the projects I have worked on for my visual arts and tech minor.']];

export default function Projects() {
        return (
            <Layout siteTitle={'My Projects'}>
                <section>
                    <h1 className={utilStyles.heading2Xl}>Projects</h1>
                    <p style={{fontSize: "1.5rem",lineHeight: "1.6", marginLeft: "1rem"}}> Here is an overview of the projects I have done! </p>
                </section>
                
                <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center">

                    <ProjectGrid grid={projectItems} />

                </Grid>
            </Layout>
        )

}
