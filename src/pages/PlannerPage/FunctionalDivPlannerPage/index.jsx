import './style.css';

export const FunctionalDivPlannerPage = ({
  onDeleting,
  deleting,
  onClearing,
}) => {
  const handlePrint = () => {
    window.print();
  };

  const handleBigDeleteClick = () => {
    onDeleting(true);
  };
  const handlefinishDelete = () => {
    onDeleting(false);
  };

  const handleAllDeleteClick = () => {
    confirm('Určitě chce vymazat plán na celý den?') &&
      onClearing([
        { id: 'monday', dayName: 'pondělí', activities: [] },
        { id: 'tuesday', dayName: 'úterý', activities: [] },
        { id: 'wednesday', dayName: 'středa', activities: [] },
        { id: 'thursday', dayName: 'čtvrtek', activities: [] },
        { id: 'friday', dayName: 'pátek', activities: [] },
        { id: 'saturday', dayName: 'sobota', activities: [] },
        { id: 'sunday', dayName: 'neděle', activities: [] },
      ]);
  };

  return (
    <div className="planner_page_action_container">
      <img
        onClick={handlePrint}
        src="./img/IconsFunctional/printer.png"
        alt="print_planner"
      />
      <img
        // onClick={handleClickOpenInfo}
        className="link-menu"
        src="./img/IconsFunctional/faq.png"
      />
      <div className="deleting_div">
        {deleting && (
          <img
            onClick={handlefinishDelete}
            src="./img/IconsFunctional/accept.png"
            alt="remove activity finished"
          />
        )}
        {!deleting && (
          <img
            onClick={handleBigDeleteClick}
            src="./img/IconsFunctional/remove.png"
            alt="remove activity"
          />
        )}
        <img
          onClick={handleAllDeleteClick}
          src="./img/IconsFunctional/dust.png"
          alt="remove activity"
        />
      </div>
    </div>
  );
};
