// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import axios from "axios";

const handler = async (req, res) => {
  //   let { data } = await axios.get(
  //     "https://github.com/jbrummer402/Resume-Site/blob/4f916730247d885c7878a3e94cb9697c27127ec4/client/public/downloadables/JackBrummer_Resume_2021.pdf"
  //   );

  try {
    const { data } = await axios.get(req.query.url);
    console.log(data);
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/pdf");
    res.setHeader(
      "Content-Disposition",
      "attachment; filename=JackBrummer_Resume_2021.pdf"
    );
    res.send(data);
  } catch (e) {
    console.log(e);
  }
};

export default handler;
