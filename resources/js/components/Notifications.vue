
<template>
   <div class="personal_container__notifications">
       <div class="notification_container" v-if="friendRequests.length > 0">
           <div class="friends_requests__title">Заявки в друзья</div>
       <div class="friends_requests" :key="friendRequest.id"  v-for="friendRequest in friendRequests">
           <div class="friends_requests__user_container">
               <div class="information__title_container_request_friend">
                   <div class="information__person_avatar_friend"  v-bind:style="{ background: 'url(/storage/avatars/'+friendRequest.user.avatar.src+') no-repeat' }"></div>
                   <div class="information__person_info">
                       <div class="information__person_title_friend">
                           <p class="information__person_name_friend">{{ friendRequest.user.name +' '+ friendRequest.user.surname}}</p>
                           <p class="information__person_range_friend">Генералисимус</p>
                       </div>
                   </div>
               </div>
               <div class="information__navigation">
                   <div class="information__button_container_notification" v-show="isVisibleStatus ===  false">
                       <div class="btn_invite__notification" @click="addFriendToList(friendRequest.user.id)">
                           Добавить
                       </div>
                       <div class="btn_cancel" @click="rejectApplication(friendRequest.user.id)">
                           Убрать
                       </div>
                   </div>
                   <div class="response_html" v-show="isVisibleStatus ===  true" v-html="statusFriendNotification"></div>
               </div>
           </div>
       </div>
       </div>
       <div class="notification_container__default" v-else>
           <p>Здесь Вы будете видеть упоминания,<br> новые комментарии и отметки «Нравится».</p>
       </div>
   </div>
</template>
<script>
    export default {
        data: function () {
            return {
                friendRequests:[],
                statusFriendNotification:'',
                isVisibleStatus:false,
                statuses:[]
            }
        },

        props:[
            'userAuth'
        ],

        created(){
            axios({
                method: 'post',
                url:'/api/notifications',
            }).then((response) => {
               this.friendRequests = response.data.requests;
               this.statuses = response.data.statuses;
            });
        },

        mounted() {



            this.$emit('preloader', [{
                'isPreloader':false
            }]);
        },

        beforeUpdate(){

        },


        updated(){



        },
        computed:{

        },

        methods: {
            addFriendToList:function($id){

                axios({
                    method:'post',
                    url:'/api/request-to-friend-list',
                    params: {
                        user: $id,
                        status: this.statuses[2]
                    }
                }).then((response) => {
                    if(response.data.status === 'success'){
                        this.statusFriendNotification = 'Заявка принята';
                        this.isVisibleStatus = true;
                    }
                });
            },

            rejectApplication:function($id){

                axios({
                    method:'post',
                    url:'/api/request-to-friend-list',
                    params: {
                        user: $id,
                        status: this.statuses[4]
                    }
                }).then((response) => {
                    if(response.data.status === 'rejected'){
                        this.statusFriendNotification = 'Заявка отклонена';
                        this.isVisibleStatus = true;
                    }
                });
            }
        }
    }
</script>

