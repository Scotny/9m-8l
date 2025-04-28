import "./info.css";

function Info({ info }) {
  return (
    <div className="info_card">
      <img src={info?.img} alt="" />
      <h4>{info?.title}</h4>
      <p>{info?.description}</p>
      <button>Read now</button>
    </div>
  );
}

export default Info;
