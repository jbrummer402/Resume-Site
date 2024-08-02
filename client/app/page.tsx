import IndexContainer from "../components/containers/IndexContainer";
// import { StartingAnimation } from "../components/containers/IndexContainer";
import { motion } from "framer-motion";

export default async function Index(props) {
  return <IndexContainer />;
}

// export async function getStaticProps() {
//   const allPostsData = getSortedPostsData();
//   return {
//     props: {
//       allPostsData,
//     },
//   };
// }
