import './style.css';

export const PlannerActivity = ({activity, delete}) => {
  return (

      <div>
{/* {delete && <button><img src="./img/remove.png " /> </button>} */}
        
        <img src={activity.src} alt={activity.alt} />
      </div>
  );
};
