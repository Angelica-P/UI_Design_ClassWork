// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "brocoli",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		lactose: true,
		diabetic: true,
		price: 1.99,
		image: "images\\broccoli.jpg"
		//image source: https://www.walmart.ca/en/ip/broccoli-stalks/6000016950304
	},
	{
		name: "bread",
		vegetarian: true,
		glutenFree: false,
		organic: false,
		lactose: true,
		diabetic: true,
		price: 2.35,
		image: "images\\bread.jpg"
		//image source: https://www.123rf.com/photo_68701810_loaf-of-whole-grain-bread-in-a-bag-isolated-on-white-background.html
	},
	{
		name: "organic salmon",
		vegetarian: false,
		glutenFree: true,
		organic: true,
		lactose: true,
		diabetic: true,
		price: 15.00,
		image: "images\\organic_salmon.jpg"
		//image source: https://www.ocado.com/productImages/386/386107011_0_640x640.jpg?identifier=5feaed0c74e16c647316f8afcc275ac1
	},
	{
		name: "apples",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		lactose: true,
		diabetic: true,
		price: 6.99,
		image: "images\\apples.jpg"
		//image source: https://www.heb.com/static-page/apple-varieties
	},
	{
		name: "organic apples",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		lactose: true,
		diabetic: true,
		price: 9.99,
		image: "images\\organic_apples.jpg"
		//image source: https://www.applesandpears.nz/News_and_Events?cms_584_param_detail=7354
	},
	{
		name: "roast chicken",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		lactose: true,
		diabetic: true,
		price: 12.12,
		image: "images\\roast_chicken.jpg"
		//image source: https://www.justataste.com/simple-roast-chicken-garlic-lemon-recipe/
	},
	{
		name: "organic roast chicken",
		vegetarian: false,
		glutenFree: true,
		organic: true,
		lactose: true,
		diabetic: true,
		price: 12.50,
		image: "images\\organic_roast_chicken.jpg"
		//image source: https://www.cookitrealgood.com/roast-chicken/
	},
	{
		name: "spaghetti",
		vegetarian: true,
		glutenFree: false,
		organic: false,
		lactose: true,
		diabetic: true,
		price: 4.50,
		image: "images\\spaghetti.jpeg"
		//image source: https://www.walmart.com/ip/Barilla-Classic-Blue-Box-Pasta-Spaghetti-32-oz/10309210
	},
	{
		name: "cupcakes",
		vegetarian: true,
		glutenFree: false,
		organic: false,
		lactose: true,
		diabetic: false,
		price: 8.25,
		image: "images\\cupcakes.jpg"
		//image source: https://www.walmart.ca/en/ip/the-worthy-crumb-pastry-co-two-bite-mini-iced-vanilla-cupcakes/6000191270199
	},
	{
		name: "organic potatoes",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		lactose: true,
		diabetic: true,
		price: 10.20,
		image: "images\\organic_potatoes.jpg"
		//image source: http://vancofarms.com/packaging/
	},
	{
		name: "eggs",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		lactose: true,
		diabetic: true,
		price: 7.00,
		image: "images\\eggs.jpg"
		//image source: https://www.festfoods.com/blog/tip-tuesday-all-about-eggs
	},
	{
		name: "organic eggs",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		lactose: true,
		diabetic: true,
		price: 8.00,
		image: "images\\organic_eggs.png"
		//image source: https://www.allrecipes.com/article/best-way-store-eggs/
	},
	{
		name: "milk",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		lactose: false,
		diabetic: true,
		price: 4.00,
		image: "images\\milk.png"
		//image source: https://www.misterproduce.com/product/sealtest-milk-2/
	},
	{
		name: "organic milk",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		lactose: false,
		diabetic: true,
		price: 8.00,
		image: "images\\organic_milk.jpg"
		//image source: https://www.dairyreporter.com/Article/2020/03/16/Clover-Sonoma-debuts-fully-renewable-plant-based-milk-carton
	},
	{
		name: "gummy worms",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		lactose: true,
		diabetic: false,
		price: 1.25,
		image: "images\\gummy_worms.jpg"
		//image source: https://www.sugarmancandywholesale.com/gummy-worms-30-lbs-bulk-case/
	},
	{
		name: "cheddar cheese",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		lactose: false,
		diabetic: true,
		price: 4.15,
		image: "images\\cheddar_cheese.jpg"
		//image source: https://www.victoriasupermarket.ca/products/cracker-barrel-medium-cheddar-cheese-block-270g
	}
];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restrictions) {
	let product_names = [];
	for (let i = 0; i < prods.length; i++) {
		if (restrictions.length == 0) {
			product_names.push(prods[i]);
		} else {
			var allowed = true;
			for (let r = 0; r < restrictions.length; r++) {
				if ((restrictions[r] == "Vegetarian") && (!prods[i].vegetarian)){
					allowed = false;
				}
				else if ((restrictions[r] == "GlutenFree") && (!prods[i].glutenFree)){
					allowed = false;
				}
				else if ((restrictions[r] == "Organic") && (!prods[i].organic)){
					allowed = false;
				}
				else if ((restrictions[r] == "Lactose") && (!prods[i].lactose)){
					allowed = false;
				}
				else if ((restrictions[r] == "Diabetic") && (!prods[i].diabetic)){
					allowed = false;
				}
			}
			if (allowed) {
				product_names.push(prods[i]);
			}
		}
	}
	/*for (let r=0; r < restrictions.length; r++) {
		restriction = restrictions[r];
		for (let i=0; i<prods.length; i+=1) {
			if ((restriction == "Vegetarian") && (prods[i].vegetarian == true)){
				product_names.push(prods[i].name);
			}
			else if ((restriction == "GlutenFree") && (prods[i].glutenFree == true)){
				product_names.push(prods[i].name);
			}
			else {
				product_names.push(prods[i].name);
			}
		}
	}*/
	return product_names;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}