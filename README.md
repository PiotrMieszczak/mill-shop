<div id="top"></div>

<!-- PROJECT LOGO -->
<br />
  <h3 align="center">Shop demo</h3>

  <p align="center">
   
  </p>
</div>


<!-- ABOUT THE PROJECT -->
## About The Project
  
Project using Angular 19, Nx, Apollo GraphQL, Hygraph CSM for content managment and custom design system library.

<p align="right">(<a href="#top">back to top</a>)</p>

### Run App

To run the dev server for your app, use:

```sh
npx run mill-shop:serve:development
```

```sh
nx run-many --target=test
```

### Run Storybook

To run the dev server for your app, use:

```sh
npx nx run design-system:storybook 
```

## Roadmap
- [ ] Add automatic generation of changelog
- [ ] Fix scss files import inside storybook (angular component can't be imported)
- [ ] Investigate Hygraph CMS and query for related products entities to category
- [ ] Add error component
- [ ] Improve way of consuming UI library. Maybe publish?
- [ ] Improve unit tests
- [ ] Add e2e tests
