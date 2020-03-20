# MyApp

## Running the app

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`.
## Running unit tests

Run `ng test` to execute the unit tests.

## A bit about the app

View information on countries by region. 

The countries list data is only fetched once from the API, otherwise we use data present from the store.

The component (places-dropdown) is a resuable one and is used for the regions and countries dropdowns. It also allows for two-way binding as we want the model to be available in the parent component.

## Other imporovements that need to be made

More in-depth unit testing and e2e testing. The effects and reducers require tests around them.

Make use of interfaces.

Possible use LocalStorage to cache the data.
