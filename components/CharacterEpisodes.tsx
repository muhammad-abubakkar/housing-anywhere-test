import { useQuery } from 'react-query'
import { getEpisodes } from '@/api/episode'

interface Props {
  episodeIds: number[]
}

const CharacterEpisodes = ({ episodeIds }: Props) => {
  const {isLoading, isSuccess, data} = useQuery(['episodes', episodeIds], () => getEpisodes(episodeIds))
  return (
    <div>
      <h3 className="bg-gray-600 text-white px-2 py-1 text-sm">Episodes</h3>
      <table className="w-full text-sm">
        <thead>
          <tr>
            <th className="text-left py-1">Name</th>
            <th className="text-right py-1">Air Date</th>
          </tr>
        </thead>
      {
        !isLoading && isSuccess ? (
          <tbody>
            {
              data.map(ep => (
                <tr key={ep.id} className="border-t border-b">
                  <td className="text-left w-1/2 py-1">{ep.name}</td>
                  <td className="text-right w-1/2 py-1">{ep.air_date}</td>
                </tr>    
              ))
            }
          </tbody>
        ) : (
          <tbody>
            <tr>
              <td colSpan={2}>Loading Episodes Info...</td>
            </tr>
          </tbody>
        )
      }
      </table>
    </div>
  )
}

export default CharacterEpisodes
