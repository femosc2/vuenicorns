<template>
    <div>
        <unicorn-list :unicorns="unicorns" />
        <unicorn-create />
        <unicorn-delete />
    </div>
</template>

<script>
import UnicornList from "./UnicornList.vue"
import UnicornCreate from "./UnicornCreate.vue"
import UnicornDelete from "./UnicornDelete.vue"

export default {
    data: function() {
        return {
            unicorns: [],
        }
    },
    components: {
        UnicornList,
        UnicornCreate,
        UnicornDelete
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

