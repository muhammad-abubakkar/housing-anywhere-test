import { Character, Meta } from "@/models/character"

const baseUrl = process.env.NEXT_PUBLIC_API_URL

export async function getAllCharacters(page = 1): Promise<{info: Meta, results: Character[]}> {
  const response = await fetch(`${baseUrl}/character?page=${page}`)
  return await response.json()
}