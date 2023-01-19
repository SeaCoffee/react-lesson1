const RickMorty = () => {
    const rickMorty = [
        {
            id: 53,
            name: 'Blue Shirt Morty',
            status: 'unknown',
            species: "Human",
            gender: 'male',
            image: 'https://rickandmortyapi.com/api/character/avatar/53.jpeg'
        },
        {
            id: 151,
            name: 'Gwendolyn',
            status: 'unknown',
            species: "Robot",
            gender: 'Female',
            image: 'https://rickandmortyapi.com/api/character/avatar/151.jpeg'
        },
        {
            id: 364,
            name: 'Tree Person',
            status: 'Dead',
            species: "Humanoid",
            gender: 'unknown',
            image: 'https://rickandmortyapi.com/api/character/avatar/364.jpeg'
        },
        {
            id: 32,
            name: 'Bearded Lady',
            status: 'Dead',
            species: "Alien",
            gender: 'Female',
            image: 'https://rickandmortyapi.com/api/character/avatar/32.jpeg'
        },
        {
            id: 240,
            name: 'Mr. Goldenfold',
            status: 'Alive',
            species: "Human",
            gender: 'Male',
            image: 'https://rickandmortyapi.com/api/character/avatar/345.jpeg'
        },
        {
            id: 225,
            name: 'Million Ants',
            status: 'Dead',
            species: "Animal",
            gender: 'Male',
            image: 'https://rickandmortyapi.com/api/character/avatar/226.jpeg'
        }
    ]

    return (
        <div>
            {
                rickMorty.map(rickMorty => <RickMorty key={rickMorty.id} rickMorty = {rickMorty}/>)
            }
        </div>
    )
}

export {RickMorty}