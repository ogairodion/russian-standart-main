import ProgressBar from "progressbar.js/dist/progressbar"
import Circle from "progressbar.js/src/circle"

let progressBarCircular1 = $('.progress-bar--circular-1');
let progressBarCircular2 = $('.progress-bar--circular-2');

if (progressBarCircular1[0]) {
    let bar1 = new ProgressBar.Circle('.progress-bar--circular-1', {
        strokeWidth: 8,
        easing: 'easeInOut',
        duration: 1400,
        color: '#C41D39',
        trailColor: '#efeff9',
        trailWidth: 1,
        svgStyle: null,
    });

    let barPercent1 = parseInt($('.progressbar-1').data('percent')) / 100;
    bar1.animate(barPercent1);  // Number from 0.0 to 1.0
}


if (progressBarCircular2[0]) {
    let bar2 = new ProgressBar.Circle('.progress-bar--circular-2', {
        strokeWidth: 8,
        easing: 'easeInOut',
        duration: 1400,
        color: '#83B143',
        trailColor: '#efeff9',
        trailWidth: 1,
        svgStyle: null,
    });
    
    let barPercent2 = parseInt($('.progressbar-2').data('percent')) / 100;
    
    bar2.animate(barPercent2);  // Number from 0.0 to 1.0
}