<template>
    <div>
        <section id="inhoud">
            <h4>Nieuwe items</h4>
        <section id="nieuwe-items">
            <div class="item" v-for='(item,index) in items' :key="item.id">
            <div class="item-img">
                <img v-bind:src="pathSmall+item.src" v-on:click="toonGroteFoto(item.src)">
            </div>
            <div class="item-body">
                <div class="prijs">{{ item.prijs }}€</div>
                    <h4>{{ item.naam }}</h4>
                    <p>{{ item.omschrijving }}</p>
                    <transition name="knopTransition" appear>
                        <div>
                            <a href="#" class="knop" v-on:click.prevent="$emit('VoegToeAanWinkelwagen')">BESTEL</a>
                        </div>
                    </transition>
                    <transition name="besteldTransition">
                        <p class="besteld" v-if="item.besteld>0 && showBesteld[index]">Besteld: {{item.besteld}}</p>
                    </transition>
            </div>
            </div>
        </section>
        </section >
    </div>
</template>

<script>
export default {
    name:"Home",
    data: function () {
        return {
            pathSmall: "assets/images/small/",
            pathBig: "assets/images/big/",
            items: [{
                id: 1,
                naam: "hondenpak superman",
                omschrijving: "Neem je hond mee als sidekick op al je avonturen!",
                prijs: 29.99,
                src: "elias-castillo-7-ToFEHzMNw-unsplash.jpg",
                besteld: 0
            },
            {
                id: 2,
                naam: "Wonder Woman",
                omschrijving: "Laat de kleine meid tonen hoe speciaal ze is!",
                prijs: 34.99,
                src: "gabriela-braga-CVEWeDNsJP4-unsplash.jpg",
                besteld: 0
            },
            {
                id: 3,
                naam: "Spiderman masker",
                omschrijving: "Je wil niet altijd dat je herkent wordt voor je goede daden!",
                prijs: 14.99,
                src: "joey-nicotra-0EI_4R2r0qg-unsplash.jpg",
                besteld: 0
            }
            ],
            winkelwagen: [],
            showBesteld: []
        }
    },
    methods: {
        toonGroteFoto: function (src) {
            window.open(this.pathBig + src);
        },
        saveLocalStorageWinkelwagen: function () {
            let temp = this.items.filter((item) => item.besteld !== 0);
            localStorage.setItem("winkelwagen", JSON.stringify(temp));
        },
        VoegToeAanWinkelwagen: function (index) {
            this.$root.showWinkelwagen = false;
            this.showBesteld[index] = false;
            console.log(this.items[index].besteld)

            this.items[index].besteld++;
            this.$root.aantalInWinkelwagen++;
            console.log(this.aantalInWinkelwagen)

            this.saveLocalStorageWinkelwagen();

            setTimeout(function (scope) {
                scope.$root.showWinkelwagen = true;
                scope.showBesteld[index] = true;
            }, 500, this);
        }
    },

    mounted() {
        if (localStorage.getItem("winkelwagen")) {
            this.$root.aantalInWinkelwagen = 0;
            let tempLS = JSON.parse(localStorage.getItem("winkelwagen"));

            tempLS.forEach((itemLS) => {
                this.items.forEach((dataItem, index) => {
                    if (itemLS.id == dataItem.id) {
                        dataItem.besteld = itemLS.besteld;
                        this.$root.aantalInWinkelwagen += parseInt(itemLS.besteld);
                        this.showBesteld[index] = true
                    }
                })
            })
        }
    }
}
</script>