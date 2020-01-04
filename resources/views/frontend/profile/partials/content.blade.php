<div class="profile_content chat">

	<div :class="{not_visible:!preloader}">
		<div class="transition-loader-inner {{ $isAuth }}">
			<label></label>
			<label></label>
			<label></label>
			<label></label>
			<label></label>
			<label></label>
		</div>
	</div>

	<div class="vue_container">
		@if(Auth::check())
			<transition>
				<router-view :key="$route.params['id']" v-bind:friend-requests="friendRequests" v-bind:statuses="statuses" v-bind:user-auth-avatar="userAuthAvatar" :auth-id="{{ Auth::id() }}" :class="{is_visible:!preloader}" :friends="{{ $friends }}" v-on:clear="clearMessages" v-bind:data-messages="dataMessages" v-bind:users="users" v-bind:user-auth="{{ Auth::user() }}" v-bind:user-select="userSelect"  v-on:preloader="getPreloader" v-on:message="getMessage" v-on:avatar="changeAvatar"></router-view>
			</transition>
			@else
		<transition>
			<router-view :key="$route.params['id']" :class="{is_visible:!preloader}" :friends="{{ $friends }}" v-on:clear="clearMessages" v-bind:data-messages="dataMessages" v-bind:users="users" v-bind:user-auth="userAuth" v-bind:user-select="userSelect"  v-on:preloader="getPreloader" v-on:message="getMessage" v-on:avatar="changeAvatar"></router-view>
		</transition>
			@endif
	</div>

	<footer>
		<div  class="footer">
			<a href="#"><i class="fa fa-facebook"></i></a>
			<a href="#"><i class="fa fa-instagram"></i></a>
			<a href="#"><i class="fa fa-twitter"></i></a>
			<a href="#"><i class="fa fa-pinterest"></i></a>
			<a href="#"><i class="fa fa-vk"></i></a>
		</div>
	</footer>

</div>
