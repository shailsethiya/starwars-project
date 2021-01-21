import React from 'react';
import { useQuery } from 'react-query';
import People from './People';


const fetchPeople = async () => {
    const res = await fetch('http://swapi.dev/api/people/');
    return res.json();
}

const Peoples = () => {
    const { data, status } = useQuery('people', fetchPeople);

    return (
        <div>
            <h2>People</h2>
            {/* <p>{status}</p> */}
            {status === 'loading' && (
                <div>Loading data...</div>
            )}

            {status === 'error' && (
                <div>Error Fetching data</div>
            )}

            {status === 'success' && (
                <div>
                    { data.results.map(people => <People  key={people.name} person={people} />) }
                </div>
            )}
        </div>
    );
}

export default Peoples;