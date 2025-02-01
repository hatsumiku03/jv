"use client";
import {useState} from 'react';

export default function App() {
  
  const [answer, setAnswer] = useState('');
  const [status, setStatus] = useState('escribiendo');
  const [error, setError] = useState(null);

  if (status === 'enviado'){
    return <p className='text-white'>Le sabes</p>
  }

  async function submit(e){ 
    e.preventDefault();
    setStatus('enviando');
    setError(null);
    try{
      await submitForm(answer);
      setStatus('enviando');
    }catch (error){
      setStatus('escribiendo');
      setError(error);
    }
  }

  function handleTexttareaChange(e){
    setAnswer(e.target.value);
  }

  function submitForm(answer){
    return new Promise((resolve, reject) => 
      setTimeout(() => {
        let shouldError = answer.toLowerCase() !== 'zack fair';
        if(shouldError){
          reject(new Error('Respuesta incorrecta'));
        }else{
          resolve();
        }
      }, 120)
    );
  }

  return(
    <>
      <div className='flex flex-col justify-center items-center m-5'>
      <h2 className='text-5xl'>Cuestionario de Final Fantasy VII</h2>

      <div className='flex flex-col justify-center items-center m-5'>
        <p>¿Cuál es el personaje que catapulto a Cloud a los eventos del juego?</p>

          <form onSubmit={submit}>
            <textarea className='text-black' value={answer} onChange={handleTexttareaChange} disabled={status === 'enviando'}></textarea>

          <br/>

            <button className='' disabled={answer.length===0 || status === 'enviando'}>Enviar</button>
            {error !== null && <p className='Error'>{error.message}</p>}
          </form>
      </div>
      </div>
    </>
  );
}
