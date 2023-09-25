## Setup

npm install
ng serve

## Overview

The app provides a sign in page which requiers a username and a complex password. Upon login, user is redirected to the dasboard with a searchable table and a topbar. All fields in the table are searchable. To see active or inactive vehicles, type active or inactive into the search bar. There is a simple token setup that enables the user to stay signed in. The token is stored in the cookie and deleted only when user logs out.

## Arhitecture

Container-presentation pattern is used. There are two main modules, auth and dashboard. For simplicity, Auth is using a single smart component to both render the view and manipulate data. Dashboard is using three components, toolbar, vehicle-search and vehicle-table for view and one dashboard smart container for data manipulation. Shared contains the primeng module, which contains all primeng components that are used in the app. It also contains some modules that are used across the app.

## Live link
