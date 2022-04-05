import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "All",
  },
  {
    _id: uuid(),
    categoryName: "Cardio",
  },
  {
    _id: uuid(),
    categoryName: "Challenge",
  },
  {
    _id: uuid(),
    categoryName: "Gym Exercises",
  },
];
