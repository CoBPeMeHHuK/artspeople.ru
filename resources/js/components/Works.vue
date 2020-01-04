

<template>
    <div class="upload_container">
        <vue-dropzone id="dropzone" ref="dropzone"
                      :options="dropOptions"
                      @vdropzone-file-added="addedFile"
                      @vdropzone-sending-multiple="sending"
                      @vdropzone-success="successUpload"
        ></vue-dropzone>
        <div class="send_container">
            <button class="btn btn-primary" @click="uploadFiles" v-show="isAddedFile">Загрузить</button>
        </div>
        <div class="works_container" v-if="works.length > 0 ">
            <div class="gallery_works">
                <div class="grid gallery_work_wrapper is_auth">
                    <div class="gallery_work grid-item"  :key="workIndex" v-for="(work,workIndex) in works">
                        <div class="gallery_work__container">
                            <p class="work_gradient"></p>
                            <img  class="work" v-bind:src="getImgSrc(work.src)" alt="image.png">
                            <div class="work_option__icon work_icons" @click="show(work.id)"></div>
                            <div class="work_delete__icon work_icons" @click="deleteWork(workIndex)"></div>
                            <div class="work_eye__icon work_icons" @click="showGallery(workIndex)"></div>
                            <div class="work_like__icon work_icons"></div>
                            <div class="count_likes work_icons">7</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="works_container__default" v-else>У вас пока нету загруженных работ</div>
        <div class="modal_container_option">
            <modal name="option" :height="heightModal" :width="widthModal">
            <div class="modal_container">
                <div class="modal_header">
                    <div class="modal_header__container">
                        <span>Настройки</span>
                        <div class="close_container">
                            <span @click="hide" class="modal_close"></span>
                        </div>
                    </div>
                </div>
                <div class="modal_content" :height="heightModal" :width="widthModal">
                    <label>Выбор подкатегории
                        <select class="image-select form-control form-control-lg form-padding option_custom" v-model="selectSubcategory">
                            <option v-for="subcategory in subcategories" :selected="subcategory.id == selectSubcategory" :value="subcategory.id">{{ subcategory.title }}</option>
                        </select>
                    </label>
                    <label> Название
                        <input type="text" class="form-control option_custom" v-model="selectTitle">
                    </label>
                    <label> Описание
                        <textarea class="form-control option_custom" v-model="selectDescription"></textarea>
                    </label>
                </div>
                <div class="modal_button__container upload">
                    <button @click="updateSettings">Сохранить</button>
                </div>
            </div>
        </modal>
        </div>
        <div class="modal_container_gallery" v-if="works.length > 0 ">
            <modal :height="'100%'" :width="'100%'" name="gallery">
            <div class="image_container">
                <div class="image_content">
                    <transition name="image" mode="out-in">
                        <img :key="selectImage"  class="image_item" :src="getUrlList[selectImage]">
                    </transition>
                    <a class="prev" @click="prev"><i class="fa fa-chevron-left"></i></a>
                    <a class="next" @click="next"><i class="fa fa-chevron-right"></i></a>
                </div>

                <div class="image_information">
                    <button type="button" @click="closeGallery" class="gallery_close close" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    <div class="information_container">
                        <div class="information__work_container">
                            <div class="information__work_title" v-html="works[selectImage].title"></div>
                            <div class="information__work_description" v-html="works[selectImage].description"></div>
                            <div class="information__work_publication"><i>{{ works[selectImage].created}}</i></div>
                        </div>
                    </div>
                </div>
            </div>
        </modal>
        </div>
    </div>
</template>
<script>

    import vueDropzone from "vue2-dropzone";
    import 'vue2-dropzone/dist/vue2Dropzone.min.css';
    import 'sweetalert2/dist/sweetalert2.min.css';







    export default {
        data: function () {
            return {
                isAddedFile:false,
                isInvited:false,
                selectImage:0,
                selectTitle:null,
                selectDescription:null,
                selectSubcategory:null,
                index:null,
                selectId:null,
                selectelUrl:'https://357319.selcdn.ru/artspeople/works/',
                urlList:[],
                works: [],
                subcategories: [],
                template:'',
                widthModal:600,
                heightModal:370,
                dropOptions: {
                    url: "/api/upload-works",
                    maxFilesize: 5, // MB
                    maxFiles: 4,
                    thumbnailWidth: 320, // px
                    thumbnailHeight: 330,
                    addRemoveLinks: false,
                    dictDefaultMessage: "<i class='fa fa-cloud-upload'></i>Выбрать",
                    autoProcessQueue: false,
                    uploadMultiple: true,
                    previewTemplate:'',
                    parallelUploads:1,
                    headers: {
                        'X-CSRF-TOKEN': $('meta[name="_token"]').attr('content')
                    },
                },
            }
        },












        props: [
            'user-auth'
        ],
        components: {
            vueDropzone,
        },











        created() {
            if(window.innerWidth <= 600){
                this.widthModal = window.innerWidth - 10;
                this.heightModal = 350;
            }
            axios({
                method: 'post',
                url: '/api/get-upload-works',
            }).then((response) => {
                this.works = response.data;
                this.$emit('preloader', [{
                    'isPreloader': false
                }]);
            });
        },












        mounted() {

            axios({
                method: 'post',
                url: '/api/get-auth-subcategories',
            }).then((response) =>
            {

                this.subcategories = response.data;

                let template = '';
                template += '<div class="dz-preview dz-file-preview">'+
                    '<div class="dz-image">'+
                    '<img data-dz-thumbnail />'+
                    '</div>'+
                    '<div class="dz-details">'+
                    '<div class="dz_close_image"> <p></p></div>'+
                    '<label class="dz-custom">Выбор подкатегории</label>'+
                    '<select class="image-select form-control form-control-lg form-padding">';
                Object.keys(response.data).forEach(function (id) {
                    template += '<option value="'+response.data[id].id+'">'+response.data[id].title+'</option>';
                }.bind(this));

                template += '</select>'+
                    '<div class="dz-custom">'+
                    '<label>Название</label>'+
                    '<input class="dz_name_work form-control" type="text" name="title">'+
                    '</div>'+
                    '<div class="dz-custom">'+
                    '<label>Описание</label>'+
                    '<textarea class="dz_description_work form-control" name="description"></textarea>'+
                    '</div>'+
                    '</div>'+
                    '<div class="dz-error-message"><span data-dz-errormessage></span></div>'+
                    '<div class="dz-remove basket" href="javascript:undefined;" data-dz-remove=""></div>'+
                    '</div>';
                this.$refs.dropzone.dropzone.options.previewTemplate = template;

            });

            // this.$emit('preloader', [{
            //     'isPreloader': false
            // }]);
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

            // this.$emit('preloader', [{
            //     'isPreloader':false
            // }]);
        },















        computed: {
            getUrlList:function(){
                this.urlList = [];
                Object.keys(this.works).forEach(function(id) {
                    this.urlList.push(this.selectelUrl+this.works[id].src)
                }.bind(this));
                return this.urlList;
            }
        },















        methods: {
            uploadFiles: function () {
                this.$refs.dropzone.processQueue()
            },

            addedFile: function (file) {
                $('.dz-preview').on('click', function () {
                    if ($(this).hasClass('active')) {
                    } else {
                        $(this).addClass('active');
                    }
                });
                $('.dz_close_image p').on('click', function (event) {
                    event.stopPropagation();
                    $(this).parent().parent().parent().removeClass('active');
                });

                this.isAddedFile = true;
            },

            sending:function (file, xhr, formData) {
                Object.keys(file).forEach(function (i) {
                     formData.append('title' , $(file[i].previewElement).find('.dz_name_work').val());
                     formData.append('description' , $(file[i].previewElement).find('.dz_description_work').val());
                     formData.append('subcategory' , $(file[i].previewElement).find('.image-select').val());
                 });
            },

            successUpload:function(file, response){
                console.log(response);
                this.works.unshift({
                    'src':response.path,
                    'subcategory_id':response.subcategory_id,
                    'title':response.title,
                    'description':response.description,
                    'id':response.id_db,
                    'rating':1,
                    'count_views':0,
                    'is_active':1,
                });
                this.$refs.dropzone.dropzone.removeFile(file);
                $('.grid').masonry('destroy');
            },
            getImgSrc:function(source){
                return this.selectelUrl+source;
            },

            show (id) {
                let work = this.works.find(x=>x.id === id);
                this.selectId = id;
                this.selectTitle = work.title;
                this.selectDescription = work.description;
                this.selectSubcategory = work.subcategory_id;
                this.$modal.show('option');
            },

            hide () {
                this.$modal.hide('option');
            },

            updateSettings:function(){
                axios({
                    method: 'post',
                    url: '/api/update-settings-work',
                    params: {
                        'title':this.selectTitle,
                        'description':this.selectDescription,
                        'subcategory':this.selectSubcategory,
                        'id':this.selectId
                    }
                }).then((response) => {
                    if(response.data.status === 'success'){
                        console.log(this.works.find(x=>x.id === Number(response.data.id)));
                        this.works.find(x=>x.id === Number(response.data.id)).title = response.data.title;
                        this.works.find(x=>x.id === Number(response.data.id)).subcategory_id = response.data.subcategory_id;
                        this.works.find(x=>x.id === Number(response.data.id)).description = response.data.description;
                    }else{
                        alert('settings dont saves');
                    }

                });
                this.$modal.hide('option');
            },

            showGallery:function(index){
                this.selectImage = index;
                this.$modal.show('gallery');
            },

            deleteWork:function(id){

                let idDelete = this.works[id].id;

                this.$swal.fire({
                        title: 'Удалить работу ?',
                        text: "",
                        icon: 'warning',
                        showCancelButton: true,
                        confirmButtonColor: '#d33',
                        cancelButtonColor: '#3085d6',
                        confirmButtonText: 'Да',
                        cancelButtonText: 'Нет'
                    }).then((result) => {
                        if (result.value) {
                            axios({
                                method: 'post',
                                url: '/api/delete-work',
                                params: {
                                    'id':idDelete
                                }
                            }).then((response) => {
                                if(response.data.status === 'success'){

                                    console.log(idDelete);
                                    this.works.splice(id,1);
                                    this.$swal.fire(
                                        'Deleted!',
                                        'Your file has been deleted.',
                                        'success'
                                    )
                                }
                            });
                        }
                });
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
            }
        }
    }
</script>

















<style>
    .dropzone{
        min-height: 50px;
        border-radius: 5px;
    }
    .dropzone .dz-preview {
        height: 330px;
        cursor: pointer;
    }


    .vue-dropzone > .dz-preview .dz-image {
        border-radius: 5px;
        z-index: 0;
    }

    .dropzone .dz-preview:hover .dz-image img {
        transform: none;
        -webkit-filter: none;
        filter: none;
    }

    .dropzone .dz-preview:hover .dz-details {
        opacity: 0;
    }

    .vue-dropzone > .dz-preview:hover .dz-remove {
        opacity: 0;
    }

    .dropzone .dz-preview.active .dz-image img {
        transform: scale(1.05, 1.05);
        -webkit-filter: blur(8px);
        filter: blur(8px) brightness(0.5);
    }

    .dropzone .dz-preview.active .dz-details {
        opacity: 1;
    }

    .vue-dropzone > .dz-preview.active .dz-remove {
        opacity: 1;
        text-decoration: none;
        background: url(/images/profile/icons/garbage_blue.png) no-repeat;
        font-size: 5px;
        font-family: 'Circe';
        border: none;
        width: 25px;
        height: 25px;
        background-size: cover;
    }

    .vue-dropzone > .dz-preview .dz-details {
        background-color: transparent;
        padding: 1em;
    }

    .dz_close_image p {
        width: 15px;
        height: 15px;
        background: url(/images/profile/icons/exit.svg);
        background-size: cover;
        cursor: pointer !important;
        margin-left: calc(100% - 15px);
    }

    .dz-custom {
        margin-top: 5px;
    }

    .dz-custom input {
        width: 100%;
        color: #000;
        font-family: 'Circe';
    }

    .vue-dropzone > .dz-preview .dz-remove {
        margin-left: 0;
        right: 3em;

    }

    .upload_container {
        padding: 20px;
    }

    .send_container {
        text-align: right;
        padding: 15px 0;
    }

    .fa-cloud-upload {
        width: 30px;
    }

    .dropzone .dz-message {
        margin:0;
    }

    textarea.form-control {
        height: 80px;
    }

    .modal_container_option > .v--modal-overlay > .v--modal-background-click > .v--modal-box{
        margin-left: 100px;
        border-radius: 5px;
    }

    .modal_container_gallery > .v--modal-overlay > .v--modal-background-click > .v--modal-box{
        border-radius: 0;
    }

    .modal_container_gallery > .v--modal-overlay{
        width: calc(100% - 240px);
        height: calc(100% - 50px);
        top: 50px;
        left: 240px;
    }

    .modal_container_gallery > .v--modal-overlay > .v--modal-background-click > .v--modal-box{
        width: 100%!important;
        height: 100%!important;
    }

    .image_container{
        width: 100%;
        height: 100%;
        display: flex;
    }

    .image_content{
        width: calc(100% - 280px);
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #000000;
        position: relative;
    }

    .image_information{
        width: 280px;
        height: 100%;
        background: #232323;
    }

    .image_item{
        width: auto;
        max-width: 100%;
        height: auto;
        max-height: 100%;
        transition: 1s;
    }

    .image-enter-active,
    .image-leave-active {
        transition: opacity .3s;

    }

    .image-enter,
    .image-leave-to {
        opacity: 0;
    }


    .prev{
        position: absolute;
        display: flex;
        left: 15px;
        margin-top: -23px;
        font-size: 45px;
        font-weight: 100;
        line-height: 30px;
        text-align: center;
        opacity: .5;
        cursor: pointer;
        color:#ffffff;
        height: 100%;
        width: 400px;
        align-items: center;
        justify-content: flex-start;
    }

    .next{
        position: absolute;
        display: flex;
        align-items: center;
        right: 15px;
        margin-top: -23px;
        font-size: 45px;
        font-weight: 100;
        line-height: 30px;
        text-align: center;
        opacity: .5;
        cursor: pointer;
        color:#ffffff;
        height: 100%;
        width: 400px;
        justify-content: flex-end;
    }

    .next:hover, .prev:hover{
        opacity: 0.8;
        color: #ffffff;
    }

    .information__title_container{
        display: flex;
        padding:50px 30px 30px 30px;
    }

    .information__person_avatar{
        border-radius: 50%;
        height: 60px;
        width: 60px;
        background-color: white;
        position: relative;
        background-size: cover!important;
    }

    .information__person_name{
        font-size: 22px;
        font-family: 'Circe';
        color: #11b0f1;
        margin: 0;
        padding: 0 10px 0;
    }

    .information__person_range{
        font-size: 14px;
        font-family: 'Circe';
        padding: 0 10px;
        color: #ffffff;
    }

    .information__button_container{
        display: flex;
        justify-content: space-between;
        width: 220px;
        margin: 0 auto;
    }

    .information__button_container .btn_like{
        background: #59c557;
        width: 100px;
        height: 29px;
        display: flex;
        -webkit-border-radius: 3px;
        -moz-border-radius: 3px;
        border-radius: 3px;
        justify-content: center;
        align-items: center;
        cursor: pointer;

    }

    .information__button_container .btn_like:hover{
        background:  #16ac55;
    }


    .information__button_container .btn_invite{
        width: 100px;
    }

    .like_work{
        background: url(/images/profile/icons/like-image.png) no-repeat;
        width: 18px;
        height: 18px;
        background-size: cover;
        margin-bottom: 4px;
    }

    .information__work_container{
        padding: 50px 0px 10px 0px;
        color: #fff;
        font-family: 'Circe';
        border-bottom: 1px solid #454646;
        margin: 0 30px 0 30px;
    }

    .information__work_title{
        font-size: 22px;
    }

    .information__work_description{
        padding: 10px 0;
    }
    .gallery_close.close{
        font-size: 28px;
        color: white;
        margin: 7px;
        outline: none;
    }

    @media (max-width: 992px) {
       #dropzone{
           margin-top: 70px;
       }

        .modal_container_option > .v--modal-overlay > .v--modal-background-click > .v--modal-box{
            margin-left: 0;
        }

        .modal_button__container.upload{
            padding-top: 10px;
        }

        .modal_container_gallery > .v--modal-overlay{
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
        }

        .image_container{
            display: block;
            overflow: auto;
            background: #232323;
            margin-top: 30px;
        }

        .image_content{
            width: 100%;
            height: auto;
        }
        .image_information{
            width: calc(100% - 10px);
        }

        .next{
            font-size: 30px;
            width: 100px;
            margin-top: 0;
        }

        .prev{
            font-size: 30px;
            width: 100px;
            margin-top: 0;
        }
        
        .v--modal-box{
            background: #232323;
        }
    }
</style>
