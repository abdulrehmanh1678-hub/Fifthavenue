// FifthAvenue Pizza Co. - Frontend Application Logic

// Full Menu Dataset structured from the brand menu flyers
const menuData = {
    deals: [
        {
            id: 'deal_hunger_1',
            name: 'The Hunger Box 1',
            price: 1200,
            description: '1 Classic Small Pizza, 5 Pcs Hot Wings, 1 Tender Chicken Burger, 500ml Drink',
            category: 'deals',
            type: 'Value Deal'
        },
        {
            id: 'deal_hunger_2',
            name: 'The Hunger Box 2',
            price: 1600,
            description: '2 Thunder Zinger Burger, 6 Pcs Hot Wings, Half Pizza Fries, 500ml Drink',
            category: 'deals',
            type: 'Value Deal'
        },
        {
            id: 'deal_crazy',
            name: 'Crazy Value Deal',
            price: 1550,
            description: '2 Thunder Zinger Burger, 2 Tender Chicken Burger, 1 Litre Drink',
            category: 'deals',
            type: 'Value Deal'
        },
        {
            id: 'deal_birthday',
            name: 'Birthday Special Deal',
            price: 4500,
            description: '1 Premium XL Pizza, 1 Signature XL Pizza, 4 Dip Sauce, 2.25 Litre Drink',
            category: 'deals',
            type: 'Value Deal'
        },
        {
            id: 'deal_burger_clock',
            name: "Burger O' Clock",
            price: 1650,
            description: '4 Thunder Zinger Burger, 1 Litre Drink',
            category: 'deals',
            type: 'Value Deal'
        },
        {
            id: 'deal_student_1',
            name: 'Student Deal 1',
            price: 1000,
            description: '1 Classic Small Pizza, 1 Classic Half Pasta, 500ml Drink',
            category: 'deals',
            type: 'Value Deal'
        },
        {
            id: 'deal_student_2',
            name: 'Student Deal 2',
            price: 1350,
            description: '1 Classic Small Pizza, 2 Thunder Zinger Burgers, 500ml Drink',
            category: 'deals',
            type: 'Value Deal'
        },
        {
            id: 'deal_student_3',
            name: 'Student Deal 3',
            price: 1200,
            description: '1 Small Pasta, 2 Tender Chicken Burgers, 500ml Drink',
            category: 'deals',
            type: 'Value Deal'
        },
        {
            id: 'deal_premium_1',
            name: '1. One & Only',
            price: 2000,
            description: '1 Classic Large Pizza, 1 Classic Small Pizza, 1 Dip Sauce, 1 Litre Drink',
            category: 'deals',
            type: 'Pizza Premium Deal'
        },
        {
            id: 'deal_premium_2',
            name: '2. Too Good for Two',
            price: 2500,
            description: '1 Classic Large Pizza, 1 Classic Medium Pizza, 2 Dip Sauce, 1.5 Litre Drink',
            category: 'deals',
            type: 'Pizza Premium Deal'
        },
        {
            id: 'deal_premium_3',
            name: "3. Three O' Treat",
            price: 4300,
            description: '3 Classic Large Pizza, 3 Dip Sauce, 2.25 Litre Drink',
            category: 'deals',
            type: 'Pizza Premium Deal'
        },
        {
            id: 'deal_premium_4',
            name: '4. Two Time the Fun',
            price: 2900,
            description: '2 Classic Large Pizza, 2 Dip Sauce, 1.5 Litre Drink',
            category: 'deals',
            type: 'Pizza Premium Deal'
        },
        {
            id: 'deal_premium_5',
            name: '5. Fix for Five',
            price: 2250,
            description: '1 Classic Large Pizza, 1 Classic Full Pasta, 1 Dip Sauce, 1.5 Litre Drink',
            category: 'deals',
            type: 'Pizza Premium Deal'
        },
        {
            id: 'deal_premium_6',
            name: '6. The Game Changer',
            price: 3350,
            description: '1 Premium XL Pizza, 1 Classic Half Pasta, 2 Dip Sauce, 10 Pcs Hot Wings, 1.5 Litre Drink',
            category: 'deals',
            type: 'Pizza Premium Deal'
        },
        {
            id: 'deal_premium_7',
            name: '7. Two is Better than One',
            price: 3250,
            description: '1 Premium Large Pizza, 1 Signature Large Pizza, 2 Dip Sauce, 1.5 Litre Drink',
            category: 'deals',
            type: 'Pizza Premium Deal'
        },
        {
            id: 'deal_premium_8',
            name: '8. The Show Stopper',
            price: 2150,
            description: '1 Classic Medium Pizza, 1 Classic Half Pasta, 1 Dip Sauce, 10 Pcs Oven Baked Wings, 1 Litre Drink',
            category: 'deals',
            type: 'Pizza Premium Deal'
        },
        {
            id: 'deal_premium_9',
            name: '9. The Final Showdown',
            price: 2450,
            description: '1 Premium Large Pizza, 1 Classic Full Pasta, 1 Dip Sauce, 1.5 Litre Drink',
            category: 'deals',
            type: 'Pizza Premium Deal'
        }
    ],
    pizzas: [
        // Classic Flavours
        {
            id: 'pizza_real_tikka',
            name: 'The Real Tikka',
            description: 'Tikka Chicken, Onion, Special Sauce & Cheese',
            category: 'pizzas',
            pizzaType: 'Classic',
            prices: { 'Small': 500, 'Medium': 1050, 'Large': 1450, 'X-Large': 2100 },
            sizes: ['Small', 'Medium', 'Large', 'X-Large']
        },
        {
            id: 'pizza_fajita_sicilian',
            name: 'Fajita Sicilian',
            description: 'Mexican Style Fajita Chicken, Onion, Capsicum, Tomato, Cheese, Special Sauce',
            category: 'pizzas',
            pizzaType: 'Classic',
            prices: { 'Small': 500, 'Medium': 1050, 'Large': 1450, 'X-Large': 2100 },
            sizes: ['Small', 'Medium', 'Large', 'X-Large']
        },
        {
            id: 'pizza_bonfire',
            name: 'Bonfire Pizza',
            description: 'Hot & Spicy Fajita Chicken, Capsicum, Jalapeno, Onion, Cheese, Special Sauce',
            category: 'pizzas',
            pizzaType: 'Classic',
            prices: { 'Small': 500, 'Medium': 1050, 'Large': 1450, 'X-Large': 2100 },
            sizes: ['Small', 'Medium', 'Large', 'X-Large']
        },
        {
            id: 'pizza_supreme',
            name: 'Chicken Supreme',
            description: 'Tikka Chicken, Olives, Capsicum, Onion, Tomato, Cheese, Special Sauce',
            category: 'pizzas',
            pizzaType: 'Classic',
            prices: { 'Small': 500, 'Medium': 1050, 'Large': 1450, 'X-Large': 2100 },
            sizes: ['Small', 'Medium', 'Large', 'X-Large']
        },
        {
            id: 'pizza_achar_passion',
            name: 'Achar Passion',
            description: 'Achari Tikka Chicken, Capsicum, Onion, Special Sauce & Cheese',
            category: 'pizzas',
            pizzaType: 'Classic',
            prices: { 'Small': 500, 'Medium': 1050, 'Large': 1450, 'X-Large': 2100 },
            sizes: ['Small', 'Medium', 'Large', 'X-Large']
        },
        {
            id: 'pizza_cheese_pepperoni',
            name: 'Cheese & Pepperoni',
            description: 'Pepperoni, Cheese, Special Sauce',
            category: 'pizzas',
            pizzaType: 'Classic',
            prices: { 'Small': 500, 'Medium': 1050, 'Large': 1450, 'X-Large': 2100 },
            sizes: ['Small', 'Medium', 'Large', 'X-Large']
        },
        {
            id: 'pizza_cheese_max',
            name: 'Cheese Max',
            description: 'Special Sauce, Lots of Cheese',
            category: 'pizzas',
            pizzaType: 'Classic',
            prices: { 'Small': 500, 'Medium': 1050, 'Large': 1450, 'X-Large': 2100 },
            sizes: ['Small', 'Medium', 'Large', 'X-Large']
        },
        // Premium Flavours
        {
            id: 'pizza_ny_stuff_crust',
            name: 'Newyork Stuff Crust',
            description: 'Fajita Chicken, Capsicum, Onion, Olive, Sausages, Tomato, Cheese, Special Sauce',
            category: 'pizzas',
            pizzaType: 'Premium',
            prices: { 'Medium': 1200, 'Large': 1650, 'X-Large': 2300 },
            sizes: ['Medium', 'Large', 'X-Large']
        },
        {
            id: 'pizza_crown_crust',
            name: 'Crown Crust',
            description: 'Fajita Chicken, Capsicum, Onion, Olive, Sausages, Tomato, Cheese, Special Sauce',
            category: 'pizzas',
            pizzaType: 'Premium',
            prices: { 'Medium': 1200, 'Large': 1650, 'X-Large': 2300 },
            sizes: ['Medium', 'Large', 'X-Large']
        },
        {
            id: 'pizza_arabic_ranch',
            name: 'Arabic Ranch Crust',
            description: 'Fajita Chicken, Kabab Rings, Capsicum, Onion, Olive, Sausages, Tomato, Cheese, Special Sauce',
            category: 'pizzas',
            pizzaType: 'Premium',
            prices: { 'Medium': 1200, 'Large': 1650, 'X-Large': 2300 },
            sizes: ['Medium', 'Large', 'X-Large']
        },
        {
            id: 'pizza_italian_cheese',
            name: 'Italian Cheese Crust',
            description: 'Fajita Chicken, Capsicum, Onion, Olive, Sausages, Tomato, Cheese, Special Sauce',
            category: 'pizzas',
            pizzaType: 'Premium',
            prices: { 'Medium': 1200, 'Large': 1650, 'X-Large': 2300 },
            sizes: ['Medium', 'Large', 'X-Large']
        },
        {
            id: 'pizza_creamy_melt',
            name: 'Creamy Melt',
            description: 'Malai Chicken, Sausages, Onion, Cheese, Olive, Jalapeno, Special Sauce',
            category: 'pizzas',
            pizzaType: 'Premium',
            prices: { 'Medium': 1200, 'Large': 1650, 'X-Large': 2300 },
            sizes: ['Medium', 'Large', 'X-Large']
        },
        {
            id: 'pizza_dynamite',
            name: 'Dynamite Crust',
            description: 'Fajita Chicken, Capsicum, Onion, Olive, Sausages, Tomato, Cheese, Special Sauce',
            category: 'pizzas',
            pizzaType: 'Premium',
            prices: { 'Medium': 1200, 'Large': 1650, 'X-Large': 2300 },
            sizes: ['Medium', 'Large', 'X-Large']
        },
        // Signature Flavours
        {
            id: 'pizza_signature_special',
            name: 'Signature Special Pizza',
            description: 'Fajita Chicken, Capsicum, Onion, Sausages, Olive, Tomato, Cheese, Special Sauce',
            category: 'pizzas',
            pizzaType: 'Signature',
            prices: { 'Small': 550, 'Medium': 1150, 'Large': 1600, 'X-Large': 2200 },
            sizes: ['Small', 'Medium', 'Large', 'X-Large']
        },
        {
            id: 'pizza_american_pepperoni',
            name: 'American Pepperoni',
            description: 'Fajita Chicken, Pepperoni, Onion, Cheese, Special Sauce',
            category: 'pizzas',
            pizzaType: 'Signature',
            prices: { 'Small': 550, 'Medium': 1150, 'Large': 1600, 'X-Large': 2200 },
            sizes: ['Small', 'Medium', 'Large', 'X-Large']
        },
        {
            id: 'pizza_chicken_crispy',
            name: 'Chicken Crispy Pizza',
            description: 'Crispy Poppers, Fajita Chicken, Capsicum, Olive, Onion, Cheese, Special Sauce',
            category: 'pizzas',
            pizzaType: 'Signature',
            prices: { 'Small': 550, 'Medium': 1150, 'Large': 1600, 'X-Large': 2200 },
            sizes: ['Small', 'Medium', 'Large', 'X-Large']
        },
        {
            id: 'pizza_behari_super',
            name: 'Behari Super Kabab',
            description: 'Fajita Chicken, Behari Kabab, Capsicum, Onion, Cheese, Olive, Special Sauce',
            category: 'pizzas',
            pizzaType: 'Signature',
            prices: { 'Small': 550, 'Medium': 1150, 'Large': 1600, 'X-Large': 2200 },
            sizes: ['Small', 'Medium', 'Large', 'X-Large']
        },
        {
            id: 'pizza_malai_boti',
            name: 'Malai Boti',
            description: 'Malai Boti Chicken, Chicken Sausages, Olive, Onion, Cheese, Special Sauce',
            category: 'pizzas',
            pizzaType: 'Signature',
            prices: { 'Small': 550, 'Medium': 1150, 'Large': 1600, 'X-Large': 2200 },
            sizes: ['Small', 'Medium', 'Large', 'X-Large']
        },
        {
            id: 'pizza_tender_strips',
            name: 'Tender Strips Pizza',
            description: 'Tender Crispy Strips, Jalapeno, Onion, Cheese, Special Sauce',
            category: 'pizzas',
            pizzaType: 'Signature',
            prices: { 'Small': 550, 'Medium': 1150, 'Large': 1600, 'X-Large': 2200 },
            sizes: ['Small', 'Medium', 'Large', 'X-Large']
        },
        {
            id: 'pizza_half_half',
            name: 'Why Not Half & Half',
            description: 'The Half & Half option allows you to have half of your pizza of one flavour and half of another.',
            category: 'pizzas',
            pizzaType: 'Signature',
            prices: { 'Small': 550, 'Medium': 1150, 'Large': 1600, 'X-Large': 2200 },
            sizes: ['Small', 'Medium', 'Large', 'X-Large']
        },
        // Ultimate Flavours
        {
            id: 'pizza_kabab_twister',
            name: 'Kabab Twister',
            description: 'Behari Kabab, Tikka and Fajita Chicken, Sausages, Capsicum, Olive, Tomato, Onion, Cheese, Special Sauce',
            category: 'pizzas',
            pizzaType: 'Ultimate',
            prices: { 'Medium': 1300, 'Large': 1750, 'X-Large': 2400 },
            sizes: ['Medium', 'Large', 'X-Large']
        },
        {
            id: 'pizza_kabab_tonight',
            name: 'Kabab Tonight Crust',
            description: 'Fajita Chicken, Seekh Kabab, Capsicum, Onion, Cheese, Olive, Special Sauce',
            category: 'pizzas',
            pizzaType: 'Ultimate',
            prices: { 'Medium': 1300, 'Large': 1750, 'X-Large': 2400 },
            sizes: ['Medium', 'Large', 'X-Large']
        },
        {
            id: 'pizza_kabab_royal',
            name: 'Kabab Royal Crust',
            description: 'Gola Kabab, Tikka and Fajita Chicken, Sausages, Capsicum, Olive, Tomato, Onion, Cheese, Premium Ranch Sauce',
            category: 'pizzas',
            pizzaType: 'Ultimate',
            prices: { 'Medium': 1300, 'Large': 1750, 'X-Large': 2400 },
            sizes: ['Medium', 'Large', 'X-Large']
        }
    ],
    burgers: [
        {
            id: 'burger_sig_special',
            name: 'Signature Special Burger',
            price: 550,
            description: 'Our top seller with double layered chicken and special house dressing',
            category: 'burgers'
        },
        {
            id: 'burger_double_xtreme',
            name: 'Double Xtreme',
            price: 520,
            description: 'Double patty zinger with spicy sauce and double cheese',
            category: 'burgers'
        },
        {
            id: 'burger_thunder_zinger',
            name: 'Thunder Zinger',
            price: 420,
            description: 'Crispy crunchy chicken thigh fillet with lettuce and mayo',
            category: 'burgers'
        },
        {
            id: 'burger_crunchy_madness',
            name: 'Crunchy Madness',
            price: 350,
            description: 'Crispy chicken patty with signature tangy dressing',
            category: 'burgers'
        },
        {
            id: 'burger_tender_chicken',
            name: 'Tender Chicken',
            price: 350,
            description: 'Tender juicy chicken patty with mayo and lettuce',
            category: 'burgers'
        },
        {
            id: 'burger_patty',
            name: 'Patty Burger',
            price: 280,
            description: 'Classic chicken patty burger, simple and delicious',
            category: 'burgers'
        },
        {
            id: 'burger_chapli',
            name: 'Chapli Burger',
            price: 280,
            description: 'Traditional spiced chapli chicken patty in a toasted bun',
            category: 'burgers'
        }
    ],
    sandwiches: [
        {
            id: 'sandwich_classic',
            name: 'Classic Sandwich',
            price: 700,
            description: 'Serves with Fries and Dip Sauce',
            category: 'sandwiches'
        },
        {
            id: 'sandwich_kabab',
            name: 'Kabab Sandwich',
            price: 750,
            description: 'Serves with Fries and Dip Sauce',
            category: 'sandwiches'
        },
        {
            id: 'sandwich_crispy',
            name: 'Crispy Sandwich',
            price: 750,
            description: 'Serves with Fries and Dip Sauce',
            category: 'sandwiches'
        },
        {
            id: 'sandwich_grill_steak',
            name: 'Grill Steak Sandwich',
            price: 800,
            description: 'Serves with Fries and Dip Sauce',
            category: 'sandwiches'
        }
    ],
    sides: [
        {
            id: 'side_plain_fries_reg',
            name: 'Plain/Masala Fries (Regular)',
            price: 230,
            description: 'Crispy golden fries with custom seasoning',
            category: 'sides',
            baseName: 'Plain/Masala Fries',
            size: 'Regular'
        },
        {
            id: 'side_plain_fries_large',
            name: 'Plain/Masala Fries (Large)',
            price: 460,
            description: 'Crispy golden fries with custom seasoning',
            category: 'sides',
            baseName: 'Plain/Masala Fries',
            size: 'Large'
        },
        {
            id: 'side_mayo_fries_reg',
            name: 'Mayo Fries (Regular)',
            price: 280,
            description: 'Fries loaded with creamy garlic mayonnaise',
            category: 'sides',
            baseName: 'Mayo Fries',
            size: 'Regular'
        },
        {
            id: 'side_mayo_fries_large',
            name: 'Mayo Fries (Large)',
            price: 560,
            description: 'Fries loaded with creamy garlic mayonnaise',
            category: 'sides',
            baseName: 'Mayo Fries',
            size: 'Large'
        },
        {
            id: 'side_loaded_fries_reg',
            name: 'Loaded Fries (Regular)',
            price: 430,
            description: 'Fries topped with cheese sauce, onions, and chicken chunks',
            category: 'sides',
            baseName: 'Loaded Fries',
            size: 'Regular'
        },
        {
            id: 'side_loaded_fries_large',
            name: 'Loaded Fries (Large)',
            price: 750,
            description: 'Fries topped with cheese sauce, onions, and chicken chunks',
            category: 'sides',
            baseName: 'Loaded Fries',
            size: 'Large'
        },
        {
            id: 'side_pizza_fries_reg',
            name: 'Pizza Fries (Regular)',
            price: 430,
            description: 'Fries baked with pizza sauce, chicken tikka, and mozzarella cheese',
            category: 'sides',
            baseName: 'Pizza Fries',
            size: 'Regular'
        },
        {
            id: 'side_pizza_fries_large',
            name: 'Pizza Fries (Large)',
            price: 750,
            description: 'Fries baked with pizza sauce, chicken tikka, and mozzarella cheese',
            category: 'sides',
            baseName: 'Pizza Fries',
            size: 'Large'
        },
        {
            id: 'side_poppers_5',
            name: 'Crispy Poppers (5 Pcs)',
            price: 250,
            description: 'Bite-sized crispy fried chicken poppers',
            category: 'sides',
            baseName: 'Crispy Poppers',
            size: '5 Pcs'
        },
        {
            id: 'side_poppers_10',
            name: 'Crispy Poppers (10 Pcs)',
            price: 500,
            description: 'Bite-sized crispy fried chicken poppers',
            category: 'sides',
            baseName: 'Crispy Poppers',
            size: '10 Pcs'
        },
        {
            id: 'side_nuggets_5',
            name: 'Nuggets (5 Pcs)',
            price: 230,
            description: 'Golden fried chicken nuggets',
            category: 'sides',
            baseName: 'Nuggets',
            size: '5 Pcs'
        },
        {
            id: 'side_nuggets_10',
            name: 'Nuggets (10 Pcs)',
            price: 460,
            description: 'Golden fried chicken nuggets',
            category: 'sides',
            baseName: 'Nuggets',
            size: '10 Pcs'
        }
    ],
    wraps: [
        {
            id: 'wrap_crispy_grilled',
            name: 'Crispy / Grilled Wrap',
            price: 550,
            description: 'Crispy or Grilled chicken strip wrapped with lettuce, onions and sauce',
            category: 'wraps'
        },
        {
            id: 'wrap_trio',
            name: 'Trio Wrap',
            price: 600,
            description: 'Crunchy Madness, Tender Chicken and Grilled Chicken combo wrap',
            category: 'wraps'
        },
        {
            id: 'wrap_pizza_pocket',
            name: 'Pizza Pocket',
            price: 500,
            description: 'Stuffed pocket with pizza fillings and gooey melted cheese',
            category: 'wraps'
        },
        {
            id: 'wrap_cheesy_pocket',
            name: 'Cheesy Pocket',
            price: 500,
            description: 'Stuffed pocket bursting with three kinds of cheeses',
            category: 'wraps'
        }
    ],
    pasta: [
        {
            id: 'pasta_classic_half',
            name: 'Classic Pasta (Half)',
            price: 450,
            description: 'Classic creamy pasta with chicken and mushrooms',
            category: 'pasta',
            baseName: 'Classic Pasta',
            size: 'Half'
        },
        {
            id: 'pasta_classic_full',
            name: 'Classic Pasta (Full)',
            price: 800,
            description: 'Classic creamy pasta with chicken and mushrooms',
            category: 'pasta',
            baseName: 'Classic Pasta',
            size: 'Full'
        },
        {
            id: 'pasta_mexican_half',
            name: 'Mexican Crispy Pasta (Half)',
            price: 500,
            description: 'Spicy pasta topped with crispy chicken strips and jalapenos',
            category: 'pasta',
            baseName: 'Mexican Crispy Pasta',
            size: 'Half'
        },
        {
            id: 'pasta_mexican_full',
            name: 'Mexican Crispy Pasta (Full)',
            price: 900,
            description: 'Spicy pasta topped with crispy chicken strips and jalapenos',
            category: 'pasta',
            baseName: 'Mexican Crispy Pasta',
            size: 'Full'
        },
        {
            id: 'pasta_kabab_half',
            name: 'Chicken Kabab Pasta (Half)',
            price: 500,
            description: 'Pasta loaded with chicken seekh kabab pieces and white sauce',
            category: 'pasta',
            baseName: 'Chicken Kabab Pasta',
            size: 'Half'
        },
        {
            id: 'pasta_kabab_full',
            name: 'Chicken Kabab Pasta (Full)',
            price: 900,
            description: 'Pasta loaded with chicken seekh kabab pieces and white sauce',
            category: 'pasta',
            baseName: 'Chicken Kabab Pasta',
            size: 'Full'
        }
    ],
    platters: [
        {
            id: 'platter_classic',
            name: 'Classic Platter',
            price: 1000,
            description: '4-Pcs Stuff Roll, 6-Pcs Oven Baked Wings, Fries, 1-Dip Sauce',
            category: 'platters'
        },
        {
            id: 'platter_premium',
            name: 'Premium Platter',
            price: 1050,
            description: '4-Pcs Tortilla Roll, 6-Pcs Hot Wings, Fries, 1-Dip Sauce',
            category: 'platters'
        }
    ],
    rolls_wings: [
        {
            id: 'roll_stuffed_chicken',
            name: 'Stuffed Chicken Roll (4-Pcs)',
            price: 530,
            description: '4 pieces of rolls stuffed with tikka chicken and cheese',
            category: 'rolls_wings'
        },
        {
            id: 'roll_stuffed_kabab',
            name: 'Stuffed Kabab/Crispy Roll (4-Pcs)',
            price: 600,
            description: '4 pieces of rolls stuffed with seekh kabab or crispy chicken',
            category: 'rolls_wings'
        },
        {
            id: 'roll_tortilla_chicken',
            name: 'Tortilla Chicken Roll (4-Pcs)',
            price: 600,
            description: '4 pieces of tortilla wraps with spicy chicken filling',
            category: 'rolls_wings'
        },
        {
            id: 'roll_tortilla_kabab',
            name: 'Tortilla Kabab/Crispy Roll (4-Pcs)',
            price: 650,
            description: '4 pieces of tortilla wraps with kabab or crispy chicken filling',
            category: 'rolls_wings'
        },
        {
            id: 'wings_baked_5',
            name: 'Oven Baked Wings (5-Pcs)',
            price: 350,
            description: 'Juicy oven-baked wings coated in BBQ glaze',
            category: 'rolls_wings',
            baseName: 'Oven Baked Wings',
            size: '5-Pcs'
        },
        {
            id: 'wings_baked_10',
            name: 'Oven Baked Wings (10-Pcs)',
            price: 650,
            description: 'Juicy oven-baked wings coated in BBQ glaze',
            category: 'rolls_wings',
            baseName: 'Oven Baked Wings',
            size: '10-Pcs'
        },
        {
            id: 'wings_loaded_5',
            name: 'Loaded Baked Wings (5-Pcs)',
            price: 400,
            description: 'Oven baked wings loaded with melted cheese and sauces',
            category: 'rolls_wings',
            baseName: 'Loaded Baked Wings',
            size: '5-Pcs'
        },
        {
            id: 'wings_loaded_10',
            name: 'Loaded Baked Wings (10-Pcs)',
            price: 750,
            description: 'Oven baked wings loaded with melted cheese and sauces',
            category: 'rolls_wings',
            baseName: 'Loaded Baked Wings',
            size: '10-Pcs'
        },
        {
            id: 'wings_crispy_5',
            name: 'Crispy Hot Wings (5-Pcs)',
            price: 350,
            description: 'Crunchy golden fried hot wings',
            category: 'rolls_wings',
            baseName: 'Crispy Hot Wings',
            size: '5-Pcs'
        },
        {
            id: 'wings_crispy_10',
            name: 'Crispy Hot Wings (10-Pcs)',
            price: 650,
            description: 'Crunchy golden fried hot wings',
            category: 'rolls_wings',
            baseName: 'Crispy Hot Wings',
            size: '10-Pcs'
        }
    ],
    shakes: [
        {
            id: 'shake_oreo',
            name: 'Oreo Pleasure',
            price: 350,
            description: 'Our famous chocolate shake with Oreo bites in every sip.',
            category: 'shakes'
        },
        {
            id: 'shake_choco_overdoze',
            name: 'Chocolate Overdoze',
            price: 350,
            description: 'Chocoholic? Look no further.',
            category: 'shakes'
        },
        {
            id: 'shake_salted_caramel',
            name: 'Salted Caramel Praline Shake',
            price: 350,
            description: 'Sweet and salty! A treat for the salted caramel and praline ice-cream lovers.',
            category: 'shakes'
        },
        {
            id: 'shake_pink_barbie',
            name: 'Pink Barbie',
            price: 350,
            description: 'Pretty in pink! Barbie strawberry and pineapple shake.',
            category: 'shakes'
        },
        {
            id: 'shake_nutella',
            name: 'Nutella Shake',
            price: 380,
            description: 'Enjoy the delicious combination of fresh Nutella and Vanilla Ice-Cream',
            category: 'shakes'
        },
        {
            id: 'shake_choco_brownie',
            name: 'Chocolate Brownie Shake',
            price: 380,
            description: 'Our famous chocolate shake with brownie bites in every sip.',
            category: 'shakes'
        },
        {
            id: 'shake_mango_heaven',
            name: 'Mango Heaven',
            price: 380,
            description: 'Enjoy the delicious combination of fresh Mango and Vanilla Ice-Cream',
            category: 'shakes'
        },
        {
            id: 'shake_kitkat',
            name: 'Kit Kat Shake',
            price: 400,
            description: "An old friend you haven't seen for a while. Great to catch up and remember good times.",
            category: 'shakes'
        },
        {
            id: 'shake_pina_colada',
            name: 'Classic Pina Colada',
            price: 400,
            description: 'Enjoy the delicious combination of fresh pineapple and coconut cream.',
            category: 'shakes'
        }
    ],
    ice_cream: [
        {
            id: 'icecream_reg',
            name: 'Ice Cream Cup (Regular - 2 Scoops)',
            price: 220,
            description: 'Choose flavor: Vanilla, Chocolate Chip, Mango, Strawberry, Kulfa, Pista, Tutti Frutti',
            category: 'ice_cream',
            size: 'Regular',
            scoops: 2,
            flavors: ['Vanilla', 'Chocolate Chip', 'Mango', 'Strawberry', 'Kulfa', 'Pista', 'Tutti Frutti']
        },
        {
            id: 'icecream_large',
            name: 'Ice Cream Cup (Large - 3 Scoops)',
            price: 300,
            description: 'Choose flavor: Vanilla, Chocolate Chip, Mango, Strawberry, Kulfa, Pista, Tutti Frutti',
            category: 'ice_cream',
            size: 'Large',
            scoops: 3,
            flavors: ['Vanilla', 'Chocolate Chip', 'Mango', 'Strawberry', 'Kulfa', 'Pista', 'Tutti Frutti']
        }
    ],
    drinks: [
        {
            id: 'mocktail_mint_marg',
            name: 'Mint Margarita',
            price: 200,
            description: 'Refreshing blend of mint leaves, lemon juice, and soda',
            category: 'drinks',
            type: 'mocktail'
        },
        {
            id: 'mocktail_strawberry_bully',
            name: 'Strawberry Bully',
            price: 200,
            description: 'Chilled strawberry mocktail with a fizzy twist',
            category: 'drinks',
            type: 'mocktail'
        },
        {
            id: 'mocktail_apple_mint',
            name: 'Apple Mint Mocktail',
            price: 200,
            description: 'Apple juice, fresh mint, and fizzy soda',
            category: 'drinks',
            type: 'mocktail'
        },
        {
            id: 'mocktail_blue_charger',
            name: 'Blue Charger',
            price: 200,
            description: 'Vibrant blue curacao mocktail, carbonated and iced',
            category: 'drinks',
            type: 'mocktail'
        },
        {
            id: 'mocktail_fresh_lime',
            name: 'Fresh Lime Soda',
            price: 200,
            description: 'Fizzy lemon-lime juice, chilled to perfection',
            category: 'drinks',
            type: 'mocktail'
        },
        {
            id: 'bev_tin_pack',
            name: 'Cold Beverage (Tin-Pack)',
            price: 130,
            description: 'Assorted 250ml can beverage (Coke, Sprite, Fanta etc.)',
            category: 'drinks',
            type: 'softdrink'
        },
        {
            id: 'bev_500ml',
            name: 'Cold Beverage (500-ml)',
            price: 130,
            description: '500ml PET bottle beverage',
            category: 'drinks',
            type: 'softdrink'
        },
        {
            id: 'bev_1litre',
            name: 'Cold Beverage (1 Litre)',
            price: 180,
            description: '1 Litre PET bottle beverage',
            category: 'drinks',
            type: 'softdrink'
        },
        {
            id: 'bev_1_5litre',
            name: 'Cold Beverage (1.5 Litre)',
            price: 230,
            description: '1.5 Litre PET bottle beverage',
            category: 'drinks',
            type: 'softdrink'
        },
        {
            id: 'bev_2_25litre',
            name: 'Cold Beverage (2.25 Litre)',
            price: 280,
            description: '2.25 Litre PET bottle beverage',
            category: 'drinks',
            type: 'softdrink'
        },
        {
            id: 'bev_water_small',
            name: 'Mineral Water (Small)',
            price: 70,
            description: 'Chilled small mineral water bottle',
            category: 'drinks',
            type: 'water'
        },
        {
            id: 'bev_water_large',
            name: 'Mineral Water (Large)',
            price: 130,
            description: 'Chilled large mineral water bottle',
            category: 'drinks',
            type: 'water'
        }
    ]
};

// Application State
let cart = [];
let activeCategory = 'deals';
let customizeItemData = null; // Currently editing item for cart customization

// WhatsApp number details
const BRAND_WHATSAPP_NUMBER = '923361116621'; // WhatsApp number +92 336 111 6621

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    // Render default category
    renderMenu(activeCategory);
    updateCartCount();
    setupEventListeners();
    setupCategoryTabs();
});

// Category selector
function setupCategoryTabs() {
    const tabs = document.querySelectorAll('.menu-tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            activeCategory = tab.dataset.category;
            renderMenu(activeCategory);
        });
    });
}

// Render Menu Items
function renderMenu(category, searchFilter = '') {
    const container = document.getElementById('menu-grid');
    if (!container) return;

    container.innerHTML = '';
    let items = [];

    if (category === 'all') {
        Object.keys(menuData).forEach(cat => {
            items = items.concat(menuData[cat]);
        });
    } else if (menuData[category]) {
        items = menuData[category];
    }

    if (searchFilter) {
        items = items.filter(item => 
            item.name.toLowerCase().includes(searchFilter.toLowerCase()) || 
            (item.description && item.description.toLowerCase().includes(searchFilter.toLowerCase()))
        );
    }

    if (items.length === 0) {
        container.innerHTML = `
            <div class="no-results">
                <i class="fas fa-search-minus"></i>
                <p>No items found matching your selection.</p>
            </div>
        `;
        return;
    }

    items.forEach(item => {
        const card = document.createElement('div');
        card.className = 'menu-card animate-fade-in';
        
        let priceTag = `Rs. ${item.price}/-`;
        if (item.category === 'pizzas' && item.prices) {
            const sizes = Object.keys(item.prices);
            priceTag = `Rs. ${item.prices[sizes[0]]} - Rs. ${item.prices[sizes[sizes.length - 1]]}`;
        }

        // Pizza badge or customized styling
        let typeBadge = '';
        if (item.pizzaType) {
            typeBadge = `<span class="badge badge-pizza">${item.pizzaType} Pizza</span>`;
        } else if (item.type) {
            typeBadge = `<span class="badge badge-deal">${item.type}</span>`;
        }

        // We use descriptive food icons/SVGs instead of missing images to look clean and professional
        let placeholderIcon = 'pizza-slice';
        if (item.category === 'burgers') placeholderIcon = 'hamburger';
        else if (item.category === 'sandwiches') placeholderIcon = 'bread-slice';
        else if (item.category === 'sides') placeholderIcon = 'hotdog';
        else if (item.category === 'pasta') placeholderIcon = 'utensils';
        else if (item.category === 'shakes') placeholderIcon = 'glass-whiskey';
        else if (item.category === 'drinks') placeholderIcon = 'cocktail';
        else if (item.category === 'ice_cream') placeholderIcon = 'ice-cream';
        else if (item.category === 'deals') placeholderIcon = 'box-open';

        card.innerHTML = `
            <div class="menu-card-img">
                <i class="fas fa-${placeholderIcon}"></i>
                ${typeBadge}
            </div>
            <div class="menu-card-content">
                <h3 class="menu-item-title">${item.name}</h3>
                <p class="menu-item-desc">${item.description || 'Freshly made with premium local ingredients.'}</p>
                <div class="menu-item-footer">
                    <span class="menu-item-price">${priceTag}</span>
                    <button class="btn btn-primary add-btn" data-id="${item.id}">
                        <i class="fas fa-plus"></i> Order
                    </button>
                </div>
            </div>
        `;

        container.appendChild(card);
    });

    // Attach click events to the Add/Order buttons
    container.querySelectorAll('.add-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const itemId = btn.dataset.id;
            handleItemAdd(itemId);
        });
    });
}

// Find item globally in dataset
function findItemById(id) {
    for (let category in menuData) {
        const item = menuData[category].find(i => i.id === id);
        if (item) return item;
    }
    return null;
}

// Handle adding items - checks if item needs customization modal (pizzas, burgers, icecream)
function handleItemAdd(itemId) {
    const item = findItemById(itemId);
    if (!item) return;

    if (item.category === 'pizzas') {
        openPizzaCustomizeModal(item);
    } else if (item.category === 'burgers') {
        openBurgerCustomizeModal(item);
    } else if (item.category === 'ice_cream') {
        openIcecreamCustomizeModal(item);
    } else if (item.category === 'drinks' && item.id.includes('bev_water')) {
        // Water size is already separated in the data (bev_water_small, bev_water_large)
        addToCart(item, 1);
    } else {
        // Direct addition for standard items, deals, sandwiches
        addToCart(item, 1);
    }
}

// Pizza Customization Modal logic
function openPizzaCustomizeModal(item) {
    customizeItemData = { ...item, type: 'pizza' };
    const modal = document.getElementById('customize-modal');
    const modalTitle = document.getElementById('customize-title');
    const modalBody = document.getElementById('customize-body');

    modalTitle.textContent = `Customize: ${item.name}`;
    
    // Pizza Size selector
    const sizesHTML = item.sizes.map((size, idx) => `
        <label class="custom-option-label">
            <input type="radio" name="pizza-size" value="${size}" ${idx === 0 ? 'checked' : ''} onchange="updatePizzaModalPrice()">
            <span class="custom-option-btn">
                <span class="size-name">${size}</span>
                <span class="size-price">Rs. ${item.prices[size]}</span>
            </span>
        </label>
    `).join('');

    // Extra Toppings prices
    // Small: 50, Medium: 80, Large: 100, X-Large: 150
    const toppingsHTML = `
        <div class="custom-section-title">Extra Toppings</div>
        <div class="checkbox-options-grid">
            <label class="custom-checkbox-label">
                <input type="checkbox" name="pizza-topping" value="Extra Cheese" onchange="updatePizzaModalPrice()">
                <span class="checkbox-box"></span>
                <span class="checkbox-text">Extra Cheese (Topping price varies by size)</span>
            </label>
            <label class="custom-checkbox-label">
                <input type="checkbox" name="pizza-topping" value="Extra Tikka Chicken" onchange="updatePizzaModalPrice()">
                <span class="checkbox-box"></span>
                <span class="checkbox-text">Extra Chicken (Topping price varies by size)</span>
            </label>
        </div>
    `;

    // Extra Dips @ Rs 50/-
    const dipsHTML = `
        <div class="custom-section-title">Select Extra Dips (+Rs. 50 each)</div>
        <div class="checkbox-options-grid">
            <label class="custom-checkbox-label">
                <input type="checkbox" name="pizza-dip" value="Special Sauce" onchange="updatePizzaModalPrice()">
                <span class="checkbox-box"></span>
                <span class="checkbox-text">Special Sauce</span>
            </label>
            <label class="custom-checkbox-label">
                <input type="checkbox" name="pizza-dip" value="Garlic Mayo" onchange="updatePizzaModalPrice()">
                <span class="checkbox-box"></span>
                <span class="checkbox-text">Garlic Mayo</span>
            </label>
            <label class="custom-checkbox-label">
                <input type="checkbox" name="pizza-dip" value="Thousand Island" onchange="updatePizzaModalPrice()">
                <span class="checkbox-box"></span>
                <span class="checkbox-text">Thousand Island</span>
            </label>
            <label class="custom-checkbox-label">
                <input type="checkbox" name="pizza-dip" value="B.B.Q Sauce" onchange="updatePizzaModalPrice()">
                <span class="checkbox-box"></span>
                <span class="checkbox-text">B.B.Q Sauce</span>
            </label>
        </div>
    `;

    // For Half & Half Pizza
    let halfHalfHTML = '';
    if (item.id === 'pizza_half_half') {
        const otherPizzas = menuData.pizzas.filter(p => p.id !== 'pizza_half_half');
        const firstHalfSelect = otherPizzas.map(p => `<option value="${p.name}">${p.name} (${p.pizzaType})</option>`).join('');
        const secondHalfSelect = otherPizzas.map(p => `<option value="${p.name}">${p.name} (${p.pizzaType})</option>`).join('');
        halfHalfHTML = `
            <div class="custom-section-title">Select Flavours for Half & Half</div>
            <div class="select-options-grid">
                <div class="select-group">
                    <label>First Half Flavour</label>
                    <select name="half-first" class="form-input">${firstHalfSelect}</select>
                </div>
                <div class="select-group">
                    <label>Second Half Flavour</label>
                    <select name="half-second" class="form-input">${secondHalfSelect}</select>
                </div>
            </div>
        `;
    }

    modalBody.innerHTML = `
        <div class="custom-section-title">Select Pizza Size</div>
        <div class="custom-options-grid">
            ${sizesHTML}
        </div>
        ${halfHalfHTML}
        ${toppingsHTML}
        ${dipsHTML}
        <div class="customize-total-bar">
            <span>Price: <strong id="modal-calculated-price">Rs. 0</strong></span>
            <div class="qty-control">
                <button class="qty-btn" onclick="adjustModalQty(-1)"><i class="fas fa-minus"></i></button>
                <span id="modal-qty" class="qty-val">1</span>
                <button class="qty-btn" onclick="adjustModalQty(1)"><i class="fas fa-plus"></i></button>
            </div>
        </div>
    `;

    // Reset qty
    modal.dataset.qty = "1";
    updatePizzaModalPrice();
    openModal('customize-modal');
}

// Update Pizza calculation
window.updatePizzaModalPrice = function() {
    if (!customizeItemData) return;
    const selectedSize = document.querySelector('input[name="pizza-size"]:checked').value;
    let basePrice = customizeItemData.prices[selectedSize];
    
    // Add extra topping cost (Small: +50, Medium: +80, Large: +100, XL: +150)
    let toppingCost = 0;
    const toppings = document.querySelectorAll('input[name="pizza-topping"]:checked');
    if (toppings.length > 0) {
        if (selectedSize === 'Small') toppingCost = 50;
        else if (selectedSize === 'Medium') toppingCost = 80;
        else if (selectedSize === 'Large') toppingCost = 100;
        else if (selectedSize === 'X-Large') toppingCost = 150;
        
        toppingCost = toppingCost * toppings.length;
    }

    // Add extra dip cost (+50 each)
    const dips = document.querySelectorAll('input[name="pizza-dip"]:checked');
    const dipCost = dips.length * 50;

    const qty = parseInt(document.getElementById('customize-modal').dataset.qty || 1);
    const totalPrice = (basePrice + toppingCost + dipCost) * qty;

    document.getElementById('modal-calculated-price').textContent = `Rs. ${totalPrice}/-`;
};

// Burger Customization Modal logic
function openBurgerCustomizeModal(item) {
    customizeItemData = { ...item, type: 'burger' };
    const modal = document.getElementById('customize-modal');
    const modalTitle = document.getElementById('customize-title');
    const modalBody = document.getElementById('customize-body');

    modalTitle.textContent = `Customize: ${item.name}`;

    // Extra Add-ons +50/-
    const addonsHTML = `
        <div class="custom-section-title">Select Extra Add-ons (+Rs. 50 each)</div>
        <div class="checkbox-options-grid">
            <label class="custom-checkbox-label">
                <input type="checkbox" name="burger-addon" value="Cheese Slice" onchange="updateBurgerModalPrice()">
                <span class="checkbox-box"></span>
                <span class="checkbox-text">Cheese Slice</span>
            </label>
            <label class="custom-checkbox-label">
                <input type="checkbox" name="burger-addon" value="Pepperoni" onchange="updateBurgerModalPrice()">
                <span class="checkbox-box"></span>
                <span class="checkbox-text">Pepperoni</span>
            </label>
            <label class="custom-checkbox-label">
                <input type="checkbox" name="burger-addon" value="Jalapeno" onchange="updateBurgerModalPrice()">
                <span class="checkbox-box"></span>
                <span class="checkbox-text">Jalapeno</span>
            </label>
            <label class="custom-checkbox-label">
                <input type="checkbox" name="burger-addon" value="Cheese Sauce" onchange="updateBurgerModalPrice()">
                <span class="checkbox-box"></span>
                <span class="checkbox-text">Cheese Sauce</span>
            </label>
        </div>
    `;

    modalBody.innerHTML = `
        <div class="custom-info-box">
            <p>Select optional additions to make your burger extra special!</p>
            <p class="base-p text-muted">Base price: Rs. ${item.price}/-</p>
        </div>
        ${addonsHTML}
        <div class="customize-total-bar">
            <span>Price: <strong id="modal-calculated-price">Rs. 0</strong></span>
            <div class="qty-control">
                <button class="qty-btn" onclick="adjustModalQty(-1)"><i class="fas fa-minus"></i></button>
                <span id="modal-qty" class="qty-val">1</span>
                <button class="qty-btn" onclick="adjustModalQty(1)"><i class="fas fa-plus"></i></button>
            </div>
        </div>
    `;

    modal.dataset.qty = "1";
    updateBurgerModalPrice();
    openModal('customize-modal');
}

window.updateBurgerModalPrice = function() {
    if (!customizeItemData) return;
    const basePrice = customizeItemData.price;
    const addons = document.querySelectorAll('input[name="burger-addon"]:checked');
    const addonCost = addons.length * 50;

    const qty = parseInt(document.getElementById('customize-modal').dataset.qty || 1);
    const totalPrice = (basePrice + addonCost) * qty;

    document.getElementById('modal-calculated-price').textContent = `Rs. ${totalPrice}/-`;
};

// Ice Cream Customization Modal logic
function openIcecreamCustomizeModal(item) {
    customizeItemData = { ...item, type: 'ice_cream' };
    const modal = document.getElementById('customize-modal');
    const modalTitle = document.getElementById('customize-title');
    const modalBody = document.getElementById('customize-body');

    modalTitle.textContent = `Customize: ${item.name}`;

    // Select flavor
    const flavorsHTML = item.flavors.map((flavor, idx) => `
        <label class="custom-option-label">
            <input type="radio" name="icecream-flavor" value="${flavor}" ${idx === 0 ? 'checked' : ''}>
            <span class="custom-option-btn text-center">
                <span class="size-name">${flavor}</span>
            </span>
        </label>
    `).join('');

    modalBody.innerHTML = `
        <div class="custom-section-title">Select Ice Cream Flavour (${item.scoops} Scoops)</div>
        <div class="custom-options-grid">
            ${flavorsHTML}
        </div>
        <div class="customize-total-bar mt-6">
            <span>Price: <strong id="modal-calculated-price">Rs. ${item.price * 1}/-</strong></span>
            <div class="qty-control">
                <button class="qty-btn" onclick="adjustModalQty(-1)"><i class="fas fa-minus"></i></button>
                <span id="modal-qty" class="qty-val">1</span>
                <button class="qty-btn" onclick="adjustModalQty(1)"><i class="fas fa-plus"></i></button>
            </div>
        </div>
    `;

    modal.dataset.qty = "1";
    document.getElementById('modal-calculated-price').textContent = `Rs. ${item.price}/-`;
    openModal('customize-modal');
}

// Adjust Modal Quantity
window.adjustModalQty = function(dir) {
    const modal = document.getElementById('customize-modal');
    let qty = parseInt(modal.dataset.qty || 1);
    qty += dir;
    if (qty < 1) qty = 1;
    modal.dataset.qty = qty.toString();
    
    const qtyVal = document.getElementById('modal-qty');
    if (qtyVal) qtyVal.textContent = qty;

    if (customizeItemData.type === 'pizza') {
        updatePizzaModalPrice();
    } else if (customizeItemData.type === 'burger') {
        updateBurgerModalPrice();
    } else if (customizeItemData.type === 'ice_cream') {
        const totalPrice = customizeItemData.price * qty;
        document.getElementById('modal-calculated-price').textContent = `Rs. ${totalPrice}/-`;
    }
};

// Confirm custom options and add to cart
window.confirmCustomize = function() {
    if (!customizeItemData) return;
    const qty = parseInt(document.getElementById('customize-modal').dataset.qty || 1);
    
    let customizedItem = {
        id: customizeItemData.id,
        name: customizeItemData.name,
        category: customizeItemData.category,
        customized: true,
        options: []
    };

    if (customizeItemData.type === 'pizza') {
        const size = document.querySelector('input[name="pizza-size"]:checked').value;
        customizedItem.name = `${customizeItemData.name} (${size})`;
        customizedItem.options.push(`Size: ${size}`);
        
        let singleUnitPrice = customizeItemData.prices[size];

        // For Half & Half Pizza
        if (customizeItemData.id === 'pizza_half_half') {
            const first = document.querySelector('select[name="half-first"]').value;
            const second = document.querySelector('select[name="half-second"]').value;
            customizedItem.options.push(`1st Half: ${first}`);
            customizedItem.options.push(`2nd Half: ${second}`);
        }

        // Toppings
        let toppingCost = 0;
        if (size === 'Small') toppingCost = 50;
        else if (size === 'Medium') toppingCost = 80;
        else if (size === 'Large') toppingCost = 100;
        else if (size === 'X-Large') toppingCost = 150;

        const toppings = document.querySelectorAll('input[name="pizza-topping"]:checked');
        toppings.forEach(t => {
            customizedItem.options.push(`+ Extra ${t.value.replace('Extra ', '')} (+Rs. ${toppingCost})`);
            singleUnitPrice += toppingCost;
        });

        // Dips
        const dips = document.querySelectorAll('input[name="pizza-dip"]:checked');
        dips.forEach(d => {
            customizedItem.options.push(`+ Extra ${d.value} (+Rs. 50)`);
            singleUnitPrice += 50;
        });

        customizedItem.price = singleUnitPrice;

    } else if (customizeItemData.type === 'burger') {
        let singleUnitPrice = customizeItemData.price;
        const addons = document.querySelectorAll('input[name="burger-addon"]:checked');
        addons.forEach(a => {
            customizedItem.options.push(`+ ${a.value} (+Rs. 50)`);
            singleUnitPrice += 50;
        });
        customizedItem.price = singleUnitPrice;

    } else if (customizeItemData.type === 'ice_cream') {
        const flavor = document.querySelector('input[name="icecream-flavor"]:checked').value;
        customizedItem.name = `${customizeItemData.name} (${flavor})`;
        customizedItem.options.push(`Flavour: ${flavor}`);
        customizedItem.price = customizeItemData.price;
    }

    addToCart(customizedItem, qty);
    closeModal('customize-modal');
};

// Add item to cart state
function addToCart(item, quantity = 1) {
    // Generate a unique cart item key representing item ID + option string
    const optionKey = item.options ? item.options.join('|') : '';
    const cartItemId = `${item.id}_${optionKey}`;

    const existingIndex = cart.findIndex(c => c.cartItemId === cartItemId);
    
    if (existingIndex > -1) {
        cart[existingIndex].quantity += quantity;
    } else {
        cart.push({
            cartItemId: cartItemId,
            id: item.id,
            name: item.name,
            price: item.price,
            options: item.options || [],
            quantity: quantity,
            category: item.category
        });
    }

    updateCartCount();
    renderCart();
    animateCartIcon();
    showToast(`Added ${item.name} to cart!`);
}

// Adjust cart item quantity
window.adjustCartQty = function(cartItemId, dir) {
    const index = cart.findIndex(c => c.cartItemId === cartItemId);
    if (index === -1) return;

    cart[index].quantity += dir;
    if (cart[index].quantity <= 0) {
        cart.splice(index, 1);
        showToast('Item removed from cart');
    }
    updateCartCount();
    renderCart();
};

// Remove cart item
window.removeCartItem = function(cartItemId) {
    const index = cart.findIndex(c => c.cartItemId === cartItemId);
    if (index === -1) return;
    
    cart.splice(index, 1);
    showToast('Item removed from cart');
    updateCartCount();
    renderCart();
};

// Update cart notification badge count
function updateCartCount() {
    const totalQty = cart.reduce((sum, item) => sum + item.quantity, 0);
    const badges = document.querySelectorAll('.cart-count');
    badges.forEach(badge => {
        badge.textContent = totalQty;
        if (totalQty > 0) {
            badge.style.display = 'flex';
        } else {
            badge.style.display = 'none';
        }
    });
}

// Animate cart badge bounce on addition
function animateCartIcon() {
    const cartBtn = document.querySelector('.cart-trigger');
    if (cartBtn) {
        cartBtn.classList.add('bounce');
        setTimeout(() => {
            cartBtn.classList.remove('bounce');
        }, 500);
    }
}

// Render interactive cart items drawer
function renderCart() {
    const container = document.getElementById('cart-items-container');
    if (!container) return;

    container.innerHTML = '';

    if (cart.length === 0) {
        container.innerHTML = `
            <div class="empty-cart-view">
                <i class="fas fa-shopping-basket"></i>
                <p>Your basket is empty.</p>
                <button class="btn btn-primary" onclick="toggleCartDrawer()">Start Ordering</button>
            </div>
        `;
        document.getElementById('cart-subtotal').textContent = 'Rs. 0/-';
        document.getElementById('cart-total').textContent = 'Rs. 0/-';
        document.getElementById('checkout-trigger').disabled = true;
        return;
    }

    let subtotal = 0;
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        subtotal += itemTotal;

        const cartItemEl = document.createElement('div');
        cartItemEl.className = 'cart-item';
        
        let optionsList = '';
        if (item.options && item.options.length > 0) {
            optionsList = `<div class="cart-item-options">${item.options.map(opt => `<span>${opt}</span>`).join('')}</div>`;
        }

        cartItemEl.innerHTML = `
            <div class="cart-item-info">
                <div class="cart-item-title">${item.name}</div>
                ${optionsList}
                <div class="cart-item-price">Rs. ${item.price} x ${item.quantity} = Rs. ${itemTotal}/-</div>
            </div>
            <div class="cart-item-actions">
                <div class="qty-control small">
                    <button class="qty-btn" onclick="adjustCartQty('${item.cartItemId}', -1)"><i class="fas fa-minus"></i></button>
                    <span class="qty-val">${item.quantity}</span>
                    <button class="qty-btn" onclick="adjustCartQty('${item.cartItemId}', 1)"><i class="fas fa-plus"></i></button>
                </div>
                <button class="cart-item-delete" onclick="removeCartItem('${item.cartItemId}')"><i class="fas fa-trash-alt"></i></button>
            </div>
        `;
        container.appendChild(cartItemEl);
    });

    document.getElementById('cart-subtotal').textContent = `Rs. ${subtotal}/-`;
    document.getElementById('cart-total').textContent = `Rs. ${subtotal}/-`; // Free delivery!
    document.getElementById('checkout-trigger').disabled = false;
}

// Drawer visibility toggling
window.toggleCartDrawer = function() {
    const drawer = document.getElementById('cart-drawer');
    const overlay = document.getElementById('drawer-overlay');
    if (drawer) {
        drawer.classList.toggle('open');
        overlay.classList.toggle('active');
    }
};

// Modal helpers
window.openModal = function(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
};

window.closeModal = function(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
};

// Setup DOM event listeners
function setupEventListeners() {
    // Cart open
    const cartTriggers = document.querySelectorAll('.cart-trigger');
    cartTriggers.forEach(trigger => {
        trigger.addEventListener('click', () => {
            toggleCartDrawer();
        });
    });

    // Close cart drawer overlay
    const overlay = document.getElementById('drawer-overlay');
    if (overlay) {
        overlay.addEventListener('click', () => {
            toggleCartDrawer();
        });
    }

    // Modal Close Buttons
    const closeBtns = document.querySelectorAll('.close-modal');
    closeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const modal = btn.closest('.modal-overlay');
            if (modal) closeModal(modal.id);
        });
    });

    // Trigger Checkout Form Modal
    const checkoutTrig = document.getElementById('checkout-trigger');
    if (checkoutTrig) {
        checkoutTrig.addEventListener('click', () => {
            toggleCartDrawer();
            openModal('checkout-modal');
        });
    }

    // Search bar event
    const searchBar = document.getElementById('search-menu');
    if (searchBar) {
        searchBar.addEventListener('input', (e) => {
            renderMenu(activeCategory, e.target.value);
        });
    }

    // Order Type Radio buttons toggle address field
    const orderTypes = document.querySelectorAll('input[name="order-type"]');
    orderTypes.forEach(radio => {
        radio.addEventListener('change', (e) => {
            const addressField = document.getElementById('address-group');
            if (e.target.value === 'Delivery') {
                addressField.style.display = 'block';
                document.getElementById('cust-address').required = true;
            } else {
                addressField.style.display = 'none';
                document.getElementById('cust-address').required = false;
            }
        });
    });

    // Handle Order Submission Form
    const orderForm = document.getElementById('checkout-form');
    if (orderForm) {
        orderForm.addEventListener('submit', (e) => {
            e.preventDefault();
            handleOrderSubmission();
        });
    }
}

// Notification Toast
function showToast(message) {
    const toast = document.getElementById('toast-notification');
    if (!toast) return;

    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// Place Order Form Submission
function handleOrderSubmission() {
    const name = document.getElementById('cust-name').value.trim();
    const phone = document.getElementById('cust-phone').value.trim();
    const orderType = document.querySelector('input[name="order-type"]:checked').value;
    const address = orderType === 'Delivery' ? document.getElementById('cust-address').value.trim() : 'Dine-In/Takeaway';
    const instructions = document.getElementById('cust-instructions').value.trim();

    if (!name || !phone) {
        showToast('Please fill in required fields');
        return;
    }

    // Build invoice data
    const orderId = 'FA-' + Math.floor(100000 + Math.random() * 900000);
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    // Save details to compile success modal & receipts
    const orderDetails = {
        orderId: orderId,
        customerName: name,
        customerPhone: phone,
        orderType: orderType,
        address: address,
        instructions: instructions || 'None',
        items: [...cart],
        subtotal: subtotal,
        delivery: 0, // Free Delivery
        total: subtotal,
        date: new Date().toLocaleString()
    };

    // Close checkout form modal
    closeModal('checkout-modal');

    // Show order success modal with generated invoice
    openSuccessModal(orderDetails);

    // Generate WhatsApp Message
    const whatsappUrl = generateWhatsAppLink(orderDetails);
    const waButton = document.getElementById('success-whatsapp-btn');
    if (waButton) {
        waButton.href = whatsappUrl;
    }

    // Clear cart in state after order placed (so checkout doesn't double run, but user still sees success screen)
    // Save order data for PDF printing before clearing cart
    window.lastOrderDetails = orderDetails;
    cart = [];
    updateCartCount();
    renderCart();
}

// Compile structured text details for WhatsApp Link
function generateWhatsAppLink(details) {
    let text = `*--- FIFTH AVENUE PIZZA CO. ORDER ---*\n`;
    text += `*Order ID:* ${details.orderId}\n`;
    text += `*Date:* ${details.date}\n`;
    text += `*Order Type:* ${details.orderType}\n\n`;
    
    text += `*Customer Details:*\n`;
    text += `👤 *Name:* ${details.customerName}\n`;
    text += `📞 *Phone:* ${details.customerPhone}\n`;
    if (details.orderType === 'Delivery') {
        text += `📍 *Delivery Address:* ${details.address}\n`;
    }
    if (details.instructions && details.instructions !== 'None') {
        text += `✍️ *Instructions:* ${details.instructions}\n`;
    }
    text += `\n*Order Summary:*\n`;

    details.items.forEach((item, index) => {
        text += `${index + 1}. *${item.name}* x${item.quantity}\n`;
        if (item.options && item.options.length > 0) {
            item.options.forEach(opt => {
                text += `   _ - ${opt}_\n`;
            });
        }
        text += `   _Price: Rs. ${item.price * item.quantity}/-_\n\n`;
    });

    text += `---------------------------\n`;
    text += `💰 *Subtotal:* Rs. ${details.subtotal}/-\n`;
    text += `🚚 *Delivery Charges:* Rs. 0/- (FREE)\n`;
    text += `⭐ *Grand Total:* *Rs. ${details.total}/-*\n`;
    text += `---------------------------\n`;
    text += `_Please confirm my order. Thank you!_`;

    return `https://wa.me/${BRAND_WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

// Open Success Confirmation Modal
function openSuccessModal(details) {
    const modal = document.getElementById('success-modal');
    const invoiceContainer = document.getElementById('invoice-receipt-details');

    let itemsHTML = details.items.map((item, index) => `
        <div class="receipt-row-item">
            <div>
                <strong>${index + 1}. ${item.name}</strong>
                ${item.options.length > 0 ? `<div class="receipt-item-options-text">${item.options.join(', ')}</div>` : ''}
            </div>
            <span>Rs. ${item.price * item.quantity}/-</span>
        </div>
    `).join('');

    invoiceContainer.innerHTML = `
        <div class="receipt-header">
            <h3>FIFTH AVENUE PIZZA CO.</h3>
            <p>Commercial Market, Main Bahawalnagar Road, Chishtian</p>
            <p>Ph: 0304-1116621 | WhatsApp: 0336-1116621</p>
            <div class="receipt-divider"></div>
        </div>
        <div class="receipt-meta">
            <div><strong>Order ID:</strong> ${details.orderId}</div>
            <div><strong>Date:</strong> ${details.date}</div>
            <div><strong>Type:</strong> ${details.orderType}</div>
            <div><strong>Customer:</strong> ${details.customerName}</div>
            <div><strong>Phone:</strong> ${details.customerPhone}</div>
            ${details.orderType === 'Delivery' ? `<div><strong>Address:</strong> ${details.address}</div>` : ''}
            ${details.instructions !== 'None' ? `<div><strong>Special Notes:</strong> ${details.instructions}</div>` : ''}
        </div>
        <div class="receipt-divider"></div>
        <div class="receipt-items-list">
            ${itemsHTML}
        </div>
        <div class="receipt-divider"></div>
        <div class="receipt-summary-block">
            <div class="receipt-row">
                <span>Subtotal:</span>
                <span>Rs. ${details.subtotal}/-</span>
            </div>
            <div class="receipt-row">
                <span>Delivery:</span>
                <span>Rs. 0/- (Free)</span>
            </div>
            <div class="receipt-divider mini"></div>
            <div class="receipt-row total">
                <span>Grand Total:</span>
                <span>Rs. ${details.total}/-</span>
            </div>
        </div>
        <div class="receipt-footer">
            <p>Thank you for choosing Fifth Avenue!</p>
            <p>Chasing Flavours...</p>
        </div>
    `;

    openModal('success-modal');
}

// Print invoice logic
window.printReceipt = function() {
    if (!window.lastOrderDetails) return;
    
    // We open a clean print-only window with receipt styles
    const printWindow = window.open('', '_blank', 'width=400,height=600');
    const details = window.lastOrderDetails;

    let itemsHTML = details.items.map((item, index) => `
        <tr>
            <td style="padding: 5px 0;">
                <strong>${index + 1}. ${item.name}</strong>
                ${item.options.length > 0 ? `<div style="font-size: 11px; color: #555; padding-left: 10px;">${item.options.join(', ')}</div>` : ''}
            </td>
            <td style="text-align: right; vertical-align: top; padding: 5px 0;">Rs. ${item.price * item.quantity}/-</td>
        </tr>
    `).join('');

    printWindow.document.write(`
        <html>
        <head>
            <title>Receipt - Fifth Avenue</title>
            <style>
                body {
                    font-family: 'Courier New', Courier, monospace;
                    font-size: 13px;
                    color: #000;
                    margin: 0;
                    padding: 20px;
                    width: 320px;
                }
                .text-center { text-align: center; }
                .divider { border-top: 1px dashed #000; margin: 10px 0; }
                .header h2 { margin: 5px 0; font-size: 18px; }
                .header p { margin: 2px 0; font-size: 11px; }
                .meta { font-size: 12px; margin-bottom: 10px; }
                .meta div { margin-bottom: 3px; }
                table { width: 100%; border-collapse: collapse; }
                .summary { margin-top: 10px; font-size: 13px; }
                .summary-row { display: flex; justify-content: space-between; padding: 3px 0; }
                .summary-row.total { font-weight: bold; font-size: 15px; border-top: 1px dashed #000; padding-top: 5px; }
                @media print {
                    body { margin: 0; padding: 10px; }
                }
            </style>
        </head>
        <body>
            <div class="header text-center">
                <h2>FIFTH AVENUE</h2>
                <p>PIZZA CO.</p>
                <p>Commercial Market, Main Bahawalnagar Road, Chishtian</p>
                <p>Ph: 0304-1116621 | WhatsApp: 0336-1116621</p>
            </div>
            <div class="divider"></div>
            <div class="meta">
                <div><strong>Order ID:</strong> ${details.orderId}</div>
                <div><strong>Date:</strong> ${details.date}</div>
                <div><strong>Type:</strong> ${details.orderType}</div>
                <div><strong>Customer:</strong> ${details.customerName}</div>
                <div><strong>Phone:</strong> ${details.customerPhone}</div>
                ${details.orderType === 'Delivery' ? `<div><strong>Address:</strong> ${details.address}</div>` : ''}
            </div>
            <div class="divider"></div>
            <table>
                <tbody>
                    ${itemsHTML}
                </tbody>
            </table>
            <div class="divider"></div>
            <div class="summary">
                <div class="summary-row">
                    <span>Subtotal:</span>
                    <span>Rs. ${details.subtotal}/-</span>
                </div>
                <div class="summary-row">
                    <span>Delivery Charges:</span>
                    <span>Rs. 0/- (Free)</span>
                </div>
                <div class="summary-row total">
                    <span>Grand Total:</span>
                    <span>Rs. ${details.total}/-</span>
                </div>
            </div>
            <div class="divider"></div>
            <div class="text-center" style="margin-top: 15px; font-size: 11px;">
                <p>Thank you for your order!</p>
                <p>We are chasing flavours...</p>
            </div>
            <script>
                window.onload = function() {
                    window.print();
                    setTimeout(function() { window.close(); }, 500);
                }
            </script>
        </body>
        </html>
    `);
    printWindow.document.close();
};
