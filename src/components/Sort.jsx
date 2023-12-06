import { useState } from "react";

function Sort() {
  const sortType = ["default", "date", "rating"];
	const [sortActive, setSortActive] = useState(0);

  return (
    <ul className="sort">
      {sortType.map((type, index) => (
        <li key={index}>
          <a href="#" className={`sort__button ${sortActive === index ? 'sort__button--active' : ''}`} onClick={() => setSortActive(index)}>
            {`Sort by ${type}`}
          </a>
        </li>
      ))}
      {/* <li>
        <a href="#" className="sort__button sort__button--active">
          Sort by default
        </a>
      </li>
      <li>
        <a href="#" className="sort__button">
          Sort by date
        </a>
      </li>
      <li>
        <a href="#" className="sort__button">
          Sort by rating
        </a>
      </li> */}
    </ul>
  );
}

export default Sort;
