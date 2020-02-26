import gql from 'graphql-tag';

export default gql`
  query getAllPokemons {
    pokemons(sort: "number") {
      number
      name
      specie
      weight
      height
      img
      img_custom
      color
      color_custom
      description
      types {
        name
        color
      }
      weaknesses {
        name
        color
      }
      resistant {
        name
        color
      }
      stats {
        hp
        attack
        defense
        specialAttack
        specialDefense
        speed
        total
      }
    }
  }
`;
