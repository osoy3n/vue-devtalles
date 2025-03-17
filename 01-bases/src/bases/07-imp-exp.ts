import heroes, { type Owner } from "../data/heroes"

export const getHeroById = (id: number) => {
  return heroes.find(hero => hero.id === id)
}

export const getHeroByOwner = (own: Owner) => {
  return heroes.filter(owner => owner.owner === own)
}
