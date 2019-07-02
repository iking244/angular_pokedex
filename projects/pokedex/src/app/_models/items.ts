export interface Result {
    name: string;
    url: string;
}

export class Items {
    results: Result[];
}

export interface Attribute {
    name: string;
    url: string;
}

export interface Category {
    name: string;
    url: string;
}

export interface Language {
    name: string;
    url: string;
}

export interface EffectEntry {
    effect: string;
    language: Language;
    short_effect: string;
}

export interface Language2 {
    name: string;
    url: string;
}

export interface VersionGroup {
    name: string;
    url: string;
}

export interface FlavorTextEntry {
    language: Language2;
    text: string;
    version_group: VersionGroup;
}

export interface Generation {
    name: string;
    url: string;
}

export interface GameIndice {
    game_index: number;
    generation: Generation;
}

export interface Language3 {
    name: string;
    url: string;
}

export interface Name {
    language: Language3;
    name: string;
}

export interface Sprites {
    default: string;
}

export class ItemDetails {
    attributes: Attribute[];
// tslint:disable-next-line: variable-name
    baby_trigger_for?: any;
    category: Category;
    cost: number;
// tslint:disable-next-line: variable-name
    effect_entries: EffectEntry[];
// tslint:disable-next-line: variable-name
    flavor_text_entries: FlavorTextEntry[];
// tslint:disable-next-line: variable-name
    fling_effect?: any;
// tslint:disable-next-line: variable-name
    fling_power?: any;
// tslint:disable-next-line: variable-name
    game_indices: GameIndice[];
// tslint:disable-next-line: variable-name
    held_by_pokemon: any[];
    id: number;
    machines: any[];
    name: string;
    names: Name[];
    sprites: Sprites;
}
