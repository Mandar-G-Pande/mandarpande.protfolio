import { IProject } from '@/types';

export const GENERAL_INFO = {
    email: 'spandepatil@gmail.com',

    emailSubject: "Let's collaborate on a project",
    emailBody: 'Hi Mandar, I am reaching out to you because...',
    upworkProfile: 'mailto:spandepatil@google.com',
};

export const SOCIAL_LINKS = [
    { name: 'linkedin', url: 'https://www.linkedin.com/in/mandar-g-pande/' },
    { name: 'github', url: 'https://github.com/Mandar-G-Pande' },
    { name: 'instagram', url: 'https://www.instagram.com/sarthakpande.ig' },
];

export const MY_STACK = {
    frontend: [
        {
            name: 'HTML',
            icon: '/logo/html.png',
        },
        {
            name: 'CSS',
            icon: '/logo/css.png',
        },
        {
            name: 'JavaScript',
            icon: '/logo/js.png',
        },
        {
            name: 'Bootstrap',
            icon: '/logo/bootstrap.svg',
        },
        {
            name: 'React.js',
            icon: '/logo/react.png',
        },
        {
            name: 'Next.js',
            icon: '/logo/next.png',
        },
        {
            name: 'Tailwind CSS',
            icon: '/logo/tailwind.png',
        },
        {
            name: 'GSAP',
            icon: '/logo/gsap.png',
        },
    ],
    backend: [
        {
            name: 'Node.js',
            icon: '/logo/node.png',
        },
    ],
    database: [
        {
            name: 'MySQL',
            icon: '/logo/mysql.svg',
        },
    ],
    tools: [
        {
            name: 'GitHub',
            icon: '/logo/github.png',
        },
        {
            name: 'Netlify',
            icon: '/logo/netlify.png',
        },
    ],
    Design: [
        {
            name: 'Figma',
            icon: '/logo/figma.png',
        },
    ],
};

export const PROJECTS: IProject[] = [
    {
        title: 'Shivtirth Picnic Spot',
        slug: 'shivtirth-picnic-spot',
        liveUrl: 'https://shivtirth.com/',
        year: 2024,
        description: `
     A vibrant and dynamic website built for Shivtirth Picnic Spot, designed to attract visitors, highlight attractions, and streamline bookings for waterpark and amusement park experiences.

<br/><br/>

Key Features:

<ul> <li>🎡 Attraction Showcase: Visually rich sections for Water Park, Adventure Park, and Agro Tourism</li> <li>📅 Booking Integration: Easy-to-navigate booking interface with direct CTA buttons</li> <li>📝 Informative Content: Dedicated pages for Rules, Privacy Policy, and Terms</li> <li>📞 Quick Contact Access: Display of contact info with clickable call/email options</li> <li>📱 Fully Responsive: Mobile-first design for seamless browsing across devices</li> </ul> <br/>
Technical Highlights:

<ul> <li>Crafted custom UI using HTML, CSS, Bootstrap, and JavaScript for fast performance</li> <li>Optimized image loading and layout structure for smooth UX</li> <li>Implemented animated sections and hover effects to enhance interactivity</li> <li>SEO-optimized structure with semantic HTML and performance-focused layout</li> <li>Integrated footer with operational hours, social links, and quick navigation</li> </ul>
      `,
        role: `
      Frontend Developer <br>
Led the design and implementation of a responsive, user-friendly website:

<ul> <li>🎨 UI Development: Built all frontend layouts using HTML, CSS, Bootstrap, and JavaScript</li> <li>📱 Responsive Design: Ensured seamless performance across mobile, tablet, and desktop</li> <li>🧭 Navigation & Structure: Developed intuitive menus, CTA buttons, and page sections</li> <li>🖼️ Visual Enhancements: Added animation, hover effects, and interactive elements</li> <li>🧾 Content Integration: Structured pages for Waterpark, Booking, Rules, Contact, and more</li> <li>🔗 Footer & Info Display: Integrated address, contact info, social links, and working hours</li> </ul>
      `,
        techStack: [
            'HTML',
            'CSS',
            'JavaScript',
            'Bootstrap',
        ],
        thumbnail: '/projects/thumbnail/shiv1.png',
        longThumbnail: '/projects/long/shiv.png',
        images: [
            '/projects/images/shiv.png',

        ],
    },

    {
        title: 'Chakradhar Solar',
        slug: 'chakradhar-solar',
        liveUrl: 'https://chakradharenergy.com/',
        year: 2024,
        description: `
     A clean and informative website developed for Chakradhar Solar, focused on showcasing solar energy solutions, promoting green energy awareness, and generating customer inquiries through a streamlined user experience.

    <br/><br/>

    Key Features:

    <ul> <li>🔆 Product & Service Showcase: Detailed sections for solar panels, rooftop systems, and installation services</li> <li>📩 Lead Capture: Contact form and inquiry options for potential clients</li> <li>🌱 Eco-Friendly Theme: Clean, green-focused design that aligns with the brand’s mission</li> <li>📞 Easy Communication: Clickable phone and WhatsApp contact options for quick support</li> <li>📱 Fully Responsive: Optimized layout for all screen sizes and devices</li> </ul> <br/>

    Technical Highlights:
    <ul> <li>Built using HTML, CSS, Bootstrap, and JavaScript for a responsive, fast-loading interface</li> <li>Designed clear call-to-actions (CTAs) for services and contact</li> <li>Implemented smooth scrolling, section-based navigation, and visual consistency</li> <li>Optimized image assets and content layout for performance and SEO</li> <li>Included a structured footer with contact info, social links, and important navigation</li> </ul>
      `,
        role: `
      Frontend Developer
    Led the development of a clean, conversion-focused website tailored for a solar solutions provider:

    <ul> <li>🎨 <strong>UI Development:</strong> Created all frontend layouts using HTML, CSS, Bootstrap, and JavaScript</li> <li>📱 <strong>Responsive Design:</strong> Optimized site performance across mobile, tablet, and desktop devices</li> <li>🔆 <strong>Service Sections:</strong> Developed structured sections for solar products, benefits, and installation services</li> <li>📩 <strong>Lead Capture:</strong> Integrated contact forms and clickable call-to-action buttons</li> <li>🌿 <strong>Brand Alignment:</strong> Designed a green-themed visual style aligned with the brand’s eco mission</li> <li>🔗 <strong>Footer & Info Display:</strong> Included contact details, address, social media icons, and key navigation links</li> </ul>`,
        techStack: [
            'HTML',
            'CSS',
            'JavaScript',
            'Bootstrap',
        ],
        thumbnail: '/projects/thumbnail/chakradharenergy.png',
        longThumbnail: '/projects/long/shiv.png',
        images: [
            '/projects/images/shiv.png',

        ],
    },
    {
        title: 'PRMIT&R Badnera',
        slug: 'mirta-ac-in',
        liveUrl: 'https://mitra.ac.in/',
        year: 2024,
        description: `
        A professional and informative website built for PRMIT&R College, designed to highlight academic programs, streamline student access to key information, and represent the institute’s excellence in engineering education.

<br/><br/>

🔑 Key Features:
<ul> <li>🎓 <strong>Course & Department Details:</strong> Dedicated sections for UG/PG programs, departments, and specializations</li> <li>📂 <strong>Notice & Circulars:</strong> Easy-to-access updates for students, faculty, and staff</li> <li>🏫 <strong>Institution Overview:</strong> Pages for About Us, Vision-Mission, Accreditations, and Rankings</li> <li>📞 <strong>Quick Contact Access:</strong> Integrated clickable phone, email, and location details</li> <li>📱 <strong>Fully Responsive:</strong> Optimized for all screen sizes including mobile, tablet, and desktop</li> </ul> <br/>
💻 Technical Highlights:
<ul> <li>Developed with HTML, CSS, Bootstrap, and JavaScript for responsive and structured layout</li> <li>Created reusable components for news, events, placements, and alumni sections</li> <li>Implemented smooth navigation and anchored links for a better user experience</li> <li>SEO-friendly structure with fast-loading pages and optimized metadata</li> <li>Designed a comprehensive footer with college address, social links, contact details, and navigation shortcuts</li> </ul>
      `,
        role: `
        Frontend Developer <br> <br>
Led the development of an informative and user-focused college website to present academic excellence and institutional resources:

<ul> <li>🎨 <strong>UI Development:</strong> Designed and built all frontend components using HTML, CSS, Bootstrap, and JavaScript</li> <li>📱 <strong>Responsive Design:</strong> Ensured seamless performance and accessibility across mobile, tablet, and desktop</li> <li>🏫 <strong>Academic Sections:</strong> Structured dedicated pages for departments, courses, faculty, and infrastructure</li> <li>📂 <strong>Notice Integration:</strong> Created dynamic sections for notices, circulars, and important announcements</li> <li>🧭 <strong>Navigation & UX:</strong> Developed intuitive navigation with quick-access menus and CTA buttons</li> <li>🔗 <strong>Footer & Info Display:</strong> Added college address, contact details, social links, and useful links for students</li> </ul>
      `,
        techStack: [
            'HTML',
            'CSS',
            'JavaScript',
            'Bootstrap',
        ],
        thumbnail: '/projects/thumbnail/mitra.png',
        longThumbnail: '/projects/long/shiv.png',
        images: [
            '/projects/images/pmitr.png',

        ],
    },

    {
        title: 'Helthy Grow Agro',
        slug: 'helthy-grow',
        liveUrl: 'https://healthygrowagro.com/',
        year: 2024,
        description: `
        A clean and conversion-driven website built for Healthy Grow Agro, designed to showcase organic products, promote sustainable farming practices, and drive customer engagement through an intuitive interface.

<br/><br/>

🔑 Key Features:

<ul> <li>🌾 <strong>Product Catalog:</strong> Sections highlighting organic fertilizers, seeds, and eco-friendly farming products</li> <li>🛒 <strong>Purchase & Inquiry Options:</strong> CTA buttons for product inquiries and orders via contact form or WhatsApp</li> <li>🌱 <strong>Brand Story & Vision:</strong> Dedicated pages outlining the mission, values, and sustainability efforts</li> <li>📞 <strong>Easy Contact Access:</strong> Integrated phone number, WhatsApp, email, and Google Maps for location</li> <li>📱 <strong>Fully Responsive:</strong> Optimized for smooth performance across mobile, tablet, and desktop devices</li> </ul> <br/>
💻 Technical Highlights:

<ul> <li>Developed using HTML, CSS, Bootstrap, and JavaScript with a focus on fast performance and responsive layout</li> <li>Implemented animated banners, hover effects, and product cards to increase interactivity</li> <li>Optimized images and text content for better SEO and page load speed</li> <li>Created structured sections for product categories, testimonials, and farming tips</li> <li>Included a functional footer with contact info, social media links, and quick navigation</li> </ul>
          `,
        role: `
        Frontend Developer <br> <br>
Led the development of a clean, responsive website tailored for an organic agriculture brand:

<ul> <li>🎨 <strong>UI Development:</strong> Designed and built frontend layouts using HTML, CSS, Bootstrap, and JavaScript</li> <li>📱 <strong>Responsive Design:</strong> Ensured seamless browsing across mobile, tablet, and desktop devices</li> <li>🌾 <strong>Product Display:</strong> Developed interactive product cards, category sections, and CTA buttons</li> <li>🌱 <strong>Brand Styling:</strong> Created a nature-themed visual design reflecting the organic and eco-friendly mission</li> <li>📩 <strong>Contact Integration:</strong> Embedded lead capture forms and clickable phone/WhatsApp/email links</li> <li>🔗 <strong>Footer & Info Display:</strong> Integrated address, contact details, social icons, and key navigation links</li> </ul>
        `,
        techStack: [
            'HTML',
            'CSS',
            'JavaScript',
            'Bootstrap',
        ],
        thumbnail: '/projects/thumbnail/healthygrowagro.png',
        longThumbnail: '/projects/long/shiv.png',
        images: [
            '/projects/images/Helthygrow.png',

        ],
    },

    {
        title: 'Aditya Agro Udyog',
        slug: 'aditya-agro-udyog',
        liveUrl: 'https://adityaagroudyog.com/',
        year: 2024,
        description: `
        A clean and informative website built for Aditya Agro Udyog, crafted to present agricultural machinery and equipment solutions, promote industrial-grade farming tools, and encourage B2B and B2C inquiries through a professional and user-centric design.

<br/><br/>

🔑 Key Features:

<ul> <li>🚜 <strong>Machinery Showcase:</strong> Sections detailing various agricultural tools, machinery, and equipment with visuals and descriptions</li> <li>📥 <strong>Inquiry Options:</strong> Prominent CTAs for product inquiries via contact forms, WhatsApp, or phone</li> <li>🏭 <strong>Company Profile:</strong> Pages outlining manufacturing capabilities, mission, and service standards</li> <li>📞 <strong>Quick Contact Access:</strong> Integrated clickable contact number, email, WhatsApp, and address with map support</li> <li>📱 <strong>Fully Responsive:</strong> Optimized for user experience across mobile, tablet, and desktop platforms</li> </ul> <br/>
💻 Technical Highlights:

<ul> <li>Developed using HTML, CSS, Bootstrap, and JavaScript to ensure a clean, structured layout</li> <li>Created reusable components for product listings, banners, and client testimonials</li> <li>Integrated smooth scroll navigation, animated sections, and hover-based interactivity</li> <li>SEO-friendly design with image optimization and semantic HTML usage</li> <li>Structured footer including contact details, social links, product categories, and navigation</li> </ul>

        `,
        role: `
        Frontend Developer <br> <br>
Led the design and development of a responsive, business-focused website tailored for the agricultural machinery sector:

<ul> <li>🎨 <strong>UI Development:</strong> Designed and coded frontend layouts using HTML, CSS, Bootstrap, and JavaScript</li> <li>📱 <strong>Responsive Design:</strong> Ensured smooth performance across all devices—mobile, tablet, and desktop</li> <li>🚜 <strong>Product Sections:</strong> Created structured sections for displaying farming machinery and industrial tools</li> <li>📩 <strong>Lead Capture:</strong> Integrated contact forms, clickable CTAs, and WhatsApp links for inquiries</li> <li>🏭 <strong>Brand Identity:</strong> Aligned the design with the company’s industrial tone and agro-based branding</li> <li>🔗 <strong>Footer & Info Display:</strong> Added comprehensive footer with contact details, navigation links, and social media icons</li> </ul>
        `,
        techStack: [
            'HTML',
            'CSS',
            'Bootstrap',
            'JavaScript',
        ],
        thumbnail: '/projects/thumbnail/adityaagroudyog.png',
        longThumbnail: '/projects/long/shiv.png',
        images: [
            '/projects/images/AditityaAgro.png',

        ],
    },

    {
        title: 'Headphone Product Page',
        slug: 'headphone-product-page',
        liveUrl: 'https://headphone-l-page.netlify.app/',
        year: 2024,
        description: `
        A sleek and interactive product page created to showcase high-quality headphones, drive online sales, and deliver an engaging user experience.

<br/><br/>

🔑 Key Features:

<ul> <li>🖼️ <strong>High-Quality Visuals:</strong> Hero banner and image gallery for clear product display from multiple angles</li> <li>📝 <strong>Product Details:</strong> Sections for specifications, features, warranty, and user reviews</li> <li>🛒 <strong>Buy Now & Add to Cart:</strong> Prominent CTA buttons with interactive behavior</li> <li>🎨 <strong>Color & Model Options:</strong> Dropdowns or swatches to select headphone color and model variants</li> <li>📱 <strong>Fully Responsive:</strong> Seamlessly adapts to mobile, tablet, and desktop devices</li> </ul> <br/>
💻 Technical Highlights:

<ul> <li>Built using HTML, CSS, Bootstrap, and JavaScript for a fast and responsive UI</li> <li>Integrated interactive features like image zoom, hover effects, and tabbed content for reviews/specs</li> <li>SEO-optimized layout with semantic HTML tags and performance-friendly media handling</li> <li>Optimized product images and icons to ensure fast load times and smooth UX</li> <li>Footer includes support links, contact details, return policy, and social icons</li> </ul>
        `,
        role: `
        Personal Project <br> <br>
Took full initiative in designing and developing a sleek and functional headphone product page focused on enhancing UI/UX and improving conversion flow.

<ul> <li>🎨 <strong>UI Design & Development:</strong> Created a modern layout using HTML, CSS, Bootstrap, and JavaScript</li> <li>📱 <strong>Responsive Design:</strong> Built a mobile-first interface that adapts seamlessly across devices</li> <li>🛒 <strong>Product Display & Interactivity:</strong> Implemented product image gallery, zoom on hover, and variant selection (color/model)</li> <li>📝 <strong>Content Structuring:</strong> Designed sections for product details, reviews, specs, and warranty information</li> <li>⚙️ <strong>Performance & UX:</strong> Optimized loading speed, added hover effects and smooth transitions for interactive experience</li> <li>🔗 <strong>Footer Integration:</strong> Included links for support, return policy, contact details, and social media icons</li> </ul>
        `,
        techStack: [
            'HTML',
            'CSS',
            'Bootstrap',
            'JavaScript',
        ],
        thumbnail: '/projects/thumbnail/headphone.png',
        longThumbnail: '/projects/long/shiv.png',
        images: [
            '/projects/images/headphone.png',

        ],
    },

    {
        title: 'Inner Growth Guides',
        slug: 'inner-growth-guides',
        liveUrl: 'https://innergrowthguides.com/',
        year: 2024,
        description: `
       A content-rich and elegant blogging platform created for Inner Growth Guides, focused on self-help, mindfulness, and mental wellness, aimed at engaging readers and building a loyal community.

<br/>
🔑 Key Features:

<ul> <li>🧘‍♂️ <strong>Wellness Blog Sections:</strong> Structured content categories like Mindfulness, Self-Growth, Motivation, and Lifestyle</li> <li>📝 <strong>Blog Article Pages:</strong> Clean layouts for each post with images, author info, tags, and related articles</li> <li>🔍 <strong>Search & Navigation:</strong> Easy-to-use navigation bar and keyword search for exploring content</li> <li>💬 <strong>Engagement Options:</strong> Integrated comment sections and share buttons for reader interaction</li> <li>📱 <strong>Responsive Design:</strong> Optimized for mobile, tablet, and desktop screens</li> </ul>
💻 Technical Highlights:

<ul> <li>Developed using HTML, CSS, Bootstrap, JavaScript, and WordPress for easy content management</li> <li>Used SEO best practices for better visibility on search engines</li> <li>Implemented blog post templates with consistent styling and readability enhancements</li> <li>Included contact form, newsletter signup, and social media integration in the footer</li> </ul>
        `,
        role: `
        Frontend Developer & WordPress Integrator <br> <br>
Led the end-to-end development and design process for the blogging platform:

<ul> <li>🎨 <strong>UI/UX Design:</strong> Crafted visually appealing blog layouts with strong focus on readability and user engagement</li> <li>🧱 <strong>Custom Frontend:</strong> Built reusable components and blog templates using HTML, CSS, and Bootstrap</li> <li>🔧 <strong>WordPress Integration:</strong> Integrated blog functionalities using WordPress CMS for easy content publishing</li> <li>📈 <strong>Performance Optimization:</strong> Ensured fast-loading pages, responsive behavior, and SEO-friendly code</li> <li>📬 <strong>Footer & Engagement:</strong> Added contact form, social links, and a signup form to build community</li> </ul>    `,
        techStack: [
            'HTML',
            'CSS',
            'Bootstrap',
            'JavaScript',
        ],
        thumbnail: '/projects/thumbnail/innergrowthguides.png',
        longThumbnail: '/projects/long/shiv.png',
        images: [
            '/projects/images/Innergrowth.png',

        ],
    },

    {
        title: 'Real Estate Portfolio Website',
        slug: 'nikhilmawale',
        liveUrl: 'https://nikhilmawale.com/',
        year: 2024,
        description: `
       A sleek and modern website developed for Nikhil Mawale, designed to showcase premium real estate listings, attract potential buyers, and offer a seamless property browsing experience.

<br/>
🔑 Key Features:

<ul> <li>🏡 <strong>Property Listings:</strong> Dedicated sections for residential and commercial properties with detailed specifications</li> <li>🖼️ <strong>Image Galleries:</strong> High-resolution image sliders for each property to offer visual clarity</li> <li>📩 <strong>Inquiry Forms:</strong> Integrated lead capture forms for quick customer engagement</li> <li>📍 <strong>Map Integration:</strong> Google Maps added for exact location view of each property</li> <li>📱 <strong>Fully Responsive:</strong> Mobile-first design to ensure smooth browsing on all devices</li> </ul>
💻 Technical Highlights:

<ul> <li>Developed using HTML, CSS, Bootstrap, and JavaScript for a clean and interactive UI</li> <li>Focused on user experience with intuitive navigation, filter options, and CTAs</li> <li>Implemented smooth scrolling, animations, and interactive elements</li> <li>SEO-optimized content layout for better search visibility</li> <li>Footer with social links, contact info, and quick navigation to key sections</li> </ul>

        `,
        role: `
        Frontend Developer <br> <br>

        Took full ownership of this project as a personal frontend development exercise:

<ul> <li>🎨 <strong>UI Design:</strong> Designed the entire site layout, color palette, and branding style</li> <li>🛠️ <strong>Development:</strong> Built all sections and components using HTML, CSS, Bootstrap, and JavaScript</li> <li>📋 <strong>Content Structuring:</strong> Organized property data into engaging, easy-to-navigate formats</li> <li>📱 <strong>Responsiveness:</strong> Ensured cross-device compatibility and performance</li> <li>📈 <strong>Optimization:</strong> Enhanced SEO structure and page speed using lightweight code and image compression</li> </ul>
        `,
        techStack: [
            'HTML',
            'CSS',
            'Bootstrap',
            'JavaScript',
        ],
        thumbnail: '/projects/thumbnail/nikhilmawale.png',
        longThumbnail: '/projects/long/shiv.png',
        images: [
            '/projects/images/nikhil.png',

        ],
    },

    {
        title: 'The Tads',
        slug: 'thetads',
        liveUrl: 'https://thetads.in/',
        year: 2024,
        description: `
       A modern and informative website developed for The Tads, an educational institute, aimed at presenting course offerings, academic services, and admission details with a professional online presence.

<br/>
🔑 Key Features:

<ul> <li>📚 <strong>Courses & Programs:</strong> Dedicated sections for academic streams, coaching batches, and subject offerings</li> <li>📅 <strong>Admission & Schedule Info:</strong> Timely updates for admissions, batch timings, and test series</li> <li>🧑‍🏫 <strong>Faculty Highlights:</strong> Pages introducing educators and their expertise</li> <li>📞 <strong>Quick Contact Options:</strong> Integrated forms, clickable phone/email, and location maps</li> <li>📱 <strong>Responsive Design:</strong> Optimized for smooth performance on mobile, tablet, and desktop</li> </ul>
💻 Technical Highlights:

<ul> <li>Built using <strong>WordPress</strong> with a lightweight, customizable theme for flexibility and performance</li> <li>Utilized <strong>Elementor</strong> and custom widgets to design reusable layouts and pages</li> <li>Integrated <strong>contact forms, WhatsApp chat,</strong> and <strong>Google Maps</strong> for better user engagement</li> <li>Configured <strong>SEO plugins</strong> and performance settings for improved discoverability</li> <li>Set up structured <strong>footer, menu, and homepage sliders</strong> for easy navigation and better UI</li> </ul>
        `,
        role: `
        Frontend Developer <br> <br>

        Handled and complete the development and setup of this WordPress site as part of my internship:

<ul> <li>🧱 <strong>Theme Customization:</strong> Modified layouts using Elementor and theme settings</li> <li>⚙️ <strong>Plugin Integration:</strong> Added and configured plugins for SEO, forms, and performance</li> <li>📄 <strong>Content Management:</strong> Structured content across pages like About, Courses, Admissions, and Contact</li> <li>🖼️ <strong>Visual Design:</strong> Applied design consistency across banners, buttons, and page elements</li> <li>📱 <strong>Responsive Optimization:</strong> Ensured the site looked and worked well on all screen sizes</li> </ul>
           `,
        techStack: [
            'WordPress',
        ],
        thumbnail: '/projects/thumbnail/thetads.png',
        longThumbnail: '/projects/long/shiv.png',
        images: [
            '/projects/images/thetads.png',

        ],
    },

];

export const MY_EXPERIENCE = [
    {
        title: 'Frontend Developer Intern',
        company: 'PrimaThink Technologies Pvt. Ltd.',
        description: 'As a Frontend Intern at PrimaThink Technologies Pvt. Ltd. (Feb 2024 – Aug 2024), I worked remotely on real-time web development projects using HTML, CSS, and Bootstrap. I contributed to the design and development of responsive websites for various clients, ensuring cross-browser compatibility and mobile responsiveness. Key projects included institutional and commercial websites such as PRMCEM Badnera, MITRA Amravati, POINT MANSAROVAR Hotel, and a real estate platform.',
        duration: 'FEB 2024 - July 2024',
    },
    {
        title: 'Java Web Developer Intern',
        company: 'BrainlyHood Technologies Pvt. Ltd.',
        description: 'As a Java Web Developer Intern at Brainlyhood Technologies Pvt. Ltd. (Feb 2024 – Present), I contributed to the development of dynamic and responsive websites using Java, HTML, CSS, Bootstrap, JavaScript, and WordPress. I worked on live client projects including Shivtirth Picnic Spot, Chakradhar Solar, and Inner Growth Guides, focusing on frontend integration, backend logic, and user experience optimization.',
        duration: 'OCT 2023 - March 2025',
    },
];
