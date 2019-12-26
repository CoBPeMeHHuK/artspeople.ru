
<template>
    <div class="friends_container">
        <div class="friend_options__container mobile">
        <ul class="friend_options_ul">
            <li class="friend_options__li" v-for="friend in friends">
                <div class="option_people">
                    <div class="option_people__avatar_container mobile">
                        <div class="option_people__avatar mobile"
                             v-bind:style="{ background: 'url(/storage/'+friend.avatar.type+'/'+friend.avatar.src+') no-repeat' }">
                            <div class="option_people__online_icon_container mobile">
                                <div class="option_people__online_icon mobile"></div>
                            </div>
                        </div>
                    </div>
                    <div class="option_people_name mobile">
                        {{ friend.name +' '+ friend.surname }}
                    </div>
                    <div class="option_people_dots mobile" @click.stop="close" @click="selectedFriend = friend.id">
                        <div class="option_people_dots__menu mobile" v-show="isOpenFriendOption(friend.id)">
                            <ul class="option_people_dots__ul">
                                <router-link :to="{ name: 'person', params: { id: friend.id }}"><li>Профиль</li></router-link>
                                <li @click.stop="close">Название пункта</li>
                                <li @click.stop="close">Название пункта</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="option_people_line"></div>
            </li>
        </ul>
    </div>
    </div>
</template>
<script>
    export default {
        data: function () {
            return {
                user:[],
                avatar:'',
                subcategories:[],
                isAuth:false,
                selectedFriend:0
            }
        },

        props:[
            'friends',
            'authId'
        ],

        beforeCreate(){

            if(window.innerWidth > 992){
                this.$router.push({ path: '/profile/works' });
            }
        },

        created(){
            document.addEventListener('click', () => this.close());
        },

        mounted() {

            console.log('friend mounted');
            this.$emit('preloader', [{
                'isPreloader':false
            }]);

            console.log(this.friends);
        },

        beforeUpdate(){

        },

        updated(){

        },
        computed:{

        },

        methods: {
            close:function(){
                this.selectedFriend = 0;
            },
            isOpenFriendOption:function(event){
                let response = '';
                this.selectedFriend === event ? response = true: response = false;

                return response;
            }
        }
    }
</script>
