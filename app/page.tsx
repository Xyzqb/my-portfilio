// import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="min-h-screen bg-pink-100 flex items-center justify-center px-6">
//       <div className="flex flex-col md:flex-row items-center gap-12 max-w-5xl mx-auto">
//         {/* IMAGE SECTION */}
//         <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-pink-500 shadow-lg">
//           <Image
//             src="/SadhanaChaudhary .jpeg"
//             alt="Sadhana"
//             width={300}
//             height={300}
//             className="w-full h-full object-cover"
//           />
//         </div>

//         {/* TEXT SECTION */}
//         <div>
//           <h1 className="text-4xl md:text-5xl font-bold text-pink-600">
//             Hi, I'm Sadhana Chaudhary 👋
//           </h1>

//           <p className="mt-4 text-lg text-gray-700 max-w-xl">
//             I’m a <bold>Full Stack Developer</bold>specializing in React.js, Next.js,
//             Node.js, Tailwind CSS, Material UI, and API Integration. I build
//             modern, responsive, and high-performance web applications.
//           </p>

//           <div className="mt-6 flex gap-4">
//             <a
//               href="/projects"
//               className="px-6 py-3 bg-pink-600 text-white rounded-lg hover:bg-pink-700"
//             >
//               View Projects
//             </a>

//             <a
//               href="/contact"
//               className="px-6 py-3 border border-pink-600 text-pink-600 rounded-lg hover:bg-pink-50"
//             >
//               Contact Me
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-pink-100 flex items-center justify-center px-6">
      <div className="flex flex-col md:flex-row items-center gap-12 max-w-5xl mx-auto">
        {/* IMAGE SECTION */}
        <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-pink-500 shadow-lg">
          <Image
            src="/SadhanaChaudhary .jpeg"
            alt="Sadhana"
            width={300}
            height={300}
            className="w-full h-full object-cover"
          />
        </div>

        {/* TEXT SECTION */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-pink-600">
            Hi, I'm Sadhana Chaudhary 👋
          </h1>

          <p className="mt-4 text-lg text-gray-700 max-w-xl">
            I’m a <span className="font-bold">Full Stack Developer</span>{" "}
            specializing in React.js, Next.js, Node.js, Tailwind CSS, Material
            UI, and API Integration. I build modern, responsive, and
            high-performance web applications. With 6 months of hands-on
            experience, I have worked as a Trainee Developer and Functional
            Tester, designing and developing scalable applications while
            transforming complex business requirements into efficient technical
            solutions. I am detail-oriented, passionate about clean code, and
            committed to delivering high-quality user experiences.
          </p>

          <div className="mt-6 flex gap-4">
            <a
              href="/projects"
              className="px-6 py-3 bg-pink-600 text-white rounded-lg hover:bg-pink-700"
            >
              View Projects
            </a>

            <a
              href="/contact"
              className="px-6 py-3 border border-pink-600 text-pink-600 rounded-lg hover:bg-pink-50"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
