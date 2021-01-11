  
import React from "react";
import profilePicture from "../../../static/assets/images/auth/profile-pic.jpg";

export default function() {
  return (
    <div className="content-page-wrapper">
      <div
        className="left-column"
        style={{
          background: "url(" + profilePicture + ") no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      />
      <div className="right-column">
      I am a passionate software developer with a talent for problem
       solving. I always see the bigger picture and rarely get distracted
        from accomplishing my goals. I have great experience with 
        communicating that makes it easy for me to work in a team and 
        with clients. With my ambition and humility, I bring a different
         perspective to work environments that help them be more 
         cohesive and well rounded. 
         <br/>
         I come from a family of 9 with 3 brothers and 3 sisters. I love them 
         and enjoy spending time with them, especially through travelling.
         I love the beach, the mountains, and anything outdoors. I grew up 
         in Arizona, but recently moved to Provo, UT to meet new people and find 
         new opportunities.
         <br/>
         I played football and basketball all while growing up, and played throughout 
         High School until I graduated in 2017. From there, I decided to serve a mission
         for the Church of Jesus Christ of Latter-Day Saints. For two years, I learned
         Spanish, all about spanish culture, and how to work with people and adapt to
         any situation. I developed great 
         communication skills and became a pro at goal-setting and getting things done.
         After my service, I attended Mesa Community College, and I am currently studying
         at Bottega University.
         <br/>
         My journey into tech began in the Summer of 2020, where I took a class on the basics
         of programming. I ended up really enjoying the class, and then enrolled in Bottega
         Devcamp in October 2020, graduating in January 2021. The course was so
          much fun. I learned to love coding in React, Python, and Javascript, and I plan on making
         a career out of this unique skill.
      </div>
    </div>
  );
}