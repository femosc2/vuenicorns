<template>
    <div>
        <unicorn-list :unicorns="unicorns" />
        <unicorn-create />
    </div>
</template>

<script>
import UnicornList from "./UnicornList.vue"
import UnicornCreate from "./UnicornCreate.vue"

export default {
    data: function() {
        return {
            unicorns: [],
        }
    },
    components: {
        UnicornList,
        UnicornCreate
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
        },
    },
    created() {
        this.getUnicorns();
    }
}
</script>

<style>

</style>

