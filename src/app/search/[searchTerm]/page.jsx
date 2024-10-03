import { Result } from "postcss";

export default async function SearchPage({ params }) {
  const searchTerm = params.searchTerm;
  const res = await fetch(`https://jsonserver.reactbd.com/amazonpro?api_key=${process.env.API_KEY}&query=${searchTerm}$language `)
}

const data = await res.json()
const results = data.results;
return (
  <>
    {results && results.lenght === <h1 className="text-center pt-6"> NO result</h1>}
    {results && <Result results={results} />}
  </>
)