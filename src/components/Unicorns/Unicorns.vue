<template>
    <div>
        <ul>
            <li v-for="unicorn in unicorns"> {{ unicorn.id}} : {{ unicorn.name }} </li>
        </ul>
        <button @click="getUnicorns">Fetch Unicorns </button>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            unicorns: [],

        }
    },
    methods: {
        getUnicorns() {
            this.$http.get("")
                .then(response => {
                    return response.json()
                })
                .then(data => {
                    const resultArray = [];
                    for (let key in data) {
                        resultArray.push(data[key])
                    }
                    this.unicorns = resultArray;
                })
                console.log(data)
        },
    },
}
</script>

<style>

</style>

