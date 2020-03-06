
<template>
    <div class="personal_gallery">
        <div class="works_container">
            <div class="gallery_works">
                <div class="grid gallery_work_wrapper is_auth" v-if="works.length > 0">
                    <div class="gallery_work grid-item"  :key="workIndex" v-for="(work,workIndex) in works">
                        <div class="gallery_work__container">
                            <p class="work_gradient"></p>
                            <img  class="work" v-bind:src="getImgSrc(work.src)" alt="image.png">
                            <div class="work_eye__icon work_icons person" @click="showGallery(workIndex)"></div>
                            <div class="work_like__container" @click="addDeleteLike(work.id,workIndex)">
                                <div class="work_like__container_relative">
                                    <div class="work_like__icon work_icons" :class="{blue:isLike(workIndex)}"></div>
                                    <div class="count_likes work_icons" v-if="work.number_of_likes > 0" :class="{blue:isLike(workIndex)}">{{ work.number_of_likes }}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="profile_works_container__default" v-else>
                    <p>Пользователь ещё не добавил работы</p>
                </div>
            </div>

            <full-screen-gallery-modal :is-auth="isAuth" :works="works" :select-image="selectImage" type-works="works"/>

        </div>
    </div>
</template>
<script>
    import FullScreenGalleryModal from "./fullScreenGalleryModal";
    export default {
        components: {FullScreenGalleryModal},
        data: function () {
            return {
                works: [],
                selectelWorkSrc:'https://357319.selcdn.ru/artspeople/works/',
                selectelAvatarSrc:'https://357319.selcdn.ru/artspeople/avatars/',
                selectImage:0,
                isInvited:false,
                clientWidth:0
            }
        },

        props:[
            'isAuth',
            'user',
            'userAuth'
        ],

        created(){
            axios({
                method: 'post',
                url:'/api/profile/'+this.$route.params['id']+'/works',
            }).then((response) => {
                this.works = response.data;
            });
        },

        mounted() {
            this.clientWidth = document.documentElement.clientWidth;
        },

        beforeUpdate(){

        },


        updated(){
            let grid = $('.grid').imagesLoaded().progress( function() {

                if(window.innerWidth > 1400){
                    grid.masonry({
                        itemSelector: '.grid-item',
                        gutter: 18,
                    });
                } else if(window.innerWidth > 1200){
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
        },
        computed:{
            getUrlList:function(){
                this.urlList = [];
                Object.keys(this.works).forEach(function(id) {
                    this.urlList.push(this.selectelWorkSrc+this.works[id].src)
                }.bind(this));
                return this.urlList;
            },


        },


        methods: {
            getImgSrc:function(source){
                return this.selectelWorkSrc+source;
            },
            prev(){
                let length = this.works.length;
                this.selectImage === 0 ? this.selectImage = length - 1  : this.selectImage--;
            },
            next(){
                let length = this.works.length;
                this.selectImage === length - 1 ? this.selectImage = 0 : this.selectImage++;

            },
            closeGallery:function(){
                this.$modal.hide('gallery');
            },
            showGallery:function(index){
                this.selectImage = index;
                this.$modal.show('gallery');
            },

            addDeleteLike:function(work_id,work_index){
                axios({
                    method: 'post',
                    url: '/api/add-delete-like',
                    params: {
                        'work_id': work_id,
                    }
                }).then((response) => {

                   if(response.data.status === 'success'){

                       if(response.data.message ==='created' || response.data.message === 'updated'){
                           this.works[work_index]['is_like'] = true;
                           this.works[work_index]['number_of_likes']++;
                       } else{
                           this.works[work_index]['is_like'] = false;
                           this.works[work_index]['number_of_likes']--;
                       }
                   }

                });
            },

            isLike:function(id){
                return !!this.works[id]['is_like'];
            }
        }
    }
</script>
