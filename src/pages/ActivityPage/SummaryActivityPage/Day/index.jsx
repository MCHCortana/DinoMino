import './style.css';
export const Day = () => {
  return (
    <main classNameName="box">
      <div className="days-box">
        <div className="day-box monday">
          <p>Pondělí</p>
        </div>
        <div className="day-box tuesday">
          <p>Úterý</p>
        </div>
        <div className="day-box wednesday">
          <p>Středa</p>
        </div>
        <div className="day-box thursday">
          <p>Čtvrtek</p>
        </div>
        <div className="day-box friday">
          <p>Pátek</p>
        </div>
        <div className="day-box saturday">
          <p>Sobota</p>
        </div>
        <div className="day-box sunday">
          <p>Neděle</p>
        </div>
      </div>
    </main>
  );
};
