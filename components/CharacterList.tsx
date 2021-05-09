import { Character } from '@/models/character'
import CharacterCard from '@/components/CharacterCard'

interface Props {
  characters: Character[]
}

const CharacterList = ({ characters }: Props) => {
  return (
    <div className="flex flex-wrap lg:justify-around xl:justify-between">
      {
        characters.map(character => (
          <div key={character.id} className="w-80">
            <CharacterCard key={character.id} character={character} />
          </div>
        ))
      }
    </div>
  )
}

export default CharacterList
