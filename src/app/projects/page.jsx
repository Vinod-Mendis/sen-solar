/** @format */

import ProjectCard from "../components/ProjectCard";
import project1 from "../../../public/images/project1.png";
import project2 from "../../../public/images/project2.png";
import project3 from "../../../public/images/project3.png";
import project4 from "../../../public/images/project4.png";
import project5 from "../../../public/images/project5.png";
import project6 from "../../../public/images/project6.png";
import project7 from "../../../public/images/project7.png";

export default function page() {
  const cardContent = [
    {
      image: project1,
      description:
        "Lorem ipsum dolor sit amet consectetur. Est id mus sed in mauris pellentesque dolor. A donec in penatibus tincidunt aenean maecenas nam semper scelerisque. Imperdiet integer et eros pharetra nulla sed ultricies. Ultrices tellus condimentum fames molestie diam cursus. ",
    },
    {
      image: project2,
      description:
        "Lorem ipsum dolor sit amet consectetur. Est id mus sed in mauris pellentesque dolor. A donec in penatibus tincidunt aenean maecenas nam semper scelerisque. Imperdiet integer et eros pharetra nulla sed ultricies. Ultrices tellus condimentum fames molestie diam cursus. ",
    },
    {
      image: project3,
      description:
        "Lorem ipsum dolor sit amet consectetur. Est id mus sed in mauris pellentesque dolor. A donec in penatibus tincidunt aenean maecenas nam semper scelerisque. Imperdiet integer et eros pharetra nulla sed ultricies. Ultrices tellus condimentum fames molestie diam cursus. ",
    },
    {
      image: project4,
      description:
        "Lorem ipsum dolor sit amet consectetur. Est id mus sed in mauris pellentesque dolor. A donec in penatibus tincidunt aenean maecenas nam semper scelerisque. Imperdiet integer et eros pharetra nulla sed ultricies. Ultrices tellus condimentum fames molestie diam cursus. ",
    },
    {
      image: project5,
      description:
        "Lorem ipsum dolor sit amet consectetur. Est id mus sed in mauris pellentesque dolor. A donec in penatibus tincidunt aenean maecenas nam semper scelerisque. Imperdiet integer et eros pharetra nulla sed ultricies. Ultrices tellus condimentum fames molestie diam cursus. ",
    },
    {
      image: project6,
      description:
        "Lorem ipsum dolor sit amet consectetur. Est id mus sed in mauris pellentesque dolor. A donec in penatibus tincidunt aenean maecenas nam semper scelerisque. Imperdiet integer et eros pharetra nulla sed ultricies. Ultrices tellus condimentum fames molestie diam cursus. ",
    },
    {
      image: project7,
      description:
        "Lorem ipsum dolor sit amet consectetur. Est id mus sed in mauris pellentesque dolor. A donec in penatibus tincidunt aenean maecenas nam semper scelerisque. Imperdiet integer et eros pharetra nulla sed ultricies. Ultrices tellus condimentum fames molestie diam cursus. ",
    },
  ];

  return (
    <div className="pt-40 w-full max-w-7xl mx-auto text-center">
      <h1 className="text-[80px] font-semibold">Our Projects</h1>
      <p className="text-2xl">Covering Every Corner of Sri Lanka</p>
      <div className="flex flex-col gap-10 mt-10">
        {cardContent.map((card, index) => (
          <ProjectCard key={index} image={card.image} description={card.description} />
        ))}
      </div>
    </div>
  );
}
