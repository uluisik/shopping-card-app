import list from "../data";
import Cards from "./Cards";
import "../styles/amazon.css";

export default function Amazon({ handleClick }) {
  return (
    <section>
      {list.map((item) => (
        <Cards key={item.id} item={item} handleClick={handleClick} />
      ))}
    </section>
  );
}
