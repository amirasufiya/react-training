import { useState, useEffect } from 'react'; 

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => { //this run for every render (data changed)
        fetch(url)
            .then(res => {
                console.log(res);
                if(!res.ok) {
                    throw Error('Could not fetch the data for that resource');
                }
                return res.json();
            })
            .then((data) => {
                console.log(data);
                setData(data);
                setIsPending(false);
                setError(null);
            })
            .catch((err) => {
                setIsPending(false);
                setError(err.message);
                // console.log(err.message);
            })
    }, []);

    return { data, isPending, error }

}

export default useFetch;