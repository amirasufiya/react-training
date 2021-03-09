import { useState } from 'react';

const Home = () => {

    // let name = 'mario';
    const [name, setName] = useState('Mario'); //useState hook, can be any datatype
    const [age, setAge] = useState(25);

    const handleClick = (e) => {
        // alert('hello, miras', e);
        // console.log(e);
        setName('Miras'); // this value is reactive
        setAge(13);
    }
    const handleClickAgain = (e, name) => {
        alert('Hello ' + name + '!', e.target );
        console.log(e.target)
    }
    return (  
        <div className="home">
            <h1>Homepage</h1>
            <p>{ name } is { age } years old </p>
            <button onClick={ handleClick }>Click me</button>
            {/* <button onClick={(e) => { handleClickAgain(e, 'Mario')}}> Click me again </button> */}
        </div>
     );
}
 
export default Home;