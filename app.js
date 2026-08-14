const RECIPES = [
  {
    id: "pad-thai",
    title: "Pad Thai",
    cuisine: "asian",
    country: "Thailand",
    icon: "🍜",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/8a/PadThai_%E0%B8%9C%E0%B8%B1%E0%B8%94%E0%B9%84%E0%B8%97_Photographed_by_Trisorn_Triboon.JPG",
    difficulty: "Medium",
    time: "30 min",
    servings: 3,
    desc: "Stir-fried rice noodles with shrimp, egg, tofu, and a sweet-tangy tamarind sauce.",
    ingredients: [
      "200g flat rice noodles",
      "2 tbsp tamarind paste",
      "2 tbsp fish sauce",
      "1.5 tbsp palm sugar",
      "150g shrimp, peeled",
      "100g firm tofu, cubed",
      "2 eggs",
      "2 cups bean sprouts",
      "3 cloves garlic, minced",
      "Crushed peanuts, lime wedges, chives to garnish",
    ],
    steps: [
      "Soak rice noodles in warm water until pliable, about 20 minutes.",
      "Whisk tamarind paste, fish sauce, and palm sugar into a sauce.",
      "Stir-fry garlic in oil, then add shrimp and tofu until shrimp turns pink.",
      "Push aside, scramble eggs, then mix everything together.",
      "Add drained noodles and sauce, toss until noodles absorb the sauce.",
      "Fold in bean sprouts, plate, and top with peanuts, lime, and chives.",
    ],
  },
  {
    id: "kung-pao-chicken",
    title: "Kung Pao Chicken",
    cuisine: "asian",
    country: "China",
    icon: "🌶️",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/91/Mindou_-_Pollastre_Gongbao.jpg",
    difficulty: "Medium",
    time: "25 min",
    servings: 4,
    desc: "Spicy Sichuan stir-fry with chicken, peanuts, and dried chilies in a savory-sweet sauce.",
    ingredients: [
      "500g chicken thigh, diced",
      "1/2 cup roasted peanuts",
      "8 dried red chilies",
      "1 tsp Sichuan peppercorns",
      "3 cloves garlic, sliced",
      "1 tbsp ginger, minced",
      "2 tbsp soy sauce",
      "1 tbsp black vinegar",
      "1 tbsp sugar",
      "1 tsp cornstarch (for marinade)",
    ],
    steps: [
      "Marinate chicken with soy sauce and cornstarch for 15 minutes.",
      "Toast Sichuan peppercorns and dried chilies in oil until fragrant.",
      "Add chicken and stir-fry until cooked through.",
      "Stir in garlic and ginger, cook 1 minute.",
      "Add sauce (soy sauce, vinegar, sugar) and toss to coat.",
      "Fold in peanuts just before serving.",
    ],
  },
  {
    id: "japanese-ramen",
    title: "Shoyu Ramen",
    cuisine: "asian",
    country: "Japan",
    icon: "🍥",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/fd/A_bowl_of_tonkotsu_ramen_at_Ichiran_in_Tokyo_in_July_2026.jpg",
    difficulty: "Hard",
    time: "3 hr",
    servings: 4,
    desc: "Soy-flavored broth ramen with soft-boiled egg, chashu pork, and scallions.",
    ingredients: [
      "4 servings fresh ramen noodles",
      "1.5L chicken or pork stock",
      "1/4 cup soy sauce",
      "2 tbsp mirin",
      "2 cloves garlic",
      "2 slices ginger",
      "4 soft-boiled eggs, marinated",
      "Chashu pork slices",
      "Scallions, nori, bamboo shoots to garnish",
    ],
    steps: [
      "Simmer stock with garlic and ginger for 20 minutes to infuse.",
      "Mix soy sauce and mirin into the tare (seasoning base) in each bowl.",
      "Ladle hot stock over the tare and stir to combine.",
      "Cook noodles per package instructions, drain well, add to bowls.",
      "Top with chashu, halved marinated egg, scallions, nori, and bamboo shoots.",
    ],
  },
  {
    id: "korean-bibimbap",
    title: "Bibimbap",
    cuisine: "asian",
    country: "Korea",
    icon: "🍚",
    image: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Bulgogi_Bibimbap%2C_a_Korean_dish.jpg",
    difficulty: "Medium",
    time: "40 min",
    servings: 2,
    desc: "Mixed rice bowl with seasoned vegetables, beef, a fried egg, and gochujang.",
    ingredients: [
      "2 cups cooked short-grain rice",
      "150g beef bulgogi, thinly sliced",
      "1 carrot, julienned",
      "1 cup spinach, blanched",
      "1 cup bean sprouts, blanched",
      "4 shiitake mushrooms, sliced",
      "2 eggs",
      "3 tbsp gochujang",
      "Sesame oil, sesame seeds",
    ],
    steps: [
      "Marinate and sauté beef until caramelized.",
      "Sauté carrot and mushrooms separately; season spinach and bean sprouts with sesame oil.",
      "Fry eggs sunny-side up.",
      "Arrange rice in bowls, top with vegetables and beef in sections.",
      "Place a fried egg on top and add a spoonful of gochujang.",
      "Mix everything together at the table before eating.",
    ],
  },
  {
    id: "vietnamese-pho",
    title: "Beef Pho",
    cuisine: "asian",
    country: "Vietnam",
    icon: "🍲",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Pho%2C_popular_Vietnamese_noodle_soup.jpg",
    difficulty: "Hard",
    time: "4 hr",
    servings: 6,
    desc: "Fragrant beef broth simmered with star anise and cinnamon, served over rice noodles.",
    ingredients: [
      "2kg beef bones",
      "500g beef brisket",
      "1 onion, charred",
      "60g ginger, charred",
      "4 star anise",
      "1 cinnamon stick",
      "1 tbsp fish sauce",
      "400g flat rice noodles",
      "Bean sprouts, Thai basil, lime, chili to serve",
    ],
    steps: [
      "Blanch bones, then rinse to remove impurities.",
      "Simmer bones and brisket with charred onion and ginger for 3+ hours, skimming often.",
      "Toast star anise and cinnamon, add to broth for the last 30 minutes.",
      "Season broth with fish sauce and salt to taste.",
      "Cook rice noodles, place in bowls with thinly sliced brisket.",
      "Ladle hot broth over top and serve with herbs, lime, and chili.",
    ],
  },
  {
    id: "greek-moussaka",
    title: "Moussaka",
    cuisine: "mediterranean",
    country: "Greece",
    icon: "🍆",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/fd/Moussaka_du_chef_%C3%A0_la_b%C3%A9chamel_gratin%C3%A9e_%28Du_Conseil_%C3%A0_l%27assiette%29_septembre_2021.jpg",
    difficulty: "Hard",
    time: "1.5 hr",
    servings: 6,
    desc: "Layered eggplant and spiced ground lamb bake, topped with creamy béchamel.",
    ingredients: [
      "3 eggplants, sliced",
      "500g ground lamb",
      "1 onion, diced",
      "2 cloves garlic, minced",
      "400g crushed tomatoes",
      "1 tsp cinnamon",
      "4 tbsp butter",
      "4 tbsp flour",
      "500ml milk",
      "2 egg yolks",
      "1 cup grated cheese",
    ],
    steps: [
      "Salt eggplant slices and let sit 20 minutes, then roast until golden.",
      "Cook onion and garlic, add lamb and brown well.",
      "Stir in tomatoes and cinnamon, simmer 20 minutes for the meat sauce.",
      "Make béchamel: melt butter, whisk in flour, then milk until thick; stir in egg yolks and cheese.",
      "Layer eggplant and meat sauce in a baking dish, top with béchamel.",
      "Bake at 180°C (350°F) for 45 minutes until golden on top.",
    ],
  },
  {
    id: "spanish-paella",
    title: "Seafood Paella",
    cuisine: "mediterranean",
    country: "Spain",
    icon: "🥘",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/12/Paella_de_marisco_01.jpg",
    difficulty: "Medium",
    time: "50 min",
    servings: 4,
    desc: "Saffron-infused rice simmered with shrimp, mussels, and squid in a wide skillet.",
    ingredients: [
      "2 cups bomba or short-grain rice",
      "1/2 tsp saffron threads",
      "4 cups seafood or chicken stock",
      "200g shrimp",
      "200g mussels",
      "150g squid rings",
      "1 red bell pepper, sliced",
      "2 tomatoes, grated",
      "3 cloves garlic, minced",
      "Lemon wedges to serve",
    ],
    steps: [
      "Bloom saffron in warm stock.",
      "Sauté garlic, bell pepper, and grated tomato in olive oil until fragrant.",
      "Stir in rice to coat, then pour in saffron stock; do not stir again.",
      "Nestle seafood into the rice and simmer uncovered until rice is tender and a crust (socarrat) forms.",
      "Rest 5 minutes, then serve with lemon wedges.",
    ],
  },
  {
    id: "hummus",
    title: "Classic Hummus",
    cuisine: "mediterranean",
    country: "Levant",
    icon: "🧆",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d6/Hummus_plate.jpg",
    difficulty: "Easy",
    time: "15 min",
    servings: 4,
    desc: "Creamy chickpea and tahini dip finished with olive oil and a dash of paprika.",
    ingredients: [
      "2 cups cooked chickpeas",
      "1/3 cup tahini",
      "1 lemon, juiced",
      "2 cloves garlic",
      "3 tbsp olive oil, plus more to serve",
      "1/2 tsp cumin",
      "Ice water as needed",
      "Paprika and parsley to garnish",
    ],
    steps: [
      "Blend chickpeas, tahini, lemon juice, garlic, and cumin until smooth.",
      "Stream in olive oil and a splash of ice water to reach a light, creamy texture.",
      "Season with salt to taste.",
      "Spread onto a plate, drizzle with olive oil, and sprinkle with paprika and parsley.",
    ],
  },
  {
    id: "greek-salad",
    title: "Greek Salad",
    cuisine: "mediterranean",
    country: "Greece",
    icon: "🥗",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/e2/Horiatiki_salad.jpg",
    difficulty: "Easy",
    time: "15 min",
    servings: 4,
    desc: "Crisp cucumber, tomato, red onion, olives, and feta dressed in olive oil and oregano.",
    ingredients: [
      "4 tomatoes, cut into wedges",
      "1 cucumber, sliced",
      "1 red onion, thinly sliced",
      "1/2 cup Kalamata olives",
      "200g feta, sliced",
      "1/4 cup olive oil",
      "1 tsp dried oregano",
      "Salt to taste",
    ],
    steps: [
      "Combine tomatoes, cucumber, onion, and olives in a bowl.",
      "Top with a slab of feta rather than crumbling it, in the traditional style.",
      "Drizzle with olive oil and sprinkle oregano and salt over everything.",
      "Serve immediately with crusty bread.",
    ],
  },
  {
    id: "shakshuka",
    title: "Shakshuka",
    cuisine: "mediterranean",
    country: "North Africa / Levant",
    icon: "🍳",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/f0/Shakshuka_%28Unsplash%29.jpg",
    difficulty: "Easy",
    time: "25 min",
    servings: 3,
    desc: "Eggs poached in a spiced tomato and bell pepper sauce, eaten straight from the pan.",
    ingredients: [
      "1 onion, diced",
      "1 red bell pepper, diced",
      "3 cloves garlic, minced",
      "1 tsp cumin",
      "1 tsp paprika",
      "1/2 tsp chili flakes",
      "800g crushed tomatoes",
      "4-5 eggs",
      "Feta and parsley to garnish",
    ],
    steps: [
      "Sauté onion and bell pepper until softened.",
      "Add garlic and spices, cook 1 minute until fragrant.",
      "Pour in crushed tomatoes and simmer 12-15 minutes until thickened.",
      "Make wells in the sauce and crack in eggs; cover and cook until whites set.",
      "Garnish with feta and parsley, serve with warm bread.",
    ],
  },
  {
    id: "chicken-souvlaki",
    title: "Chicken Souvlaki",
    cuisine: "mediterranean",
    country: "Greece",
    icon: "🍢",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/56/Chicken_souvlaki_at_Hellenic_2.jpg",
    difficulty: "Easy",
    time: "30 min + marinating",
    servings: 4,
    desc: "Grilled marinated chicken skewers served with pita, tzatziki, and fresh vegetables.",
    ingredients: [
      "600g chicken thigh, cubed",
      "1/4 cup olive oil",
      "1 lemon, juiced",
      "3 cloves garlic, minced",
      "1 tsp dried oregano",
      "Pita bread and tzatziki to serve",
      "Sliced tomato, onion, and lettuce",
    ],
    steps: [
      "Marinate chicken in olive oil, lemon juice, garlic, and oregano for at least 1 hour.",
      "Thread chicken onto skewers.",
      "Grill over medium-high heat, turning occasionally, until charred and cooked through.",
      "Warm the pita and fill with chicken, vegetables, and a generous spoon of tzatziki.",
    ],
  },
  {
    id: "dumplings",
    title: "Pork &amp; Chive Dumplings",
    cuisine: "asian",
    country: "China",
    icon: "🥟",
    image: "https://upload.wikimedia.org/wikipedia/commons/7/7f/Potstickers_with_sauce_-_Massachusetts.jpg",
    difficulty: "Medium",
    time: "1 hr",
    servings: 4,
    desc: "Pan-fried dumplings with a juicy pork and chive filling, crisped on one side.",
    ingredients: [
      "300g ground pork",
      "1 cup chives, finely chopped",
      "1 tbsp soy sauce",
      "1 tsp sesame oil",
      "1 tsp ginger, minced",
      "30 dumpling wrappers",
      "Vegetable oil for frying",
      "Soy sauce and vinegar for dipping",
    ],
    steps: [
      "Mix ground pork, chives, soy sauce, sesame oil, and ginger into a filling.",
      "Place a spoonful of filling in each wrapper, moisten edges, and pleat to seal.",
      "Heat oil in a pan, arrange dumplings flat-side down, and fry until golden on the bottom.",
      "Add a splash of water, cover, and steam until cooked through, about 6 minutes.",
      "Uncover and let the bottoms crisp back up before serving with dipping sauce.",
    ],
  },
];

const BUSINESS_EMAIL = "myxhelle@gmail.com";

const CLASSES = [
  {
    id: "asian-wok",
    title: "Asian Wok Mastery",
    cuisine: "asian",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/59/Wok_cooking_and_fire_by_romainguy.jpg",
    duration: "2.5 hours",
    level: "Intermediate",
    price: "$85",
    desc: "High-heat wok technique, knife skills, and the sauces behind Kung Pao Chicken and beyond.",
  },
  {
    id: "sushi-ramen",
    title: "Sushi &amp; Ramen Workshop",
    cuisine: "asian",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/08/Omakase_sushi_%E2%80%94_where_chef_brings_you_the_best_in_season%2C_piece_by_piece.jpg",
    duration: "3 hours",
    level: "Beginner-friendly",
    price: "$95",
    desc: "Roll sushi from scratch and build a rich tare-based ramen broth, start to bowl.",
  },
  {
    id: "mediterranean-mezze",
    title: "Mediterranean Mezze &amp; Flatbread",
    cuisine: "mediterranean",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/8c/Mixed_Meze_Plate_-_Istanbul_Grill%2C_Metairie%2C_Louisiana_23_March_2026.jpg",
    duration: "2 hours",
    level: "Beginner",
    price: "$70",
    desc: "Hummus, baba ganoush, and warm flatbread — the mezze spread you'll make on repeat.",
  },
  {
    id: "paella-seafood",
    title: "Paella &amp; Seafood Night",
    cuisine: "mediterranean",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Cooking_a_paella.jpg",
    duration: "3 hours",
    level: "Intermediate",
    price: "$110",
    desc: "Build a proper socarrat and layer in shrimp, mussels, and squid the traditional way.",
  },
  {
    id: "dumpling-folding",
    title: "Dumpling Folding Class",
    cuisine: "asian",
    image: "https://upload.wikimedia.org/wikipedia/commons/c/c4/8-pleats_-_Julia%27s_Beef_and_Chinese_Celery_Dumplings.jpg",
    duration: "1.5 hours",
    level: "All levels",
    price: "$60",
    desc: "Master the pleat: fold, pan-fry, and steam a full batch of pork and chive dumplings.",
  },
];

const state = {
  search: "",
  cuisine: "all",
  difficulty: "all",
};

const searchInput = document.getElementById("search-input");
const gridEl = document.getElementById("recipe-grid");
const resultCountEl = document.getElementById("result-count");
const emptyStateEl = document.getElementById("empty-state");
const cuisineButtons = document.querySelectorAll("[data-cuisine]");
const difficultyButtons = document.querySelectorAll("[data-difficulty]");
const modalEl = document.getElementById("recipe-modal");
const modalBodyEl = document.getElementById("modal-body");
const classesGridEl = document.getElementById("classes-grid");
const bookingModalEl = document.getElementById("booking-modal");
const bookingBodyEl = document.getElementById("booking-body");

function badgeClass(cuisine) {
  return cuisine === "asian" ? "badge-asian" : "badge-mediterranean";
}

function cuisineLabel(cuisine) {
  return cuisine === "asian" ? "Asian" : "Mediterranean";
}

function getFilteredRecipes() {
  const q = state.search.trim().toLowerCase();
  return RECIPES.filter((r) => {
    if (state.cuisine !== "all" && r.cuisine !== state.cuisine) return false;
    if (state.difficulty !== "all" && r.difficulty !== state.difficulty) return false;
    if (!q) return true;
    const haystack = [r.title, r.country, r.desc, ...r.ingredients].join(" ").toLowerCase();
    return haystack.includes(q);
  });
}

function render() {
  const recipes = getFilteredRecipes();

  resultCountEl.textContent = `${recipes.length} recipe${recipes.length === 1 ? "" : "s"} found`;
  emptyStateEl.hidden = recipes.length !== 0;
  gridEl.innerHTML = "";

  recipes.forEach((r) => {
    const card = document.createElement("button");
    card.className = "card";
    card.setAttribute("type", "button");
    card.addEventListener("click", () => openModal(r.id));

    card.innerHTML = `
      <div class="card-photo">
        <span class="card-tag">${cuisineLabel(r.cuisine)}</span>
        <span class="card-photo-fallback">${r.icon}</span>
        <img src="${r.image}" alt="${r.title}" loading="lazy" onerror="this.remove()" />
      </div>
      <div class="card-body">
        <h3>${r.title}</h3>
        <p>${r.desc}</p>
        <div class="card-meta">
          <span>${r.time}</span>
          <span>${r.difficulty}</span>
          <span>${r.country}</span>
        </div>
      </div>
    `;
    gridEl.appendChild(card);
  });
}

function openModal(id) {
  const r = RECIPES.find((x) => x.id === id);
  if (!r) return;

  modalBodyEl.innerHTML = `
    <div class="modal-photo">
      <span class="modal-photo-fallback">${r.icon}</span>
      <img src="${r.image}" alt="${r.title}" onerror="this.remove()" />
    </div>
    <h2 id="modal-title">${r.title}</h2>
    <div class="modal-meta">
      <span class="badge ${badgeClass(r.cuisine)}">${cuisineLabel(r.cuisine)}</span>
      <span class="badge badge-neutral">${r.country}</span>
    </div>
    <p class="modal-desc">${r.desc}</p>
    <div class="modal-stats">
      <div><strong>${r.time}</strong><span>Time</span></div>
      <div><strong>${r.servings}</strong><span>Servings</span></div>
      <div><strong>${r.difficulty}</strong><span>Difficulty</span></div>
    </div>
    <h3>Ingredients</h3>
    <ul>${r.ingredients.map((i) => `<li>${i}</li>`).join("")}</ul>
    <h3>Instructions</h3>
    <ol>${r.steps.map((s) => `<li>${s}</li>`).join("")}</ol>
  `;

  modalEl.hidden = false;
  document.body.style.overflow = "hidden";
}

function closeModal() {
  modalEl.hidden = true;
  document.body.style.overflow = "";
}

function renderClasses() {
  classesGridEl.innerHTML = "";

  CLASSES.forEach((c) => {
    const card = document.createElement("div");
    card.className = "card class-card";

    card.innerHTML = `
      <div class="card-photo">
        <span class="card-tag">${cuisineLabel(c.cuisine)}</span>
        <img src="${c.image}" alt="${c.title}" loading="lazy" onerror="this.remove()" />
      </div>
      <div class="card-body">
        <h3>${c.title}</h3>
        <p>${c.desc}</p>
        <div class="card-meta">
          <span>${c.duration}</span>
          <span>${c.level}</span>
          <span>${c.price}</span>
        </div>
        <button type="button" class="btn btn-primary class-book-btn">Book this class</button>
      </div>
    `;
    card.querySelector(".class-book-btn").addEventListener("click", () => openBookingModal(c.id));
    classesGridEl.appendChild(card);
  });
}

function openBookingModal(classId) {
  const c = CLASSES.find((x) => x.id === classId);
  if (!c) return;

  bookingBodyEl.innerHTML = `
    <div class="modal-photo">
      <img src="${c.image}" alt="${c.title}" onerror="this.remove()" />
    </div>
    <h2 id="booking-title">Book: ${c.title}</h2>
    <div class="modal-meta">
      <span class="badge ${badgeClass(c.cuisine)}">${cuisineLabel(c.cuisine)}</span>
      <span class="badge badge-neutral">${c.duration}</span>
      <span class="badge badge-neutral">${c.price}</span>
    </div>
    <p class="modal-desc">${c.desc}</p>
    <form id="booking-form" class="booking-form">
      <label>Name
        <input type="text" name="name" required />
      </label>
      <label>Email
        <input type="email" name="email" required />
      </label>
      <label>Preferred date
        <input type="date" name="date" required />
      </label>
      <label>Party size
        <input type="number" name="partySize" min="1" max="12" value="1" required />
      </label>
      <label>Notes (allergies, questions)
        <textarea name="notes" rows="3"></textarea>
      </label>
      <button type="submit" class="btn btn-primary">Send booking request</button>
      <p class="booking-note">We'll open your email app with the request filled in — just hit send.</p>
    </form>
  `;

  const form = bookingBodyEl.querySelector("#booking-form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const name = data.get("name");
    const email = data.get("email");
    const date = data.get("date");
    const partySize = data.get("partySize");
    const notes = data.get("notes");

    const subject = `Booking request: ${c.title} (${date})`;
    const body =
      `Class: ${c.title}\n` +
      `Preferred date: ${date}\n` +
      `Party size: ${partySize}\n` +
      `Name: ${name}\n` +
      `Email: ${email}\n` +
      `Notes: ${notes || "-"}`;

    const mailto = `mailto:${BUSINESS_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;

    bookingBodyEl.innerHTML = `
      <h2>Request ready to send</h2>
      <p class="modal-desc">Your email app should have opened with the booking details for <strong>${c.title}</strong> filled in. Just hit send and we'll confirm by email.</p>
    `;
  });

  bookingModalEl.hidden = false;
  document.body.style.overflow = "hidden";
}

function closeBookingModal() {
  bookingModalEl.hidden = true;
  document.body.style.overflow = "";
}

searchInput.addEventListener("input", (e) => {
  state.search = e.target.value;
  render();
});

cuisineButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    state.cuisine = btn.dataset.cuisine;
    cuisineButtons.forEach((b) => b.classList.toggle("active", b === btn));
    render();
  });
});

difficultyButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    state.difficulty = btn.dataset.difficulty;
    difficultyButtons.forEach((b) => b.classList.toggle("active", b === btn));
    render();
  });
});

document.querySelectorAll("[data-nav-cuisine]").forEach((link) => {
  link.addEventListener("click", () => {
    const cuisine = link.dataset.navCuisine;
    state.cuisine = cuisine;
    cuisineButtons.forEach((b) => b.classList.toggle("active", b.dataset.cuisine === cuisine));
    render();
  });
});

document.querySelectorAll("[data-nav-focus-search]").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    searchInput.focus();
  });
});

modalEl.addEventListener("click", (e) => {
  if (e.target.dataset.close) closeModal();
});

bookingModalEl.addEventListener("click", (e) => {
  if (e.target.dataset.close) closeBookingModal();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    if (!modalEl.hidden) closeModal();
    if (!bookingModalEl.hidden) closeBookingModal();
  }
});

render();
renderClasses();
