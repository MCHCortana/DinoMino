import './style.css';

export const FunctionalDivPlannerPage = () => {
  const handlePrint = () => {
    window.print();
  };

  const handleClick = () => {
    setDelete(true);
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
