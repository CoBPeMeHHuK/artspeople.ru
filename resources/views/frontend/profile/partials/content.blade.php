<div class="profile_content chat">

    <div :class="{not_visible:!preloader}">
    </div>

    <div class="vue_container bg" :class="{preloader_hide:!preloader}">
        <transition>
				<router-view
                    :selectel-address="{{ $selectelAddress }}"
                    :selectel-address-avatar="{{ $selectelAddressAvatar }}"
                    :selectel-address-works="{{ $selectelAddressWorks }}"
                    :key="$route.params['id']"
                    :connected-users="connectedUsers"
                    :class="{is_visible:!preloader}"
                    v-on:preloader="getPreloader"
                    :user-auth="userAuth"

                    @if(Auth::check())
                    :users="users"
                    :friends="{{ $friends }}"
                    :user-select="userSelect"
                    v-on:message="getMessage"
                    v-on:avatar="changeAvatar"
                    :data-messages="dataMessages"
                    v-on:clear="clearMessages"
                    :is-auth="true"
                    :friend-requests="friendRequests"
                    :statuses="statuses"
                    :user-auth-avatar="userAuthAvatar"
                    :auth-id="{{ Auth::id() }}"
                    @else

                    :is-auth="false"
                    @endif
                            >
                </router-view>
		</transition>

	</div>

    <footer>
        <div class="footer">
            <a href="https://instagram.com/artspeople.ru?igshid=bvoukvyxzxe6"><i class="fa fa-instagram"></i></a>
            <a href="https://t.me/CoBPeMeHHuK"><i class="fa fa-telegram"></i></a>
            <a href="https://vk.com/artspeopleru"><i class="fa fa-vk"></i></a>
        </div>
    </footer>

</div>
