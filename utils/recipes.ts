export type Recipe = {
  day: string;
  name: string;
  minutes: number;
  servings: number;
  costPerServing: number;
  ingredients: string[];
  steps: string[];
};

export const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export const DAY_NAMES = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

export const RECIPES: Recipe[] = [
  {
    day: "Mon",
    name: "BBQ Chicken Loaded Jackets",
    minutes: 25,
    servings: 2,
    costPerServing: 5.9,
    ingredients: [
      "2 large baking potatoes",
      "2 chicken breasts",
      "80 ml BBQ sauce",
      "50 g grated cheddar",
      "1 spring onion, sliced",
      "1 tbsp olive oil",
      "Salt and pepper",
    ],
    steps: [
      "Preheat the oven to 200°C. Prick the potatoes, rub with oil and salt, then bake for 20 minutes until tender.",
      "Meanwhile, pan-fry the chicken breasts for 6-7 minutes per side, then shred with two forks.",
      "Toss the shredded chicken with the BBQ sauce in a warm pan.",
      "Split the potatoes, fluff the insides, and load with the BBQ chicken.",
      "Top with cheddar and spring onion, then grill for 2 minutes until melted.",
    ],
  },
  {
    day: "Tue",
    name: "Creamy Tuscan Pasta",
    minutes: 20,
    servings: 2,
    costPerServing: 5.4,
    ingredients: [
      "200 g penne",
      "150 ml single cream",
      "60 g sun-dried tomatoes",
      "2 garlic cloves, minced",
      "50 g baby spinach",
      "30 g grated parmesan",
      "1 tsp Italian herbs",
    ],
    steps: [
      "Cook the penne in salted boiling water until al dente, reserving a cup of pasta water.",
      "Soften the garlic and sun-dried tomatoes in a pan for 2 minutes.",
      "Stir in the cream, herbs and parmesan, then simmer gently.",
      "Fold in the spinach until wilted, then toss with the pasta and a splash of pasta water.",
    ],
  },
  {
    day: "Wed",
    name: "Beef Stir-Fry with Rice",
    minutes: 30,
    servings: 2,
    costPerServing: 6.2,
    ingredients: [
      "250 g beef strips",
      "150 g jasmine rice",
      "1 red pepper, sliced",
      "100 g broccoli florets",
      "3 tbsp soy sauce",
      "1 tbsp honey",
      "1 tsp grated ginger",
    ],
    steps: [
      "Cook the rice according to the packet instructions.",
      "Sear the beef strips in a hot wok for 2-3 minutes, then set aside.",
      "Stir-fry the pepper and broccoli for 3 minutes.",
      "Return the beef, add soy sauce, honey and ginger, and toss for 1 minute.",
      "Serve immediately over the rice.",
    ],
  },
  {
    day: "Thu",
    name: "Salmon Tray Bake",
    minutes: 35,
    servings: 2,
    costPerServing: 5.1,
    ingredients: [
      "2 salmon fillets",
      "300 g baby potatoes, halved",
      "150 g green beans",
      "1 lemon, sliced",
      "2 tbsp olive oil",
      "1 tsp dried dill",
      "Salt and pepper",
    ],
    steps: [
      "Preheat the oven to 200°C. Toss the potatoes with oil and roast for 15 minutes.",
      "Add the green beans and lemon slices to the tray.",
      "Nestle the salmon fillets on top, season with dill, salt and pepper.",
      "Bake for 12 minutes until the salmon flakes easily.",
    ],
  },
  {
    day: "Fri",
    name: "Chicken Fajita Bowls",
    minutes: 25,
    servings: 2,
    costPerServing: 5.8,
    ingredients: [
      "2 chicken breasts, sliced",
      "1 onion, sliced",
      "2 bell peppers, sliced",
      "2 tsp fajita seasoning",
      "150 g rice",
      "1 avocado, diced",
      "4 tbsp sour cream",
    ],
    steps: [
      "Cook the rice and keep warm.",
      "Fry the chicken with the fajita seasoning for 5 minutes.",
      "Add the onion and peppers and cook for 4 more minutes.",
      "Build the bowls with rice, chicken, avocado and a dollop of sour cream.",
    ],
  },
  {
    day: "Sat",
    name: "Homemade Margherita Pizza",
    minutes: 40,
    servings: 2,
    costPerServing: 6.4,
    ingredients: [
      "1 pizza dough ball",
      "100 ml passata",
      "125 g mozzarella",
      "Fresh basil leaves",
      "1 tbsp olive oil",
      "1 garlic clove, grated",
      "Pinch of oregano",
    ],
    steps: [
      "Preheat the oven to its highest setting with a tray inside.",
      "Stretch the dough on a floured surface to a 30 cm round.",
      "Spread with passata, garlic and oregano, then tear over the mozzarella.",
      "Bake for 8-10 minutes until the crust is blistered.",
      "Finish with basil and a drizzle of olive oil.",
    ],
  },
  {
    day: "Sun",
    name: "Sunday Roast Veggie Tray",
    minutes: 45,
    servings: 2,
    costPerServing: 5.2,
    ingredients: [
      "300 g carrots, halved",
      "300 g parsnips, quartered",
      "2 red onions, wedged",
      "2 tbsp olive oil",
      "1 tbsp honey",
      "2 tsp wholegrain mustard",
      "Fresh thyme sprigs",
    ],
    steps: [
      "Preheat the oven to 190°C.",
      "Toss all the vegetables with olive oil, salt and thyme.",
      "Roast for 30 minutes, turning once.",
      "Whisk the honey and mustard, drizzle over the tray and roast 10 more minutes.",
    ],
  },
];

export function weeklyCost(): number {
  return RECIPES.reduce(
    (total, recipe) => total + recipe.costPerServing * recipe.servings,
    0
  );
}
