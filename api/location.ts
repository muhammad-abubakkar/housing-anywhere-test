import { Location } from "@/models/location"

const baseUrl = process.env.NEXT_PUBLIC_API_URL

export async function getLocation(id: number): Promise<Location> {
  const response = await fetch(`${baseUrl}/location/${id}`)
  return await response.json()
}