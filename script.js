(function(angular){
		angular.module('app',['ngComponentRouter'])
		  .value('$routerRootComponent','app')
			.component('app',{
				template:'<ng-outlet></ng-outlet>',
				$routeConfig:[
						{ path:'/registration', name:'Registration', component:'registration' },
						{ path:'/account', name:'Account', component:'account', useAsDefault:true}
					]
			})
			.component('registration',{
				template:'This is registration component <br /> <a href="" ng-click="$ctrl.goToAccount()"> Go To Account </a>',
				controller:function(){
				  this.goToAccount = function(){
				      this.$router.navigate(['/Account'])
				  }
				},
				bindings:{
				  '$router':'<'
				}
			})
			.component('account',{
				template:`This is account component
							<br />
							<a href="" ng-click="$ctrl.goToRegistration()">
								Go to registration
							</a>
							`,
				controller:function(){
				  this.goToRegistration = function(){
					 	this.$router.navigate(['/Registration']);
					}
				},
				bindings:{
					'$router':'<'
				}
			})
	}(angular));