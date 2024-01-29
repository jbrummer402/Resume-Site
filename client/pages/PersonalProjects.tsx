
import axios from "axios";
import { useEffect, useState } from 'react';

const config = { 
  headers: { Authorization: `Bearer ${process.env.STRAPI_API_KEY}` },
}

async function getProjects() {
  try {
    const { data } = await axios.get(); 
  } catch (error) {

  }
}

export default function PersonalProjects() {
  

  return (

    

  );

}
