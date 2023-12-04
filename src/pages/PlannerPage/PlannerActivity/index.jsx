import './style.css';

export const PlannerActivity = ({
  activity,
  onDeleting,
  setWeekDays,
  whichDay,
  indexToDelete,
}) => {
  const handleClick = () => {
    setWeekDays((prevState) => {
      let newState = [...prevState];
      const dayIndex = newState.findIndex((day) => {
        return whichDay === day.dayName;
      });
      let newDay = newState[dayIndex];
      newDay.activities.splice(indexToDelete, 1);
      return newState;
    });
  };

  return (
    <div className="one_activity">
      {onDeleting && (
        <button onClick={handleClick} className="delete_button--button">
          <img
            className="delete_button--img"
            src="img/IconsFunctional/remove.png "
          />{' '}
        </button>
      )}
      <img src={`img/IconsCalendar/${activity}`} alt={activity} />
    </div>
  );
};
