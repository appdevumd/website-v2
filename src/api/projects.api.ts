import api from "./axios.config";

async function getAll() {
  try {
    const response = await api.get('/projects');
    return response.data;
  } catch (e) {
    // return filler data on panic for now
    return [
      {
        "_id": "66292f8768dc79f8d04536ad",
        "name": "Space Safety Visualizer",
        "organization": "Amazon",
        "description": "The Fall 2023 Amazon project was a low Earth orbit satellite visualization system. This was designed for Project Kuiper as a way to visualize satellite collision risk to non-technical stakeholders at Amazon.",
        "members": [
          {
            "memberInfo": {
              "_id": "66292f8768dc79f8d0453673",
              "firstName": "Samai",
              "lastName": "Patel",
              "profileUrl": "https://gravatar.com/avatar/8a7fb3e66260f050539a6d8021a733635298861369c9ba60278abeb78e8c6216"
            },
            "role": "Project Lead"
          },
          {
            "memberInfo": {
              "_id": "66292f8768dc79f8d045368b",
              "firstName": "Ishan",
              "lastName": "Revankar",
              "profileUrl": "https://gravatar.com/avatar/66e5f9478a8c5c1090326d16f13ac2f9d56540fbc38c86e0b16061dd4d6c31d9"
            },
            "role": "Full-Stack Engineer"
          },
          {
            "memberInfo": {
              "_id": "66292f8768dc79f8d045368d",
              "firstName": "Nitish",
              "lastName": "Vobilisetti",
              "profileUrl": "https://gravatar.com/avatar/eb8416def562dd101a91cb9ad66731467420be6dafff0a691f33b184d796d7f5"
            },
            "role": "Tech Lead"
          },
          {
            "memberInfo": {
              "_id": "66292f8768dc79f8d045368f",
              "firstName": "Neil",
              "lastName": "Hajela",
              "profileUrl": "https://gravatar.com/avatar/9ec79c36a878d718e93405ec8431d2f414d1e6e021376763b85ec2555418bcd2"
            },
            "role": "Engineer"
          },
          {
            "memberInfo": {
              "_id": "66292f8768dc79f8d0453691",
              "firstName": "Hadijat",
              "lastName": "Oke",
              "profileUrl": "https://gravatar.com/avatar/4e7a51f508246f5a290cd93aead661a323322a0fecc28e2ebb44714f5825a7ef"
            },
            "role": "Project Manager"
          },
          {
            "memberInfo": {
              "_id": "66292f8768dc79f8d0453693",
              "firstName": "Nand",
              "lastName": "Vinchhi",
              "profileUrl": "https://gravatar.com/avatar/5c7e99e4bd1a8bc12f56605f7ec6a09a95472ebb07dd30f4d4e1ef134655c35a"
            },
            "role": "Tech Lead"
          }
        ],
        "cover": null,
        "semester": "Fall 2023",
        "__v": 0
      },
      {
        "_id": "66292f8768dc79f8d04536b9",
        "name": "Pattern of Life Application",
        "organization": "Praxis Engineering",
        "description": "The Fall 2023 GDIT project was a \"pattern of life\" understanding system. This Android application collects key data metrics from users including location, application usage, and message data and coallates it to form an understanding of a user's pattern of life.",
        "members": [
          {
            "memberInfo": {
              "_id": "66292f8768dc79f8d0453670",
              "firstName": "Aidan",
              "lastName": "Melvin",
              "profileUrl": "https://gravatar.com/avatar/5e99dcb1de10b83cd0e90620d77b046c13ff633b688f72dbb5a3c22202b2f1d7"
            },
            "role": "Project Lead"
          },
          {
            "memberInfo": {
              "_id": "66292f8768dc79f8d0453695",
              "firstName": "Mohammad",
              "lastName": "Abd-Elmoniem",
              "profileUrl": "https://gravatar.com/avatar/767766ff1d10a3d06a4e222b42a3ae7ff16a11bb83e25385202089a77efab30e"
            },
            "role": "Tech Lead"
          },
          {
            "memberInfo": {
              "_id": "66292f8768dc79f8d0453697",
              "firstName": "Nishkal",
              "lastName": "Hundia",
              "profileUrl": "https://gravatar.com/avatar/bb1facd1c2182bdc9f840b9b4c396e67ea94ad2395f76a4fac43a7d43b6a437e"
            },
            "role": "Tech Lead"
          },
          {
            "memberInfo": {
              "_id": "66292f8768dc79f8d0453699",
              "firstName": "Ojas",
              "lastName": "Jagtap",
              "profileUrl": "https://gravatar.com/avatar/68e78c20b977b3ff0f44d1e1f9f5a0ec6be745620062d6709fcbf8a73ff773df"
            },
            "role": "Full-stack Engineer"
          },
          {
            "memberInfo": {
              "_id": "66292f8768dc79f8d045369b",
              "firstName": "Josiah",
              "lastName": "Lim",
              "profileUrl": "https://gravatar.com/avatar/b277c291ff3c46b46124f62ae5f8d9fc5cd052300814f5bdbd89580759bcc027"
            },
            "role": "ML Engineer"
          },
          {
            "memberInfo": {
              "_id": "66292f8768dc79f8d045369d",
              "firstName": "Om",
              "lastName": "Duggineni",
              "profileUrl": "https://gravatar.com/avatar/00b197895f49ed34677306f551bddceaaa7c65756a238e2aee72b6ef95fd8525"
            },
            "role": "Full-Stack Engineer"
          },
          {
            "memberInfo": {
              "_id": "66292f8768dc79f8d045369f",
              "firstName": "Dev",
              "lastName": "Patel",
              "profileUrl": "https://gravatar.com/avatar/fb0bc07ce80323d4513cf2b60118de6dca5dd70a9edf08d12aa2b3c4451733ab"
            },
            "role": "Full-Stack Engineer"
          },
          {
            "memberInfo": {
              "_id": "66292f8768dc79f8d04536a1",
              "firstName": "Ananth",
              "lastName": "Sankaralingam",
              "profileUrl": "https://gravatar.com/avatar/ef0cd3559a6c30fc53bebd50c1533136de0d10c69b6b7a5df1fbe607b6b19e7d"
            },
            "role": "Full-Stack Engineer"
          },
          {
            "memberInfo": {
              "_id": "66292f8768dc79f8d04536a3",
              "firstName": "Advik",
              "lastName": "Sachdeva",
              "profileUrl": "https://gravatar.com/avatar/3b4653ea5eec167a3498fce281baf6ad961c465805b7758b0d77a090a3b666eb"
            },
            "role": "Full-Stack Engineer"
          },
          {
            "memberInfo": {
              "_id": "66292f8768dc79f8d04536a5",
              "firstName": "Rahul",
              "lastName": "Ramasubramanian",
              "profileUrl": "https://gravatar.com/avatar/9b42bb4f4bdb330a258afce57cee5b14b67de14c5ebbcc86814fcd270fff669c"
            },
            "role": "Full-Stack Engineer"
          }
        ],
        "cover": null,
        "semester": "Fall 2023",
        "__v": 0
      }
    ];
  }
}

const ProjectAPI = {
  getAll,
};

export default ProjectAPI;
