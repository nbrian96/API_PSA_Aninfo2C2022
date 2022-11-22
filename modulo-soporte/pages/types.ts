export interface PokemonItem {
  name: string
  url: string
}

export interface PokemonsReponse {
  count: number
  next: string
  previous: string | null
  results: Array<PokemonItem>
}

export type TicketReponse = Array<TicketProperties>

export interface TicketProperties {
  id: number
  titulo: string
  //types: Array<{ slot: number; type: { name: string; url: string } }>
}