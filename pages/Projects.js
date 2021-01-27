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
                        ['Other',
                        'My other projects']];

export default function Projects() {
        return (
            <Layout>
                <article>
                    <h1 className={utilStyles.heading2Xl}>Projects</h1>
                    <p style={{fontSize: "1.5rem",lineHeight: "1.6"}}> Here is an overview of the projects I have done! </p>

                </article>
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
