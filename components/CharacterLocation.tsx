import { useQuery } from 'react-query'
import { getLocation } from '@/api/location'

interface Props {
  locationId: number
}

const CharacterLocation = ({ locationId }: Props) => {
  if (!locationId) {
    return <span>{locationId} not found</span>
  }
  const {isLoading, isSuccess, data} = useQuery(['location', locationId], () => getLocation(locationId))

  return (
    <div className="h-36">
      <h3 className="bg-gray-600 text-white px-2 py-1 text-sm">Location</h3>
      <table className="w-full text-sm">
      {
        !isLoading && isSuccess ? (
          <tbody>
            <tr>
              <th className="text-left w-20">Name</th>
              <td className="text-right">{data.name}</td>
            </tr>
            <tr>
              <th className="text-left w-20">Type</th>
              <td className="text-right">{data.type || 'N/A'}</td>
            </tr>
            <tr>
              <th className="text-left w-20">Dimension</th>
              <td className="text-right">{data.dimension || 'N/A'}</td>
            </tr>
            <tr>
              <th className="text-left w-20">Residents</th>
              <td className="text-right">{data.residents.length}</td>
            </tr>
          </tbody>
        ) : (
          <tbody>
            <tr>
              <td colSpan={2}>Loading Location Info...</td>
            </tr>
          </tbody>
        )
      }
      </table>
    </div>
  )
}

export default CharacterLocation
