export class Pokemon {
  name: string;
  url: string;
  results: [];
}

export interface SpriteUrls{
back_default: string;
back_female: string;
back_shiny: string;
back_shiny_female: string;
front_default: string;
front_female: string;
front_shiny: string;
front_shiny_female: string;
}

export class PokemonDetails {
species: any;
sprites: SpriteUrls;
types: PokemonTypes[];
abilities: AbilityInfo[];
height: number;
weight: number;
stats: Stats[];
id: number;

}

export interface PokemonList{
results: Pokemon[];
}

export interface PokemonTypes{
  results: [];
  slot: number;
  type: PokemonType[];

}

export interface PokemonType{
  results: PokemonTypes;
  name: string;
  url: string;
}

export interface Ability{
  name: string;
  url: string;
}

export interface AbilityInfo{
  ability: Ability;
  is_hidden: boolean;
  slot: number;
}

export interface Stats{
  base_stat: number;
  stat: string;
}

export class PokemonSpecies{
base_happiness: string;
capture_rate: string;
flavor_text_entries: FlavorText[];
  type: any[];
  types: any;
}

export interface FlavorText{
flavor_text: string;
language: Language;
}

export interface Language{
  name: string
}



