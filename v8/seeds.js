var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment   = require("./models/comment");

var data = [
    {
        name: "Cloud's Rest", 
        image: "https://farm4.staticflickr.com/3795/10131087094_c1c0a1c859.jpg",
        description: "VHS poutine etsy shoreditch 3 wolf moon. Tbh godard pork belly XOXO vaporware portland, fingerstache brunch crucifix. Narwhal leggings master cleanse, organic mixtape artisan tacos street art pabst quinoa 90's edison bulb. Truffaut ethical intelligentsia salvia leggings, cardigan williamsburg thundercats la croix ennui. Kinfolk kickstarter typewriter tousled glossier, taxidermy coloring book brunch pug fanny pack mixtape fingerstache four loko synth. Synth tilde banh mi, yuccie typewriter brooklyn pitchfork lyft fixie microdosing direct trade viral ugh seitan slow-carb. Disrupt fashion axe fingerstache, forage retro helvetica austin messenger bag echo park woke small batch single-origin coffee meggings bushwick."
    },
    {
        name: "Desert Mesa", 
        image: "https://farm4.staticflickr.com/3859/15123592300_6eecab209b.jpg",
        description: "VHS poutine etsy shoreditch 3 wolf moon. Tbh godard pork belly XOXO vaporware portland, fingerstache brunch crucifix. Narwhal leggings master cleanse, organic mixtape artisan tacos street art pabst quinoa 90's edison bulb. Truffaut ethical intelligentsia salvia leggings, cardigan williamsburg thundercats la croix ennui. Kinfolk kickstarter typewriter tousled glossier, taxidermy coloring book brunch pug fanny pack mixtape fingerstache four loko synth. Synth tilde banh mi, yuccie typewriter brooklyn pitchfork lyft fixie microdosing direct trade viral ugh seitan slow-carb. Disrupt fashion axe fingerstache, forage retro helvetica austin messenger bag echo park woke small batch single-origin coffee meggings bushwick."
    },
    {
        name: "Canyon Floor", 
        image: "https://farm1.staticflickr.com/189/493046463_841a18169e.jpg",
        description: "VHS poutine etsy shoreditch 3 wolf moon. Tbh godard pork belly XOXO vaporware portland, fingerstache brunch crucifix. Narwhal leggings master cleanse, organic mixtape artisan tacos street art pabst quinoa 90's edison bulb. Truffaut ethical intelligentsia salvia leggings, cardigan williamsburg thundercats la croix ennui. Kinfolk kickstarter typewriter tousled glossier, taxidermy coloring book brunch pug fanny pack mixtape fingerstache four loko synth. Synth tilde banh mi, yuccie typewriter brooklyn pitchfork lyft fixie microdosing direct trade viral ugh seitan slow-carb. Disrupt fashion axe fingerstache, forage retro helvetica austin messenger bag echo park woke small batch single-origin coffee meggings bushwick."
    }
]

function seedDB(){
   //Remove all campgrounds
   Campground.remove({}, function(err){
        // if(err){
        //     console.log(err);
        // }
        // console.log("removed campgrounds!");
        //  //add a few campgrounds
        // data.forEach(function(seed){
        //     Campground.create(seed, function(err, campground){
        //         if(err){
        //             console.log(err)
        //         } else {
        //             console.log("added a campground");
        //             //create a comment
        //             Comment.create(
        //                 {
        //                     text: "This place is great, but I wish there was internet",
        //                     author: "Homer"
        //                 }, function(err, comment){
        //                     if(err){
        //                         console.log(err);
        //                     } else {
        //                         campground.comments.push(comment);
        //                         campground.save();
        //                         console.log("Created new comment");
        //                     }
        //                 });
        //         }
        //     });
        // });
    }); 
    //add a few comments
}

module.exports = seedDB;