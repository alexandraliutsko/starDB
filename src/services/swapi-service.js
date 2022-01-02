export default class SwapiService {
    _apiBase = 'https://swapi-deno.azurewebsites.net/api/';
    _imageBase = 'https://starwars-visualguide.com/assets/img';

    getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, received ${res.status}.`);
        }

        return await res.json();
    }

    getAllPeople = async () => {
        const res = await this.getResource(`/people/`);
        return res.map(this._transformPerson);
    }

    getPerson = async (id) => {
        const person = await this.getResource(`/people/${id}/`);
        return this._transformPerson(person);
    }

    getAllPlanets = async () => {
        const res = await this.getResource(`/planets/`);
        return res.map(this._transformPlanet);
    }

    getPlanet = async (id) => {
        const planet = await this.getResource(`/planets/${id}/`);
        return this._transformPlanet(planet);
    }

    getAllStarships = async () => {
        const res = await this.getResource(`/starships/`);
        return res.map(this._transformStarship);
    }

    getStarship = async (id) => {
        const starship = await this.getResource(`/starships/${id}/`);
        return this._transformStarship(starship);
    }

    getPersonImage = ({ id }) => {
        return `${this._imageBase}/characters/${ id }.jpg`
    }

    getPlanetImage = ({ id }) => {
        return `${this._imageBase}/planets/${ id }.jpg`
    }

    getStarshipImage = ({ id }) => {
        return `${this._imageBase}/starships/${ id }.jpg`
    }

    _transformPlanet = (planet) => {
        return {
            id: planet.url,
            name: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter
        }
    };

    _transformStarship = (starship) => {
        return {
            id: starship.url,
            name: starship.name,
            model: starship.model,
            manufacturer: starship.manufacturer,
            costInCredits: starship.cost_in_credits,
            length: starship.length,
            crew: starship.crew,
            passengers: starship.passengers,
            cargoCapacity: starship.cargo_capacity
        }
    };

    _transformPerson = (person) => {
        return {
            id: person.url,
            name: person.name,
            gender: person.gender,
            birthYear: person.birth_year,
            eyeColor: person.eye_color
        }
    };
}
