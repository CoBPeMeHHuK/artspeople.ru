<div class="profile_content chat">

	<div :class="{not_visible:!preloader}">
	</div>

	<div class="vue_container bg" :class="{preloader_hide:!preloader}">
		@if(Auth::check())
			<transition>
				<router-view v-bind:is-auth="true" :key="$route.params['id']" v-bind:connected-users="connectedUsers" v-bind:friend-requests="friendRequests" v-bind:statuses="statuses" v-bind:user-auth-avatar="userAuthAvatar" :auth-id="{{ Auth::id() }}" :class="{is_visible:!preloader}" :friends="{{ $friends }}" v-on:clear="clearMessages" v-bind:data-messages="dataMessages" v-bind:users="users" v-bind:user-auth="{{ Auth::user() }}" v-bind:user-select="userSelect"  v-on:preloader="getPreloader" v-on:message="getMessage" v-on:avatar="changeAvatar"></router-view>
			</transition>
			@else
		<transition>
			<router-view v-bind:is-auth="false" :key="$route.params['id']" v-bind:connected-users="connectedUsers" :class="{is_visible:!preloader}" :friends="{{ $friends }}" v-on:clear="clearMessages" v-bind:data-messages="dataMessages" v-bind:users="users" v-bind:user-auth="userAuth" v-bind:user-select="userSelect"  v-on:preloader="getPreloader" v-on:message="getMessage" v-on:avatar="changeAvatar"></router-view>
		</transition>
			@endif
	</div>

	<footer>
		<div  class="footer">
            <a href="https://instagram.com/artspeople.ru?igshid=bvoukvyxzxe6"><i class="fa fa-instagram"></i></a>
            <a href="https://t.me/CoBPeMeHHuK"><i class="fa fa-telegram"></i></a>
            <a href="https://vk.com/artspeopleru"><i class="fa fa-vk"></i></a>
		</div>
	</footer>

</div>
