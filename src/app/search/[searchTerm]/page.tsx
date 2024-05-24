import Results from '@/components/Results'
import React from 'react'


const api_key=process.env.API_KEY

export default async function SearchPage({
  params,
}: {
  params: { searchTerm: string };
}) {
  const searchTerm = params.searchTerm;

  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${searchTerm}&language=en-US&page=1&include_adult=false`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();
  const results = data.results;

  return (
    <div>
      {results &&
        results.length ===
        <h1 className="text-center pt-6">No results found</h1>}
      {results && <Results results={results}></Results>}
    </div>
  );
}
