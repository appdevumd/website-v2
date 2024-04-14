import api from "./axios.config";

async function getAll() {
  const response = await api.get('/projects');

  if (response.status === 200) {
    return response.data;
  }

  // return filter data on panic for now
  return [
    {
      id: "1",
      name: "Space Safety Visualizer",
      organization: "Amazon",
      description: "The Fall 2023 Amazon project was a low Earth orbit satellite visualization system. This was designed for Project Kuiper as a way to visualize satellite collision risk to non-technical stakeholders at Amazon.",
      members: ["Samai Patel", "Ishan Revankar", "Nitish Vobilisetti", "Neil Hajela", "Hadijat Oke", "Nand Vinchhi"],
      cover: "null",
    },
    {
      id: "2",
      name: "Space Safety Visualizer",
      organization: "Amazon",
      description: "The Fall 2023 Amazon project was a low Earth orbit satellite visualization system. This was designed for Project Kuiper as a way to visualize satellite collision risk to non-technical stakeholders at Amazon.",
      members: ["Samai Patel", "Ishan Revankar", "Nitish Vobilisetti", "Neil Hajela", "Hadijat Oke", "Nand Vinchhi"],
      cover: "null",
    },
    {
      id: "3",
      name: "Space Safety Visualizer",
      organization: "Amazon",
      description: "The Fall 2023 Amazon project was a low Earth orbit satellite visualization system. This was designed for Project Kuiper as a way to visualize satellite collision risk to non-technical stakeholders at Amazon.",
      members: ["Samai Patel", "Ishan Revankar", "Nitish Vobilisetti", "Neil Hajela", "Hadijat Oke", "Nand Vinchhi"],
      cover: "null",
    }
  ];
}

const ProjectAPI = {
  getAll,
};

export default ProjectAPI;
