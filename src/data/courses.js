export const semesters = [
  {
    slug: 'f26',
    label: 'F26',
    name: 'Fall 2026',
    school: 'University of Michigan',
    courses: [
      {
        slug: 'cse-585',
        code: 'CSE 585',
        title: 'Advanced Scalable Systems for Agentic AI',
        links: [
          {
            label: 'Course Git / Website',
            href: 'https://github.com/mosharaf/cse585',
            hint: 'github.com/mosharaf/cse585',
          },
          {
            label: 'Ed Discussion',
            href: 'https://edstem.org/us/courses/100799/',
            hint: 'edstem.org',
          },
        ],
      },
      {
        slug: 'cse-592',
        code: 'CSE 592',
        title: 'Foundations of Artificial Intelligence',
        links: [
          {
            label: 'Canvas',
            href: 'https://umich.instructure.com/courses/867514',
            hint: 'umich.instructure.com',
          },
          {
            label: 'Course Website',
            href: 'https://gpoesia.com/teaching/cse592-fall26/',
            hint: 'gpoesia.com',
          },
          {
            label: 'Course Git',
            href: 'https://github.com/gpoesia/cse592-live-fall26',
            hint: 'github.com/gpoesia/cse592-live-fall26',
          },
          {
            label: 'Ed Discussion',
            href: 'https://edstem.org/us/courses/104728/',
            hint: 'edstem.org',
          },
          {
            label: 'Gradescope',
            href: 'https://www.gradescope.com/courses/1368388',
            hint: 'gradescope.com',
          },
        ],
      },
      {
        slug: 'cse-598',
        code: 'CSE 598',
        title: 'Learning-Enabled Systems',
        links: [
          {
            label: 'Course Website',
            href: 'https://web.eecs.umich.edu/~ryanph/cse598/fall26/index.html',
            hint: 'web.eecs.umich.edu',
          },
          {
            label: 'Review Format',
            href: 'https://web.eecs.umich.edu/~ryanph/cse598/fall26/cse598_review_summary.md',
            hint: 'web.eecs.umich.edu',
          },
          {
            label: 'Research Paper Readings',
            href: 'https://docs.google.com/spreadsheets/d/1RjVLUr8oi1RFXoJ1-8xeCqTGMRiC4IIUGnWMLIocyLs/edit?gid=1337779361#gid=1337779361',
            hint: 'docs.google.com',
          },
          {
            label: 'Gradescope',
            href: 'https://www.gradescope.com/courses/1361707',
            hint: 'gradescope.com',
          },
          {
            label: 'Piazza',
            href: 'https://piazza.com/class/mt1ycjhqkx160k/',
            hint: 'piazza.com',
          },
        ],
      },
    ],
  },
];

export function getSemester(slug) {
  return semesters.find((semester) => semester.slug === slug) || null;
}

export function getCourse(term, slug) {
  const semester = getSemester(term);
  if (!semester) return null;
  return semester.courses.find((course) => course.slug === slug) || null;
}
