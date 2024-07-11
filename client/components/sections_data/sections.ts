import { ContainerItemProps } from "../../types/types.ts";

const full_name = "Jack Brummer";
const programming_languages = ["Java", "C++", "Javascript", "Typescript",
  "OCaml", "Rust"];

const about_me_images = ["/images/Jack_Brummer (1).jpg"]

export const about_me : ContainerItemProps = {
  id : "about-me",
  title: "About Me",
  background_image_path: "/background_2.svg",
  sublabel: `Hi there! My name is ${full_name}`,
  listItems: programming_languages,
  description: "I am heavily interested in nearly all things computer science. I began programming in my early teens and still love the problem solving that comes with it, and all the things you are able to do and create.",
  image_path: about_me_images
}

export const education : ContainerItemProps = {
  id : "edu",
  background_image_path: "/background_3.svg",
  title: "Education",
  description: "I have both my bachelors and masters degrees in computer science from the Stevens Institute of Technology. I worked as a TA in my CS 496: Programming Languages and CS 511: Concurrent Programming classes.",
}
export const interests_and_hobbies : ContainerItemProps = {
  id : "interests-and-hobbies",
  title: "Interests",
  description: "Yes",
}
