import './style.css';

export const PlannerActivity = ({ activity }) => {
  return (
    <div>
      {/* {delete && <button><img src="./img/remove.png " /> </button>} */}

      <img src={activity.src} alt={activity.alt} />
    </div>
  );
};
