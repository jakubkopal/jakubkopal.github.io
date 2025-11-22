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
        date: "July 2025",
        title: "The promise of quantifying individual risk for brain disorders through normative modeling, a narrative review",
        description: "A wonderful review on the state and promise of normative modelling just rolled out of the pen of Charlotte Fraza!",
        link: "https://www.sciencedirect.com/science?_ob=GatewayURL&_origin=AUTHORALERT&_method=citationSearch&_piikey=S0149763425002854&_version=1&md5=1bb839817ca66ee90d85b8055e02e0c2",
        type: "publication"
    },
    {
        date: "June 2025", 
        title: "Open Science Award for the PCN Team",
        description: "Our Predictive Clinical Neuroscience Team was awarded the Open Science Award by the Radboud University Medical Center.",
        link: "https://www.linkedin.com/posts/barbora-buckova_radboudumc-researchstrategy-teamscience-activity-7341723744349941760-WGHH?utm_source=share&utm_medium=member_desktop&rcm=ACoAABtcMhsB8xIfY-YELD6xwYa2cUGhQyVFmCA",
        type: "award"
    },
    {
        date: "June 2025", 
        title: "The Art of Not Knowing: Accommodating Structured Missingness in Biomedical Research",
        description: "Our work on structured missingness in biomedical data is now published in bioRxiv.",
        link: "https://www.biorxiv.org/content/10.1101/2025.06.07.658014v1",
        type: "publication"
    },
    {
        date: "February 2025",
        title: "Invited Speaker at Pint of Science",
        description: "Upcoming public talk: 'Mind the Gap: How to analyze what's missing' - making science accessible to everyone.",
        link: "https://www.linkedin.com/feed/update/urn:li:activity:7331037003343409152/",
        type: "talk"
    },
    {
        date: "January 2025",
        title: "New Publication in Scientific Reports",
        description: "Our latest work on 'Amplitude entropy captures chimera resembling behavior in the altered brain dynamics during seizures' has been published.",
        link: "https://www.nature.com/articles/s41598-025-97854-y",
        type: "publication"
    },
    {
        date: "January 2025", 
        title: "PRECOGNITION Project Protocol Published",
        description: "Our protocol for 'Learning latent profiles via cognitive growth charting in psychosis' is now available in Schizophrenia Bulletin Open.",
        link: "https://academic.oup.com/schizbullopen/article/6/1/sgaf007/8109912",
        type: "publication"
    },
    {
        date: "January 2025", 
        title: "Team Player Award",
        description: "I was absolutely touched and delighted to receive the Team Player award for the year 2024 from the Medical Neuroscience Department at Radboud University Medical Center.",
        type: "award"
    },
];

// Export for use in main.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { newsData };
}