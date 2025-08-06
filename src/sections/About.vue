<template>
  <section
    id="about"
    class="min-h-screen flex flex-col items-start justify-center px-10 py-16 relative"
  >
    <h2 class="text-3xl font-bold mb-4">
      What is Purdue ACM SIGAPP <br />
      <span class="text-lg font-semibold">(AKA SIGAPP)</span>
    </h2>
    <DottedLine />

    <div class="mt-8 space-y-6 max-w-3xl text-base text-gray-800">
      <p>
        We are the SIGAPP (Special Interest Group for Applied Computing) sub-club under Purdue’s ACM (Association for Computing Machinery) chapter. What this really means is that we make apps, and there are a couple of important aspects as to how we do that:
      </p>
      <ul class="list-disc pl-6 space-y-2">
        <li>
          <strong>Real-World Apps:</strong> We make apps that have a real purpose. Rather than a class project, we focus on projects that our members are interested in working on – and would be interested in using after completion, too.
        </li>
        <li>
          <strong>Real-World Experience:</strong> We do our best to create a team-based workflow that mirrors major tech companies – without stress. We help members understand real contribution processes in a low-pressure environment.
        </li>
        <li>
          <strong>Real-World Education:</strong> We expect absolutely no prior experience from members joining. Our experienced members can help you get up to speed no matter what level you’re currently at. You’ll be contributing in no time!
        </li>
      </ul>
      <p>
        Currently, we use <strong>React Native</strong> (cross-platform JavaScript UI framework based on React) for our front-end and <strong>ASP.NET</strong> (Microsoft’s flagship server-side web framework, written in C#) for our back-end. We have also used technologies like MongoDB, Docker, and Swift for various projects.
      </p>
      <p>
        We have historically used <strong>Flutter</strong> (powered by Google’s language Dart – don’t worry, it’s easy to learn!) for our apps and <strong>Java</strong> for the servers behind our apps. Again, no experience is required or expected coming in. And we’re also open to exploring new technology if it fits our projects!
      </p>
    </div>

    <div class="relative mt-20 h-[500px] w-full max-w-7xl">
      <!-- Black box on right -->
      <div
        class="absolute right-0 bottom-0 w-[85%] h-[100%] bg-black rounded-3xl z-10"
      ></div>

      <!-- Gray box on left, overlapping -->
      <div
        class="absolute left-0 bottom-10 w-[40%] h-[60%] bg-[#4B5A48] rounded-3xl z-20"
      ></div>
    </div>
  </section>
</template>