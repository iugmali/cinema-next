export async function getTrendingMovies() {
  const myHeaders = new Headers();
  // myHeaders.append('Authorization', `Bearer ${process.env['THEMOVIEDB_READ_ACCESS_TOKEN_4']}`);
  myHeaders.append('Content-Type', 'application/json;charset=utf-8');
  myHeaders.append('crossOrigin', 'true');
  const myInit = {
    method: 'GET',
    headers: myHeaders
  };
  const FAQ_API_URL = `https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env['THEMOVIEDB_READ_ACCESS_TOKEN_3']}`;
  const myRequest = new Request(FAQ_API_URL);
  return await fetch(myRequest, myInit)
    .then((respostaDoServidor) => {
      return respostaDoServidor.json();
    })
    .then((resposta) => {
      return resposta;
    });
}

export async function getTrendingTV() {
  const myHeaders = new Headers();
  // myHeaders.append('Authorization', `Bearer ${process.env['THEMOVIEDB_READ_ACCESS_TOKEN_4']}`);
  myHeaders.append('Content-Type', 'application/json;charset=utf-8');
  myHeaders.append('crossOrigin', 'true');
  const myInit = {
    method: 'GET',
    headers: myHeaders
  };
  const FAQ_API_URL = `https://api.themoviedb.org/3/trending/tv/week?api_key=${process.env['THEMOVIEDB_READ_ACCESS_TOKEN_3']}`;
  const myRequest = new Request(FAQ_API_URL);
  return await fetch(myRequest, myInit)
    .then((respostaDoServidor) => {
      return respostaDoServidor.json();
    })
    .then((resposta) => {
      return resposta;
    });
}

export async function getTrendingPerson() {
  const myHeaders = new Headers();
  // myHeaders.append('Authorization', `Bearer ${process.env['THEMOVIEDB_READ_ACCESS_TOKEN_4']}`);
  myHeaders.append('Content-Type', 'application/json;charset=utf-8');
  myHeaders.append('crossOrigin', 'true');
  const myInit = {
    method: 'GET',
    headers: myHeaders
  };
  const FAQ_API_URL = `https://api.themoviedb.org/3/trending/person/week?api_key=${process.env['THEMOVIEDB_READ_ACCESS_TOKEN_3']}`;
  const myRequest = new Request(FAQ_API_URL);
  return await fetch(myRequest, myInit)
    .then((respostaDoServidor) => {
      return respostaDoServidor.json();
    })
    .then((resposta) => {
      return resposta;
    });
}