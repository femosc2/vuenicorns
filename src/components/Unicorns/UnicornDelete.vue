<template>
    <div>
        <hr>
        <label for="">VILKET ID SKA DELETAS?</label>
        <input type="text" name="" id="" v-model="unicorn.id">
        <hr>
        <button @click="submit">Submit</button>
        
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            unicorn: {
                id: ""
            }
        }
    },
    methods: {
        submit() {
            this.$http.delete("https://cors-anywhere.herokuapp.com/https://unicorns.idioti.se/" + this.unicorn.id)
                .then(response => {
                    console.log(response)
                }, error => {
                console.log(error)}
                )}
    }
    
}
</script>

<style>

</style>