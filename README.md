<p align="center">
  <a href="https://karamazfolio.vercel.app/"><img src="https://github.com/JuditKaramazov/JuditKaramazfolio/blob/a7b1825e33711948f51e53e249751761e1779f56/public/karaLogo.png" width="500" height="500" alt="Main site logo" /></a>
</p>
<h2 align="center">
  Karamazfolio
</h2>
<p align="center">
  <a href="https:/github.com/JuditKaramazov/JuditKaramazfolio">🐱/JuditKaramazfolio</a>
  <a href="https://karamazfolio.vercel.app/">📍Official site</a>
</p>

---

- [Introduction](#-introduction)
- [Getting Started](#-getting-started)
- [Features](#-features)
  - [YAML file](#-yaml-file)
  - [Repositories](#-repositories)
  - [Theme switcher](#-theme-switcher)
  - [Typekit integration](#-typekit-integration)
  - [vCard](#-vcard)
- [Scripts](#-scripts)
  - [New projects](#-new-projects)
- [Style](#-style)
- [Deployment](#-deployment)
- [Learn More](#-getting-started)


## Introduction

There was a time when I thought we were all shackled to the labels apparently describing our persona. According to them, I was destined to become a Spanish Literature professor, but time proved that as polyhedral, multifaceted beings, it is not possible to capture the essence of who we are and confine it into a couple of adjectives.

Many years ago, I convinced myself that I could `only` be this Philologist side of me, but today I wanted to remember this complex being called Judit that she's something more than that, too - way too many other things, including a programmer.

## Getting Started

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

## Features

Although it may seem there's nothing much to clarify other than remarking the fact that I `finally` decided to create a portfolio, I find it relevant to point that this project is a React-based single page app in TypeScript, using only statically generated pages.

![Alt text](https://github.com/JuditKaramazov/JuditKaramazfolio/blob/a7b1825e33711948f51e53e249751761e1779f56/public/Screenshot-01.png)

Considering this, it's also important to highlight that Next.js creates pages from each item automatically thanks to the [`src/pages/[slug].tsx`](src/pages/[slug].tsx) template you'll find if you decide to dive into the repository's very essence. This said, let's now discuss a feature closely related to this idea:

### YAML file

The entire definition of the projects displayed in this portfolio is contained by a `YAML file`, which allows the user to convert Markdown into HTML on build time; that's what possibilitates Next.js to automatically generate pages from each item. In other words, the YAML file serves as a central repository for all project-related information, allowing us to define project details, descriptions, and other metadata in a clear and organized manner. Since the use of YAML allows for easy data manipulation, it makes it an ideal choice for structuring content and storing data:

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

### Repositories

As for the repositories themselves, all of them are fetched on build time directly from GitHub, filtered, sorted, and finally displayed on the front page. Here's how it works:

1. **Fetching Repositories**: The process begins by requesting information about GitHub repositories directly from GitHub. This is done with proper authorization using a `GITHUB_TOKEN` and setting a `User-Agent` in the request header. The repositories are retrieved from GitHub's API.

2. **Filtering and Sorting**: The fetched repositories are filtered and sorted to ensure only relevant repositories are displayed. This involves comparing the retrieved repositories with the ones defined in the YAML file that powers this portfolio.

3. **Displaying Repositories**: Finally, the sorted repositories are displayed on the site, providing visitors with a quick overview of the projects you've worked on.

![Alt text](https://github.com/JuditKaramazov/JuditKaramazfolio/blob/a7b1825e33711948f51e53e249751761e1779f56/public/Screenshot-02.png)

The repositories are sorted based on their last push date, with the most recently updated repositories appearing at the top, which allows to showcase our most recent work effectively. Some interesting open-source projects will definitely be added in the future, so don't forget to check from time to time if there are any news!

### Theme switcher

Because having a look every now and then stops us from staying in the dark, right...? In this case, and since I myself am quite sensitive whenever a truly powerful light attacks my eyes, incorporating a `theme switcher` capable of automatically toggle between a light and a dark mode based on the user's system preferences became a `must`.

### Typekit integration
Speaking of which: the portfolio uses a new `must` to me, Typekit, a service that provides amazingly interesting fonts for web design. What's the best part of handling its integration process by our Typekit component, you'll wonder?

1. **Script Configuration**: The `Typekit` component configures and loads a JavaScript script provided by Typekit. The script is designed to fetch the fonts we might need for our site.

2. **Asynchronous Loading**: The script is loaded asynchronously to prevent it from slowing down the loading of our portfolio.

3. **Enhancing Typography**: Once the script is successfully loaded, Typekit's fonts become available for use in your site's typography, improving the overall design and readability.

![Alt text](https://github.com/JuditKaramazov/JuditKaramazfolio/blob/a7b1825e33711948f51e53e249751761e1779f56/public/Screenshot-03.png)

If you're interested in the technical details of how this integration is achieved, you can take a look at the component code in `src/components/Typekit/index.tsx`. However, from a user perspective, the important thing to know is that this integration enhances the visual appeal and readability of the site's text content - and that is indeed a must!

### vCard

Although there are some other components and features that would be interesting to discuss, I can't miss the opportunity of letting you know that the `Karamazfolio` also incorporates a downloadable `vCard file` based on the data that we previously defined in our meta content.
In order to give it a try, remember that it's possible to automatically create it by adding me to your addressbook!

## Scripts

When it comes to `scripts`, the most remarkable element is how easy it became to add...

### New projects

Ready to showcase your latest project on your portfolio? It's a breeze! It is as simple as running the following command, which will allow the user to add new items to our projects file:

```bash
$ npm run new -- "New"
```

Considering that our images will follow the `SLUG-01.png` format, make sure that the title and the slug of the project coincide; this way, the previous command will add a new project entry to the `projects.yml` file, and they will be automatically created based on the name we provided.

There's no way we can't know the many times we will use that specific command nor the projects we'll work on in the future, but as long as there's still a reason to keep learning, practicing, and demonstrating ourselves than we are more than a label, nothing should stop us.

## Style

Now that the technical part has been defined, I wouldn't want to close this (apparently) small (and yet crucial) chapter of my life without highlighting the beautiful art `Auregan Nedelec` provided me with.

![Alt text](https://github.com/JuditKaramazov/JuditKaramazfolio/blob/a7b1825e33711948f51e53e249751761e1779f56/public/Screenshot-04.png)

I never considered myself a "visual" person, nor someone capable of even describing the shapes and colours crossing my mind. "A pure Philologist", they said, and I still do believe they were right, in a way: the person you'll get to know in this portfolio `is` the literature maniac many people have in mind, too. However, something as simple as a little "doodle" ended up outlining and vertebrating the totality of this project - and I can't thank you enough for that, because it proves that no matter our many labels, something as simple as some shiny Trico eyes can enlighten and create entire universes.
As for the ones still reading my words: thank you, too, you little Tricos inhabiting this virtual world. 
Oh, and if you are the curious type and want to start a neuronal apocalypse...

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
<br />

<h1 align="center">
  <img src="https://github.com/JuditKaramazov/JuditKaramazfolio/blob/a7b1825e33711948f51e53e249751761e1779f56/public/karamaBrand.png" width="250" height="250" alt="Cactus visual asset">
</h1>
