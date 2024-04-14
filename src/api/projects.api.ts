import api from "./axios.config";

async function getAll() {
  try {
    const response = await api.get('/projects');
    return response.data;
  } catch (e) {
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
      },
      {
        id: "4",
        name: "Space Safety Visualizer",
        organization: "Amazon",
        description: "The Fall 2023 Amazon project was a low Earth orbit satellite visualization system. This was designed for Project Kuiper as a way to visualize satellite collision risk to non-technical stakeholders at Amazon.",
        members: ["Samai Patel", "Ishan Revankar", "Nitish Vobilisetti", "Neil Hajela", "Hadijat Oke", "Nand Vinchhi"],
        cover: "null",
      },
      {
        id: "5",
        name: "Space Safety Visualizer",
        organization: "Amazon",
        description: "The Fall 2023 Amazon project was a low Earth orbit satellite visualization system. This was designed for Project Kuiper as a way to visualize satellite collision risk to non-technical stakeholders at Amazon.",
        members: ["Samai Patel", "Ishan Revankar", "Nitish Vobilisetti", "Neil Hajela", "Hadijat Oke", "Nand Vinchhi"],
        cover: "null",
      },
      {
        id: "6",
        name: "Space Safety Visualizer",
        organization: "Amazon",
        description: "The Fall 2023 Amazon project was a low Earth orbit satellite visualization system. This was designed for Project Kuiper as a way to visualize satellite collision risk to non-technical stakeholders at Amazon.",
        members: ["Samai Patel", "Ishan Revankar", "Nitish Vobilisetti", "Neil Hajela", "Hadijat Oke", "Nand Vinchhi"],
        cover: "null",
      },
      {
        id: "7",
        name: "Space Safety Visualizer",
        organization: "Amazon",
        description: "The Fall 2023 Amazon project was a low Earth orbit satellite visualization system. This was designed for Project Kuiper as a way to visualize satellite collision risk to non-technical stakeholders at Amazon.",
        members: ["Samai Patel", "Ishan Revankar", "Nitish Vobilisetti", "Neil Hajela", "Hadijat Oke", "Nand Vinchhi"],
        cover: "null",
      }
    ];
  }
}

const ProjectAPI = {
  getAll,
};

export default ProjectAPI;
