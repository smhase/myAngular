## Routing

# Setting routes in app-routing.module.ts
- Setting childs and defining all possible routes in it

# @Injectable
- Check auth-guard.service.ts to see how injectables are used
- Injectable is used when one service uses another service

# Subscribing to changes in URL
- check user.component.ts

#  Managing wrong URLs or incorrect URLs redirection
- check app-routing to see the redirection to not-found component

# Good example of routerLink

# Good example of routerOutlet
- Important point to note here is that when you create children in routes see app-routing.module.ts
- Children routes behaves differently
- They need to have a routerLink at their parent level to be effectively loaded 

# Using queryParams in HTML
- This is to set parameters that are present after ? in any URL
- Check servers.component.html for examples

# Adding Fragment 
- That is going directly to a section of the same page. We use fragment
- Check servers.component.html for examples

# queryParamsHandling
- it is a parameter that is used with router.navigate to preserve the parameter or Fragment.
- There is no example here
- Check video 141 

# canActivate and canDeactivate
- canActivate is used to check whether the user is authorized to access the page
- canDeactivate is used to avoid user from leaving the page accidentally i.e. when some process is running which will get killed if the user leaves the page
- check edit-server.component.ts

# How canDeactivate works?
- Add the canDeactivate guard in app-routing
- Add canDeactivate in app-modules
- Add the can deactivate service -> can-deactivate-guard.serivce.ts
- Define an interface that will be implemented in the same class and the component that uses this service
- Add a class that will implement the canDeactivate function in can-deactivate-guard.service.ts. This class will in turn call the canDeactivate function defined the component file using the component parameter passed to canDeactivate
- Add a class in edit-server.component.ts that will implement the canDeactivate function
- So the control flow is 
user goes to the route -> angular uses can-deactivate-guard.service.ts as it is mentioned in the app-routing.ts -> can-deactivate-guard.service.ts calls the calls canDeactivate function in canDeactivateGuard which implements canDeactivate interface from angular/router. This canDeactivate function call the canDeactivate function from the component on which the guard is implemented.
- For demo login from home
- edit the server and try leaving without saving

## Login Functionality
Check 
- auth.service.ts
- auth-guard.service.ts

# Setting Authguards
- Restricting authority to access a page
- check auth-guard.service.ts and app-routing.module.ts
- check edit-server component

# This is how it works

app.module.ts
    We need to add two new services in providers, which is 
        AuthGuard
        AuthService
    
app-routing.module.ts
    Here you add canActivate property with parameters as the guards that you want to add on the given route
    These routes will be accessible only when the canActivate method in the mentioned guards will return True

auth-guard.service.ts
    This file has to do with telling if the user should be allowed to access the route it is applied on or not based on what auth.service.ts promise says

auth.service.ts
    This service returns a promise telling whether the user can access the page or not

edit-server has canDeActivated don't know why


## Server Resolver

# To load the server data in backend before loading the page itself.
- Cool thing to reduce the loading time and make the page load faster
- check server-resolver.service.ts
- Also check app.component.ts and app-routing.ts and check ngOnInit of server.component.ts