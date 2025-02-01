import  {useState} from 'react';

export default function Count() {

    const [score, setScore] = useState(0);

    function increment(){
        setScore(score + 1);
    }

    return (
        <>
            <button onClick={() => increment()}>Más</button>

            <button onClick={() => {
                increment();
                increment();
                increment();
            }}>Más x3</button>
        </>
    )
}