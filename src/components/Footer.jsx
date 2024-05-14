// import { resourcesLinks, platformLinks, communityLinks } from "../constants";
// const Footer = () => {
//   return (
//     <footer className="mt-20 border-t py-10 border-neutral-100">
//       <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
//         <div>
//           <h3 className="text-md font-semibold mb-4">Resources</h3>
//           <ul className="space-y-2">
//             {resourcesLinks.map((link, index) => (
//               <li key={index}>
//                 <a
//                   href={link.href}
//                   className="text-neutral-300 hover:text-orange"
//                 >
//                   {link.text}
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </div>
//         <div>
//           <h3 className="text-md font-semibold mb-4">Platform</h3>
//           <ul className="space-y-2">
//             {platformLinks.map((link, index) => (
//               <li key={index}>
//                 <a
//                   href={link.href}
//                   className="text-neutral-300 hover:text-orange"
//                 >
//                   {link.text}
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </div>
//         <div>
//           <h3 className="text-md font-semibold mb-4">Community</h3>
//           <ul className="space-y-2">
//             {communityLinks.map((link, index) => (
//               <li key={index}>
//                 <a
//                   href={link.href}
//                   className="text-neutral-300 hover:text-orange"
//                 >
//                   {link.text}
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;








import React from 'react';
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    // <footer className="bg-gradient-to-r from-orange-100 via-[#bcc1ff] to-orange-500">
    <footer className="bg-gradient-to-r from-orange-300 via-orange-300 to-orange-300">
      <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <img src={logo} className="h-20 "  alt="Logo" />
            
            <p className="max-w-xs mt-4 text-xl text-white-600">
              Shape your ideas into value
            </p>
            <div className="flex mt-8 space-x-6 text-white-600">
              {['Facebook', 'Instagram', 'Twitter', 'GitHub', 'Dribbble'].map((platform, index) => (
                <a
                  key={index}
                  className="hover:opacity-75"
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="sr-only"> {platform} </span>
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    {/* Add SVG paths for icons here */}
                  </svg>
                </a>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 gap-8 lg:col-span-2 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: 'Company',
                links: ['About', 'Meet the Team', 'History', 'Careers'],
              },
              {
                title: 'Services',
                links: ['Preincubation', 'Incubation', 'Hackathon', 'Test Bed'],
              },
              {
                title: 'Helpful Links',
                links: ['Contact', 'FAQs', 'Live Chat'],
              },
              {
                title: 'Legal',
                links: ['Privacy Policy', 'Terms & Conditions', 'Returns Policy', 'Accessibility'],
              },
            ].map((section, index) => (
              <div key={index}>
                <p className="font-medium">{section.title}</p>
                <nav className="flex flex-col mt-4 space-y-2 text-sm text-white-500">
                  {section.links.map((link, idx) => (
                    <a key={idx} className="hover:opacity-75" href="#">
                      {link}
                    </a>
                  ))}
                </nav>
              </div>
            ))}
          </div>
        </div>
        <p className="mt-8 text-s text-white-800 text-center">© 2024 SUMS Nepal </p>
      </div>
    </footer>
  );
};

export default Footer;

