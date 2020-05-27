# angular-essentials-widget

Repo for what I make in the Angular Udemy course: https://www.udemy.com/course/angular-essentials-angular-2-angular-4-with-typescript/

Current spot: Finished Lesson 8 on Routing.

<hr/>

Things to remember:

-- Creating an Angular project (when you have nginx / Angular CLI installed) <br/>
ng new app-name

-- Running the app <br/>
cd C:\Users\Matt\Documents\Side-Hustles\angular-essentials-widget\angular-essentials <br/>
ng serve

-- URL <br/>
http://localhost:4200/

-- Creating a component <br/>
(may have to cd to the app folder, or at least the base project directory) <br/>
ng g c component-name <br/>
You can mod this to add <br/>
ng g c component-name --skipTests=true <br/>
In order to avoid creating a .spec.ts file

-- Creating a service <br/>
(same deal as above) <br/>
ng g s service-name

-- Dependency Injection / Injecting Services <br/>
Services are a great tool to cleanly pass and update properties between components despite hierarchical differences <br/>
You identify them as a provider in the AppModule so that you can then add them to the constructors and thus as <br/> attributes to the dependent components. These components use them in methods for event emitting or other basic <br/>
operations. Note: Need Injectable decorator in order to inject a service within a service.

-- Form Handling <br/>
Angular has two approaches to form-handling: The Template approach and the Reactive approach. We went over the <br/>
template approach in this course, but would need to research the Reactive approach in order to compare.
