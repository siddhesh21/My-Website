// import React from "react";

// const Resume = ({ data }) => {
//   if (data) {
//     var MLskillmessage = data.MLskillmessage;
//     var Programmingskillmessage = data.Programmingskillmessage;
//     var Selfskillmessage = data.Selfskillmessage;

//     var pskills = data.pskills.map(function (pskills) {
//       var className = "bar-expand " + pskills.name.toLowerCase();
//       return (
//         <li key={pskills.name}>
//           <span style={{ width: pskills.level }} className={className}></span>
//           <em>{pskills.name}</em>
//         </li>
//       );
//     });

//     var mskills = data.mskills.map(function (mskills) {
//       var className = "bar-expand " + mskills.name.toLowerCase();
//       return (
//         <li key={mskills.name}>
//           <span style={{ width: mskills.level }} className={className}></span>
//           <em>{mskills.name}</em>
//         </li>
//       );
//     });

//     var lskills = data.lskills.map(function (lskills) {
//       var className = "bar-expand " + lskills.name.toLowerCase();
//       return (
//         <li key={lskills.name}>
//           <span style={{ width: lskills.level }} className={className}></span>
//           <em>{lskills.name}</em>
//         </li>
//       );
//     });

//     var work = data.work.map(function (work) {
//       return (
//         <div key={work.company}>
//           <h3>{work.company}</h3>
//           <p className="info">
//             {work.title}
//             <span>&bull;</span> <em className="date">{work.years}</em>
//           </p>
//           <p>{work.description}</p>
//         </div>
//       );
//     });
//     var education = data.education.map(function (education) {
//       return (
//         <div key={education.school}>
//           <h3>{education.school}</h3>
//           <p className="info">
//             {education.degree} <span>&bull;</span>
//             <em className="date">{education.graduated}</em>
//           </p>
//           <h4>{education.description}</h4>
//         </div>
//       );
//     });
// }

  // return (
  //   <section id="resume">
  //     <div className="row education">
  //       <div className="three columns header-col">
  //         <h1>
  //           <span>Education</span>
  //         </h1>
  //       </div>

  //       <div className="nine columns main-col">
  //         <div className="row item">
  //           <div className="twelve columns">{education}</div>
  //         </div>
  //       </div>
  //     </div>

  //     <div className="row work">
  //       <div className="three columns header-col">
  //         <h1>
  //           <span>Work</span>
  //         </h1>
  //       </div>

  //       <div className="nine columns main-col">{work}</div>
  //     </div>

  //     {/* Programming Skills */}
  //     <div className="row skill">
  //       <div className="three columns header-col">
  //         <h1>
  //           <span>Skills</span>
  //         </h1>
  //       </div>
  //       <div className="nine columns main-col">
  //         <h4>{Programmingskillmessage}</h4>

  //         <div className="bars">
  //           <ul className="skills">{pskills}</ul>
  //         </div>
  //       </div>
  //     </div>

  //     {/* ML | AI Skills */}
  //     <div className="row skill">
  //       <div className="three columns header-col">
  //         <h1>
  //           <span>ML | AI Skills</span>
  //         </h1>
  //       </div>

  //       <div className="nine columns main-col">
  //         <h4>{MLskillmessage}</h4>

  //         <div className="bars">
  //           <ul className="skills">{mskills}</ul>
  //         </div>
  //       </div>

  //       {/*Self Learning Skills */}
  //       <div className="row skill">
  //         <div className="three columns header-col">
  //           <h1>
  //             <span>Self Learning </span>
  //             <span>Full Stack Dev</span>
  //           </h1>
  //         </div>

  //         <div className="nine columns main-col">
  //           <h4>{Selfskillmessage}</h4>

  //           <div className="bars">
  //             <ul className="skills">{lskills}</ul>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </section>
  // );

// export default Resume;
