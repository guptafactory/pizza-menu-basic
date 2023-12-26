import "./index.css";
export default function Footer() {
  const hour = new Date().getHours();
  const openHour = 10;
  const closeHour = 20;
  const isOpen = hour >= openHour && hour <= closeHour;
  return (
    <footer className="footer">
      {isOpen ? (
        <Open openHour={openHour} closeHour={closeHour} />
      ) : (
        <Close openHour={openHour} closeHour={closeHour} />
      )}
    </footer>
  );
}
function Open({ openHour, closeHour }) {
  <div className="order">
    <p>
      We are open from {openHour}:00 a.m. to {closeHour}:00 p.m. Come visit us
      or order online
    </p>
    <button className="btn">Order Fast</button>
  </div>;
}
function Close({ openHour, closeHour }) {
  return (
    <div className="order">
      We are happy to welcome you between {openHour}:00 a.m. to {closeHour}
      :00 p.m. Thanks!
    </div>
  );
}
