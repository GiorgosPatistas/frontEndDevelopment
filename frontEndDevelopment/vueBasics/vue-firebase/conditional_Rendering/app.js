// Here we write our JavaScript code. This file is linked in our index.html file, so it will be executed when the page loads.

// Firt we create a vue app.

const app = Vue.createApp({
    // This is the root component of our app. We can define data, methods, and other options here.
    // template: '<h2> i am the template of the root component </h2>'
    data() {
        return {
                showBooks: true,
                title: 'The Final Empire',
                author: 'Brandon Sanderson',
                age: 45
        }
    },
    methods: {
        // What if we want to toggle the showbooks variable? We can create a method to do that.
        // When we save and then click on the "toggleShowBooks" button its going to fire the toogleShowBooks setting the property to False
        // Because showBooks is set to false the div with the book details will not be rendered on the page. 
        // Because when we click again in hide books the books are not coming back So
        // We are going to set it to the opposite of whatever show books currently is. So when we click it again they will appear
        toggleShowBooks() {
            this.showBooks = !this.showBooks
        }
    }
}) 

app.mount('#app')