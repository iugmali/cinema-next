export async function getMovieDetails(id: string) {
  const myHeaders = new Headers();
  // myHeaders.append('Authorization', `Bearer ${process.env['THEMOVIEDB_READ_ACCESS_TOKEN_4']}`);
  myHeaders.append('Content-Type', 'application/json;charset=utf-8');
  myHeaders.append('crossOrigin', 'true');
  const myInit = {
    method: 'GET',
    headers: myHeaders
  };
  // ${process.env['THEMOVIEDB_READ_ACCESS_TOKEN_3']}
  //
  const FAQ_API_URL = `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env['THEMOVIEDB_READ_ACCESS_TOKEN_3']}&language=en-US`;
  const myRequest = new Request(FAQ_API_URL);
  return await fetch(myRequest, myInit)
    .then((respostaDoServidor) => {
      return respostaDoServidor.json();
    })
    .then((resposta) => {
      return resposta;
    });
}
export async function getMovieVideos(id: string) {
  const myHeaders = new Headers();
  // myHeaders.append('Authorization', `Bearer ${process.env['THEMOVIEDB_READ_ACCESS_TOKEN_4']}`);
  myHeaders.append('Content-Type', 'application/json;charset=utf-8');
  myHeaders.append('crossOrigin', 'true');
  const myInit = {
    method: 'GET',
    headers: myHeaders
  };
  const FAQ_API_URL = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${process.env['THEMOVIEDB_READ_ACCESS_TOKEN_3']}&language=pt-BR&region=BR`;
  const myRequest = new Request(FAQ_API_URL);
  return await fetch(myRequest, myInit)
    .then((respostaDoServidor) => {
      return respostaDoServidor.json();
    })
    .then((resposta) => {
      return resposta;
    });
}