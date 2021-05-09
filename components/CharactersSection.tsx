import { useQuery } from 'react-query'
import Pagination from '@/components/Pagination'
import { getAllCharacters } from '@/api/character'
import CurrentStatus from '@/components/CurrentStatus'
import CharacterList from '@/components/CharacterList'

interface Props {
  page: number
  onPageChange: (number) => void
}

const CharactersSection = ({ page, onPageChange }: Props) => {
  const {
    isFetching, isLoading, isSuccess, isError, data
  } = useQuery(['characters', page], () => getAllCharacters(page))
    
  return (
    <div className="flex flex-col">
      {
        isLoading || isFetching ? (
          <CurrentStatus message="Loading..." type="info" />
        ) : null
      }
      {
        !isLoading && isError ? (
          <CurrentStatus message="Error fetching characters" type="error" />
        ) : null
      }
      {
        !isLoading && isSuccess ? (
          <>
            <CharacterList characters={data.results} />
            <Pagination meta={data.info} onPageChange={onPageChange}/>
          </>
        ) : null
      }
    </div>
  )
}

export default CharactersSection