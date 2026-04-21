// Here we write our JavaScript code. This file is linked in our index.html file, so it will be executed when the page loads.

// Firt we create a vue app.

const app = Vue.createApp({
    // This is the root component of our app. We can define data, methods, and other options here.
    // template: '<h2> i am the template of the root component </h2>'
    data() {
        return {
                title: 'The Final Empire',
                author: 'Brandon Sanderson',
                age: 45
        }
    },
    methods: {
        changeTitle(title) {
            // <!-------- We have to say this.title in order for us to get access to the title data property. --------->
            //this.title = 'Words of Randiance'
            this.title = title
        }
    }
}) 

app.mount('#app')