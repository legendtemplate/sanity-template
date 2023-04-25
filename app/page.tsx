import {getProjects} from '../schemas/sanity-utilis'

export default async function Home() {
  const projects = await getProjects()
  console.log(projects)
  return (
    <div className="grid grid-cols-4">
      {projects.map((project) => (
        <div key={project._id} className=" bg-green-300 p-5">
          <h2>{project.name}</h2>
          <p>{project.description}</p>
          <a href={project.slug}>
            <img src={project.image} title={project.imageAtt} alt={project.imageCap} />
          </a>
        </div>
      ))}
    </div>
  )
}
