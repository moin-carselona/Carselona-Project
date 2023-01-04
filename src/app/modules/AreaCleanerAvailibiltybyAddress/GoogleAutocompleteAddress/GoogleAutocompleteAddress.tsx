import React, { useEffect, useRef, useState, memo } from 'react'
import { useDispatch } from 'react-redux';
// import './App.css'
// import { Search,  } from "@material-ui/icons"
const apiKey = "AIzaSyB1TLe_5fP2B85oU9mvzNnJbN6QuHjdjHE";
const mapApiJs = 'https://maps.googleapis.com/maps/api/js';
const geocodeJson = 'https://maps.googleapis.com/maps/api/geocode/json';
// load google map api js
function loadAsyncScript(src: any) {
    return new Promise(resolve => {
        const script = document.createElement("script");
        Object.assign(script, {
            type: "text/javascript",
            async: true,
            src
        })
        script.addEventListener("load", () => resolve(script));
        document.head.appendChild(script);
    })
}
const extractAddress = (place: any) => {
    const address = {
        city: "",
        state: "",
        zip: "",
        country: "",
        plain() {
            const city = this.city ? this.city + ", " : "";
            const zip = this.zip ? this.zip + ", " : "";
            const state = this.state ? this.state + ", " : "";
            return city + zip + state + this.country;
        }
    }
    if (!Array.isArray(place?.address_components)) {
        return address;
    }
    place.address_components.forEach((component: any) => {
        const types = component.types;
        const value = component.long_name;
        if (types.includes("locality")) {
            address.city = value;
        }
        if (types.includes("administrative_area_level_2")) {
            address.state = value;
        }
        if (types.includes("postal_code")) {
            address.zip = value;
        }
        if (types.includes("country")) {
            address.country = value;
        }
    });
    return address;
}
function GoogleAutocompleteAddress({ SetLatitude, SetLongitude }: any) {
    const distpatch = useDispatch()
    const searchInput = useRef<any>(null);
    const [address, setAddress] = useState<any>({});
    console.log('address', address);
    // init gmap script
    const initMapScript = () => {
        // if script already loaded
        if (window.google) {
            return Promise.resolve();
        }
        const src = `${mapApiJs}?key=${apiKey}&libraries=places&v=weekly`;
        return loadAsyncScript(src);
    }
    // do something on address change
    const onChangeAddress = (autocomplete: any) => {
        const place = autocomplete.getPlace();
        console.log('place', place);
        // console.log(place.geometry.location.lat())
        // setLatitude(place.geometry.location.lat() )
        // setLongitude(place.geometry.location.lng())
        distpatch({ type: "GOOGLEATUOCOMPLETEAREAWISE", payload: { ltd: place.geometry.location.lat(), lng: place.geometry.location.lng() } })
        // SetLatitude(place.geometry.location.lat())
        // SetLongitude(place.geometry.location.lng())
        // SetAddress(extractAddress(place))
        // setAddress(extractAddress(place));
    }
    // init autocomplete
    const initAutocomplete = () => {
        if (!searchInput.current) return;
        const autocomplete = new window.google.maps.places.Autocomplete(searchInput.current);
        autocomplete.setFields(["address_component", "geometry"]);
        autocomplete.addListener("place_changed", () => onChangeAddress(autocomplete));
    }
    const reverseGeocode = ({ latitude: lat, longitude: lng }: any) => {
        // console.log('lng', lng);
        // console.log('lat', lat);
        const url = `${geocodeJson}?key=${apiKey}&latlng=${lat},${lng}`;
        searchInput.current.value = "Getting your location...";
        fetch(url)
            .then(response => response.json())
            .then(location => {
                // console.log('location', location);
                // console.log('lng', lng);
                // console.log('lat', lat);
                const place = location.results[0];
                const _address = extractAddress(place);
                setAddress(_address);
                searchInput.current.value = _address.plain();
            })
    }
    const findMyLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                reverseGeocode(position.coords)
            })
        }
    }
    // load map script after mounted
    useEffect(() => {
        initMapScript().then(() => initAutocomplete())
    }, []);
    return (
        <>
            <input
                placeholder='Search Address Availibilty Here...'
                name='address'
                type='text'
                className='form-control form-control-solid mb-5 mb-lg-0'
                autoComplete='off'
                style={{height:"38px", width:"600px"}}
                ref={searchInput}
                onChange={(e) => console.log(e.target.value)}
            />
        </>
    )
}
export default memo(GoogleAutocompleteAddress)
