Vue.createApp({
        data(){
            return {
                menu: [
                    {
                        id: 1,
                        image: "pizza-1.png",
                        name: "Diavola",
                        price: 30,
                        calories: "800 kcal",
                        fats: "50 g",
                    },
                    {
                        id: 2,
                        image: "pizza-2.png",
                        name: "Pollo",
                        price: 50,
                        calories: "800 kcal",
                        fats: "50 g",
                    },
                    {
                        id: 3,
                        image: "pizza-3.png",
                        name: "Suprema",
                        price: 55,
                        calories: "800 kcal",
                        fats: "50 g",
                    },
                    {
                        id: 4,
                        image: "pizza-4.png",
                        name: "Pizza con Funghi",
                        price: 45,
                        calories: "800 kcal",
                        fats: "50 g",
                    },
                    {
                        id: 5,
                        image: "pizza-5.png",
                        name: "Quattro Formaggi",
                        price: 25,
                        calories: "800 kcal",
                        fats: "50 g",
                    },
                    {
                        id: 6,
                        image: "pizza-6.png",
                        name: "Pomodoro",
                        price: 85,
                        calories: "800 kcal",
                        fats: "50 g",
                    },
                    {
                        id: 7,
                        image: "pizza-7.png",
                        name: "Pizza Casei",
                        price: 65,
                        calories: "800 kcal",
                        fats: "50 g",
                    },
                    {
                        id: 8,
                        image: "pizza-8.png",
                        name: "Pizza Vegetariana",
                        price: 95,
                        calories: "800 kcal",
                        fats: "50 g",
                    },
                ]
            }
        }


}).mount('#pizza-restaurant')
