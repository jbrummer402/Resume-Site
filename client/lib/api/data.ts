import axios from "axios";

export async function getRepos() {
    try {
	const { data } = await axios.get(`https://${process.env.DB_URL}/repos`);

	return data;
    } catch (e) {
    	console.log(e);
    }
}

export async function getRepoId(id) {

  try {
      const { data } = await axios.get(`https://${process.env.DB_URL}/repos/${id}`);

      return data;
  } catch (e) {
    console.log(e);
    
  }

}

export async function getPosts() {
  try {
    const { data } = await fetch (
`https://${process.env.DB_URL}/all_posts`);

    return data;
  } catch (error) {
	let data = [];
    	return data;  
  }
}

export async function getPostId(id) {
  const { data } = await axios.get(
    `https://${process.env.DB_URL}/posts/${id}`,
  );

	if (data) {
	return data;
	} else {
		return  [] 
	}
  
}
