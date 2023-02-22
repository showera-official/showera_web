import Swup from "swup";
import SwupSlideTheme from "@swup/slide-theme";
import SwupPreloadPlugin from "@swup/preload-plugin";
import "tw-elements";
import $ from 'jquery';

// sidebar html component
const sideNav = document.querySelector("[data-te-sidenav-hidden]");

if (sideNav !== null) {
    // listening to "show.te.sidenav" event
    sideNav.addEventListener("shown.te.sidenav", (e) => {
        console.log("sidenav");
        
        // adjusts the sidenav backdrop by making it darker
        // selecting the backdrop
        document
            .querySelector("[data-te-backdrop-show]")
            .classList.replace("bg-black/10", "bg-black/90");
    });

    sideNav.addEventListener("hidden.te.sidenav", () => {
        console.log("sidenav hidden");
    });
}

let swup = new Swup({
    plugins: [
        new SwupSlideTheme({
            reversed: true,
        }),
        new SwupPreloadPlugin(),
    ],

    // transition: {
    //     from: "", // route of previous page
    //     to: "/try/try", // route of next page
    //     custom: "slide-out", // content of [data-swup-transition] attribute or customTransition property passed to loadPage()
    // },
});

// console.log("app.js test");
