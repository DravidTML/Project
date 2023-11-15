const app = Vue.createApp({
    data() {
        return {
            text: 'I like Burrito, Pizza, Thai beef Salad, Rice, pho Soup and tagine.',
            message: "Successful",
            selectedFood: "", // Track the selected food
            selectedImageUrl: "",
            manyFoods: [
                { name: 'Burrito', url: '/images/img_burrito.svg' },
                { name: 'Salad', url: '/images/img_salad.svg' },
                { name: 'Cake', url: '/images/img_cake.svg' },
                { name: 'Soup', url: '/images/img_soup.svg' },
                { name: 'Fish', url: '/images/img_fish.svg' },
                { name: 'Pizza', url: '/images/img_pizza.svg' },
                { name: 'Rice', url: '/images/img_rice.svg' }
            ],
            showText: false
        };
    },
    methods: {
        updateSelectedFood(foodName) {
            this.selectedFood = foodName;
            this.selectedImageUrl = this.manyFoods.find(food => food.name === foodName)?.url || "/images/img_rice.svg";
        },
        toggleShowText() {
            this.showText = !this.showText;
        }
    }
});

app.mount('#app');
