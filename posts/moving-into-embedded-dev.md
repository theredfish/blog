---
title: "Moving into Embedded Development"
description: "After spending 8 years in software development, it's time to move further with embedded development!"
image: "moving-to-embedded-dev.jpg"
date: "2025-01-05"
---

After a decade in software development and a market that shrinks year after year, I decided to explore opportunities in this changing landscape. Long story short, I'm extending my skills to embedded development and bringing some hardware into my projects! As you'll read, there are no small opportunities, everything can lead to greater events in your life. You just need to keep going and do what you love.

This article is organized in two parts. The first shares my journey so far. You can skip it if you want to jump straight to the juicy details. The second dives into my new project and why I'm moving towards embedded development.

## My journey as a developer

### Owl Duty

If you know me, it's no secret that I launch a lot of side projects. I always try to bring them into the business world as a way to validate my ideas. In 2023, I learned a lot about market validation while trying to launch Owl Duty, an API monitoring SaaS. However I didn't get enough traction for the idea, even after [revamping my landing page](/posts/i-revamped-my-landing-page-here-is-what-i-learned). I did get some leads from my waiting list and organized a few meetings.

Most developers wanted a dashboard to configure and manage their monitors. They weren't interested in a purely technical solution integrated into CI/CD flows, which would have been simpler for me in terms of development time and infrastructure validation (multi-region, costs, etc.).

So, I stopped developing the infrastructure layer and kept Grillon, my Rust HTTP testing library, open source.

### Grillon

The project [started in 2022](/posts/grillon-e2e-http-testing-rust), before I try to build my monitoring SaaS on top of [Grillon](https://github.com/theredfish/grillon). I released the [v0.4.0](/posts/announcing-grillon-v-0-4-0) in 2023 and published two new versions in 2024. I'm proud of what I've achieved with this library. I learned how to create an expressive API powered mostly by higher-order functions. I also received my first [feature request for JSONPath predicates](https://github.com/theredfish/grillon/issues/87) and managed to reach **122 stars and 6K+ downloads on crates.io**.

I'm now slowing down my time investment in this library but will continue to maintain it and implement requested features. Contributing to the ecosystem and knowing the library is useful to some people makes me happy. I don't need more than that!

### Indiedevcasts

> What a roller coaster! It was only when writing this section that I realized how intertwined opportunities can be. Sometimes you don't see them as opportunities until years later.

#### First Attempt

One of my hobbies is game development. I don't always make games; sometimes I just explore ideas and try things I wouldn't be able to do in my day job. I launched [Indiedevcasts](https://indiedevcasts.com) in 2018 to start learning how to make video games in 2D and 3D.

I initially made videos in French but quickly realized it was too niche to gain visibility. To reach a wider audience, I improved my English and stepped out of my comfort zone. Building an audience is crucial for gaining momentum, wishlists, and visibility on your games or tools. I've put my gamedev journey on hold until I can get better at making videos in English.

#### Career and Skills Development

One day, I received a job offer for a Rust SDET role (software development engineer in test) specializing in backend testing. Everything was in English, and for some reason, I decided to give it a try. At the time, I had quit my job with no plan, so I had nothing to lose.

The process involved five recruiter calls, three technical interviews, and a take-home test over two intense weeks. It turned out to be my best experience in terms of career development. I stayed in the role for nearly two years and saw the SDET team grow from just me to 20 engineers. I even found myself interviewing candidates in English within a few months!

How did this opportunity arise? I was curious about Rust and started exploring it during my free time. I fell in love with the language and pushed to use it in my previous job for tasks like distributing Selenium tests on AWS and monitoring web access for security. I even attended *RustFest* in Barcelona, funding most of it myself. It was a great investment, as you can see!

Never stop learning, even if it's outside your domain. Try new things. Even incomplete projects can lead to unexpected opportunities.

#### Second Attempt

In October 2022, I returned to game development while also buying a house to renovate. I had saved enough from my SDET role to support my family for eight months. During this time, I also worked on launching Owl Duty. No day job, no excuses.

The result? I ran out of savings, didn't sell anything online, and had to find a new job. But I explored a lot with [Indiedevcasts](https://indiedevcasts.com): creating videos in English, learning voxel art, trying the Bevy engine, giving my first [gamedev talk](https://youtu.be/MLhIeId6ctk?feature=shared), and streaming on [Twitch](https://www.twitch.tv/indiedevcasts). It worked! I made significant progress in building a community, creating content, and making games.

Some stats to celebrate:

- 57 videos (30 live streams)
- 226 YouTube subscribers
- 16 Twitch followers (started in April 2024)
- Most popular videos with 2K+ views (gamedev + Rust topics)
- 10K total views
- 3.3% viewers from the US, 1.1% from France

#### Next Steps

In 2025, I'll focus on embedded development, slowing down game development. I'll still publish videos occasionally and continue my hobby projects. However, my old laptop struggles to stream and compile large projects, so I'm saving up for a long-term workstation. Once I have it, I plan to continue streaming a mix of software and game development on my Twitch channel. On YouTube, it will depend on the algorithm; mixed topics can hurt audience reach.

## Going into Embedded Development

### Aeroponics Farming

The tech landscape is evolving, and I believe the future lies in hardware and physical products. Software is becoming commoditized, with AI handling more tasks. We're not there yet, but in the next 3–5 years, those who seize opportunities now will be ahead.

I'm now revisiting my idea from 2022, [Aeroponics Farming: The Project](/posts/aeroponics-farming-the-project.md).
Although I haven't posted any update since, I've set up my greenhouse and built a high-pressure prototype. I focused on finding the right parts, ensuring system safety (e.g., pressure relief valves), and dealing with import taxes (tough, my
wallet didn't survive).

Our next agricultural challenges will be to feed more people, reduce water consumption and eliminate pesticides. I want to develop software and products that enable sustainable farming, crop monitoring, and process automation. At some
point, I also hope to tackle some of the challenges in critical climate regions in France and, if successful, expand my
business to Europe.

### Innovating Greenhouse Solutions

Although aeroponics is part of my concerns, my goal isn't limited to this method. I want to create autonomous
greenhouses adaptable to soil, hydroponic, or aeroponic cultivation. They must automate and monitor variables such as lighting, temperature, humidity, and water consumption.

Greenhouses must be suitable for individual or industrial use and adapted to climate conditionsn whether cold and snowy regions or hot and sunny ones. Materials and designs must suit these conditions, and autonomy will require software (e.g., monitoring, alerts) and hardware (e.g., microcontrollers, sensors, ventilations).

### My current focus

I recently ordered a Raspberry Pi 4 (8GB RAM) to boot from a portable SSD, leveraging USB 3.0 for I/O. This setup will handle large read/write operations and provide more storage.

I'll be using [InfluxDB](https://github.com/influxdata/influxdb) for time-series data and [Embassy](https://github.com/embassy-rs/embassy) with Rust for embedded applications. [Grafana](https://grafana.com/) will help create an initial dashboard for metrics, and I plan to move to [Tauri](https://v2.tauri.app/) once I
need to configure applications, calibrate sensors and monitor metrics.

I also need to learn electronics! That will be a big part of this project! As you can see, I have a lot to accomplish
and that's just the software/hardware part. For the greenhouse, I will have to make 3D models (thanks to gamedev, I
know a bit of Blender) and market some ideas to learn what works and what doesn't. I will keep you updated here and will probably stream some of the development on my [Twitch channel](https://www.twitch.tv/indiedevcasts)!

---

Photo by [Jorge Ramirez](https://unsplash.com/@jorgedevs) on [Unsplash](https://unsplash.com/photos/three-electronic-components-sitting-on-top-of-a-blue-surface-VNfiAyRoKv4)
