import './style.css';
export const PopupHint = ({ popupHintCheck }) => {
  const handleClick = () => {
    popupHintCheck(false);
  };
  return (
    <>
      <div className="popup">
        <p>Každý den má svoje jméno, to je třeba věděti. </p>
        <p>Kubo, Kláro , Magdaleno, říkejte si z paměti:</p>
        <p>Pondělí je po neděli, potom přijde úterý.</p>
        <p>Kdybyste to zapomněli, zeptejte se u Věry! </p>
        <p>Věrka ví, že pak je středa, ta je vždycky uprostřed.</p>
        <p>Opravdu se středa nedá popostrčit vzad či vpřed! </p>
        <p>Po středě je čtvrtek v řadě, je to v týdnu čtvrtý den. </p>
        <p> Kdo má všech pět pohromadě, už se chystá na víkend.</p>
        <p>Za čtvrtkem je ještě pátek, po pátku je sobota.</p>
        <p>Je to jako kolovrátek, pěkně se to zamotá.</p>
        <p>Po sobotě neděle je, nedělička, neděle! </p>
        <p>Jestli si to někdo přeje, nemusí lézt z postele.</p>
        <p>Jestli jste to nevěděli, týden končí nedělí.</p>
        <p>Proč jsme vám to vyprávěli? Abyste to věděli!</p>
      </div>
      <div onClick={handleClick} className="overlay"></div>
    </>
  );
};
