<template>
    <article class="country-card">
        {{book.name}}
        <div class="right">
            <strong>
                <small class="icon icon--red" @click="click">
                    DELETE
                </small>
            </strong>
        </div>
        <h1>
            <strong>{{book.alpha2Code}}</strong> {{book.name}}
        </h1>
        <hr>
        <p>{{book.capital}}</p>
        <div v-for="(data, index) in book.currencies">
            <p>{{data.code}}</p>
            <p>{{data.name}}</p>
            <p>{{data.symbol}}</p>
        </div>
    </article>
</template>

<style>
    .icon--red {
        color: red;
    }
    .right {
        float: right;
    }
</style>

<script>
export default {
    name: 'card',
    props: ['book', 'index'],
    methods: {
        click: function() {
            this.$store.commit('deleteBook', this.index)
        }
    }
}
</script>
