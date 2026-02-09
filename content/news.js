// News and Publications Data
// To add new items, just add them to the top of this array
// The website will automatically display them

const newsData = [
     {
        date: "September 2025",
        title: "Invited lecture at the Computational Psychiatry Course in Zurich",
        description: "An absolute pleasure to deliver a talk on Machine Learning at the Computational Psychiatry Course in Zurich!",
        link: "https://www.linkedin.com/posts/barbora-buckova_what-an-absolute-pleasure-to-deliver-a-talk-activity-7369738141756329985-QGBe?utm_source=share&utm_medium=member_desktop&rcm=ACoAABtcMhsB8xIfY-YELD6xwYa2cUGhQyVFmCA",
        type: "talk"
    },
        {
        date: "October 2025",
        title: "World Congress of Psychiatry 2025",
        description: "Oral presentation at the WCP in Prague, presenting results from the temperament deviation analyses to an international clinical and research audience.",
        link: "https://2025.wcp-congress.com/",
        type: "talk"
    },
    {
        date: "October 2025", 
        title: "Meeting of Czech scientific community in Norway",
        description: "Public presentation at the Embassy of the Czech Republic in Oslo, organized by the Czexpats community, promoting the project’s research on mental health, genetics, and brain development to a non-specialist audience and strengthening links between science and society.",
        link: "https://czexpats.org/",
        type: "talk"
    },
    {
        date: "July 2025", 
        title: "Federation of European Neuroscience Societies 2025",
        description: "Poster presentation at a FENS regional meeting in Oslo, disseminating results related to developmental and genetic aspects of brain and behavior.",
        link: "https://www.frm2025oslo.no/",
        type: "poster"
    },
    {
        date: "May 2025", 
        title: "Extreme depression meeting",
        description: "Scientific presentation at an NIH-funded grant meeting in Stockholm, focused on genetic and neurobiological aspects of severe major depressive disorder.",
        type: "meeting"
    },
    {
        date: "March 2025",
        title: "GWAS course at the University of Oslo",
        description: "Lead lecture on copy number variation at a GWAS course, contributing to doctoral and postdoctoral training in statistical genetics.",
        type: "talk"
    },
  {
        date: "March 2025", 
        title: "Visual Literacy – Design Principles for Scientists",
        description: "Participation in the workshop, improving the accessibility and clarity of scientific communication through effective data visualization.",
        type: "meeting"
    },
    {
        date: "January 2025",
        title: "Applied Machine Learning Days,",
        description: "Attendance at the meeting engaging with international experts on state-of-the-art machine learning methods relevant to large-scale biomedical data.",
        type: "meeting"
    },
    {
        date: "September 2024", 
        title: "Oslo Innovation Week – Health AI",
        description: "Engaging with researchers, industry representatives, and policymakers on the application of artificial intelligence in health research.",
        type: "meeting"
    },
    {
        date: "June 2024", 
        title: "Organization for Human Brain Mapping",
        description: "Oral presentations at OHBM in Seoul. Talk 1: Harnessing population diversity: In search for tools of the trade; Talk 2: Genetic variation shapes modes of population covariation.",
        link: "https://www.youtube.com/watch?v=l5c-5h5w4TI&t=95s",
        type: "talk"
    },
 
];

// Export for use in main.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { newsData };
}
