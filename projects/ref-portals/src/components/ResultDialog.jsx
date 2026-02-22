import { forwardRef, useRef, useImperativeHandle } from 'react';
import { createPortal } from 'react-dom';

const ResultDialog = forwardRef(function ResultDialog(
  { targetTime, timeRemaining, onReset },
  ref
) {

  const result = (timeRemaining > 0 && timeRemaining <= (targetTime * 1000)) ? "win" : "lost";
  let formattedTime = (timeRemaining / 1000).toFixed(2);
  const dialogRef = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialogRef.current.showModal();
      },
      close() {
        dialogRef.current.close();
      }
    };
  });

  return  createPortal(
    

      <dialog className="result-modal" ref={dialogRef} onClose={onReset}>
        <h2>{result}</h2>
        <p>
          Target Time Was <strong>{targetTime} Seconds</strong>
        </p>
        <p>
          Your stopped by <strong>{formattedTime} Seconds</strong>
        </p>
        <form method="dialog" onSubmit={onReset}>
          <button>Close</button>
        </form>
      </dialog>,
      document.getElementById("modal")
    
  );
});

export default ResultDialog;
