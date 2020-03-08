
<template>
    <div class="personal_gallery" :class="{is_auth:isAuth}">
        <div class="works_container">
            <div class="gallery_works">
                <div class="grid gallery_work_wrapper is_auth" v-if="isHasAnyWorks">
                    <div class="gallery_work grid-item" :key="likeIndex" v-for="(like,likeIndex) in likes">
                        <div class="gallery_work__container">
                            <p class="work_gradient"></p>
                            <img  class="work" v-bind:src="getImgSrc(like['work']['image']['src'])" alt="image.png">
                            <div class="work_eye__icon work_icons person" @click="showGallery(likeIndex)"></div>
                            <div class="work_like__container">
                                <div class="work_like__container_relative">
                                    <div class="work_like__icon work_icons"></div>
                                    <div class="count_likes work_icons">{{ like['work']['likes'].length }}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="profile_works_container__default" v-else>
                    <p>У пользователя пока нету симпатий</p>
                </div>
            </div>


            <full-screen-gallery-modal :is-auth="isAuth" :works="likes" :select-image="selectImage" type-works="likes"/>

        </div>
    </div>
</template>
<script>
    import FullScreenGalleryModal from "./fullScreenGalleryModal";
    export default {
        components: {FullScreenGalleryModal},

        data: function () {
            return {
                likes: [],
                selectImage:0,
                isInvited:false,
                clientWidth:0,
                isLoadingWorks:false
            }
        },

        props:[
            'isAuth',
            'user',
            'selectelAddressWorks'
        ],

        created(){

        },

        mounted() {
            this.clientWidth = document.documentElement.clientWidth;
            axios({
                method: 'post',
                url:'/api/profile/'+this.$route.params['id']+'/likes',
            }).then((response) => {
                this.likes = response.data.likes;
                this.isLoadingWorks = true;
            });
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
                Object.keys(this.likes).forEach(function(id) {
                    this.urlList.push(this.selectelAddressWorks+this.likes[id].work.image.src)
                }.bind(this));
                return this.urlList;
            }
        },

        methods: {
            getImgSrc:function(source){
                return this.selectelAddressWorks+source;
            },
            prev(){
                let length = this.likes.length;
                this.selectImage === 0 ? this.selectImage = length - 1  : this.selectImage--;
            },
            next(){
                let length = this.likes.length;
                this.selectImage === length - 1 ? this.selectImage = 0 : this.selectImage++;

            },
            closeGallery:function(){
                this.$modal.hide('gallery');
            },
            showGallery:function(index){
                this.selectImage = index;
                this.$modal.show('gallery');
            },
            isHasAnyWorks:function(){
                return this.likes.length > 0 && this.isLoadingWorks;
            }
        }
    }
</script>
