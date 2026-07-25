<template>
  <section id="experience" class="scroll-mt-24 border-theme bg-primary">
    <div class="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20">
      <h2 class="text-2xl font-bold tracking-tight text-primary">Experience</h2>
      <ol class="mt-12 space-y-12">
        <li v-for="role in roles" :key="role.id" class="border-theme">
          <div class="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
            <div>
              <h3 class="text-lg font-semibold text-primary">{{ role.title }}</h3>
              <p class="text-sm font-medium text-primary">{{ role.company }}</p>
            </div>
            <p class="text-sm text-primary">{{ role.period }}</p>
          </div>
          <ul class="mt-4 space-y-2 text-sm leading-relaxed text-primary">
            <li v-for="bullet in role.bullets" :key="bullet" class="flex gap-2">
              <span class="text-primary" aria-hidden="true">—</span>
              <span>{{ bullet }}</span>
            </li>
          </ul>
        </li>
      </ol>
    </div>
  </section>
</template>

<script setup lang="ts">
const roles = [
  {
    id: '1',
    title: 'Senior Full-Stack Engineer',
    company: 'Turing',
    period: '2026 — Present',
    bullets: [
      'Refactor one legacy data science project made in Vue.js, by fixing existing bugs and delivering new features',
      'The project were mixing components structures like Options API with Composition API, and Pinia with Vuex, the first huge mission was to adapt just one component structure and one state management pattern',
      'Redo the authentication system by centralizing it with new roles and permissions, while still working the old roles through retro-compatibility',
      'Increase performance when data tables were handling too many data by choosing the right components',
      'Improve usability by creating new functionalities to screens like shortcuts to view more data of a unique cell and copy values of columns',
    ],
  },
  {
    id: '2',
    title: 'Mid Full-Stack Developer',
    company: 'Jtech/Veolia',
    period: '2022 — 2026',
    bullets: [
      'Helped the team to solve bugs on the new repagination application project maded in Vue.js, Quasar, Spring Boot and Postgre/SQL',
      'Responsible for solving bugs and developing new features especially on the front-end side of the repagination on the web application project',
      'Developed new features that was first identified as bugs, then discussed with analysts for the task requirements',
      'Lead and developed one major task crucial for the attendance of the application, through WebSocket API and Vuex State Management',
      'Developed major features to the new interface requested by dozens of customers. Reviewed code of coworkers on the team',
      'Started to use JUnit creating new tests to improve the quality of the code refactored',
    ],
  },
  {
    id: '3',
    title: 'Mid Full-Stack Developer',
    company: 'Solinftec',
    period: '2021 — 2022',
    bullets: [
      'Joined a new harvest automation project to remake the system in Vue.js, using Typescript, Vuetify, Spring Boot, Oracle PL/SQL',
      'Developed a feature that was able to one client send another truck to another client to make the harvest if they need so, using Observable on Vue.js to view the data on real time, and procedures on Oracle PL/SQL for the business model.',
      'Developed endpoints of the REST API and partipated on code reviews of the coworkers on the project.'
    ],
  },
  {
    id: '4',  
    title: 'Junior Full-Stack Developer',
    company: 'FMX',
    period: '2018 — 2021',
    bullets: [
      'Solved bugs and released new features on car rent, bovine tract automation and real state construction web applications using Vue.js, Vuetify, Spring Boot, SQL Serverand PostgreSQL',
      'Led the team on solving bugs on the car rent project.',    
      'On the last project, was made a executable in Python to convert a spreadsheet into a text file. which later would be used on the project, in the end of every month. This task was performed manually and lasted at leats 4 hours to execute, after the executable created, it started to last 10 seconds to execute the same task, which takes 0,07% of the time that was taken to be executed'
    ],
  },
] as const
</script>
