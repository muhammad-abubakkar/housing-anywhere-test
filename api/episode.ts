import { Episode } from "@/models/episode"

const baseUrl = process.env.NEXT_PUBLIC_API_URL

export async function getEpisodes(ids: number[]): Promise<Array<Episode>> {
  const response = await fetch(`${baseUrl}/episode/${ids.join(',')}`)
  const data = await response.json()
  if (ids.length === 1) {
    return [data]
  }
  return await response.json()
}