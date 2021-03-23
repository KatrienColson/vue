const home = {
    template: '#homeTemplate',
    data: function () {
        return {
            winkelwagen: [],
            showBesteld: []



        }
    },
    methods:{
        toonGroteFoto: function (src) {
            window.open(this.pathBig + src);
        },
        VoegToeAanWinkelwagen: function (index) {
            this.showWinkelwagen = false;
            this.showBesteld[index] = false;

            this.items[index].besteld++;
            this.aantalInWinkelwagen++;

            this.saveLocalStorageWinkelwagen();

            setTimeout(function (scope) {
                scope.showWinkelwagen = true;
                scope.showBesteld[index] = true;
            }, 500, this);
    }
},
mounted() {
    if (localStorage.getItem("winkelwagen")) {
        tempLS = JSON.parse(localStorage.getItem("winkelwagen"));

        tempLS.forEach((itemLS) => {
            this.items.forEach((dataItem, index) => {
                if (itemLS.id == dataItem.id) {
                    dataItem.besteld = itemLS.besteld;
                    this.aantalInWinkelwagen += itemLS.besteld;
                    this.showBesteld[index] = true
                }
            })
        })

    }