let arr = [
   {
      id: Math.random(),
      name: 'Timur',
      info: {
         school: '35',
         faculity: 'SMM'
      },
   },
   {
      id: Math.random(),
      name: 'Imran',
      info: {
         school: 'ne izvestno',
         faculity: 'programming'
      },
   },
   {
      id: Math.random(),
      name: 'Aminjon',
      info: {
         school: '44',
         faculity: 'Dizayn'
      },
   },
   {
      id: Math.random(),
      name: 'Maxmud',
      info: {
         school: '10',
         faculity: '3dsmax'
      },
   },
   {
      id: Math.random(),
      name: 'Muxammad',
      info: {
         school: '51',
         faculity: 'Backend'
      },
   },
   {
      id: Math.random(),
      name: 'Shoxrux',
      info: {
         school: '235',
         faculity: 'SMM'
      },
   },
   {
      id: Math.random(),
      name: 'Sherzod',
      info: {
         school: 'ne izvestno',
         faculity: 'programming'
      },
   },
   {
      id: Math.random(),
      name: 'Amir',
      info: {
         school: '14',
         faculity: 'Dizayn'
      },
   },
   {
      id: Math.random(),
      name: 'Farzod',
      info: {
         school: '77',
         faculity: '3dsmax'
      },
   },
   {
      id: Math.random(),
      name: 'Javoxir',
      info: {
         school: '16',
         faculity: '3dsmax'
      },
   },
   {
      id: Math.random(),
      name: 'Shaxruz',
      info: {
         school: '65',
         faculity: 'Backend'
      },
   },
]

let categories = [
   {
      course: ' SMM',
      count: 0,
      
   },
   {
      course: 'PROGRAMMING',
      count: 0,
   
   },
   {
      course: '     3DSMAX',
      count: 0,
   
   },
   {
      course: ' DIZAYN',
      count: 0,
   
   },
   {
      course: '   BACKEND',
      count: 0,
   
   },
]

for (let item2 of categories) {
   item2.students = []
}


for (let item of arr) {

   for (let item2 of categories) {

      if (item.info.faculity.toLocaleLowerCase() === item2.course.trim().toLocaleLowerCase()) {

       

         item2.students.push(item)

         item2.count++

      }

   }

}


console.log(categories)