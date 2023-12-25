import React from 'react';

const Questions = () => {
  const [randomQuestion, setRandomQuestion] = React.useState({});
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    async function getQuestions() {
      try {
        const res = await fetch("https://opentdb.com/api.php?amount=10&category=20");
        const data = await res.json();

        setRandomQuestion(data.results);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching questions:", error);
        setIsLoading(false);
      }
    }

    // Delay the API call by 5 seconds
    const timerId = setTimeout(() => {
      getQuestions();
    }, 5000);

    // Clear the timer to avoid calling the API if the component unmounts
    return () => clearTimeout(timerId);
  }, []);

  return (
    <div className='bg-[#F5F7FB] w-[100dh] h-max relative overflow-hidden'>

    {/* background blob container */}

      <svg
        className='absolute top-0 right-0 size-[100px]' 
        xmlns="http://www.w3.org/2000/svg" 
        width="158" 
        height="141" 
        viewBox="0 0 158 141" 
        fill="none">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M63.4095 81.3947C35.1213 50.8508 -2.68211 21.7816 1.17274 -19.6933C5.43941 -65.599 39.854 -105.359 82.4191 -123.133C122.797 -139.994 170.035 -130.256 205.822 -105.149C235.947 -84.0141 236.823 -43.8756 246.141 -8.27104C256.17 30.0508 282.521 70.8106 260.501 103.779C237.538 138.159 188.991 143.432 147.931 138.768C112.318 134.723 87.7505 107.677 63.4095 81.3947Z" fill="#FFFAD1"/>
      </svg>

      <svg 
        className='absolute bottom-0 left-0 size-[100px]'
        xmlns="http://www.w3.org/2000/svg" 
        width="148" 
        height="118" 
        viewBox="0 0 148 118" 
        fill="none">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M-5.55191 4.90596C35.9614 1.77498 82.2425 -9.72149 112.306 19.1094C145.581 51.0203 155.282 102.703 142.701 147.081C130.767 189.18 93.7448 220.092 51.8208 232.476C16.5281 242.902 -15.4332 218.605 -49.1007 203.738C-85.3375 187.737 -133.641 182.993 -145.741 145.239C-158.358 105.868 -132.269 64.5881 -103.064 35.3528C-77.7328 9.99541 -41.2727 7.60006 -5.55191 4.90596Z" fill="#DEEBF8"/>
      </svg>

      {/*Main content  */}
      
      <main className='relative z-10'>
        {isLoading ? (
          <p className='w-[100dh] h-screen'>Loading...</p>
        ) : (
          <div className='w-[100%] h-[100%] px-8 py-8 md:px-32 md:py-16'>
            {randomQuestion.map((item, index) => (
              <div className='border-b-2 my-4'>
                <h2 key={index} className='font-[700] text-[#293264] text-[1rem]'>{item.question}</h2>
              </div>
            ))}
          </div>
        )}
      </main>

    </div>
  );
};

export default Questions;