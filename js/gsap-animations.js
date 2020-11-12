// HEADER

gsap.to(".orange-white-text-1", { opacity: 1, delay: 0.3, duration: 1, ease: "power2.inOut" });
gsap.to(".white-on-blue-text-1", { opacity: 1, delay: 0.33, duration: 1, ease: "power2.inOut" });

//Numbers - Scrubbed
// var numbers_timeline = gsap.timeline({
// 	delay: 3,
// 	scrollTrigger: {
// 		trigger: "#numbers-section",
// 		start: "top center ",
// 		end: "bottom bottom",
// 		toggleActions: "play complete none complete",
// 	}
// });

// numbers_timeline
// 	.to("#number-img-1", { opacity: 1, duration: 0.5, ease: "power4.out" })
// 	.to("#number-img-2", { opacity: 1, duration: 0.5, ease: "power4.out" })
// 	.to("#number-img-3", { opacity: 1, duration: 0.5, ease: "power4.out" })

// Numbers Manual Scrubbed

gsap.to("#number-img-1", {
	opacity: 1,
	y: 0,
	duration: 0.8,
	ease: "power4.inOut",
	scrollTrigger: {
		trigger: "#numbers-section",
		start: "top 60% ",
		end: "bottom center"
	}
});
gsap.to("#number-img-2", {
	opacity: 1,
	y: 0,
	duration: 0.8,
	ease: "power4.inOut",
	scrollTrigger: {
		trigger: "#numbers-section",
		start: "top 50% ",
		end: "bottom center"
	}
});
gsap.to("#number-img-3", {
	opacity: 1,
	y: 0,
	duration: 0.8,
	ease: "power4.inOut",
	scrollTrigger: {
		trigger: "#numbers-section",
		start: "top 40% ",
		end: "bottom center"
	}
});

//MAPS SECTION

var maps_timeline = gsap.timeline({
	scrollTrigger: {
		trigger: "#pinned-section-1",
		pin: "#pinned-section-1",
		start: "top 5%",
		end: "800% 100%",
		pinSpacing: false,
		scrub: 1
	}
});

maps_timeline.from("#map-1-text", { x: -100, opacity: 0, delay: 3, duration: 1000, ease: "power4.out" });
maps_timeline.to("#map-1-text", { x: -100, opacity: 0, delay: 5, duration: 1000, ease: "power4.out" });
maps_timeline.to(".mini-map", { y: -100, opacity: 0, delay: 5, duration: 1000, ease: "power4.out" });
maps_timeline.to("#map-1", { opacity: 0, duration: 500, ease: "power3.inOut" });

maps_timeline.to("#map-2", { opacity: 1, duration: 0, ease: "power3.inOut" }, "+=500");
maps_timeline.from("#map-2-text-1", { x: -100, opacity: 0, delay: 10, duration: 1000, ease: "power4.out" }, "+=500");
maps_timeline.from("#map-2-text-2", { x: -100, opacity: 0, delay: 3, duration: 1000, ease: "power4.out" }, "+=100");

maps_timeline.to("#map-2-text-1", { x: -100, opacity: 0, delay: 10, duration: 1000, ease: "power4.out" });
maps_timeline.to("#map-2-text-2", { x: -100, opacity: 0, delay: 3, duration: 1000, ease: "power4.out" });
maps_timeline.to("#map-2", { opacity: 0, delay: 3, duration: 500, ease: "power3.inOut" });

maps_timeline.to("#map-3", { opacity: 1, duration: 0, ease: "power3.inOut" }, "+=500");
maps_timeline.from("#map-3-text-1", { x: -100, opacity: 0, delay: 10, duration: 1000, ease: "power4.out" }, "+=500");
maps_timeline.from("#map-3-text-2", { x: -100, opacity: 0, delay: 3, duration: 1000, ease: "power4.out" }, "+=100");

//SLIDER1

var slider_timeline_1 = gsap.timeline({
	scrollTrigger: {
		trigger: ".orange-stats-row",
		start: "top top",
		end: "800% bottom",
		pin: ".orange-stats-row",
		pinSpacing: false,
		scrub: true
	}
});

slider_timeline_1
	// .to("#stat-1", { opacity: 1, duration: 2, ease: "power3.inOut" })
	// .to("#stat-info-1", { opacity: 1, duration: 2, ease: "power3.inOut" }, "+=2")
	.to("#stat-info-1", { opacity: 0, duration: 2, ease: "power3.inOut" }, "+=5")
	.to("#stat-1", { opacity: 0, duration: 2, ease: "power3.inOut" }, "+=3")
	.to("#stat-2", { opacity: 1, duration: 2, ease: "power3.inOut" }, "-=1")
	.to("#stat-info-2", { opacity: 1, duration: 2, ease: "power3.inOut" }, "+=2")
	.to("#stat-info-2", { opacity: 0, duration: 2, ease: "power3.inOut" }, "+=5")
	.to("#stat-2", { opacity: 0, duration: 2, ease: "power3.inOut" }, "+=3")
	.to("#stat-3", { opacity: 1, duration: 2, ease: "power3.inOut" }, "-=1")
	.to("#stat-info-3", { opacity: 1, duration: 2, ease: "power3.inOut" }, "+=2")
	.to("#stat-info-3", { opacity: 0, duration: 2, ease: "power3.inOut" }, "+=5")
	.to("#stat-3", { opacity: 0, duration: 2, ease: "power3.inOut" }, "+=3")
	.to("#stat-4", { opacity: 1, duration: 2, ease: "power3.inOut" }, "-=1")
	.to("#stat-info-4", { opacity: 1, duration: 2, ease: "power3.inOut" }, "+=2");

//SLIDER-2
var slider_timeline_2 = gsap.timeline({
	scrollTrigger: {
		trigger: "#slider-2",
		start: "5% top",
		end: "500% bottom",
		pin: "#slider-2",
		pinSpacing: false,
		scrub: true
	}
});

slider_timeline_2
	.to("#slider-2-image1", { opacity: 0, duration: 1, ease: "power3.inOut" }, "+=5")
	.to("#slider-2-image2", { opacity: 1, duration: 1, ease: "power3.inOut" }, "-=.5")
	.to("#slider-2-image2", { opacity: 0, duration: 1, ease: "power3.inOut" }, "+=5")
	.to("#slider-2-image3", { opacity: 1, duration: 1, ease: "power3.inOut" }, "-=.5")
	.to("#slider-2-image3", { opacity: 0, duration: 1, ease: "power3.inOut" }, "+=5")
	.to("#slider-2-image4", { opacity: 1, duration: 1, ease: "power3.inOut" }, "-=.5");

//LIFE CYCLE

gsap.to("#lifecycle-title1", {
	opacity: 1,
	duration: 1,
	ease: "power2.Out",
	scrollTrigger: {
		trigger: ".lifecycle-row",
		start: "top 80%"
	}
});
gsap.to("#lifecycle-title2", {
	opacity: 1,
	duration: 1,
	delay: 0.3,
	ease: "power2.Out",
	scrollTrigger: {
		trigger: ".lifecycle-row",
		start: "top 80%"
	}
});

// text slide section

gsap.from(".investments-stats-top", {
	x: "-100%",
	opacity: 0,
	duration: 1,
	ease: "power2.Out",
	scrollTrigger: {
		trigger: ".investments-stats",
		start: "top center"
	}
});

gsap.from(".investments-stats-middle", {
	x: "-100%",
	opacity: 0,
	duration: 1,
	ease: "power2.Out",
	scrollTrigger: {
		trigger: ".investments-stats",
		start: "top center"
	}
});

gsap.from(".stunting-text-animation", {
	x: "100%",
	opacity: 0,
	duration: 1,
	ease: "power2.Out",
	scrollTrigger: {
		trigger: ".investments-stats-middle",
		start: "top center"
	}
});

gsap.from(".investments-stats-middle-2", {
	x: "-100%",
	opacity: 0,
	duration: 1,
	ease: "power2.Out",
	scrollTrigger: {
		trigger: ".stunting-text-animation",
		start: "top center"
	}
});

gsap.from(".school-completion-text-animation", {
	x: "100%",
	opacity: 0,
	duration: 1,
	ease: "power2.Out",
	scrollTrigger: {
		trigger: ".investments-stats-middle-2",
		start: "top center"
	}
});

gsap.from(".investments-stats-middle-4", {
	x: "-100%",
	opacity: 0,
	duration: 1,
	ease: "power2.Out",
	scrollTrigger: {
		trigger: ".school-completion-text-animation",
		start: "top center"
	}
});

gsap.from(".ecsape-text-animation", {
	x: "100%",
	opacity: 0,
	duration: 1,
	ease: "power2.Out",
	scrollTrigger: {
		trigger: ".investments-stats-middle-4",
		start: "top center"
	}
});

gsap.from(".reduce-text-animation", {
	x: "100%",
	opacity: 0,
	duration: 1,
	ease: "power2.Out",
	scrollTrigger: {
		trigger: ".ecsape-text-animation",
		start: "top center"
	}
});

//Partnership circles

var partnership_circles_timeline = gsap.timeline({
	scrollTrigger: {
		trigger: ".partnerships-circles",
		start: "top 25%"
	}
});

partnership_circles_timeline
	.from(".partner-circle-2", { opacity: 0, duration: 0.2, ease: "power2.Out" })
	.from(".partner-circle-3", { opacity: 0, duration: 0.2, ease: " power2.Out" })
	.from(".partner-circle-4", { opacity: 0, duration: 0.2, ease: "power2.Out" })
	.from(".partner-circle-5", { opacity: 0, duration: 0.2, ease: "power2.Out" })
	.from(".partner-circle-6", { opacity: 0, duration: 0.2, ease: "power2.Out" })
	.from(".partner-circle-1", { opacity: 0, duration: 0.2, ease: " power2.Out" })


//pinned maps

var pinned_maps_timeline = gsap.timeline({
	scrollTrigger: {
		trigger: "#pinned-maps",
		start: "top top",
		end: "300% bottom",
		pin: "#pinned-maps",
		pinSpacing: false,
		scrub: true
	}
});

pinned_maps_timeline
	.to("#bar-1-1", { opacity: 1 }, "+=5")
	.to("#bar-1-2", { opacity: 1 }, "+=5")
	.to("#pinned-map-1", { opacity: 0 }, "+=5")
	.to("#pinned-map-2", { opacity: 1 })
	.from("#bar-2-1", { opacity: 0, }, "+=5")
	.from("#bar-2-2", { opacity: 0 }, "+=5");
