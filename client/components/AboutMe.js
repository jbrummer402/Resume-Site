import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import utilStyles from "../styles/utils.module.css";
import styles from "../components/layout.module.css";

export default function AboutMe() {
  return (
    <div>
      <section
        id={"AboutMeSection"}
        className={styles.container}
        style={{
          marginTop: "10vh",
          height: "auto",
          maxWidth: "100%"
        }}
      >
        <div className={styles.container}style={{ display: "flex",
          flexDirection: "column",position: "relative", width: "150vw"}}>
        
          <h1
            style={{ fontSize: "3.5rem", fontWeight: "bold", marginTop: "9vh" }}
            className={utilStyles.headingLg}
          >
            
            About Me
            
          </h1>
          <h2 style={{ fontSize: "2.5rem", margin: "0 0 2rem 2rem"}}>Hi there! My name is Jack Brummer</h2>
          
          <article style={{ margin: "0 0 2rem 2rem", fontSize: "2.2rem", lineHeight: "1.6", maxWidth: "100%", width: "40vw"}}>
            <p>
              I am heavily interested in nearly all things computer science. I
              began programming in my early teens and fell in love with the
              problem solving that comes with it, and all the things you are
              able to do and create.
            </p>
            
            <p>
              I have experience in various different languages and practices,
              including:
            </p>
            <ul
              style={{
                padding: "0",
                margin: "0 0 0 -35%",
                listStyleType: "none",
                fontSize: "2.0rem",
                backgroundColor: "transparent",
                width: "100%"
              }}
            >
              <li>Java</li>
              <li>C++</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>Relational Databases</li>
              <li>Functional Programming</li>
            </ul>
            
          </article>
          <div style={{ position: "absolute",margin: "10vh 0 0 60%", width: "20.1%", height: "50vh"}}>
              <Image
                  layout="fill"
                  objectFit="contain"
                  quality={100}
                  src="/images/Jack_Brummer (1).jpg"
                />
            </div>
          
        
        </div>
        
      </section>
      
    </div>
  );
}
