<template>
    <div>
        <button @click="getUnicorn(clickedUnicorn)">Get Unicorn</button>
        <p> {{ unicornId }} </p>
        <p> {{ unicornName }} </p>
        <p> {{ unicornDescription}} </p>
        <p> {{ unicornLocation }} </p>
        <p> {{ spottedBy }} </p>
        <p> {{ spottedWhen}} </p>
    </div>
</template>

<script>
    export default {
        data: function() {
            return {
                unicornName: "",
                unicornLocation: "",
                unicornImg: "",
                unicornId: "",
                unicornDescription: "",
                spottedWhen: "",
                spottedBy: "",


            }
        },
        props: ["clickedUnicorn"],
        methods: {
            getUnicorn(clickedUnicorn) {
            this.$http.get("https://unicorns.idioti.se/" + clickedUnicorn)
                .then(response => {
                    return response.json()
                })
                .then(data => {
                    const resultArray = [];
                    for (let key in data) {
                        resultArray.push(data[key])
                    }
                    this.unicornName = resultArray[1]
                    this.unicornId = resultArray[0]
                    this.unicornDescription = resultArray[2]
                    this.spottedBy = resultArray[3]
                    this.unicornImg = resultArray[6]
                    this.unicornLocation = resultArray[4]
                    this.spottedWhen = resultArray[5]
                })

        },
        created: function() {
            getUnicorn(clickedUnicorn);
        }
        }
    }
</script>


<style>

</style>

