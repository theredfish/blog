---
title: "New workstation: Farewell Problems"
description: "A new workstation for software and game development."
image: "new_workstation_cover.jpg"
date: "2025-01-22"
---

After many years of good service from my Lenovo Legion. It's time to replace its Intel i5, 8GB of RAM and its poor
Nvidia GTX 1660 Ti, with a complete new build! A workstation. I'll keep my laptop for travel and lite work.

## Average tool, big problems

I can't stress enough how bad my situation was during those last 2 years. I started to do game development with Bevy,
a Rust game engine. You know how much time it takes to compile big projects right? Well you don't know enough because
you have good machines. Most of the time people couldn't comprehend my issues and how frustrating it was to wait
several minutes to see a simple line change to be recompiled. I was using the Rust nightly channel, and followed all the
recommendations from the [Bevy documentation](https://bevyengine.org/learn/quick-start/getting-started/setup/):

- Dynamic Linking
- Generic sharing
- Installing the LLD linker
- Various performance optimization configs

I reached a point where doing game development with Bevy and Rust wasn't possible anymore. I switched to Godot, while it
was better it didn't fix all my issues. I was streaming my game development and running Blender, building my game and
broadcasting on both Twitch and YouTube just didn't work. Too much workload for my system. In addition I'm running out
of storage. At the time of writing I only have 300mb left on my system disk (SSD of 500 GB), I literally live in the
past where each kb counts. It's also bad for security since I can't install any new Windows updates!

I made the hard decision of putting game development and streaming on hold until I can save enough to buy a workstation.
I also had to avoid Docker in WSL since the VM is installed on my system disk. It was quickly filling all my space and
pruning containers or images didn't help much. Impossible to cross-compile on a ARM arch with system dependencies?
Damn! I've just started a new project as described in my article [Moving into Embedded Development](/posts/moving-into-embedded-dev), and I couldn't accept to be stopped once again. It was time to use my 1,5 years of savings and buy a
fresh new workstation tailored for my needs.

## No more laptop

Buying a new machine is not a simple decision when the price represents almost a month of your salary. It is a big
investment, at least for me. From experience laptops cost a lot because you can't save on the different parts and you
pay the portability. Also the main drawback is that it's difficult to replace or upgrade your hardware over time. A workstation makes a lot more sense in my case since I have important workloads:

- Streaming (OBS - 2 channels - 1080p)
- Video recording / editing
- Compilation
- 3D modeling
- Voxel modeling
- Virtualization
- Running games (mine or AA/AAA games)

And all of these tasks must be able to run concurrently.

## The workstation

I will update this section with the final build once it's done! Here are the different parts:

- **Motherboard**: Asus ROG Strix X670E-E, PCIe 5, Wifi 6E
- **CPU**: AMD Ryzen™ 9 7950X Processeur 16-core (32 threads),  PCIe 5, 5.7 GHz
- **Ventirad**: Noctua NH-U12S
- **Power Supply**: Corsair RM850e PCIe 5, 80+ Gold
- **RAM**:  Corsair VENGEANCE DDR5, 32Go, CL30
- **HDD**: Seagate BarraCuda, 4To
- **SSD**: Samsung 990 Pro NVMe M.2 PCIe 4.0
- **GC**: GeForce RTX 4070 Ti Super WINDFORCE OC 16G

What a nice setup! It should be future-proof and handle all my tasks without any problem. I will reuse my good old tower
case, a Cooler Master HAF XM ATX. The case should be compatible with my different parts and have great ventilation
capabilities.

## The research

I just want to share what I used to find the different parts, since I'm not really an expert in hardware. I can't
recommend [PC Part Picker enough](https://pcpartpicker.com). Not only you get access for free to a huge database, but you get warnings and recommendations if some parts are incompatible or might not fit the case size for example.

I also used ChatGPT to get recommendations based on my usage. If you want you can even use the open source [PC Part
Picker dataset](https://github.com/docyx/pc-part-dataset) to feed ChatGPT with some more data. Special thanks to
[Matthias](https://x.com/matthiasendler) for the tip!

Finally I asked people who know this kind of stuff. Especially a friend, [Kleph](https://x.com/klephh), who helped me to
make better choices and understand some of the specs.

It takes a lot of time before finding the correct parts in a way that everything can work together! Then you need to
balance the price with the performances depending on your needs. Now I can't wait to build it!

## The operating system

While I'm not a Windows fan, and rely a lot on WSL, I should say this OS comes with all the conveniences regarding video game development. But I miss Linux and I want to give it another try. So... will I join the Arch cult? With the efforts
of Valve on the Steam Deck and the Steam OS, I have good hopes that Wine and Proton will be really helpful.

---

Photo by [Skiking Photos](https://unsplash.com/@skiking_photos) on [Unsplash](https://unsplash.com/photos/a-computer-desk-with-two-monitors-and-a-lamp-Sos7_ozfJbM)
