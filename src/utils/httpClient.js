const API = "https://api.themoviedb.org/3";

export function get(path) {
  return fetch(API + path, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNzIxYzU5NzExZWNlNDc1Nzg0N2JjNDRiZjViZWFkZiIsIm5iZiI6MTcyMzQyNTIzNC4xODEwNjQsInN1YiI6IjY2Yjk1ZWQwZmMyOTEyNDQ2ODZkZTQyZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.x9QkoqNh6gtda4q9FvXa9nD8IhwLF0u4YvtvxTUTtKc",
            "Content-Type":"application/json;charset=utf-8",
    },
  }).then((result) => result.json());
}