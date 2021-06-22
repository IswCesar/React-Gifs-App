export const getGifts = async(category) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&api_key=4AYcgaV1bmiui16R4LZ9UVVpZTSDXJcE`;
    const response = await fetch(url);
    const { data } = await response.json();

    const gifs = data.map((img) => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })

    return gifs;
}