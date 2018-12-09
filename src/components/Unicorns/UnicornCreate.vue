<template>
    <div>
        <hr>
        <label for="">Namn</label>
        <input type="text" name="" id="" v-model="unicorn.name">
        <hr>
        <label for="">Beskrivning</label>
        <input type="text" name="" id="" v-model="unicorn.description">
        <hr>
        <label for="">Location</label>
        <input type="text" name="" id="" v-model="unicorn.spottedWhere.name">
        <hr>
        <label for="">Lat</label>
        <input type="text" name="" id="" v-model="unicorn.spottedWhere.lat">
        <hr>
        <label for="">Lng</label>
        <input type="text" name="" id="" v-model="unicorn.spottedWhere.lon">
        <hr>
        <label for="">Tidpunkt</label>
        <input type="datetime" name="" id="" v-model="unicorn.spottedWhen">
        <hr>
        <label for="">Image</label>
        <input type="text" name="" id="" v-model="unicorn.image">
        <hr>
        <label for="">Upptäckare</label>
        <input type="text" name="" id="" v-model="unicorn.reportedBy">
        <hr>
        <button @click="submit">Submit</button>
        
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            unicorn: {
                name: "",
                spottedWhere: {
                    name: "",
                    lat: "",
                    lon: "",
                },
                description: "",
                spottedWhen: "",
                image: "",
                reportedBy: ""
            }
        }
    },
    methods: {
        submit() {
            this.$http.post("https://cors-anywhere.herokuapp.com/https://unicorns.idioti.se/", this.unicorn)
                .then(response => {
                    console.log(response)
                }, error => {
                console.log(error)}
                )
                this.$emit("unicornAdded", this.unicorn);
                }
    }
    
}
</script>

<style>

</style>


