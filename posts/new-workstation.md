---
title: "New workstation: Farewell Problems"
description: "A new workstation for software and game development."
image: "new_workstation_cover.jpg"
date: "2025-01-22"
---

After many years of good and loyal services from my Lenovo Legion; it's time to replace its Intel i5, its 8GB of RAM and its poor Nvidia GTX 1660 Ti, with a brand new setup! A workstation. I'll keep my laptop for travel and light work.

## Average tool, big problems

I can't stress enough how bad my situation was over the last couple of years. I started developing games with Bevy, a
Rust game engine. You know about the compile time in Rust, right? However, you all have good machines. 90% of you have
MacBook Pros and I don't think you need to **wait** several minutes for a one-line change (with incremental
compilation). I assure you that I have taken care to follow all the recommendations in the
[Bevy documentation](https://bevyengine.org/learn/quick-start/getting-started/setup/):

- Nightly channel
- Dynamic Linking
- Generic sharing
- Using the LLD linker
- Various performance optimizations

I reached a point where developing games with Bevy and Rust was no longer possible. I switched to Godot. While it
was much better, it didn't solve all my problems. I was streaming my game development on Twitch and YouTube, using
Blender, Magicavoxel, Godot and building my game at the same time. It was too much work for my system.
Also I don't have much storage left. As I write this, I only have 300MB left on my system drive (500GB SSD), I am
literally living in the past where every KB counts. It's also bad for security because I can't install any Windows
updates!

I made the difficult decision to put game development and streaming on hold until I could save up enough to buy a
workstation. I also had to avoid Docker in WSL since the VM is installed on my system disk. It was quickly filling up
all my space and pruning unused containers or images didn't help much. I couldn't cross-compile on an ARM architecture with system dependencies. Damn! I had just started my new project that I talked about in my article [Moving into Embedded Development](/posts/moving-into-embedded-dev), and I couldn't accept being stopped again. It was time to use my 1.5 years of savings and buy a new workstation tailored to my needs.

## No more laptop

Buying a new machine is not an easy decision when the price is almost a month's salary. It's a big investment, at least
for me. From experience, laptops are expensive because you can't save on the different parts and you pay on the optimization of space for the portable aspect. The main disadvantage is is also that it is difficult to replace or
upgrade your hardware over time. A workstation makes much more sense in my case since I have heavy workloads:

- Streaming (OBS - 2 channels - 1080p)
- Video recording / editing
- Compilation
- 3D modeling
- Voxel modeling
- Virtualization
- Running games (mine or AA/AAA games)

And most of these tasks must be able to be performed simultaneously.

## The workstation

I will update this section with some pictures of my installationonce it's finished! Here are the different parts:

- **Motherboard**: Asus ROG Strix X670E-E, PCIe 5, Wifi 6E
- **CPU**: AMD Ryzen™ 9 7950X Processeur 16-core (32 threads),  PCIe 5, 5.7 GHz
- **Ventirad**: Noctua NH-U12S
- **Power Supply**: Corsair RM850e PCIe 5, 80+ Gold
- **RAM**:  Corsair VENGEANCE DDR5, 32Go, CL30
- **HDD**: Seagate BarraCuda, 4To
- **SSD**: Samsung 990 Pro NVMe M.2 PCIe 4.0
- **GC**: GeForce RTX 4070 Ti Super WINDFORCE OC 16G

This setup should be future-proof and handle all my tasks without any issues. I will reuse my good old tower
case, a Cooler Master HAF XM ATX. The case should be compatible with my various parts and have great ventilation
capabilities.

## The research

I just want to share what I used to find the different parts, since I'm not really an hardware expert. I can't
recommend [PC Part Picker](https://pcpartpicker.com) enough. Not only do you get access to a huge database for free, but
you get warnings and recommendations if some parts are incompatible or don't fit the case size for example.

I also used ChatGPT to get recommendations based on my usage. If you want, you can even use the open source [PC Part
Picker dataset](https://github.com/docyx/pc-part-dataset) to feed ChatGPT with additional data. Special thanks to
[Matthias](https://x.com/matthiasendler) for the tip!

Finally, I asked some people who know this kind of stuff. In particular a friend, [Kleph](https://x.com/klephh), who
helped me to make better choices and understand some specifications. Thanks!

It takes a lot of time to find the right parts so that everything can work together! Then you have to balance the price
with the performance depending on your needs. Now I can't wait to build it!

## The operating system

Although I'm not a Windows fan and rely heavely on WSL, I have to say that this operating system has all the amenities
needed for video game development. But I miss Linux and want to give it another try. So... will I join the Arch cult?
With the Valve's efforts on the Steam Deck and the Steam OS, I have high hopes that Wine and Proton will really come in
handy.

---

Photo by [Skiking Photos](https://unsplash.com/@skiking_photos) on [Unsplash](https://unsplash.com/photos/a-computer-desk-with-two-monitors-and-a-lamp-Sos7_ozfJbM)
