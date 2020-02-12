import VModal from 'vue-js-modal'
Vue.use(VModal);


new Vue({
    el: '#app',
    data: {
        works: [],
        selectelWorkSrc: 'https://357319.selcdn.ru/artspeople/works/',
        selectelAvatarSrc: 'https://357319.selcdn.ru/artspeople/avatars/',
        selectImage: 0,
        isInvited: false,
    },

    props: [],

    created() {
        axios({
            method: 'post',
            url: '/api/get-all-works',
        }).then((response) => {
            this.works = response.data.works;
        });
    },

    mounted() {
        this.clientWidth = document.documentElement.clientWidth;
        this.getMassonry();
    },

    beforeUpdate() {

    },
    updated() {
        this.getMassonry();
    },
    watch: {},

    computed: {
        getUrlList: function () {
            this.urlList = [];
            Object.keys(this.works).forEach(function (id) {
                this.urlList.push(this.selectelWorkSrc + this.works[id].image.src)
            }.bind(this));
            return this.urlList;
        },
    },

    methods: {

        getImgSrc: function (source) {
            return this.selectelWorkSrc + source;
        },
        prev() {
            let length = this.works.length;
            this.selectImage === 0 ? this.selectImage = length - 1 : this.selectImage--;
        },
        next() {
            let length = this.works.length;
            this.selectImage === length - 1 ? this.selectImage = 0 : this.selectImage++;

        },
        closeGallery: function () {
            this.$modal.hide('gallery');
            $('body').css('overflow','auto');
        },
        showGallery: function (index) {
            this.selectImage = index;
            this.$modal.show('gallery');
            $('body').css('overflow','hidden');
        },

        addDeleteLike: function (work_id, work_index) {
            axios({
                method: 'post',
                url: '/api/add-delete-like',
                params: {
                    'work_id': work_id,
                }
            }).then((response) => {

                if (response.data.status === 'success') {

                    if (response.data.message === 'created' || response.data.message === 'updated') {
                        this.works[work_index]['is_like'] = true;
                        this.works[work_index]['number_of_likes']++;
                    } else {
                        this.works[work_index]['is_like'] = false;
                        this.works[work_index]['number_of_likes']--;
                    }
                }

            });
        },

        isLike: function (id) {
            return !!this.works[id]['is_like'];
        },


        getMassonry: function () {
            let grid = $('.grid').imagesLoaded().progress(function () {

                if (window.innerWidth > 1400) {
                    console.log('masonry');
                    grid.masonry({
                        itemSelector: '.grid-item',
                        gutter: 18,
                    });
                } else if (window.innerWidth > 1200) {
                    grid.masonry({
                        itemSelector: '.grid-item',
                        gutter: 15,
                    });
                } else {
                    grid.masonry({
                        itemSelector: '.grid-item',
                        gutter: 12,
                    });
                }
            });
        }
    }
});
