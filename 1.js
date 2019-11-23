function biodata (name, age){
	var itsMe = {                                                                    //membuat objek itsMe
    "name" : 'Isnanda Tegar Budiyarto',
    "age"  : 23,
    "address" : "Ngasinan RT01/04, Watubonang, Tawangsari, Sukoharjo",
    "hobbies" : ["Sport", "outdoor"],
    "is_married" : "false",
    listschool : [
    {
      "school_name" : "Telkom University",
      "year_in" : 2014,
      "year_out" : 2019,
      "major" : "Informatics Engineer"
    },
    {
      "school_name" : "SMAN 1 Sukoharjo",
      "year_in" : 2011,
      "year_out" : 2014,
      "major" : "IPA"
    }
    ],  
    skills : [
    {
      "skill_name" : "C++", 
      "level" : "beginner"
    },
    {
      "skill_name" : "Java",
      "level" : "beginner"
    },
    {
      "skill_name" : "Javascript",
      "level" : "beginner"
    },
    {
      "skill_name" : "Adobe Premiere",
      "level" : "beginner"
    },
    {
      "skill_name" : "Adobe Photoshop",
      "level" : "advanced"
    },
    {
      "skill_name" : "Adobe Illustrator",
      "level" : "beginner"
    },
    {
      "skill_name" : "Adobe After Effects",
      "level" : "beginner"
    },
    {
      "skill_name" : "Corel Draw",
      "level" : "beginner"
    },
    {
      "skill_name" : "Windows OS",
      "level" : "advanced"
    },
    {
      "skill_name" : "Linux OS",
      "level" : "advanced"
    }
    ],
    "interest_in_coding" : "true"
  }
  var obj = JSON.stringify(itsMe);                                                          //return JSON dimasukkan ke dalam variabel
  return obj;
}

console.log(biodata("Isnanda Tegar Budiyarto", 23));