import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-main',
  templateUrl: './menu-main.component.html',
  styleUrl: './menu-main.component.scss',
})
export class MenuMainComponent {
  activeTab: 'food' | 'drinks' = 'food';

  filter: any = {
    vegetarian: false,
    vegan: false,
    glutenfree: false,
    nuts: false,
  };

  availableAllergens = ['vegetarian', 'vegan', 'glutenfree', 'nuts'];

  foodMenu = [
    {
      name: 'Caesar Salad',
      description: 'Romaine lettuce, parmesan, tortilla croutons.',
      price: 11,
      tags: ['vegetarian'],
    },
    {
      name: 'Avo Toast & Poached Egg',
      description: 'Sourdough toast with smashed avocado.',
      price: 13,
      tags: ['vegetarian'],
    },
    {
      name: 'Crispy Calamari',
      description: 'Crispy-fried calamari with lime dip.',
      price: 12.5,
      tags: [],
    },
    {
      name: 'Gluten-Free Pasta',
      description: 'Pasta made with rice flour, tomato sauce.',
      price: 14,
      tags: ['glutenfree', 'vegetarian'],
    },
    {
      name: 'Vegan Buddha Bowl',
      description: 'Quinoa, chickpeas, avocado, roasted veggies.',
      price: 15,
      tags: ['vegan', 'glutenfree'],
    },
    {
      name: 'Nutty Brownie',
      description: 'Chocolate brownie with chopped walnuts.',
      price: 6,
      tags: ['vegetarian', 'nuts'],
    },
    {
      name: 'Grilled Chicken Wrap',
      description: 'Chicken, lettuce, tomato, gluten-free tortilla.',
      price: 13,
      tags: ['glutenfree'],
    },
    {
      name: 'Vegan Lentil Soup',
      description: 'Hearty lentil soup with carrots and celery.',
      price: 9,
      tags: ['vegan', 'glutenfree'],
    },
    {
      name: 'Almond-Crusted Fish',
      description: 'Baked fish fillet with almond crust.',
      price: 16,
      tags: ['nuts', 'glutenfree'],
    },
    {
      name: 'Quinoa Salad',
      description: 'Quinoa, roasted vegetables, feta cheese.',
      price: 12,
      tags: ['vegetarian', 'glutenfree'],
    },
    {
      name: 'Mushroom Risotto',
      description: 'Creamy risotto with wild mushrooms.',
      price: 14,
      tags: ['vegetarian', 'glutenfree'],
    },
    {
      name: 'Vegan Tacos',
      description: 'Corn tortillas, black beans, avocado, salsa.',
      price: 11,
      tags: ['vegan', 'glutenfree'],
    },
    {
      name: 'Pecan Pie',
      description: 'Classic pecan pie with caramel drizzle.',
      price: 7,
      tags: ['vegetarian', 'nuts'],
    },
    {
      name: 'Spinach & Cheese Wrap',
      description: 'Spinach, feta, gluten-free wrap.',
      price: 12,
      tags: ['vegetarian', 'glutenfree'],
    },
    {
      name: 'Vegan Stir Fry',
      description: 'Tofu, mixed vegetables, soy-ginger sauce.',
      price: 13,
      tags: ['vegan'],
    },
    {
      name: 'Nutty Granola Bowl',
      description: 'Oats, honey, mixed nuts, yogurt.',
      price: 8,
      tags: ['vegetarian', 'nuts'],
    },
    {
      name: 'Gluten-Free Pizza',
      description: 'Tomato, mozzarella, basil, gluten-free crust.',
      price: 15,
      tags: ['vegetarian', 'glutenfree'],
    },
    {
      name: 'Chickpea Curry',
      description: 'Chickpeas, coconut milk, spices, served with rice.',
      price: 12,
      tags: ['vegan', 'glutenfree'],
    },
  ];

  drinkMenu = [
    {
      name: 'Lemonade',
      description: 'Fresh lemon, mint, cane sugar.',
      price: 5,
      tags: ['vegan', 'glutenfree'],
    },
    {
      name: 'Iced Coffee',
      description: 'Cold brew with milk.',
      price: 4.5,
      tags: [],
    },
    {
      name: 'Almond Smoothie',
      description: 'Almond milk, banana, cinnamon.',
      price: 6,
      tags: ['vegan', 'nuts', 'glutenfree'],
    },
    {
      name: 'Green Detox Juice',
      description: 'Spinach, cucumber, apple, lemon.',
      price: 5.5,
      tags: ['vegan', 'glutenfree'],
    },
    {
      name: 'Peanut Protein Shake',
      description: 'Peanut butter, chocolate, almond milk.',
      price: 7,
      tags: ['vegan', 'nuts'],
    },
    {
      name: 'Coconut Water',
      description: 'Fresh coconut water, chilled.',
      price: 4,
      tags: ['vegan', 'glutenfree'],
    },
    {
      name: 'Berry Smoothie',
      description: 'Mixed berries, banana, almond milk.',
      price: 6.5,
      tags: ['vegan', 'glutenfree', 'nuts'],
    },
    {
      name: 'Herbal Tea',
      description: 'Chamomile or mint infusion.',
      price: 3.5,
      tags: ['vegan', 'glutenfree'],
    },
    {
      name: 'Matcha Latte',
      description: 'Green tea matcha, milk or plant-based milk.',
      price: 5.5,
      tags: ['vegan'],
    },
    {
      name: 'Hazelnut Mocha',
      description: 'Espresso, cocoa, hazelnut syrup, milk.',
      price: 6,
      tags: ['vegetarian', 'nuts'],
    },
    {
      name: 'Fresh Orange Juice',
      description: 'Cold pressed orange juice.',
      price: 5,
      tags: ['vegan', 'glutenfree'],
    },
    {
      name: 'Chia Seed Drink',
      description: 'Chia seeds, lime, sparkling water.',
      price: 4.5,
      tags: ['vegan', 'glutenfree'],
    },
    {
      name: 'Soy Milk Latte',
      description: 'Espresso with soy milk.',
      price: 5,
      tags: ['vegan'],
    },
    {
      name: 'Carrot Ginger Juice',
      description: 'Fresh carrot and ginger juice.',
      price: 5,
      tags: ['vegan', 'glutenfree'],
    },
    {
      name: 'Cacao Smoothie',
      description: 'Cacao, banana, almond milk, honey.',
      price: 6,
      tags: ['vegetarian', 'nuts'],
    },
    {
      name: 'Iced Herbal Tea',
      description: 'Chilled hibiscus or peppermint tea.',
      price: 4,
      tags: ['vegan', 'glutenfree'],
    },
  ];

  filteredMenu() {
    const items = this.activeTab === 'food' ? this.foodMenu : this.drinkMenu;

    const activeFilters = Object.keys(this.filter).filter(
      (key) => this.filter[key]
    );
    // nincs aktív szűrő → mindent visszaad
    if (activeFilters.length === 0) return items;

    return items.filter((item) => {
      // ellenőrizzük, hogy az étel minden aktív szűrőt tartalmaz-e
      for (let allergen of activeFilters) {
        if (!item.tags.includes(allergen)) {
          return false; // ha bármelyik hiányzik, kiesik
        }
      }
      return true; // minden aktív szűrő szerepel → megtartjuk
    });
  }
}
