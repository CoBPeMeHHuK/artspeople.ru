<div id="app">
    <div class="wrapper_tabs">
        <div class="right_column">
            <h1>Лучшее за неделю</h1>
            <p>Последние загруженные работы мастеров</p>
        </div>
        <div class="left_column">
            <ul>
                <li class="choice_category"
                    :class="{choice_category__active:selectedTypeCategory === 0}"
                    @click="selectTypeCategory(0)">
                    <div>Общее</div>
                </li>

                <li class="choice_category"
                    :class="{choice_category__active:selectedTypeCategory === 2}"
                    @click="selectTypeCategory(2)">
                    <div>Татуировка</div>
                </li>
                <li class="choice_category"
                    :class="{choice_category__active:selectedTypeCategory === 1}"
                    @click="selectTypeCategory(1)">
                    <div>Фотография</div>
                </li>
            </ul>
        </div>
    </div>

    <div class="personal_gallery">
            <div class="wrapper_tab_content">
            <div class="works_container">
                <div class="gallery_works">
                    <div class="grid gallery_work_wrapper" v-if="getWorkItems.length > 0">
                        <div class="gallery_work grid-item" :key="workIndex" v-for="(work,workIndex) in getWorkItems" v-if="!((work.is_active_main_pages === 0)&&(work.is_moderated === 1))">
                            <div class="gallery_work__container">
                                <p class="work_gradient"></p>
                                <img v-bind:src="getImgSrc(work.image.src)" class="work" alt="image.png" :class="{new_work:(work.is_active_main_pages ==0)&&(work.is_moderated == 0)}">
                                <div class="work_eye__icon work_icons person" @click="showGallery(workIndex)"></div>
                                <div v-if="work.is_active_main_pages === 0" class="work_icons work_is_active__true" @click="addCancelActiveWorks(work,'add')"></div>
                                <div v-if="work.is_active_main_pages === 0" class="work_icons work_is_active__false" @click="addCancelActiveWorks(work,'cancel')"></div>
                                <div class="work_like__container">
                                    <div class="work_like__container_relative">
                                        <div class="work_like__icon work_icons" :class="{blue:isLike(workIndex)}"></div>
                                        <div class="count_likes work_icons" v-if="work.likes.length > 0" :class="{blue:isLike(workIndex)}">@{{ work.likes.length }}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="profile_works_container__default" v-else>
                        <p>Извините, произошла техническая ошибка</p>
                    </div>
                </div>


                <div class="modal_container_gallery" v-if="getWorkItems.length > 0">
                    <modal :height="'100%'" :width="'100%'" name="gallery">
                        <div class="image_container" v-if="clientWidth >= 992">
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
                                    <div class="information__title_container">
                                        <a v-bind:href="'/profile/'+ getWorkItems[selectImage].user.id">
                                        <div class="information__person_avatar" v-bind:style="{ background: 'url('+selectelAvatarSrc+getWorkItems[selectImage].avatar.src+') no-repeat' }"></div>
                                        </a>
                                        <div class="information__person_info">
                                            <div class="information__person_title">
                                                <a v-bind:href="'/profile/'+ getWorkItems[selectImage].user.id">
                                                    <p class="information__person_name">
                                                        @{{ getWorkItems[selectImage].user.surname +' '+getWorkItems[selectImage].user.name }}
                                                    </p>
                                                    <p class="information__person_range">Новичок</p>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="information__work_container">
                                        <div class="information__work_title" v-html="getWorkItems[selectImage].name"></div>
                                        <div class="information__work_description" v-html="getWorkItems[selectImage].description"></div>
                                        <div class="information__work_publication"><i>@{{ getWorkItems[selectImage].created_at}}</i></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="image_container image_container_mobile" v-else>
                            <div class="image_information__header_mobile">
                                <div class="information__title_container__mobile">
                                    <div class="information__title_container__mobile">
                                        <div class="information__person_avatar" v-bind:style="{ background: 'url('+selectelAvatarSrc+getWorkItems[selectImage].avatar.src+') no-repeat' }"></div>
                                        <div class="information__person_info">
                                            <div class="information__person_title">
                                                    <p class="information__person_name">
                                                        @{{ getWorkItems[selectImage].user.surname +' '+getWorkItems[selectImage].user.name }}
                                                    </p>
                                                <p class="information__person_range">Новичок</p>
                                            </div>
                                        </div>
                                    </div>
                                    <button type="button" @click="closeGallery" class="gallery_close close close_mobile" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                            </div>
                            <div class="image_content">
                                <transition name="image" mode="out-in">
                                    <img :key="selectImage"  class="image_item" :src="getUrlList[selectImage]">
                                </transition>
                                <a class="prev" @click="prev"><i class="fa fa-chevron-left"></i></a>
                                <a class="next" @click="next"><i class="fa fa-chevron-right"></i></a>
                            </div>

                            <div class="image_information">
                                <div class="information_container">
                                    <div class="information__work_container">
                                        <div class="information__work_title" v-html="getWorkItems[selectImage].name"></div>
                                        <div class="information__work_description" v-html="getWorkItems[selectImage].description"></div>
                                        <div class="information__work_publication"><i>@{{ getWorkItems[selectImage].created_at}}</i></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </modal>
                </div>
            </div>
        </div>
    </div>
</div>
