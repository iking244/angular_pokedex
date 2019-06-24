export interface Pokemon {
  name: string;
  url: string;
}

export class SpriteUrls{
back_default: string;
back_female: string;
back_shiny: string;
back_shiny_female: string;
front_default: string;
front_female: string;
front_shiny: string;
front_shiny_female: string;
}

export interface PokemonDetails {
  species: any;
sprites: SpriteUrls;
types: PokemonTypes[];
abilities: AbilityInfo[];
height: number;
weight: number;
stats: Stats[];
id: number;

}

export interface PokemonLink{
results: Pokemon[];
}

export class PokemonTypes{
  slot: number;
  type: PokemonType;

}

export class PokemonType{
  name: string;
  url: string;
}

export class Ability{
  name: string;
  url: string;
}

export class AbilityInfo{
  ability: Ability;
  is_hidden: boolean;
  slot: number;
}

export class Stats{
  base_stat: number;
  stat: string;
}

export class PokemonSpecies{
base_happiness: string;
capture_rate: string;
flavor_text_entries: FlavorText;
}

export class FlavorText{
flavor_text: string;
language: string;
}




