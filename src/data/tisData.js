// All copy, names and links below come from the saved tis.edu.in homepage.

export const schoolInfo = {
  name: 'Tulas International School',
  established: '2012',
  trust: 'Rishabh Educational Trust',
  helpline: '+91-9837983791',
  helplineLabel: '+91-98379 83791',
  landlines: ['0135-2699444', '0135-2699666'],
  email: 'info@tis.edu.in',
  address: ['Dhoolkot, P.O – Selaqui, Chakrata Road,', 'Dehradun-248011 (Uttarakhand)'],
  links: {
    apply: 'https://admission.tis.edu.in/',
    tour: 'https://tis.edu.in/virtual-tour/',
    map: 'https://maps.app.goo.gl/maBF8syXueQkw31E6',
    fedena: 'https://tis.fedena.com/',
  },
};

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Sports', href: '#sports' },
  { label: 'Rankings', href: '#rankings' },
  { label: 'Why TIS', href: '#why-tis' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Admissions', href: '#admissions' },
];

export const hero = {
  intro:
    'TIS is one of India’s top boarding and day schools in Dehradun, India. Our CBSE curriculum focuses on academic excellence, holistic development, and preparing students to be global leaders.',
  pairs: [
    {
      left: { src: '/images/hero/orb-basketball.webp', alt: 'Students playing basketball', name: 'Basketball' },
      right: { src: '/images/hero/orb-dance.webp', alt: 'Student performing Kathak', name: 'Kathak' },
    },
    {
      left: { src: '/images/hero/orb-cricket.webp', alt: 'Student playing cricket', name: 'Cricket' },
      right: { src: '/images/hero/orb-karate.webp', alt: 'Student practising karate', name: 'Karate' },
    },
    {
      left: { src: '/images/hero/orb-lab.webp', alt: 'Student in science laboratory', name: 'Science Lab' },
      right: { src: '/images/hero/orb-shooting.webp', alt: 'Student practising shooting', name: 'Shooting' },
    },
    {
      left: { src: '/images/hero/orb-pottery.webp', alt: 'Student crafting pottery', name: 'Pottery' },
      right: { src: '/images/hero/orb-art.webp', alt: 'Student painting on canvas', name: 'Fine Arts' },
    },
  ],
};

export const about = {
  established:
    'Tulas International School was established in 2012 under the aegis of Rishabh Educational Trust to impart education through seamless opportunities.',
  excellence:
    'We provide world-class education, modern facilities, and a nurturing environment for students to thrive academically, socially, and culturally. Join TIS to be part of a community that encourages leadership, innovation, and lifelong learning.',
  quotes: [
    {
      image: 'quote-girl',
      title: '“We feel supported in what we do and nudged further to do more”',
      body: 'At Tulas, we believe in bringing out the best in every student—whether it’s academics, music, art, or drama. With the right support and inspiration, creativity finds its way. For us, school isn’t just about lessons, it’s about endless opportunities waiting to be explored.',
    },
    {
      image: 'quote-boy',
      title: '“Tulas helped me thrive and become the best version of myself”',
      body: 'When you choose a school that chooses you, it becomes more than just a place to learn—it becomes a place to belong, grow, and shine. At Tulas International School, we see the potential in every student and help them bring it to life.',
    },
  ],
};

export const sports = [
  ['Archery', 'archery'], ['Cycling', 'cycling'], ['Hockey', 'hockey'], ['Swimming', 'swimming'],
  ['Taekwondo', 'taekwondo'], ['Football', 'football'], ['Shooting Range', 'shooting-range'], ['Horse Riding', 'horse-riding'],
  ['Billiards', 'billiards'], ['Squash', 'squash'], ['Volleyball', 'volleyball'], ['Basketball', 'basketball'],
  ['Cricket', 'cricket'], ['Lawn Tennis', 'lawn-tennis'], ['Badminton', 'badminton'], ['Table Tennis', 'table-tennis'],
].map(([name, slug]) => ({ name, slug }));

export const secret = {
  question: 'At Tulas, we always ask, “What’s the secret to making school awesome?”',
  answer:
    'The secret to making one’s school experience truly unforgettable? It’s all about making learning feel like an adventure—where curiosity leads, creativity thrives, and every day brings something new to discover. When students are inspired, they don’t just learn—they grow, explore, and shape their own futures.',
  cracked: 'There, we cracked it!',
};

export const stats = [
  { to: 22, suffix: '', label: 'Acre pollution-free campus' },
  { to: 16, suffix: '+', label: 'Olympic sports' },
  { to: 24, suffix: '*7', label: 'Medical assistance' },
  { to: 6, suffix: ':1', label: 'Student teacher ratio' },
];

export const rankings = [
  { rank: '#1', place: 'In Dehradun', text: 'Co-Educational Boarding School in Dehradun by Education Today' },
  { rank: '#2', place: 'In Uttarakhand', text: 'Co-Educational Boarding School in Uttarakhand by Education Today' },
  { rank: '#1', place: 'In North India', text: 'Co-Educational Boarding School in North India by Outlook' },
  { rank: '#4', place: 'In India', text: 'Co-Educational Boarding School in India by Education Today' },
];

export const personalities = [
  ['Sakshi Malik', 'sakshi-malik', 'First Indian wrestler to win medal in Rio 2016 Olympics, Olympics Bronze Medalist in Wrestling, Silver Medalist in 2014 Commonwealth Games, Rajeev Gandhi Khel Ratan Awardee 2016, Padma Shri Awardee 2017'],
  ['Vishesh Bhriguvanshi', 'vishesh-bhriguvanshi', 'Indian Basketball Team Captain & Major FIBA Asia Championship Player. Under his Captaincy Team India won a 3x3 basketball Gold Medal at the Asian Beach Games in 2008'],
  ['Prakashi Tomar & Late Ms Chandro Tomar', 'prakashi-tomar', 'Based on their real life Bhumi Pednekar & Taapsee Pannu acted in the Biopic Movie “Saand ke Aakh” known as Shooter Dadi, 30 National Championship winner'],
  ['Abhishek Verma', 'abhishek-verma', '6th Highest World Ranking, Arjuna Awardee, Asian Games Gold Medalist in Archery 2013'],
  ['Aditi Gopichand Swami', 'aditi-gopichand-swami', '7th Highest World Ranking, Arjuna Awardee, World Champion in Archery 2024'],
  ['Jeevan Jyot Singh Teja', 'jeevan-jyot-singh-teja', 'Dronacharya Awardee in Archery 2022'],
  ['Ojus Devtale', 'ojas-deotale', '9th Highest World Ranking, Arjuna Awardee 2023 and current world champion in Archery'],
  ['Rajat Chauhan', 'rajat-chauhan', '5th Highest World Ranking Arjuna Awardee 2016 in Archery'],
  ['Devendra Singh Bisht', 'devendra-singh-bisht', 'Under 18 School Indian Football Team Selector'],
  ['Manish Metani', 'manish-metani', 'Indian Football Player'],
  ['Saurabh Joshi', 'saurabh-joshi', 'Influencer with 30 Million Subscribers on Youtube'],
  ['Arushi Nishank', 'arushi-nishank', 'Kathak dancer, actor, film producer, environmentalist, TEDx speaker, and National Convener of Sparsh Ganga'],
  ['Laxmi Agarwal', 'laxmi-agarwal', 'International Women Empowerment Award from the Ministry of Women and Child Development, Founder and President of The Laxmi Foundation, a NGO dedicated to acid attack victims. Deepika Padukone acted in the Biopic movie “Chhapaak” based on her'],
].map(([name, slug, note]) => ({ name, slug, note }));

export const leaders = [
  ['Shri Dhan Singh Rawat Ji', 'dhan-singh-rawat', 'Minister of Higher Education, Uttarakhand'],
  ['Shri Trivendra Singh Rawat Ji', 'trivendra-singh-rawat', 'Member of Parliament & Former Chief Minister, Uttarakhand'],
  ['Shri Subodh Uniyal Ji', 'subodh-uniyal', 'Technical Education and Forest Minister, Uttarakhand'],
  ['Dr Ramesh Pokhriyal Nishank Ji', 'ramesh-pokhriyal-nishank', 'Former Union Cabinet Minister for Education, Government of India | Former Chief Minister of Uttarakhand'],
  ['Shri Bhagat Singh Koshyari Ji', 'bhagat-singh-koshyari', 'Former governor of Maharashtra and Goa, Former Chief Minister of Uttarakhand'],
  ['Shri Dharmendra Pradhan Ji', 'dharmendra-pradhan', 'Union Minister of Education for India'],
  ['Shri Anurag Tripathi Ji', 'anurag-tripathi', 'CBSE Secretary Uttarakhand'],
  ['Shri Arvind Pandey Ji', 'arvind-pandey', 'MLA, Former Education Minister'],
  ['Shri Namami Bansal Ji', 'namami-bansal', 'I.A.S Municipal Commissioner Uttarakhand'],
  ['Shri Abhinav Kumar Ji', 'abhinav-kumar', 'ADG and former DGP of Uttarakhand Police'],
  ['Shri Janmejaya Khanduri Ji', 'janmejaya-khanduri', 'IG Dehradun - Government of India'],
  ['Shri Ashok Kumar Ji', 'ashok-kumar', 'Former DGP, Uttarakhand'],
  ['Shri Amit Kumar Sinha Ji', 'amit-kumar-sinha', 'ADG, Principal Secretary Sports, Uttarakhand'],
  ['Shri Sunil Uniyal Gama Ji', 'sunil-uniyal-gama', 'Former Mayor Municipal Corporation, Dehradun'],
  ['Shri Sahdev Singh Pundir Ji', 'sahdev-singh-pundir', 'MLA Sahaspur, Uttarakhand'],
].map(([name, slug, note]) => ({ name, slug, note }));

export const awards = [
  { image: 'top10', alt: 'Top 10 Best Boarding School of India award by Education Today' },
  { image: 'best-residential', alt: 'Best Boarding School in Uttarakhand award' },
  { image: 'icon-awards', alt: 'Uttarakhand Icon Awards 2024' },
];

export const parents = {
  quote:
    'Tulas International School has truly exceeded our expectations. The focus on holistic development and the encouragement provided by the teachers have played a significant role in our child\'s growth. We are grateful for the personalized attention and the care the school offers.',
  videos: [1, 2, 3],
};

export const reviews = [
  ['Tashi Tsering', 'F/O Jigmet Skaldon', 'tashi', 'I would like to convey a big thanks to the Management and Teachers of Tulas International School for taking good care of my son.'],
  ['Namita Agarwal', 'M/O Krishna Agarwal', 'namita', 'Tulas gives a comprehensive environment for our child to grow. The sports, academics and extra-curricular activities have helped Krishna in knowing himself better.'],
  ['Sandeep Kumar', 'F/O Aryan', 'sandeep', 'Our experience is very amazing with school. Staff is very cooperative and supportive. Our son always admires the school whenever we talk with him.'],
  ['Pinky Sharma', 'M/O Swastik Sharma', 'pinky', 'I am happy and satisfied with the wonderful experience of my son in this school. Teachers are very good especially Shweta Ma’am. She is always available when I need her.'],
  ['Suresh Kumar', 'F/O Aditya Kumar', 'suresh', 'Tulas International School is doing excellent in all the fields especially giving a lot of exposure to children. Very nicely planned and organized academic programme. Good efforts by all teachers.'],
  ['Mrs Urja Bhayani', 'M/O Shikha & Samarth Bhayani', 'urja', 'Right from the beginning, we have been in touch with Robin Sir and Shweta Ma’am. Both are very helpful and cooperative. Teachers are passionate and helpful towards academics.'],
  ['Amit Agrawal', 'F/O Samruddhi Agrawal', 'amit', 'Being a parent it\'s a big challenge to find a Boarding School that qualifies your Parameters of Security, Health, Hygiene, Academics, Non Academics and Self discipline being key features.'],
  ['Ashu Arora', 'M/O Manisha Changrani', 'ashu', 'It has been a fantastic journey for my daughter in Tulas International School so far. The boarding and infrastructure facility are excellent. We have seen significant improvement in Manisha.'],
  ['Gulabdas Gupta', 'F/O Annika Gulabdas Gupta', 'gulabdas', 'We admitted our daughter, Annika Gulabdas Gupta, in class VIII this year in Tulas. She is very much satisfied with the facilities offered at Tulas related to education, extra-curricular activities, recreation & hygiene.'],
  ['Selendra K. Ajmera', 'F/O Aman Ajmera', null, 'Hi Tulas! In the beginning it was very tough for me to send my son to a boarding school but the day I visited the campus the first thing which came to my mind was that this is the right place and right environment.'],
].map(([name, relation, avatar, text]) => ({ name, relation, avatar, text }));

export const collaborationCount = 12;

export const classOptions = ['Class IV', 'Class V', 'Class VI', 'Class VII', 'Class VIII', 'Class IX', 'Class X', 'Class XI', 'Class XII'];

export const stateOptions = [
  'Andaman and Nicobar Islands', 'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chandigarh', 'Chhattisgarh',
  'Dadra and Nagar Haveli', 'Delhi', 'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jammu and Kashmir', 'Jharkhand',
  'Karnataka', 'Kerala', 'Lakshadweep', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland',
  'Odisha', 'Other', 'Pondicherry', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura',
  'Uttar Pradesh', 'Uttarakhand', 'West Bengal',
];

export const footerLinks = [
  { label: 'FAQ', href: 'https://tis.edu.in/faq/' },
  { label: 'Calendar', href: 'https://tis.edu.in/MandatoryPDF/TIS_CALENDAR_2024__PDF.pdf' },
  { label: 'Brochure', href: 'https://tis.edu.in/MandatoryPDF/TIS_BROCHURE.pdf' },
  { label: 'Privacy Policy', href: 'https://tis.edu.in/privacy-policy/' },
  { label: 'Terms & Conditions', href: 'https://tis.edu.in/terms-conditions/' },
  { label: 'Disclaimer', href: 'https://tis.edu.in/disclaimer/' },
  { label: 'Disciplinary Policy', href: 'https://tis.edu.in/MandatoryPDF/DisciplinaryPolicy.pdf' },
  { label: 'Mobile Phone Policy', href: 'https://tis.edu.in/MandatoryPDF/MobilePhonePolicy.pdf' },
  { label: 'Child Welfare & Safety Policy', href: 'https://tis.edu.in/MandatoryPDF/childWelfarePolicy.pdf' },
];

export const socials = [
  { label: 'Twitter', href: 'https://twitter.com/tulas_intschool?lang=en' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/school/tulas-international-school/?originalSubdomain=in' },
  { label: 'Instagram', href: 'https://www.instagram.com/tulasinternationalschool/?hl=en' },
  { label: 'YouTube', href: 'https://www.youtube.com/channel/UC-eRtybnv3GvfvcWxQq93zw' },
];
