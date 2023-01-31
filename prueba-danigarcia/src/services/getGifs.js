const apikey = 'rV8SHpmCe6IsoU5u0kqUF9LBj3p8RUFw';


export default async function getGifs({ keyword }) {

    const apiGipgy = `https://api.giphy.com/v1/gifs/search?api_key=${apikey}&q=${keyword}&limit=1&offset=1`;

    return await fetch(apiGipgy)
        .then(res => res.json())
        .then(response => {
          const { data } = response;
          const gifs = data.map(image => {
            const {images, tittle, id} = image;
            const { url } = images.downsized_medium;
            return { tittle, id, url };
          }
            );
          return gifs;
        })
}