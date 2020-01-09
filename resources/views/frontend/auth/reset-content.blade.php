<div class="limiter">
    <div class="container-login100">
        <div class="wrap-login100 p-l-85 p-r-85 p-t-55 p-b-55">
            <form method="POST"  class="login100-form validate-form flex-sb flex-w" action="{{ route('login') }}">
                @csrf
                <span class="login100-form-title p-b-32">
						Reset password
					</span>

                <span class="txt1 p-b-11">
						Email
					</span>
                <div class="wrap-input100 validate-input m-b-36" data-validate = "Username is required">
                    <input  class="input100 form-control @error('email') is-invalid @enderror"  type="text" name="email" value="{{ old('email') }}" >
                    @error('email')
                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                    @enderror
                    <span class="focus-input100"></span>
                </div>
                <div class="container-login100-form-btn">
                    <button class="login100-form-btn" type="submit">
                        {{ __('Login') }}
                    </button>
                </div>

            </form>
        </div>
    </div>
</div>
