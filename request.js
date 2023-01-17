
const userAction = async () => {
  ean = 12345
  const response = await fetch('http://opengtindb.org/?ean='+ean+'&cmd=query&queryid=400000000');
  const myJson = await response.json(); //extract JSON from the http response
  // do something with myJson
  alert('myJson');
}
