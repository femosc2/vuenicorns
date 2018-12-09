<template>
    <div>
        <ul>
            <li :unicorns="unicorns" v-for="(unicorn, index) in unicorns" :key="unicorn.id"
             @click="chosenUnicorn(unicorn.id)"> {{index}}: |   Id: {{ unicorn.id}} |  Name: {{ unicorn.name }} </li>
            <p> {{ clickedUnicorn }}</p>
            <unicorn-info :clickedUnicorn="clickedUnicorn" />
        </ul>
    </div>
</template>

<script>
import UnicornInfo from "./UnicornInfo"

    export default {
        data: function() {
            return {
                clickedUnicorn: "",
            }
        },
        props: ["unicorns"],
        methods: {
            log() {
                console.log(unicorns)
            },
            chosenUnicorn(index) {
                this.clickedUnicorn = index
                console.log(index)
            },
        },
        components: {
            UnicornInfo
        }
    }
</script>
