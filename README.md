<p align="center">
  <a href="https://karamazfolio.vercel.app/"><img src="https://github.com/JuditKaramazov/JuditKaramazfolio/blob/a7b1825e33711948f51e53e249751761e1779f56/public/karaLogo.png" width="550" height="550" alt="Main site logo" /></a>
</p>
<h1 align="center">
  Karamazfolio, v.1.0
</h1>
<div align="center">
  <a href="https://codeclimate.com/github/JuditKaramazov/JuditKaramazfolio/maintainability"><img src="https://api.codeclimate.com/v1/badges/5fc37bddddf76f58ffab/maintainability" /></a>
  <a href="https://codeclimate.com/github/JuditKaramazov/JuditKaramazfolio/test_coverage"><img src="https://api.codeclimate.com/v1/badges/5fc37bddddf76f58ffab/test_coverage" /></a>
  <a href="https://github.com/JuditKaramazov/JuditKaramazfolio/actions/workflows/ci.yml"><img src="https://github.com/JuditKaramazov/JuditKaramazfolio/actions/workflows/ci.yml/badge.svg" /></a>
</div>
<div align="center">
  <img src="https://img.shields.io/badge/HTML-HTML5-E34F26?logo=html5" alt="HTML" title="HTML" />
  <img src="https://img.shields.io/badge/CSS-CSS3-1572B6?logo=css3" alt="CSS" title="CSS" />
  <img src="https://img.shields.io/badge/TypeScript-007ACC?logo=typescript" alt="TypeScript" title="TypeScript" />
  <img src="https://img.shields.io/badge/React.js-61DAFB?logo=react" alt="React.js" title="React.js" />
  <img src="https://img.shields.io/badge/Next.js-000000?logo=next.js" alt="Next.js" title="Next.js" />
  <img src="https://img.shields.io/badge/YAML-2C8EBB?logo=yaml" alt="YAML" title="YAML" />
</div>
<br />
<p align="center">
  <a href="https:/github.com/JuditKaramazov">🐱 /JuditKaramazov</a>
</p>
<p align="center">
  <a href="https://www.karamazfolio.xyz">📍 Personal site</a>
</p>
<p align="center">
  <a href="https://karamablog.xyz">☕ Blog</a>
</p>

---

- 1️⃣. [Introduction](#introduction)
- 2️⃣. [Getting Started](#getting-started)
- 3️⃣. [Structure](#structure)
- 4️⃣. [Features](#features)
  - ↘️ [YAML file](#yaml-file)
  - ↘️ [Geek resume](#geek-resume)
  - ↘️ [Repositories](#repositories)
  - ↘️ [Theme switcher](#theme-switcher)
  - ↘️ [Typekit integration](#typekit-integration)
  - ↘️ [vCard](#vcard)
- 5️⃣. [Scripts](#scripts)
  - ↘️ [New projects](#new-projects)
- 6️⃣. [Future Updates](#future-updates)
- 7️⃣. [Style](#style)
- 8️⃣. [Learn More](#getting-started)


# Introduction

There was a time when I thought we were all shackled to the labels apparently describing our persona. According to them, I was destined to become a Spanish Literature professor, but time proved that as polyhedral, multifaceted beings, it is not possible to capture the essence of who we are and confine it into a couple of adjectives and life experiences. Do not get me wrong: whatever happened in our lives, it did matter and leave its unique marks. However, such details can't contain in its margins the immensity of our curiosity, failures, successes, memories, and future goals.

Many years ago, I convinced myself that I could `only` be this Philologist side of me, but today I wanted to remind this complex being called Judit that she's something more than that, too - she's way too many other things, including a programmer.

# Getting Started

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). Considering this, remember to follow the next steps:

1. First, clone this repository:
```bash
$ git clone https://github.com/JuditKaramazov/JuditKaramazfolio.git
```

2. Take into account that a `GITHUB_TOKEN` is required (learn more [here](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens)), so you'll have to create a `.env.local` file containing it before proceeding.

3. Then, install the right dependencies:
```bash
$ npm install
```

4. Finally, start the project:
```bash
$ npm start
```

# Structure

Initially, the main goal that I pursued was keeping this site as clean, scalable, and maintainable as possible while keeping in mind my limited tools and knowledge, and that's the reason why each section and component follows a minimal (and yet descriptive enough) approach. I know it pretty much well: there is a global tendency to display the entire formation, work experience, languages, and overall paths and decisions that built the person we are today. However, and since this portfolio focuses on practicality rather than pure data, what you'll find by cloning this repository or simply having a look at the deployment site is:

1. A header containing a brief `introduction` of who Judit is: a tightrope walker, indeed.
2. A general view of my `technology stack`.
3. A `downloadable CV`, just in case you'd want to know more about my previous experience and relevant formation.
4. A preview of the main `projects` I've been working on so far.
5. A `detailed description` of my already-mentioned projects, illustrations, links to docs regarding the consulted technologies, and an accessible, visual approach to the rest of my work.
6. Some of the most relevant `repositories` I'm contributing to.
7. A footer containing some relevant `links` for us to `stay in touch`, `schedule interviews` (as well as some coffee moments), and contribute to `maintaining this site` by letting me know about potential problems and bugs.

# Features

Although it may seem there's nothing much to clarify other than noting that I `finally` decided to create a portfolio, I find it relevant to mention that this project is a React-based single page app in TypeScript, using only statically generated pages.

![Alt text](https://github.com/JuditKaramazov/JuditKaramazfolio/blob/a7b1825e33711948f51e53e249751761e1779f56/public/Screenshot-01.png)

Considering this, it's also important to highlight that Next.js creates pages from each item automatically thanks to the [`src/pages/[slug].tsx`](src/pages/[slug].tsx) template you'll find if you dive into the repository's very essence and guts. With this said, let's now discuss a feature closely related to this idea:

## YAML file

The entire definition of the projects displayed in this portfolio is contained by a `YAML file`, which allows the user to convert Markdown into HTML on build time; that's what possibilitates Next.js to automatically generate pages from each item. In other words, the YAML file serves as a central repository for all project-related information, allowing us to define project details, descriptions, and metadata in a clear and organized manner. Since the use of YAML allows for easy data manipulation, it makes it an ideal choice for structuring content and storing data:

- **Readability**: It's human-readable and easy to write.
- **Structured**: YAML is designed to represent complex data structures, which makes it suitable for storing structured information like project details.
- **Integration**: Many programming languages have libraries and tools for working with YAML, which allows easy integration into web applications.

To define project details in the YAML file, follow a specific format that the project uses for data retrieval. Here's an example of a project entry in YAML:

```yaml
- title: My Awesome Project
  description: This project is amazing!
  techStack:
    - React
    - Next.js
  url: https://example.com/my-project
  image: /images/project-image.png
```

To learn more about how it's integrated in the portfolio, don't hesitate to have a look at the following file:

- [`_content/projects.yml`](_content/projects.yml)

And as we'll mention in a while, please, remember the importance of structuring our site correctly for our latest work to be in the spotlight.

## Geek resume

Because who doesn't want to be embrace the warmth of them bright lights, right? Actually, and as you probably assumed after getting a clearer idea of this project's goals, development and skeleton, I am not the kind of person who particularly enjoys describing her strengths, highlights or aptitudes. Even though that's an undenniable reality that I'm still trying to fight, and independently of this portfolio aiming to define and represent a more practical approach, I still incorporated a `second (and hidden) resume`. Would you describe yourself as an archeologist of the code? That's perfect, then! If you'd want to know more about me and still avoid the idea of a conventional CV or resume, feel free to investigate the depths of my code. 
You might find something, if not surprising, at least minimally interesting by doing so!

## Repositories

As for the repositories themselves, all of them are fetched on build time directly from GitHub, filtered, sorted, and finally displayed on the front page. Here's how it works:

1. **Fetching Repositories**: The process begins by requesting information about GitHub repositories directly from GitHub. This is done with proper authorization using a `GITHUB_TOKEN` and setting a `User-Agent` in the request header. The repositories are retrieved from GitHub's API.

2. **Filtering and Sorting**: The fetched repositories are filtered and sorted to ensure only relevant repositories are displayed. This involves comparing the retrieved repositories with the ones defined in the YAML file that powers this portfolio.

3. **Displaying Repositories**: Finally, the sorted repositories are displayed on the site, providing visitors with a quick overview of the projects you've worked on.

![Alt text](https://github.com/JuditKaramazov/JuditKaramazfolio/blob/a7b1825e33711948f51e53e249751761e1779f56/public/Screenshot-02.png)

The repositories are sorted based on their last push date, with the most recently updated repositories appearing at the top, which allows to showcase our most recent work effectively. Some interesting open-source projects will definitely be added in the future, so don't forget to check from time to time if there are any news!

## Theme switcher

Because having a look every now and then stops us from staying in the dark, right...? In this case, and since I myself am quite sensitive whenever a powerful light attacks my eyes, incorporating a `theme switcher` capable of automatically toggle between a light and a dark mode based on the user's system preferences became a `must`.

## Typekit integration
Speaking of which, the portfolio uses a new `must` to me: Typekit, a service that provides amazingly interesting fonts for web design. What's the best part of handling its integration process by our Typekit component, you'll wonder?

1. **Script Configuration**: The `Typekit` component configures and loads a JavaScript script provided by Typekit. The script is designed to fetch the fonts we might need for our site.

2. **Asynchronous Loading**: The script is loaded asynchronously to prevent it from slowing down the loading of our portfolio.

3. **Enhancing Typography**: Once the script is successfully loaded, Typekit's fonts become available for use in your site's typography, improving the overall design and readability.

If you're interested in the technical details of how this integration is achieved, you can take a look at the component code in `src/components/Typekit/index.tsx`. However, from a user perspective, the important thing to know is that this integration enhances the visual appeal and readability of the site's text content - and that is indeed a must!

## vCard

Although there are some other components and features that would be interesting to discuss, I can't miss the opportunity to let you know that the `Karamazfolio` also incorporates a downloadable `vCard file` based on the data that we previously defined in our meta content.
In order to give it a try, remember that it's possible to automatically create it by adding me to your address-book!

It is also possible to schedule meetings with me via `Calendly`, but as you'll surely notice at some point, right now it's more a metaphorical concept than a solid appointment. However, if you're interested in exchanging some ideas or projects, do not hesitate to refer to the following link, where you'll find both my metaphorical and my literal availability.

📆 See more -> [Calendly - JuditKaramazov](https://calendly.com/jkaramazov/)

![Alt text](https://github.com/JuditKaramazov/JuditKaramazfolio/blob/a7b1825e33711948f51e53e249751761e1779f56/public/Screenshot-03.png)

# Scripts

When it comes to `scripts`, the most remarkable element is how easy it became to add...

## New projects

Ready to showcase your latest project on your portfolio? It's a breeze! It is as simple as running the following command, which will allow the user to add new items to our `projects` file:

```bash
$ npm run new -- "New"
```

Considering that our images will follow the `SLUG-01.png` format, make sure that the title and the slug of the project coincide; this way, the previous command will add a new project entry to the `projects.yml` file, and they will be automatically created based on the name we provided.

There's no way we can't know the many times we will use that specific command or the projects we'll work on in the future, but as long as there's still a reason to keep learning, practicing, and demonstrating ourselves that we are more than a label, nothing should stop us.

# Future Updates

As stated before, one of this portfolio's main goals gravitates around the idea of making it `scalable`, `maintainable`, and `better` - both for you as visitors and for me as the strange woman trying to figure out how to code something capable of representing my own standards, preferences, and wishes without making my computer explode in the process.
With this idea in mind, and due to my curious nature, some of the future updates that I'm planning consist of:
 
>     - [ ] Implementation of languages (*ES, FR*).
>     - [ ] Dynamic availability and location.
>     - [x] Testing integration (Jest, react-testing-library).
>     - [ ] New sections.
>     - [x] Building a CI/CD pipeline.
>     - [ ] Techstack filters.
>     - [x] Extension of the site: *karamaBlog*.

> *Note: The "ES, FR" checkbox represents the future addition of the Spanish and French versions, respectively. The language implementation gravitates around i18n, and even though the Spanish translations have priority, I will start working on the French version as soon as I make sure that the components and the texts are solid enough in terms of quality.*

> *Future-future plans: "karamaBlog" is an extension of the brand used in this portfolio. It will maintain the same aesthetics, identity, and general vibe, ensuring a cohesive and familiar user experience - and allowing me to explore new technologies, too. Stay tuned!*

Please bear in mind that I plan to keep this repository up to date by actively creating new issues, incorporating sections, and working on any technological improvements and changes that may affect its proper functioning. Also, remember that this list is not exhaustive, and I'll continue adding more `checkboxes` to it as I identify new opportunities for improvement. I do value your feedback, and I'm highly responsive to suggestions and ideas that may enhance our experience on this platform, so do not hesitate to share your thoughts with me!
We're all learning here, after all - and I'm genuinely excited to share the journey of this project's growth and evolution with you.

# Style

Now that the technical part has been defined, I wouldn't want to close this (apparently) small (and yet crucial) chapter of my life without highlighting the beautiful art `Auregan Nedelec` provided me with.

![Alt text](https://github.com/JuditKaramazov/JuditKaramazfolio/blob/a7b1825e33711948f51e53e249751761e1779f56/public/Screenshot-04.png)

I never considered myself a "visual" person, nor someone capable of even describing the shapes and colors crossing my mind. "A pure Philologist", they said, and I still do believe they were right, in a way: the person you'll get to know in this portfolio `is` the literature maniac many people have in mind, too. However, something as simple as a little "doodle" ended up outlining and vertebrating the totality of this project - and I can't thank you enough for that because it proves that no matter our many labels, something as simple as some shiny Trico eyes can enlighten and create entire universes.
As for the ones still reading my words: thank you, too, you little Tricos inhabiting this virtual world. 
Oh, and if you are the curious type and want to start a neuronal apocalypse...

# Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
<br />

---

<h1 align="center">
  <a href="https://www.karamazfolio.xyz"><img src="https://github.com/JuditKaramazov/JuditKaramazfolio/blob/a7b1825e33711948f51e53e249751761e1779f56/public/karamaBrand.png" width="100" height="100" alt="Original logo asset">
</h1>
