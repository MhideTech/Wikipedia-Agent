// Get today's featured article from English Wikipedia

async function getArticle() {
  let today = new Date();
  let year = today.getFullYear();
  let month = String(today.getMonth() + 1).padStart(2, "0");
  let day = String(today.getDate()).padStart(2, "0");
  let url = `https://api.wikimedia.org/feed/v1/wikipedia/en/featured/${year}/${month}/${day}`;

  let response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
      "Api-User-Agent": "Wikipedia Agent",
    },
  });
  const data = await response.json();
  // The featured article body is in the 'extract' property of the 'tfa' object.
  console.log(data.tfa.extract);
}

getArticle();
