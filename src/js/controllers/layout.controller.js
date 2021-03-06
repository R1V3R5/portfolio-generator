function LayoutController (UserService, $rootScope, $stateParams) {

   let vm = this;
   vm.logOut = logOut;
   vm.loggedIn = false;
   vm.username = UserService.getUser();

   init ()

  $rootScope.$on('loginChange', (event, status) => {
    vm.loggedIn = status;
  });

  function init () {
    vm.loggedIn = UserService.isLoggedIn();
  }

  
  function logOut () {
    UserService.logOut();
    vm.loggedIn = false;
  }     
}

LayoutController.$inject = ['UserService', '$rootScope', '$stateParams'];
export { LayoutController };