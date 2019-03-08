<template>
    <article class="book-card">
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
        <div v-for="(currency, index) in book.currencies" :key="index">
            <div>
                <p>{{currency.code}}</p>
                <p>{{currency.name}}</p>
                <p>{{currency.symbol}}</p>
            </div>
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
