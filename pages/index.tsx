import Head from 'next/head'
import {useRouter} from 'next/router'
import { useCallback, useState } from 'react'
import CharactersSection from '@/components/CharactersSection'

export default function Home() {
  const router = useRouter()
  const query = new URLSearchParams(router.asPath.split('?')[1])
  const currentPage = query.get('page')
  const [page, setPage] = useState(Number(currentPage))

  const handlePageChange = useCallback(({selected}) => {
    const currentPage = selected + 1
    router.push({pathname: '/', query: {page: currentPage}})
    setPage(currentPage)
  }, [])

  return (
    <div>
      <Head>
        <title>HousingAnywhere Assessment</title>
        <meta name="description" content="HousingAnywhere assessment" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col w-10/12 mx-auto">
        <div className="flex justify-center text-2xl font-bold py-5 bg-green-600">
          HousingAnywhere (Rick &amp; Morty API)
        </div>
        <CharactersSection
          page={page}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  )
}
