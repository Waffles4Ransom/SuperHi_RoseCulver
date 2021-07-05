document.addEventListener('DOMContentLoaded', () => {

  const pages = [
  { copy: "a Brooklyn-based graphic designer", 
    background: "#edc7a9",
    circle: "#3e78ed" 
  },
  { copy: "Kanye West's biggest fan",
    background: "#a1fffe",
    circle: "#e34a47" 
  },
  { copy: "looking for a job at the start of October", 
    background: "#d3c7f3",
    circle: "#f7fe00"
  },
  { copy: "letting you <a href='pdf.pdf'>download her PDF</a>",
    background: "#faffb8",
    circle: "#b472e6"
  }
  ]

  let pageNumber = 0
  const nextTag = document.querySelector('footer img.next')

  console.log(nextTag)

  nextTag.addEventListener('click', () => next())

  const next = function() {
    pageNumber += 1 
    if ( pageNumber > pages.length - 1) {
      pageNumber = 0
    }
    console.log('next')
  }

})