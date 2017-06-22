## Component Hierarchy
top level
--

**AppComponent**
 - NavBarContainer
 - AuthFormContainer
 - HomeIndexContainer
 - IndexPageComponent
 - ShowPageContainer
 - TripIndexContainer
 - ListingsIndexContainer

whole pages components
--
**AuthFormContainer**
props:
`currentUser`
- AuthFormComponent

**HomeContainer**
props:
	`spots`, `className`
+ SpotIndex (shared)
	+ SpotIndexItem

**indexPageComponent**
- searchIndexContainer
- MapContainer

**ShowPageContainer**
props:
`spot`, `bookings`, `createBooking`
- BookingFormComponent
- ReviewIndexContainer
- MapContainer

**TripsIndexContainer**
props:
	`spots`, `tripProps`
+ SpotIndex (shared)
	+ SpotIndexItem

**ListingsIndexContainer**
props:
	`spots`, `listingProps`, `CreateListing`
+ SpotIndex (shared)
	- SpotIndexItem
+ ListingFormComponent

lower level components
--

**NavBarContainer**
props:
	 `currentUser`, `requestAutofill`, `requestSpots`
-SearchFormComponent

**MapContainer**
props:
	`spots`, `currentSearchBounds`, `requestSpots`


**searchIndexContainer**
props:
	`spots`, `byPrice`, `byCapacity`, `className`
+ SpotIndex (shared)
	+ SpotIndexItem

**ReviewIndexContainer**
props:
`reviewTogglestate`, `toggleReviewState`, `reviews`, `requestReviews`, `createReview`
- ReviewForm
- ReviewIndexItem



## Routes

|Path   | Component   |
|-------|-------------|
| "/sign-up" | AuthFormContainer |
| "/sign-in" | AuthFormContainer |
| "/" | HomeContainer |
| "/spots" | IndexPageComponent |
| "spots/:id" | ShowPageContainer |
| "/mytrips" | TripsIndexContainer |
| "/host" | ListingIndexContainer|
| "/new/spot" | ListingForm|
