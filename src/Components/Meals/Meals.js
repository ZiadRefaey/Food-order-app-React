import MealsSummary from "./MealsSummary";
import { Fragment } from "react";
import AvailableMeals from "./AvailableMeals";
function Meals() {
  return (
    <Fragment>
      <MealsSummary />
      <AvailableMeals />
    </Fragment>
  );
}
export default Meals;
