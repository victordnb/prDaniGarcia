//getaway fetching data from catfact.ninja:


const get3Words = async () => {
  const url = 'https://catfact.ninja/fact';
  const response = await fetch(url);
  const catFact = await response.json();

  //get 3 first words from catFact:
    const catFactWords = catFact?.fact.split(' ').slice(0, 3).join(' ');
    if(catFactWords){
        return await catFactWords;
    }else{
        return 'No hay palabras';
    }
}

export default get3Words;

