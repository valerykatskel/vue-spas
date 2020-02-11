<template>
  <div>
    <form class="mt-3">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-6">
            <div class="card bg-light">
              <div class="card-body">
                <h3 class="font-weight-light mb-3">Log in</h3>
                <section class="form-group">
                  <div class="col-12 alert alert-danger px-3">error</div>
                  <label class="form-control-label sr-only" for="Email">Email</label>
                  <input required class="form-control" type="email" id="email" placeholder="Email" />
                </section>
                <section class="form-group">
                  <input required class="form-control" type="password" placeholder="Password" />
                </section>
                <div class="form-group text-right mb-0">
                  <button class="btn btn-primary" type="submit">Log in</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
    <p class="text-center mt-2">
      or
      <router-link to="/register">register</router-link>
    </p>
  </div>
</template>
