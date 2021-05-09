import React from 'react'
import clx from 'classnames'
import { Character } from '@/models/character'
import CharacterLocation from '@/components/CharacterLocation'
import CharacterEpisodes from '@/components/CharacterEpisodes'

interface Props {
  character: Character
}

const CharacterCard = ({ character }: Props) => {
  const locationId = character.origin.url.split('/').splice(-1)
  const episodeIds = character.episode.map(url =>  {
    return Number(url.split('/').splice(-1))
  })

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
    <div className="flex flex-col p-3 border-2 space-y-1 hover:shadow hover:border-gray-600 mt-2">
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
      <CharacterLocation locationId={Number(locationId)} />
      <CharacterEpisodes episodeIds={episodeIds} />
    </div>
  )
}

export default React.memo(CharacterCard)
