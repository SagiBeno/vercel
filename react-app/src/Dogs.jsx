import { useState, useEffect } from 'react';
import supabase from './utils/supabase';

export default function Dogs(props) {
    const [dogs, setDogs] = useState([]);

    useEffect(() => {
        (async () => {
            const dogsJson = await supabase.from('dogs').select();
            //console.log('dogsJson: ', dogsJson);
            //const dogs = await dogsJson.json();
            //console.log('dogs: ', dogs);
            setDogs(dogsJson);
        })().catch(console.warn)
    }, []);

    return (
        <>
            {JSON.stringify(dogs)}
        </>
    )
}