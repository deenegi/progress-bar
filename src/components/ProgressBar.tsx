import {useState, useEffect} from 'react'

interface ProgressBarProps {
  progress: number;
}

function ProgressBar({ progress }: ProgressBarProps) {
    const [progressAnimate, setProgressAnimate] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            if (progressAnimate >= 100) {
                clearInterval(interval);
                return;
            }
            setProgressAnimate((prev) => Math.min(100, Math.max(prev + 1, 0)));
        }, 20);

        return () => {
          clearInterval(interval);
        }
    }, [progress]);

  return (
    <>
      <div className='progress-bar'>
          <div className='progress-bar__filler' style={{ width: `${progressAnimate}%` }}
              role="progressbar"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={progressAnimate}>
              <span className='progress-bar__label' style={{color: progressAnimate > 50? "white": "black"}}>{progressAnimate}%</span>
          </div>
      </div>
    </>
    

  )
}

export default ProgressBar;