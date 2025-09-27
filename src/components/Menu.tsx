import { sliderLists } from "../constants";
import { useState, useRef } from "react";

type Cocktail = {
  id: number,
  name: string,
  image: string,
  title: string,
  description: string,
}

const Menu = () => {
  const [ currentIndex, setCurrentIndex ] = useState<number>(0);

  const totalCocktails = sliderLists.length;

  const goToSlide = (index: number): void => {
    const newIndex = (index + totalCocktails) % totalCocktails;

    setCurrentIndex(newIndex);
  }

  const getCocktailAt = (indexOffset: number): Cocktail => {
    return sliderLists[(currentIndex + indexOffset + totalCocktails) % totalCocktails];
  }

  const currentCocktail = getCocktailAt(0);
  const prevCocktail = getCocktailAt(-1);
  const nextCocktail = getCocktailAt(1);

  return (
    <section>
      
    </section>
  )
}

export default Menu;