import React from 'react'
import clx from 'classnames'
import { Character } from "@/models/character"
import { useQuery } from 'react-query'
import { getLocation } from '@/api/location'

interface Props {
  character: Character
}

const CharacterCard = ({ character }: Props) => {
  const id = character.origin.url.split('/').splice(-1)
  const {isLoading, isSuccess, data} = useQuery(['location', id], () => getLocation(Number(id)))

  const badge = clx('absolute', 'text-sm', 'px-2', 'py-1', 'text-white')

  const statusBadge = clx(badge, 'top-0', {
    'bg-green-600': character.status === 'Alive',
    'bg-red-600': character.status === 'Dead',
    'bg-yellow-600': character.status === 'unknown',
  })

  const genderBadge = clx(badge, 'top-0', 'right-0', {
    'bg-blue-600': character.gender === 'Male',
    'bg-pink-600': character.gender === 'Female',
    'bg-yellow-600': character.gender === 'unknown',
  })

  const nameBadge = clx(badge, 'text-lg', 'font-bold', 'bottom-0', 'left-0', 'right-0', 'bg-blue-800', 'opacity-75')

  return (
    <div className="flex flex-col p-3 border-2 space-y-1 hover:shadow hover:border-gray-600">
      <div className="relative">
        <img src={character.image} className="h-72 w-full" alt="Character Image"/>
        <span className={nameBadge}>
          {character.name}
        </span>
        <span className={statusBadge}>
          {character.status}
        </span>
        <span className={genderBadge}>
          {character.gender}
        </span>
      </div>
      <div>
        <table className="w-full text-sm">
          <tbody>
            <tr>
              <th className="text-left w-20">Type</th>
              <td className="text-right">{character.type || 'Unknown'}</td>
            </tr>
            <tr>
              <th className="text-left w-20">Species</th>
              <td className="text-right">{character.species}</td>
            </tr>
            <tr>
              <th className="text-left w-20">Episodes</th>
              <td className="text-right">{character.episode.length}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="h-32">
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
    </div>
  )
}

export default React.memo(CharacterCard)