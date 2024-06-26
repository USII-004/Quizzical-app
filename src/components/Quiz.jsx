import React from 'react';

const Quiz = (props) => {

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
        <path fillRule="evenodd" clipRule="evenodd" d="M63.4095 81.3947C35.1213 50.8508 -2.68211 21.7816 1.17274 -19.6933C5.43941 -65.599 39.854 -105.359 82.4191 -123.133C122.797 -139.994 170.035 -130.256 205.822 -105.149C235.947 -84.0141 236.823 -43.8756 246.141 -8.27104C256.17 30.0508 282.521 70.8106 260.501 103.779C237.538 138.159 188.991 143.432 147.931 138.768C112.318 134.723 87.7505 107.677 63.4095 81.3947Z" fill="#FFFAD1"/>
      </svg>

      <svg 
        className='absolute bottom-0 left-0 size-[100px]'
        xmlns="http://www.w3.org/2000/svg" 
        width="148" 
        height="118" 
        viewBox="0 0 148 118" 
        fill="none">
        <path fillRule="evenodd" clipRule="evenodd" d="M-5.55191 4.90596C35.9614 1.77498 82.2425 -9.72149 112.306 19.1094C145.581 51.0203 155.282 102.703 142.701 147.081C130.767 189.18 93.7448 220.092 51.8208 232.476C16.5281 242.902 -15.4332 218.605 -49.1007 203.738C-85.3375 187.737 -133.641 182.993 -145.741 145.239C-158.358 105.868 -132.269 64.5881 -103.064 35.3528C-77.7328 9.99541 -41.2727 7.60006 -5.55191 4.90596Z" fill="#DEEBF8"/>
      </svg>

      {/*Main content  */}
      
      <main className='relative z-10'>
        {props.isLoading ? (
          <div className='w-[100dh] h-screen flex flex-col justify-center items-center'>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="40" 
              height="40" 
              viewBox="0 0 28 28" 
              fill="none" 
              className="animate-spin">
              <path
                d="M26 14C26 16.3734 25.2962 18.6935 23.9776 20.6668C22.6591 22.6402 20.7849 24.1783 18.5922 25.0866C16.3995 25.9948 13.9867 26.2324 11.6589 25.7694C9.33114 25.3064 7.19295 24.1635 5.51472 22.4853C3.83649 20.8071 2.6936 18.6689 2.23058 16.3411C1.76755 14.0133 2.00519 11.6005 2.91345 9.4078C3.8217 7.21509 5.35977 5.34094 7.33316 4.02236C9.30655 2.70379 11.6266 2 14 2"
                stroke="#293264"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p className='text-xl font-bold text-[#293264]'>Loading...</p>
          </div>
        ) : (
          <div className='w-[100dh] h-max px-8 py-8 md:px-32 md:py-16'>
            {props.questionElement}

            <div>
              {props.checked && <span>You scored {props.correct}/10 correct questions</span>}

              <button
                onClick={props.checked ? props.handlePlayAgain : props.handleCheck} 
                className='bg-[#4D5B9E] hover:bg-[#394376] transition-all ease-in-out text-[#F5F7FB] flex justify-center items-center w-[193px] h-[52px] mt-[29px] rounded-[15px] text-[16px] font-[500] font-[Inter]'>
                {props.checked ? 'Play Again' : 'Check Answer'}
              </button>
            </div>
          </div>
        )}
      </main>

    </div>
  );
};

export default Quiz;
