var CustomMapStyles = [
	{
		elementType: "geometry",
		stylers: [
			{
				color: "#212121",
			},
		],
	},
	{
		elementType: "labels.icon",
		stylers: [
			{
				visibility: "off",
			},
		],
	},
	{
		elementType: "labels.text.fill",
		stylers: [
			{
				color: "#6100df",
			},
			{
				lightness: 100,
			},
		],
	},
	{
		elementType: "labels.text.stroke",
		stylers: [
			{
				color: "#212121",
			},
		],
	},
	{
		featureType: "administrative",
		elementType: "geometry",
		stylers: [
			{
				color: "#757575",
			},
		],
	},
	{
		featureType: "administrative.country",
		elementType: "labels.text.fill",
		stylers: [
			{
				color: "#9e9e9e",
			},
		],
	},
	{
		featureType: "administrative.land_parcel",
		stylers: [
			{
				visibility: "off",
			},
		],
	},
	{
		featureType: "administrative.locality",
		elementType: "labels.text.fill",
		stylers: [
			{
				color: "#bdbdbd",
			},
		],
	},
	{
		featureType: "landscape",
		elementType: "geometry",
		stylers: [
			{
				color: "#262626",
			},
		],
	},
	{
		featureType: "poi",
		elementType: "labels.text.fill",
		stylers: [
			{
				color: "#757575",
			},
		],
	},
	{
		featureType: "poi.park",
		elementType: "geometry",
		stylers: [
			{
				color: "#181818",
			},
		],
	},
	{
		featureType: "poi.park",
		elementType: "labels.text.fill",
		stylers: [
			{
				color: "#616161",
			},
		],
	},
	{
		featureType: "poi.park",
		elementType: "labels.text.stroke",
		stylers: [
			{
				color: "#1b1b1b",
			},
		],
	},
	{
		featureType: "road",
		elementType: "geometry.fill",
		stylers: [
			{
				color: "#2c2c2c",
			},
		],
	},
	{
		featureType: "road",
		elementType: "labels.text.fill",
		stylers: [
			{
				color: "#8a8a8a",
			},
		],
	},
	{
		featureType: "road.arterial",
		elementType: "geometry",
		stylers: [
			{
				color: "#290c55",
			},
			{
				lightness: 30,
			},
		],
	},
	{
		featureType: "road.arterial",
		elementType: "labels.text",
		stylers: [
			{
				color: "#ffffff",
			},
		],
	},
	{
		featureType: "road.arterial",
		elementType: "labels.text.stroke",
		stylers: [
			{
				color: "#000000",
			},
		],
	},
	{
		featureType: "road.highway",
		elementType: "geometry",
		stylers: [
			{
				color: "#5d76f4",
			},
		],
	},
	{
		featureType: "road.highway",
		elementType: "geometry.stroke",
		stylers: [
			{
				color: "#000000",
			},
		],
	},
	{
		featureType: "road.highway",
		elementType: "labels.text",
		stylers: [
			{
				color: "#ffffff",
			},
		],
	},
	{
		featureType: "road.highway",
		elementType: "labels.text.stroke",
		stylers: [
			{
				color: "#000000",
			},
		],
	},
	{
		featureType: "road.highway.controlled_access",
		elementType: "geometry",
		stylers: [
			{
				color: "#5d76f4",
			},
		],
	},
	{
		featureType: "road.local",
		elementType: "geometry",
		stylers: [
			{
				color: "#512154",
			},
			{
				lightness: 5,
			},
		],
	},
	{
		featureType: "road.local",
		elementType: "labels.text.fill",
		stylers: [
			{
				color: "#a3a3a3",
			},
		],
	},
	{
		featureType: "transit",
		elementType: "labels.text.fill",
		stylers: [
			{
				color: "#757575",
			},
		],
	},
	{
		featureType: "water",
		elementType: "geometry",
		stylers: [
			{
				color: "#6100df",
			},
			{
				lightness: -65,
			},
		],
	},
	{
		featureType: "water",
		elementType: "labels.text.fill",
		stylers: [
			{
				color: "#c7c7c7",
			},
		],
	},
];

google.maps.event.addDomListener(window, "load", function () {
	// Initialize your map
	var map = new google.maps.Map(document.getElementById("map_div"), {
		center: new google.maps.LatLng(35.3733, -119.0187),
		zoom: 14,
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		styles: CustomMapStyles,
		streetViewControl: false,
		zoomControl: false,
		mapTypeControl: false,
	});
});
