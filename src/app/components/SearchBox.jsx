'use client'

import { useRouter } from "next/navigation";
import { useState } from "react"

export default function SearchBox() {
  const [search, setSearch] = useState('');
  const router = useRouter();
  const handleSumbit = (e) => {
    e.preventDefault();
    router.push(`/search/${search}`)
  };
  return (
    <form className="flex justify-between px-5 max-w-6xl mx-auto" onSubmit={handleSumbit}>
      <input type="text" placeholder="Search...." value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full h-14 rounded-md placeholder-gray-500 outline-none"
      />
      <button className="text-amber-600 decoration-gray-400 " disabled={search === ''}>
        Search
      </button>
    </form>
  )
}