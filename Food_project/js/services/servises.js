const postData = async (url, data) => {
   const res = await fetch(url, {
      method: "POST",
      body: data,
      headers: {
         "Content-type": "application/json"
      }
   });
   return await res.json();
};


const getResurce = async (url) => {
   const res = await fetch(url);

   if (!res.ok) {
      throw new Error(`Could not fetch ${url}, starus: ${res.status}`);
   }
   return await res.json();
};

export { postData, getResurce };