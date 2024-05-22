import Results from '@/components/Results'
import React from 'react'


const API_KEY:string|undefined=process.env.APi_KEY

export default async function Home({searchParams}: Readonly<{ searchParams: { genre?: string } }>) {

  const genre=searchParams.genre ?? 'fetchTrending'

  const res=await fetch(
    `https://api.themoviedb.org/3/${
      genre==='fetchTopRated' ? '/movie/top_rated' : '/trending/all/week'
    }?api_key=${API_KEY}&language=en-US&page=1`
  )

  const data=await res.json()

  if(!res.ok){
    throw new Error('Failed to fetch data')
  }

  // console.log(API_KEY)
  const results=data.results;

  console.log(results)
  // 
console.log(results)
  return (
    <div>
      <Results results={results}/>
    </div>
  )
}
