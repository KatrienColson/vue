<template>
    <section id="inhoud">
        <h4>Gekozen items</h4>
        <section>
            <transition name="itemTransition" tag="div">
                <div v-if="items.length > 0">
                    <transition-group name="itemTransition" tag="div" mode="out-in">
                        <div class="winkelwagen-item" v-for='(item,index) in items' :key='item.id'>
                            <div class="winkelwagen-item-img"><img v-bind:src="pathSmall +item.src"
                                    v-on:click="toonGroteFoto(item.src)">
                            </div>
                            <div class="item-body">
                                <div class="prijs">{{(parseFloat(item.prijs) * parseFloat(item.besteld)).toFixed(2)}}€</div>
                                <h4>{{item.naam}}</h4>
                                <p>{{item.omschrijving}}</p>
                                <input type="number" v-model="item.besteld" size="2" v-on:change="aantalAanpassing(index)">
                                <a href="#" class="knop" v-on:click.prevent="verwijder(index)">verwijder</a>
                            </div>
                        </div>
                    </transition-group>
                    <div>
                        <p class="totaal">Totaal: {{totalePrijs.toFixed(2)}}</p>
                    </div>
                </div>
            </transition>
            <div v-if="items.length == 0">
                <p>Geen items</p>
            </div>
        </section>
    </section>
</template>

<script>
    export default {
        name: "Winkelwagen",
            data: function() {
            return {
                pathSmall: "./assets/images/small/",
                items: []
            };
            },
        methods: {
            toonGroteFoto: function(src) {
                window.open('./assets/images/big/' + src);
            },
        verwijder: function(index) {
            this.items.splice(index, 1);
            this.saveLocalStorageWinkelwagen();
        },
        aantalAanpassing: function(index) {
            if (this.items[index].besteld == 0) {
            this.items.splice(index, 1);
            }
            this.saveLocalStorageWinkelwagen();
        },
        saveLocalStorageWinkelwagen: function() {
            let temp = this.items.filter(item => item.besteld !== 0);
            localStorage.setItem("winkelwagen", JSON.stringify(temp));
        }
        },
        computed: {
            totalePrijs: function() {
                let totaal = 0;
                this.items.forEach(item => {
                    if (item.besteld > 0) {
                        totaal += item.besteld * item.prijs;
                        console.log(totaal);
                    }
                });
                return totaal;
            },
            totaalAantalItems: function() {
                let totaal = 0;
                    if (this.items.length > 0) {
                    this.items.forEach(item => {
                        if (item.besteld > 0) {
                        totaal += parseInt(item.besteld);
                        }
                    });
                }
                return totaal;
            }
        },
        watch: {
            totaalAantalItems(newValue) {
                this.$root.aantalInWinkelwagen = newValue;
            }
        },
        mounted() {
            if (localStorage.getItem("winkelwagen")) {
                this.items = JSON.parse(localStorage.getItem("winkelwagen"));
            }
        }
    };
</script>
