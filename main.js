const menu = [
  {
    id: 1,
    title: "Doner",
    category: "Food",
    price: 14.99,
    img:
        "foto/alexander-mils-SNLfVYmL8os-unsplash.jpg",
      desc: `Doner kebab, is a type of kebab, made of meat cooked on a vertical rotisserie.`,
    },
    {
      id: 2,
      title: "Sambousek",
      category: "Breakfast",
      price: 12.99,
      img:
        "foto/anton-kJ6myhO23PI-unsplash.jpg",
      desc: `Sambousek is one of the most popular and popular appetizers`,
    },
    {
      id: 3,
      title: "chicken",
      category: "Food",
      price: 19.99,
      img:
        "foto/chicken-ge8c8e8488_1920.jpg",
      desc: `Grilled chicken is one of the main dishes served on the table, especially at banquets`,
    },
    {
      id: 4,
      title: "Al-Shuaibiyyat",
      category: "Sweet",
      price: 7.99,
      img:
        "foto/şuaybat.jpg",
      desc: `Al-Shuaibiyyat is an easy-to-prepare and delicious Arabic dessert. 
             The filling can vary as desired, but the dough`,
    },
    {
      id: 5,
      title: "Sweet Cheese Rolls",
      category: "Sweet",
      price: 18.99,
      img:
        "foto/halva-aljbn.jpg",
      desc: `Halawet al-Jebne is a traditional dessert famous in Syria,
             specifically in the cities of Hama, Homs and Aleppo.`,
    },
    {
      id: 6,
      title: "Falafel",
      category: "Breakfast",
      price: 2.99,
      img:
        "foto/falafel-hummus-pita-middle-eastern-arabic-dishes-halal-food.jpg",
      desc: `Falafel is made from dried beans, soaked for a while in water,
             then ground, kneaded, dazzled, and then fried in hot oil in the form of discs.`,
    },
    {
      id: 7,
      title: "Molokhia",
      category: "Food",
      price: 17.99,
      img:
        "foto/molokhia-cooking-method.jpg",
      desc: `Molokhia is a type of green plant that belongs to the flowering plant, 
             and it is considered one of the most famous dishes that are prepared in Syria.`,
    },
    {
      id: 8,
      title: "Znoud Al-Sit",
      category: "Sweet",
      price: 15.99,
      img:
        "foto/Swarit-Alset.jpg",
      desc: `"Znoud Al-Sit" consists of baklava dough stuffed with cream or pudding and poured over it`,
    },
    {
      id: 9,
      title: "Chickpeas",
      category: "Breakfast",
      price: 4.99,
      img:
        "foto/nicholas-barbaros-FBbGyco88GU-unsplash.jpg",
      desc: `Ground chickpeas can help you feel full and reduce hunger`,
    },
  ];

  const section = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");


//reduce => resulting in a single output value.
const categories = menu.reduce(
  (values, item) => {
    if (!values.includes(item.category)) {
      values.push(item.category);
    }
    return values;
  },
  ["All"]
);

const categoryList = () => {
  const categoryBtns = categories.map((category) => {
      return `<button class="btn btn-outline-dark btn-item" data-id=${category}>${category}</button>`;
    })
    .join("");

  btnContainer.innerHTML = categoryBtns;
  const filterBtns = document.querySelectorAll(".btn-item");

  //filter menu
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const category = e.currentTarget.dataset.id;
      console.log(category);
      const menuCategory = menu.filter((menuItem) => {
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      if (category === "All") {
        menuList(menu);
      } else {
        menuList(menuCategory);
      }
    });
  });
};

const menuList = (menuItems) => {
  let displayMenu = menuItems.map((item) => {
    return `<div class="menu-items col-lg-6 col-sm-12">
            <img
              src=${item.img}
              alt=${item.title}
              class="photo"
            />
            <div class="menu-info">
              <div class="menu-title">
                <h4>${item.title}</h4>
                <h4 class="price">${item.price}</h4>
              </div>
              <div class="menu-text">
                ${item.desc}
              </div>
            </div>
          </div>
    `;
  });
  displayMenu = displayMenu.join("");
  section.innerHTML = displayMenu;
};

menuList(menu);
categoryList();