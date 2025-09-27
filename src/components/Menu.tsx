import { sliderLists } from "../constants";
import { useState, useRef } from "react";

const Menu = () => {
  const [ currentIndex, setCurrentIndex ] = useState<number>(0);

  const totalCocktails = sliderLists.length;

  const goToSlide = (index: number): void => {
    const newIndex = (index + totalCocktails) % totalCocktails;

    setCurrentIndex(newIndex);
  }

  return (
    <section>
      
    </section>
  )
}

export default Menu;