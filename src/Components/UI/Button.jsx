export default function Button({ someFunction }) {
  return (
    <button className="changePlaces" onClick={someFunction}>
      <img
        src="https://img.icons8.com/external-kmg-design-basic-outline-kmg-design/64/external-arrows-circle-arrows-kmg-design-basic-outline-kmg-design.png"
        alt="change places of currencies"
      />
    </button>
  );
}
