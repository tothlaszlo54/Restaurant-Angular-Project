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
  ];

  filteredMenu() {
    const items = this.activeTab === 'food' ? this.foodMenu : this.drinkMenu;

    // nincs allergén szűrés → mindent visszaad
    const anyFilterActive = Object.values(this.filter).some((v) => v === true);
    if (!anyFilterActive) return items;

    // allergén alapján szűrés
    return items.filter((item) =>
      Object.keys(this.filter).every(
        (allergen) => !this.filter[allergen] || item.tags.includes(allergen)
      )
    );
  }
}
