import './style.css';

export const FunctionalDivPlannerPage = (onDeleting) => {
  const handlePrint = () => {
    window.print();
  };

  const handleClick = () => {
    onDeleting(true);
  };

  return (
    <div className="planner_page_action_container">
      <img
        onClick={handlePrint}
        src="./img/IconsFunctional/printer.png"
        alt="print_planner"
      />
      <img
        onClick={handleClick}
        src="./img/IconsFunctional/remove.png"
        alt="remove_activity"
      />
    </div>
  );
};
