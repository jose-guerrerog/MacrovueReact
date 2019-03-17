This main component is App.js. This component is divided into 3 components: 'Header', 'Filters' and 'ContainerData'.

1) Header -> Contains the logo,'Activity view' section and username information
2) Filters -> Contains all the variables that serve to grab data, for example: countryCodes(JPY, USD, AUD, etc), entries dropdown, types dropdown, export file button
3) ContainerData -> Contains the table and pagination

In case that you want to test more, it is possible to add more data in the file 'FakeData.js'. This file contains only one variable named fakeData.

### Desktop View

Some of the characteristics in this view includes:

- The data table displays content when selecting different values for countryCode, entries ('Showing' dropdown), activity ('Type' dropdown) and page(pagination section)
- The type dropdown is filled dinamically with all the available types (that are unique) of the data displayed

### Mobile View

Some of the characteristics in this view includes:

- The data table displays content when selecting different values for countryCode dropdown, and activity ('Type' dropdown)
- The type dropdown is filled dinamically with all the available types (that are unique) of the data displayed
- The Close Button serves to hide and show the data

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.
